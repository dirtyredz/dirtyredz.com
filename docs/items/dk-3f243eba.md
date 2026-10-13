---
id: dk-3f243eba
type: task
created: 2026-10-13
status: wip
since: 2026-10-13
area:
priority: P2
rank: zt
parent:
fixes: []
blocked_by: []
relates: []
---
# Card's kind prop duplicates item.category


Raised by the push review on 2026-10-13 (abstraction lens, P2).

`Card` takes a `kind` prop from Home.jsx (twice), Mods.jsx and Projects.jsx. `CardItem.category` is now required on every producer, so `kind` is a second source of truth for mod vs project, and nothing checks that the two agree.

**Direction.** Derive `kind` from `item.category` inside `Card` and drop the prop. Alternatively, document in the `CardItem` typedef why they stay separate.
