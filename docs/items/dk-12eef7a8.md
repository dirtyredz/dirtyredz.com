---
id: dk-12eef7a8
type: feature
created: 2026-10-13
status: done
since: 2026-10-13
area:
priority: P2
rank: zz
parent:
fixes: []
blocked_by: []
relates: []
---
# Give private project cards real descriptions


Owner request, 2026-10-13: private projects should get proper descriptions, even though they are private.

Today, private work is listed in `src/data/manual.js`. The GitHub feed can't see private repos, because the client calls the public API with no token. The private projects show only the "Private" badge:
- 16 entries are built by the `priv(title)` helper and are **name-only**, with no `blurb`, `year` or `stack`. That followed an earlier owner request ("Name only, no blurb", 2026-09-07), which this request supersedes.
- `VEX` has a placeholder blurb ("A private project I'm building. Details under wraps for now.") with a TODO to replace it.

**Direction.** Give each private entry a real one-line `blurb`, plus `year`/`stack` where useful, written at a level that reveals nothing confidential. Either extend `priv()` to take the extra fields, or expand the entries inline. `Card` already renders `blurb`/`stack` for private items, and the `CardItem` typedef marks `blurb` optional "on private manual entries", so update that comment once every entry has one. Drop the "name only" note in `manual.js`, and record the reversal in DECISIONS.md if it's documented there.

**Needs from the owner:** the wording for each project, or approval of drafted descriptions. The descriptions are the owner's to write or approve; an agent should only draft them.
