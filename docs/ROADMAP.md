# ROADMAP — dirtyredz.com

**There is no roadmap, and that is deliberate.**

This is a personal portfolio site with a single developer and no release schedule, no users
to coordinate with, and no deadlines. Inventing phases and milestones for it would produce
a document nobody reads and everybody has to maintain — which is worse than not having one.

The site is **feature-complete for its purpose**: it shows the work, and it updates itself
when a repo is pushed. It does not need to grow.

## What actually drives work here

| Question | Where the answer lives |
|---|---|
| What should I fix next? | [`BACKLOG.md`](BACKLOG.md) — prioritised, P0 empty, nothing urgent |
| What will bite me? | [`GOTCHAS.md`](GOTCHAS.md) |
| Why is it built this way? | [`DECISIONS.md`](DECISIONS.md) |
| What does it do? | [`FEATURES.md`](FEATURES.md) |
| Where does the code live? | [`../STRUCTURE.md`](../STRUCTURE.md) |

## The only scheduled work

Refresh the structural baseline when it goes stale. `STRUCTURE.md` carries a
`Last full review:` stamp; the session-start hook nags when it ages out. That is the whole
schedule.

## Triggers worth watching

Not planned work — conditions that would *create* work if they occur. Each is recorded with
its response in [`BACKLOG.md`](BACKLOG.md)'s watch list.

- Public repo count approaches **100** → pagination becomes necessary (B5)
- A **second external-service client** appears → `src/lib/` splits by responsibility
- A **third list page** is added → the shared-grid and empty-state extractions earn themselves
- The **classifier grows materially** → split `lib/github.js`, and reconsider having no tests
- The **offline snapshots drift far enough to embarrass** → build the regeneration script (B1)

---

*If this file ever fills up with phases, ask whether the site changed or whether the
document just wanted to look busy.*
