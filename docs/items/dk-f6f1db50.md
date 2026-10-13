---
id: dk-f6f1db50
type: task
created: 2026-10-05
status: todo
since: 2026-10-05
area:
priority: P2
rank: w
parent:
fixes: []
blocked_by: []
relates: []
---
# GitHub identity has three sources

From docs/BACKLOG.md (P2: note it, fix when nearby), originally B6. Body refreshed 2026-10-13 after a backlog audit.

The GitHub username is still written down independently in several places. An account rename would make the API feed and the displayed profile diverge:

- `GITHUB_USER` in `src/lib/github.js:43` drives the API endpoint.
- The full profile URL `github` in `src/data/site.js:12`.
- The visible `github.com/dirtyredz` labels hardcoded in `src/pages/Home.jsx:134` and `src/pages/About.jsx:59`.

Already done: the two `Nav.jsx` hardcodes were fixed in the 2026-09-17 review (Nav now imports `github` from `site.js`).

**Direction.** Store one `githubUser` value in `data/site.js`, and derive the API endpoint, the profile URL and the displayed handle/labels from it.

*Raised by: Codex sign-off.*
