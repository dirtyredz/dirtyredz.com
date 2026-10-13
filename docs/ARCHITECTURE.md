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
  page mounts → useGithub()
      │
      ▼
┌──────────────────┐  hit (< 30 min)   localStorage
│ fetchRepos()     │ ◄──────────────── dr_gh_repos_v2
│ cache wrapper    │ ────────────────► (write on success)
└──────────────────┘
      │ miss
      ▼
┌──────────────────┐   Link rel="next"   ┌─────────────────┐
│ fetchLiveItems() │ ──────────────────► │ api.github.com  │
│ 8s timeout,      │ ◄────────────────── │ /users/:u/repos │
│ classify + sort  │   ≤ 10 pages        └─────────────────┘
└──────────────────┘
      │ card items                  │ any throw (rate limit, timeout, 5xx)
      ▼                             ▼
┌──────────────┐          ┌────────────────────┐
│ splitRepos() │          │ data/mods.js       │
│ mods|projects│          │ data/projects.js   │  (bundled snapshots,
└──────────────┘          └────────────────────┘   usingFallback: true)
      │                             │
      └──────────────┬──────────────┘
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

The same classifier also runs offline: `scripts/generate-fallback.mjs` (`npm run gen:fallback`)
calls the pure, cache-free `fetchLiveItems()` + `splitRepos` and rewrites the bundled snapshots
`data/mods.js` / `data/projects.js`.

## External interfaces

There is exactly one, and it is unauthenticated:

| | |
|---|---|
| Endpoint | `GET https://api.github.com/users/<githubUser>/repos?per_page=100&sort=updated`, then `Link: rel="next"` pages (max `MAX_PAGES` = 10); one request when there is one page |
| Auth | none — no token is shipped to the browser, by design |
| Rate limit | 60 requests/hour **per originating IP**, shared by every visitor behind that IP |
| Cache | `localStorage`, key `dr_gh_repos_v2`, TTL 30 minutes (older entries ignored), shared across tabs and visits |
| Timeout | 8 s (`FETCH_TIMEOUT_MS`); an abort rejects and takes the fallback path |
| On failure | throw → `useGithub` catches → bundled snapshots, `usingFallback: true` |

The cache is `localStorage`, so it survives tabs and returning visits within the TTL; three tabs
make one API call. Blocked storage (private mode, quota) fails silently and just refetches.

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
it — `toItem()` in `lib/github.js`, and the three files in `src/data/`. The shape is
declared once, as the JSDoc `@typedef CardItem` at the top of `src/lib/github.js` (the data
boundary); all four producers and `Card.jsx` reference it. Documentation only: there is no
TypeScript and no runtime validator.

Common: `id, title, blurb, links[], year, tag`.
Mods add `game`, `status`. Projects add `stack[]`. GitHub items add `stars`, `pushed`.

**`category`** is required on every `CardItem`: `toItem()` sets it, `manual.js` entries carry it,
and `mods.js`/`projects.js` are generated from real `toItem()` output (`npm run gen:fallback`),
so they include it too. `splitRepos` and `mergeManual` filter on it.

## Routing and delivery

`src/main.jsx` mounts `<App>` inside `<BrowserRouter>`. `App.jsx` is the only place routes
are declared — `/`, `/mods`, `/projects`, `/about`, `*` — and wraps them in `Nav` +
`Footer` plus a `ScrollToTop` that resets scroll on every pathname change.

Because routing is client-side, a deep link like `/mods` would 404 on a static host. The
`public/_redirects` file (`/* /index.html 200`) hands every path to the SPA so React Router
can resolve it. Losing that file breaks every URL except `/`.

## Dependency direction

```
pages ──┬──► hooks ──┬──► lib/github.js ──► data/site.js  (githubUser only)
        │            └──► data/  (manual, mods, projects)
        ├──► components
        └──► data/site.js
```

`lib/github.js` has exactly one import: `githubUser` from `data/site.js`, the single source of
the GitHub handle (dk-f6f1db50). `site.js` itself imports nothing, so `lib/` stays Node-safe for
the fallback generator and `npm test`. `REPO_OVERRIDES` lives inside `lib/github.js` rather than in
`data/`, so the classifier is self-contained. `useGithub` is the
only module that depends on both `lib/` and `data/`, and it is what joins them.

Nothing in `lib/` or `data/` imports upward; the graph is acyclic. Verified during the
2026-09-17 baseline review, and corrected at that review's sign-off — the earlier
`pages → hooks → lib → data` chain in `STRUCTURE.md` implied a `lib → data` edge that has
never existed.
