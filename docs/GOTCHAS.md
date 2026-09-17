# GOTCHAS — dirtyredz.com

Non-obvious traps. Everything here was verified against the source during the
2026-09-17 baseline review, not assumed.

## The cache is `sessionStorage`, not `localStorage`

`src/lib/github.js:161,171`. It reads and writes `sessionStorage`, key `dr_gh_repos_v1`,
TTL 30 minutes (`CACHE_TTL = 30 * 60 * 1000`).

`STRUCTURE.md` said `localStorage` for two weeks and the error propagated into briefings
before two independent reviewers caught it. It matters because **`sessionStorage` dies
with the tab**:

- Every new tab is a cold start and a fresh API call.
- The cache never helps a returning visitor, only a visitor navigating within one tab.
- Three open tabs = three requests against a 60/hour budget.

If you ever want genuine repeat-visit caching, that is a `localStorage` change, not a TTL
change. Tracked as B4 in [`BACKLOG.md`](BACKLOG.md).

## The GitHub API is unauthenticated and rate-limited per IP

60 requests/hour, keyed to the **originating IP, not the visitor**. Behind a shared NAT,
a corporate proxy, or a popular link, visitors consume each other's budget. When it is
exhausted GitHub returns 403, `fetchRepos` throws, and the site silently shows bundled
data instead.

No token is shipped to the browser — deliberately. A token in a static bundle is a public
token. See [`DECISIONS.md`](DECISIONS.md).

## "Fallback" means bundled snapshots, not the last good fetch

On any error `useGithub` catches and serves `src/data/mods.js` + `src/data/projects.js` —
the **hand-written files committed to the repo**, not whatever the cache last held. An
expired cache entry is discarded, never served stale.

So the failure mode is: *the site silently reverts to whatever those two files said the
last time someone remembered to edit them.* Nothing regenerates them; nothing warns when
they drift. They are stale-tolerant snapshots and should be read as such.

The UI does surface it — `usingFallback: true` renders a notice — but the content still
looks plausible, which is exactly what makes it easy to miss.

## There is no request timeout

`fetchRepos` calls `fetch(API, { headers })` with no `AbortController` and no timeout.
A hanging connection never rejects, so the `.catch()` never runs, so the fallback never
engages — the page sits on skeleton cards indefinitely. A *failing* request degrades
gracefully; a *hanging* one does not. Tracked as B3 in [`BACKLOG.md`](BACKLOG.md).

## Only the 100 most recently-updated repos are fetched

`per_page=100&sort=updated`, no pagination. Under 100 public repos this is invisible.
At 101, the least-recently-updated repo silently disappears from the site with no error
and no warning — and it will be an *old* repo, so nobody notices. Tracked as B5.

## `npm run build` is the only check that exists

No test runner, no linter, no typechecker, no CI. This is deliberate for a static personal
site (see [`DECISIONS.md`](DECISIONS.md)), but it means:

- A typo in a `src/data/` entry surfaces as a broken card in production, not a failed build.
- Renaming a field on `<Card>` silently breaks the other three producers of that shape.
- "It builds" is a much weaker signal here than on a typical repo.

Do not add a test runner or linter casually — the absence is a choice, and reversing it is
a [`DECISIONS.md`](DECISIONS.md) entry, not a drive-by.

## Deleting `public/_redirects` breaks every URL except `/`

It contains the SPA fallback (`/* /index.html 200`). Without it, Cloudflare Pages looks for
a real file at `/mods` and 404s. Client-side routing means the file is load-bearing even
though it looks like boilerplate.

## Build config lives in the Cloudflare dashboard, not the repo

Build command (`npm run build`), output directory (`dist/`) and production branch (`master`)
are configured in the Cloudflare Pages project `dirtyredz-com`. There is no `wrangler.toml`
and no `netlify.toml` — a dead `netlify.toml` was removed in `30d6608`. Grepping the repo
for deploy config finds nothing; the dashboard is the source of truth.

Node version *is* pinned in-repo, via `.node-version`.

## `categorize()` runs twice per repo

Once in the `.filter()` that drops hidden repos, once inside `toItem()`. Harmless at this
scale and not worth fixing, but if you add expensive logic to the classifier, know that it
is on a hot path twice.
