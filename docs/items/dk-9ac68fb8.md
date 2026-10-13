---
id: dk-9ac68fb8
type: task
created: 2026-10-13
status: todo
since: 2026-10-13
area:
priority: P3
rank: n
parent:
fixes: []
blocked_by: []
relates: [dk-3f243eba]
---
# mergeManual re-implements the category split that splitRepos already does


Raised by the push review on 2026-10-13 (abstraction lens, P2, "fix when the file is next touched").

`mergeManual` in `src/hooks/useGithub.js:11` filters `manualEntries` on `category === 'mod'`/`'project'`, which is the same partition `splitRepos` in `src/lib/github.js` already does. `category` is now the single discriminator, so a third category value would need editing in both places.

**Direction.** Have `mergeManual` call `splitRepos(manualEntries)` rather than filter again. The duplication is two lines, so do it the next time useGithub.js is touched.
