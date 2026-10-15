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

So the failure mode is: _the site silently reverts to whatever those two files said the
last time someone remembered to regenerate them._ Run `npm run gen:fallback` (needs GitHub
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

## Checks are thin, but CI gates the deploy

One node:test file covers github.js pagination; ESLint, Prettier and a GitHub Actions workflow
(`.github/workflows/ci.yml`) check style and build. There is no typechecker. Since 2026-10-15 the workflow's `deploy` job
(`needs: check`, pushes to `master` only) is the intended sole production deploy path, so a red `check`
blocks it. It needs GitHub secrets `CLOUDFLARE_API_TOKEN` and `CLOUDFLARE_ACCOUNT_ID`;
without them `deploy` fails while `check` still runs. Pages automatic production deploys must be
disabled in the dashboard or the gate is bypassed (see [`DECISIONS.md`](DECISIONS.md)).

The deploy concurrency group keeps only one pending run, so rapid pushes can skip an intermediate
commit; each deploy builds its own SHA. Accepted for a solo site.

The checks are still thin, so:

- A typo in a `src/data/` entry surfaces as a broken card in production, not a failed build.
- Renaming a field on `<Card>` silently breaks the other three producers of that shape.
- "It builds" is a much weaker signal here than on a typical repo.

Do not add a typechecker or heavier test framework casually — the absence is a choice, and reversing it is
a [`DECISIONS.md`](DECISIONS.md) entry, not a drive-by.

## Deleting `public/_redirects` breaks every URL except `/`

It contains the SPA fallback (`/* /index.html 200`). Without it, Cloudflare Pages looks for
a real file at `/mods` and 404s. Client-side routing means the file is load-bearing even
though it looks like boilerplate.

## Pages project settings and deploy secrets live in dashboards, not the repo

Build and deploy run in GitHub Actions (`npm run build`, then `wrangler pages deploy dist
--project-name=dirtyredz-com --branch=master`), but the Pages project `dirtyredz-com`, its
production-branch setting, the disabled automatic deploys, and the API token / account ID secrets
live in the Cloudflare and GitHub dashboards. There is no `wrangler.toml`
and no `netlify.toml` — a dead `netlify.toml` was removed in `30d6608`. The build and deploy
command, project name, branch and output dir live in `.github/workflows/ci.yml`; everything else
is dashboard-only.

Node version _is_ pinned in-repo, via `.node-version`.

## `categorize()` runs twice per repo

Once in the `.filter()` that drops hidden repos, once inside `toItem()`. Harmless at this
scale and not worth fixing, but if you add expensive logic to the classifier, know that it
is on a hot path twice.
