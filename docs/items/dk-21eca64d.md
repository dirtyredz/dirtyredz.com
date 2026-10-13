---
id: dk-21eca64d
type: task
created: 2026-10-13
status: done
since: 2026-10-13
area:
priority: P2
rank: zzn
parent:
fixes: []
blocked_by: []
relates: [dk-12eef7a8]
---
# Check paypal-bot, DirtyBot and api.dirtyredz.com for committed secrets

Raised by the push review on 2026-10-13 (abstraction lens, P2).

`Card` took a `kind` prop from Home.jsx (twice), Mods.jsx and Projects.jsx. `CardItem.category` is required on every producer, so `kind` was a second source of truth for mod vs project, and nothing checked that the two agreed.

**Resolution.** `Card` now derives mod vs project from `item.category` and the `kind` prop is gone from `Card` and all four call sites. Before removing it, every path was checked: Home/Mods/Projects lists come from `useGithub`, whose live lists are filtered by `category` (`splitRepos`, `mergeManual`) and whose fallback lists (`src/data/mods.js`, `projects.js`) carry the matching `category` on every entry. Rendered output is unchanged. The `CardItem` typedef never mentioned `kind`, so no typedef change was needed.

## Resolution (2026-10-13)

The owner rotated both PayPal apps (findings 1 and 3) and the Discord bot token (finding 2). All three repos (paypal-bot, DirtyBot, api.dirtyredz.com) are now archived on GitHub. They remain private and read-only. History was not rewritten, because the exposed values are dead. Finding 4, the route password, is moot: the repo is archived and the route only matters if it is still deployed.
