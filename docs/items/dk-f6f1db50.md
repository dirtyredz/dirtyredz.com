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

From docs/BACKLOG.md (P2 — note it, fix when nearby), originally B6.

`GITHUB_USER` in `lib/github.js:18`, the full URL `github` in `data/site.js`, and — until
the 2026-09-17 review — two hardcodes in `Nav.jsx` (those are now fixed). The API feed and
the displayed profile can diverge on an account rename.

**Direction.** Store one `githubUser` value in `data/site.js` and derive the API endpoint,
the profile URL and the displayed handle from it.

*Raised by: Codex sign-off.*
