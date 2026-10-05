---
id: dk-517a7ebf
type: task
created: 2026-10-05
status: todo
since: 2026-10-05
area:
priority: P2
rank: n
parent:
fixes: []
blocked_by: []
relates: []
---
# cache is `sessionStorage`, so it never helps a returning visitor

From docs/BACKLOG.md (P2 — note it, fix when nearby), originally B4.

TTL is 30 minutes but scope is one browser tab. Every new tab is a cold start against a
60-req/hour-per-IP budget. If repeat-visit caching is wanted, this is a storage change, not
a TTL change — but it is a genuine behaviour decision (stale content across days), so it
belongs in `DECISIONS.md` if taken.

*Raised by: abstraction + componentization lenses independently (as the doc error, now
fixed); the underlying behaviour question is recorded here.*
