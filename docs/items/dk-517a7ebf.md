---
id: dk-517a7ebf
type: task
created: 2026-10-05
status: done
since: 2026-10-13
area:
priority: P2
rank: n
parent:
fixes: []
blocked_by: []
relates: []
---
# cache is `sessionStorage`, so it never helps a returning visitor

From docs/BACKLOG.md (P2: note it, fix when nearby), originally B4. Body refreshed 2026-10-13 after a backlog audit.

The cache (`readCache`/`writeCache` in `src/lib/github.js`, in front of `fetchLiveItems()` via `fetchRepos()`) uses `sessionStorage`, so its scope is one browser tab. A visitor who returns after closing the tab, or opens a new one, gets a cold start against GitHub's 60-requests/hour-per-IP budget.

If repeat-visit caching is wanted, this is a storage change (`localStorage`), not a TTL change. The existing 30-minute TTL check would still apply, so moving storage alone does not serve stale content across days. Lengthening the TTL as well would, and that is a behaviour decision that belongs in `DECISIONS.md` if taken. The change lives entirely in the `fetchRepos()` cache wrapper.

*Raised by: abstraction + componentization lenses independently (as the doc error, now fixed); the underlying behaviour question is recorded here.*
