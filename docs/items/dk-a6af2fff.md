---
id: dk-a6af2fff
type: task
created: 2026-10-05
status: done
since: 2026-10-13
area:
priority: P2
rank: t
parent:
fixes: []
blocked_by: []
relates: []
---
# only the 100 most recently-updated repos are fetched

From docs/BACKLOG.md (P2: note it, fix when nearby), originally B5. Body refreshed 2026-10-13 after a backlog audit.

`src/lib/github.js:45` requests `per_page=100&sort=updated` with no pagination. This is invisible under 100 public repos; at 101, the least-recently-updated repo silently disappears with no error. Because `scripts/generate-fallback.mjs` also calls `fetchLiveItems()`, the generated `mods.js`/`projects.js` fallbacks would drop it too.

**Trigger:** approaching 100 public repos. Then add pagination (follow the `Link` header) inside `fetchLiveItems()`, which fixes both the live site and the generator.

*Raised by: Codex sign-off.*
