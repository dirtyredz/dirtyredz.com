---
id: dk-3f243eba
type: task
created: 2026-10-13
status: done
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

`Card` took a `kind` prop from Home.jsx (twice), Mods.jsx and Projects.jsx. `CardItem.category` is required on every producer, so `kind` was a second source of truth for mod vs project, and nothing checked that the two agreed.

**Resolution.** `Card` now derives mod vs project from `item.category` and the `kind` prop is gone from `Card` and all four call sites. Before removing it, every path was checked: Home/Mods/Projects lists come from `useGithub`, whose live lists are filtered by `category` (`splitRepos`, `mergeManual`) and whose fallback lists (`src/data/mods.js`, `projects.js`) carry the matching `category` on every entry. Rendered output is unchanged. The `CardItem` typedef never mentioned `kind`, so no typedef change was needed.
