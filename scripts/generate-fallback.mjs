// Regenerates src/data/mods.js and src/data/projects.js from a live GitHub fetch.
// Run manually, commit the output like a lockfile:  npm run gen:fallback
//
// Reuses the site's own classification (fetchRepos / splitRepos in src/lib/github.js), so the
// fallback matches what the live site would show. Manual entries (src/data/manual.js) are NOT
// included: useGithub.js merges them in at runtime, fallback or not.
import { writeFileSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import { fetchRepos, splitRepos } from '../src/lib/github.js'

const dataDir = new URL('../src/data/', import.meta.url)

const GENERATED = `//  GENERATED FILE — do not hand-edit. Written by scripts/generate-fallback.mjs;
//  regenerate with \`npm run gen:fallback\` and commit the result (like a lockfile).
//  Output is the site's own classification of a live GitHub fetch, in the
//  same order the live site shows it.`

const HEADERS = {
  mods: `// ============================================================
//  MODS & SERVERS — OFFLINE FALLBACK SNAPSHOT
${GENERATED}
//
//  This is NOT where the site's mod list lives. src/lib/github.js
//  fetches your repos from the GitHub API and classifies them; this
//  list is rendered only when that fetch throws — network down, or
//  GitHub's unauthenticated 60-requests/hour-per-IP limit spent — at
//  which point useGithub.js serves these entries and sets usingFallback.
//  While the API answers (nearly always), this file is invisible.
//  It is only as fresh as the last regeneration, so rerun the script
//  after meaningful changes to your repos.
//  To change a real mod, push it to GitHub, or nudge it via
//  REPO_OVERRIDES in src/lib/github.js, or — if it isn't a public repo
//  — add it to src/data/manual.js.
// ============================================================
`,
  projects: `// ============================================================
//  PROJECTS — OFFLINE FALLBACK SNAPSHOT
${GENERATED}
//
//  Not the project list the site shows. src/lib/github.js pulls your
//  public repos from the GitHub API and every non-hidden one it doesn't
//  classify as a mod becomes a project (repos hidden by topic or by
//  override never reach either bucket, and forks are hidden by default
//  unless an override or a \`mod\`/\`project\` topic classifies them first);
//  useGithub.js drops back to this list only when that fetch throws — no
//  network, or GitHub's unauthenticated 60-requests/hour-per-IP limit
//  exhausted — and sets usingFallback.
//  Any other time, this file is invisible. It is only as fresh as the
//  last regeneration, so rerun the script after meaningful changes.
//  To change a real project, push it to GitHub (its About text and
//  topics drive the card), tune REPO_OVERRIDES in src/lib/github.js, or
//  list it in src/data/manual.js for private / off-GitHub work.
// ============================================================
`,
}

const render = (name, items) =>
  `${HEADERS[name]}
/** @type {import('../lib/github.js').CardItem[]} */
export const ${name} = ${JSON.stringify(items, null, 2)}
`

const items = await fetchRepos({ useCache: false })
const { mods, projects } = splitRepos(items)

for (const [name, list] of Object.entries({ mods, projects })) {
  writeFileSync(fileURLToPath(new URL(`${name}.js`, dataDir)), render(name, list))
  console.log(`${name}.js: ${list.length} entries`)
}
