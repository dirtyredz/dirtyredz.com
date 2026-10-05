---
id: dk-d343facb
type: bug
created: 2026-10-05
status: todo
since: 2026-10-05
area:
priority: P1
rank: w
parent:
fixes: []
blocked_by: []
relates: []
---
# `fetchRepos` has no request timeout

From docs/BACKLOG.md (P1 — real debt, worth a task), originally B3.

`fetch(API, { headers })` uses no `AbortController`. A *failing* request degrades gracefully
to the bundled fallback; a *hanging* one never rejects, so `.catch()` never runs and the
page sits on skeleton cards indefinitely. The failure mode the fallback exists to handle is
the one it cannot catch.

**Direction.** Wrap the fetch in an `AbortController` with a short timeout (5–10s) so a hang
becomes a rejection and takes the existing fallback path.

*Raised by: Codex sign-off.*
