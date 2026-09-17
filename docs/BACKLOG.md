# BACKLOG — dirtyredz.com

Prioritised trough of deferred work and known issues.

Seeded by the **2026-09-17 baseline structural review** (three Claude lenses —
componentization, abstraction, topology — plus a Codex `gpt-5.6-sol` cross-model sign-off,
which returned **PASS**). Everything the review found that was not cheap and safe to fix
that day is recorded here so it cannot be lost.

Priorities are calibrated to what this repo actually is: a 22-module static personal
portfolio with no backend, no auth and no tests. Nothing here is urgent. **P0 is empty and
that is the correct state.**

---

## P0 — blocking

*(none)*

---

## P1 — real debt, worth a task

### B1 — `src/data/mods.js` / `projects.js` drift with nothing to regenerate them
These files are *failure fallbacks*, not primary content. They drift silently from reality,
and the site serves them whenever the GitHub API fails — looking plausible while being wrong.

**Labelling: done 2026-09-17.** Both files now carry headers stating what they are, when
they render, and where to change real content instead. Worth noting what the review found:
the old headers were not merely absent, they were *actively wrong* — `mods.js` instructed
the reader to "Edit this list to add your game mods," which is the exact misconception. The
same error was in `README.md` and is also fixed.

**Still open — the real fix.** Nothing regenerates these files, so they will drift again. A
small script that writes them from a live `fetchRepos()` result (run manually, committed
like a lockfile) would remove the drift class entirely rather than documenting it. Worth
doing before the lists get much staler.

**Note.** If that script lands, these files become generated artefacts rather than
hand-authored content, which changes the `src/data/` mixed-content verdict in the watch
list below.

*Raised by: STRUCTURE.md's own pre-existing debt note; reinforced by Codex on `README.md`.*

### B2 — the card item shape is re-asserted by four producers with nothing to check it
`<Card>` consumes a shape (`title`, `blurb`, `links[]`, `year`, `tag`, plus `game`/`status`
for mods and `stack[]` for projects) that is declared nowhere. Four files produce it
independently: `lib/github.js` `toItem()`, `data/mods.js`, `data/projects.js`,
`data/manual.js`. With no TypeScript and no tests, renaming a field on `Card` silently
breaks the other three.

A concrete asymmetry already exists: `category` is required on `toItem()` output and on
`manual.js` entries — both are filtered on it in `splitRepos`/`mergeManual` — but is absent
from `mods.js`/`projects.js`, which rely on being pre-partitioned into separate exports.

**Direction.** Write the shape down once as a JSDoc `@typedef`, **on the data boundary**
(in or beside `lib/github.js`) rather than beside `Card.jsx` — per the Codex sign-off, a
typedef parked next to the consumer "would merely move the ambiguity". Have all four
producers reference it. Documentation-weight only; not a runtime validator, not a TS
migration.

*Raised by: abstraction lens (P2), severity sharpened by Codex (agreed, with the placement
correction).*

### B3 — `fetchRepos` has no request timeout
`fetch(API, { headers })` uses no `AbortController`. A *failing* request degrades gracefully
to the bundled fallback; a *hanging* one never rejects, so `.catch()` never runs and the
page sits on skeleton cards indefinitely. The failure mode the fallback exists to handle is
the one it cannot catch.

**Direction.** Wrap the fetch in an `AbortController` with a short timeout (5–10s) so a hang
becomes a rejection and takes the existing fallback path.

*Raised by: Codex sign-off.*

---

## P2 — note it, fix when nearby

### B4 — cache is `sessionStorage`, so it never helps a returning visitor
TTL is 30 minutes but scope is one browser tab. Every new tab is a cold start against a
60-req/hour-per-IP budget. If repeat-visit caching is wanted, this is a storage change, not
a TTL change — but it is a genuine behaviour decision (stale content across days), so it
belongs in `DECISIONS.md` if taken.

*Raised by: abstraction + componentization lenses independently (as the doc error, now
fixed); the underlying behaviour question is recorded here.*

### B5 — only the 100 most recently-updated repos are fetched
`per_page=100&sort=updated`, no pagination. Invisible under 100 public repos; at 101 the
least-recently-updated repo silently vanishes with no error. **Trigger:** approaching 100
public repos. Then add pagination.

*Raised by: Codex sign-off.*

### B6 — GitHub identity has three sources
`GITHUB_USER` in `lib/github.js:18`, the full URL `github` in `data/site.js`, and — until
the 2026-09-17 review — two hardcodes in `Nav.jsx` (those are now fixed). The API feed and
the displayed profile can diverge on an account rename.

**Direction.** Store one `githubUser` value in `data/site.js` and derive the API endpoint,
the profile URL and the displayed handle from it.

*Raised by: Codex sign-off.*

### B7 — `CardGrid` extraction
The `loading ? skeleton grid : item grid` ternary appears three times across `Home.jsx`
(×2) and `Projects.jsx`, and `Mods.jsx` already diverges slightly on the same pattern — so
it is drifting rather than converging.

**Direction.** Extract `CardGrid({ loading, items, kind, skeletonCount })` into
`src/components/`. Deferred only because the baseline's remit is document-and-triage; this
is the most clearly-earned extraction on the list.

*Raised by: componentization lens; Codex agreed ("three instances establish a small,
coherent responsibility without over-componentizing").*

### B8 — `PageHeader` extraction
The eyebrow + `h1` + lead-paragraph block inside `page-head`/`container` is duplicated
near-identically across `About.jsx`, `Mods.jsx` and `Projects.jsx` — three route consumers
of one shape, which STRUCTURE.md's own rule says belongs in `components/`.

**Direction.** Extract `PageHeader({ eyebrow, title, children })`. Home's hero stays bespoke;
its structure genuinely differs.

*Raised by: componentization lens; Codex agreed.*

---

## Watch list — deliberately NOT doing, with the trigger that changes that

These were examined by the 2026-09-17 review and judged correct as they stand. They are
recorded so a future baseline does not re-litigate them from scratch.

| Item | Verdict | Trigger to revisit |
|---|---|---|
| Splitting `lib/github.js` into client + classifier | **Not yet.** The two jobs are ~35 and ~65 lines inside a 200-line file and share the same `REPO_OVERRIDES`/`blob()` helpers — splitting today yields two files that always change together. | The classifier (currently lines 79–114) grows materially. |
| Renaming `src/lib/` to `src/github/` | **Leave it.** The topology lens flagged `lib/` as a generic bucket; Codex overruled — the folder has a precise responsibility in STRUCTURE.md's authoritative Layout, and a second client is not required to justify a conventional external-integration boundary. | A second external-service client appears. Then split by responsibility. |
| Extracting the `usingFallback` / empty-state block | **Leave it.** Two four-line call sites in `Mods.jsx` and `Projects.jsx`. Both the abstraction lens and Codex explicitly declined to extract at this size. | A third list page adopts the pattern. |
| Adding a test runner or linter | **Leave it.** A deliberate decision, not an oversight — see `DECISIONS.md`. | Real logic accumulates in `lib/github.js`; the heuristics are the one uncovered thing worth testing. |
| `src/data/` mixing hand-authored content with offline snapshots | **Leave it.** Pragmatic for a site with no build-time regeneration step. | B1's regeneration script lands — then the snapshots become generated artefacts and want separating. |
| `categorize()` running twice per repo | **Leave it.** Harmless at this scale. | Expensive logic is added to the classifier. |
