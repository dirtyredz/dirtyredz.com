---
id: dk-a6af2fff
type: task
created: 2026-10-05
status: todo
since: 2026-10-05
area:
priority: P2
rank: t
parent:
fixes: []
blocked_by: []
relates: []
---
# only the 100 most recently-updated repos are fetched

From docs/BACKLOG.md (P2 — note it, fix when nearby), originally B5.

`per_page=100&sort=updated`, no pagination. Invisible under 100 public repos; at 101 the
least-recently-updated repo silently vanishes with no error. **Trigger:** approaching 100
public repos. Then add pagination.

*Raised by: Codex sign-off.*
