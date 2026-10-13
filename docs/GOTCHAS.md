# GOTCHAS — dirtyredz.com

Non-obvious traps. Everything here was verified against the source during the
2026-09-17 baseline review, not assumed.

## The cache is `localStorage`; bump the key when the item shape changes

`readCache`/`writeCache` in `src/lib/github.js` use `localStorage`, key `dr_gh_repos_v2`, TTL 30 minutes
(`CACHE_TTL = 30 * 60 * 1000`; older entries are ignored and refetched). It survives tabs and returning
visits, so a visitor carries a stored copy of the `CardItem` shape: **change that shape and you must
bump `CACHE_KEY`**, or returning visitors render stale-shaped data for up to 30 minutes. (v1 was
`sessionStorage`; its entries are simply abandoned.) Blocked storage fails silently.

## The GitHub API is unauthenticated and rate-limited per IP

60 requests/hour, keyed to the **originating IP, not the visitor**. Behind a shared NAT,
a corporate proxy, or a popular link, visitors consume each other's budget. When it is
exhausted GitHub returns 403, `fetchRepos` throws, and the site silently shows bundled
data instead.

No token is shipped to the browser — deliberately. A token in a static bundle is a public
token. See [`DECISIONS.md`](DECISIONS.md).

## "Fallback" means bundled snapshots, not the last good fetch

On any error `useGithub` catches and serves `src/data/mods.js` + `src/data/projects.js` —
the **generated files committed to the repo** (`npm run gen:fallback`), not whatever the cache last held. An
expired cache entry is discarded, never served stale.

So the failure mode is: *the site silently reverts to whatever those two files said the
last time someone remembered to regenerate them.* Run `npm run gen:fallback` (needs GitHub
reachable and not rate-limited) and commit the result; nothing runs it automatically and
nothing warns when they drift. Never hand-edit them — the next run overwrites it. Volatile
fields (`stars`, `pushed`) change between runs, so expect small diffs.

The UI does surface it — `usingFallback: true` renders a notice — but the content still
looks plausible, which is exactly what makes it easy to miss.

## The GitHub request times out after 8 s

`fetchLiveItems` (which `fetchRepos` wraps) aborts its `fetch` (headers and body) via `AbortController` after
`FETCH_TIMEOUT_MS` (8 s, `src/lib/github.js`). The abort rejects, so a hung connection
takes the same `.catch()` -> bundled-fallback path as any other failure.

## Repo fetch is paginated, capped at 10 pages

`fetchLiveItems` follows the `Link: rel="next"` header (`MAX_PAGES = 10`, i.e. 1000 repos). Each extra
page costs one request against the 60/hour unauthenticated limit, so a 101st repo doubles the calls
per visit. Fixed dk-a6af2fff; `npm test` covers it (`src/lib/github.test.mjs`, node's built-in runner).

## `npm run build` is nearly the only check that exists

No test framework (one node:test file covers github.js pagination), no linter, no typechecker, no CI. This is deliberate for a static personal
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
