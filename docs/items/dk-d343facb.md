---
id: dk-d343facb
type: bug
created: 2026-10-05
status: done
since: 2026-10-13
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

Done. `fetchRepos` now aborts after 8 s via an `AbortController` (`FETCH_TIMEOUT_MS`, commit
71065b6), so a hang becomes a rejection and takes the existing fallback path.

`fetch(API, { headers })` previously used no `AbortController`. A *failing* request degraded
gracefully to the bundled fallback; a *hanging* one never rejected, so `.catch()` never ran
and the page sat on skeleton cards indefinitely. The failure mode the fallback exists to
handle was the one it could not catch.

*Raised by: Codex sign-off.*
