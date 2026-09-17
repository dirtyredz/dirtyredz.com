# ARCHITECTURE — dirtyredz.com

> How the system works. For *where the code lives*, see [`STRUCTURE.md`](../STRUCTURE.md).
> For *why it is this way*, see [`DECISIONS.md`](DECISIONS.md).

## The shape of the thing

A static single-page React app. No backend, no database, no auth, no server-side
rendering. `npm run build` emits a `dist/` of static assets; Cloudflare Pages serves
them. Everything the site knows, it learns in the browser at runtime.

The one idea that makes this more than a template: **the portfolio assembles itself from
the GitHub API instead of being hand-maintained.** Push a repo, and it appears on the
site classified as a mod or a project, with no edit here.

## Data flow

```
                       ┌─ sessionStorage cache (30 min, per-tab) ─┐
                       │                                          │
  page mounts          ▼                                          │
      │        ┌──────────────┐   miss    ┌─────────────────┐      │
      └──────► │ fetchRepos() │ ────────► │ api.github.com  │      │
               └──────────────┘           │ /users/:u/repos │      │
                       │  ok              └─────────────────┘      │
                       ▼                           │ throw         │
               ┌──────────────┐                    │               │
               │ categorize() │◄───────────────────┼───────────────┘
               │   toItem()   │                    │
               └──────────────┘                    │
                       │  card items               │
                       ▼                           ▼
               ┌──────────────┐          ┌────────────────────┐
               │ splitRepos() │          │ data/mods.js       │
               │ mods|projects│          │ data/projects.js   │  (bundled snapshots)
               └──────────────┘          └────────────────────┘
                       │                           │
                       └───────────┬───────────────┘
                                   ▼
                         ┌───────────────────┐
                         │ mergeManual()     │◄── data/manual.js (private / off-GitHub)
                         │ manual wins ties  │
                         └───────────────────┘
                                   ▼
                            <Card /> × N
```

`src/hooks/useGithub.js` owns that whole pipeline and hands pages a single state object:
`{ loading, error, usingFallback, mods, projects }`. Pages never talk to `src/lib/github.js`
directly.

## External interfaces

There is exactly one, and it is unauthenticated:

| | |
|---|---|
| Endpoint | `GET https://api.github.com/users/dirtyredz/repos?per_page=100&sort=updated` |
| Auth | none — no token is shipped to the browser, by design |
| Rate limit | 60 requests/hour **per originating IP**, shared by every visitor behind that IP |
| Cache | `sessionStorage`, key `dr_gh_repos_v1`, TTL 30 minutes, **per browser tab** |
| Timeout | none — see [`GOTCHAS.md`](GOTCHAS.md) |
| On failure | throw → `useGithub` catches → bundled snapshots, `usingFallback: true` |

Because the cache is `sessionStorage`, it dies with the tab. A visitor opening three tabs
makes three API calls. This is the single most consequential runtime fact about the site.

## Classification

`categorize(r)` decides mod vs project vs hidden, in strict precedence order:

1. `REPO_OVERRIDES[name].category` — the manual escape hatch, always wins
2. GitHub topic `hidden` → hide, `mod` → mod, `project` → project
3. forks → hide
4. language in `MOD_LANGS` (`Lua`, `Papyrus`, `C#`) → mod
5. name/description/topics match `MOD_RE` **and not** `TOOL_RE` → mod
6. otherwise → project

`detectGame(r)` then labels a mod's game via `REPO_OVERRIDES`, then `GAME_RULES` regexes,
then a language guess (`LANG_GAME`), defaulting to the literal string `'Game'`.

The heuristics are **data, not control flow** — `GAME_RULES`, `LANG_GAME`, `MOD_LANGS`,
`MOD_RE`, `TOOL_RE` are all module-level constants. Adding a game or a modding language is
a one-line change. This is deliberate and worth preserving.

`REPO_OVERRIDES` is one map keyed by repo name, each value carrying any of
`{ category, game, title, blurb, modPage }`. It was consolidated from four parallel
`name → X` maps; see [`DECISIONS.md`](DECISIONS.md).

## The card contract

Every page renders the same `<Card>` off one item shape. Four independent producers emit
it — `toItem()` in `lib/github.js`, and the three files in `src/data/`. The shape is not
declared anywhere, and there is no TypeScript and no test to catch a mismatch.

Common: `id, title, blurb, links[], year, tag`.
Mods add `game`, `status`. Projects add `stack[]`. GitHub items add `stars`, `pushed`.

**Known asymmetry:** `category` is required on `toItem()` output and on `manual.js` entries
(both are filtered on it, in `splitRepos` and `mergeManual`), but is absent from
`mods.js`/`projects.js`, which rely on being pre-partitioned into separate exports instead.
Tracked as B2 in [`BACKLOG.md`](BACKLOG.md).

## Routing and delivery

`src/main.jsx` mounts `<App>` inside `<BrowserRouter>`. `App.jsx` is the only place routes
are declared — `/`, `/mods`, `/projects`, `/about`, `*` — and wraps them in `Nav` +
`Footer` plus a `ScrollToTop` that resets scroll on every pathname change.

Because routing is client-side, a deep link like `/mods` would 404 on a static host. The
`public/_redirects` file (`/* /index.html 200`) hands every path to the SPA so React Router
can resolve it. Losing that file breaks every URL except `/`.

## Dependency direction

```
pages ──┬──► hooks ──┬──► lib/github.js
        │            └──► data/  (manual, mods, projects)
        ├──► components
        └──► data/site.js
```

`lib/github.js` imports **nothing at all** — not even from `data/`. `REPO_OVERRIDES` lives
inside it rather than in `data/`, so the classifier is self-contained. `useGithub` is the
only module that depends on both `lib/` and `data/`, and it is what joins them.

Nothing in `lib/` or `data/` imports upward; the graph is acyclic. Verified during the
2026-09-17 baseline review, and corrected at that review's sign-off — the earlier
`pages → hooks → lib → data` chain in `STRUCTURE.md` implied a `lib → data` edge that has
never existed.
