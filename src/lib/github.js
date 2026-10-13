// ============================================================
//  GitHub auto-pull
//  Fetches your public repos and sorts them into Mods vs Projects
//  so you never have to hand-maintain a list.
//
//  How the sorting works (no GitHub setup required):
//   - Modding languages (Lua/Papyrus/C#) -> Mods
//   - Repos mentioning a game or "mod" -> Mods (unless they're a tool)
//   - Everything else -> Projects
//   - Forks are hidden by default
//
//  Levers if you ever want to nudge it (both optional):
//   1. Add a topic on GitHub: `mod` forces Mods, `project` forces Projects,
//      `hidden` hides the repo.
//   2. Or add an entry to REPO_OVERRIDES below (its `category` field: 'mod' | 'project' | 'hide').
// ============================================================

/**
 * The card item shape: the one contract between every producer and `<Card>`.
 * Producers: `toItem()` below, `src/data/mods.js`, `src/data/projects.js`, `src/data/manual.js`.
 * Consumer: `src/components/Card.jsx`. Renaming a field here means updating all of them
 * (no TypeScript, no runtime validator; this typedef is documentation only).
 *
 * @typedef {object} CardItem
 * @property {string} id
 * @property {string} title
 * @property {string} [blurb]  Absent on private manual entries (name only).
 * @property {string} tag  Kicker label. Mods: language/kind; projects: shown top-left.
 * @property {string} [year]
 * @property {Array<{label: string, href: string}>} links  May be empty (private entries).
 * @property {'mod'|'project'} category  Set by every producer: `toItem()` (and so the generated
 *   `mods.js`/`projects.js` fallbacks, built from its real output) and `manual.js` entries.
 *   `splitRepos`/`mergeManual` filter on it.
 * @property {string} [game]  Mods only.
 * @property {'live'|'wip'|'archived'} [status]  Mods only.
 * @property {string[]} [stack]  Projects only; chip labels.
 * @property {string|null} [image]  Optional screenshot path, e.g. "/img/x.png".
 * @property {boolean} [private]  Shows a "Private" badge; no repo link.
 * @property {number} [stars]  GitHub items only.
 * @property {string} [pushed]  GitHub items only; ISO timestamp of last push.
 */

export const GITHUB_USER = 'dirtyredz'

const API = `https://api.github.com/users/${GITHUB_USER}/repos?per_page=100&sort=updated`
const CACHE_KEY = 'dr_gh_repos_v1'
const CACHE_TTL = 30 * 60 * 1000 // 30 min
export const FETCH_TIMEOUT_MS = 8000 // a hung request aborts -> rejects -> existing fallback path

// Per-repo hand overrides — one entry per repo, for the things the GitHub API can't tell us.
// Collapses what used to be four parallel `name -> X` maps into one (so a repo's every override
// lives in one place and each is a single lookup). Each field is optional:
//   category : 'mod' | 'project' | 'hide' — force a classification the heuristic gets wrong
//   game     : the mod's game, when language/keywords can't infer it
//   title    : display name, when the repo name reads badly as a card title
//   blurb    : card text, when the repo has no GitHub "About" description (prefer setting the
//              repo description on GitHub itself, which auto-syncs)
//   modPage  : { label, href } — the mod's home on its game's mod site (Nexus, the Factorio Mod
//              Portal, the Avorion/Boxelware forum); surfaced by `toItem` as the lead link. These
//              can't be inferred (the id/slug is host-side). (The Avorion forum moved from
//              avorion.net to community.boxelware.com with new thread ids — those are used below.)
const NEXUS = (id, gameSlug) => ({ label: 'Nexus', href: `https://www.nexusmods.com/${gameSlug}/mods/${id}` })
const FORUM = (slug) => ({ label: 'Forum', href: `https://community.boxelware.com/index.php?/topic/${slug}/` })
export const REPO_OVERRIDES = {
  // Moonlight Peaks (C#) — Nexus Mods
  'chest-labels': { modPage: NEXUS(119, 'moonlightpeaks') },
  'Plant-Peek': { modPage: NEXUS(120, 'moonlightpeaks') },
  'Coffin-Break': { modPage: NEXUS(121, 'moonlightpeaks') },
  'Last-Swing': { modPage: NEXUS(122, 'moonlightpeaks') },
  Transplant: { modPage: NEXUS(126, 'moonlightpeaks') },
  'Mod-Nook': { modPage: NEXUS(127, 'moonlightpeaks') },
  Vampscape: { category: 'mod', game: 'Moonlight Peaks', modPage: NEXUS(128, 'moonlightpeaks') },
  FormLock: { modPage: NEXUS(141, 'moonlightpeaks') },
  'Purrtastic-Palette': { modPage: NEXUS(142, 'moonlightpeaks') },
  'Fangtastic-Palette': { modPage: NEXUS(143, 'moonlightpeaks') },
  'Dead-Reckoning': { modPage: NEXUS(144, 'moonlightpeaks') },
  // Skyrim SE — Nexus Mods
  'Re-Equip': { modPage: NEXUS(22627, 'skyrimspecialedition') },
  // Avorion — the Boxelware community forum. Four other Avorion repos (DirtySecure,
  // AvorionBoilerPlate, DirtyCargoExtender, Subspace-Corridor) were never posted as their own
  // thread, so they stay GitHub-only.
  MoveUI: { modPage: FORUM('3620-mod-moveui-v221') },
  'Regenerative-Asteroids': { modPage: FORUM('2844-mod-regenerative-asteroid-fields-update-152') },
  ShipScriptLoader: {
    modPage: FORUM('3704-mod-ship-script-loader-a-small-mod-to-auto-load-scripts-onto-a-players-ship'),
  },
  LogLevels: { modPage: FORUM('3585-mod-loglevels-v110-for-modders-and-server-owners') },
  NoNeutralCore: { modPage: FORUM('3259-mod-noneutralcore') },
  DockBuilder: { modPage: FORUM('3698-dockbuilder-a-culmination-of-multiple-modders-work') },
  // Factorio — Factorio Mod Portal
  'trains-via-interrupt': {
    category: 'mod',
    game: 'Factorio',
    modPage: { label: 'Mod Portal', href: 'https://mods.factorio.com/mod/trains-via-interrupt' },
  },
  // Classification / display fixes
  'Factorio-BP': { category: 'project' }, // a blueprint utility website, not a game mod
  'BrownsKarateAcademy.com': { title: 'Browns Karate Academy' }, // repo name reads badly as a title
  StopOnInn: {
    blurb:
      'A Gatsby + React website built from an Adobe XD design — image-forward and fully responsive, with star ratings, modal galleries, a slide-out menu, and smooth reveal animations.',
  },
}

const MOD_LANGS = new Set(['Lua', 'Papyrus', 'C#'])
const TOOL_RE = /manager|boilerplate|autocomplete|website|\.com\b/i
const MOD_RE = /\bmod(s|ding|ification)?\b|avorion|skyrim|moonlight|factorio|modpack/i

const GAME_RULES = [
  [/avorion/i, 'Avorion'],
  [/skyrim/i, 'Skyrim SE'],
  [/moonlight/i, 'Moonlight Peaks'],
  [/factorio/i, 'Factorio'],
  [/\bsims\b/i, 'The Sims 4'],
]
const LANG_GAME = { Papyrus: 'Skyrim SE', Lua: 'Avorion', 'C#': 'Moonlight Peaks' }

const blob = (r) => `${r.name} ${r.description || ''} ${(r.topics || []).join(' ')}`

function detectGame(r) {
  const g = REPO_OVERRIDES[r.name]?.game
  if (g) return g
  const b = blob(r)
  for (const [re, game] of GAME_RULES) if (re.test(b)) return game
  return LANG_GAME[r.language] || 'Game'
}

function categorize(r) {
  const overrideCategory = REPO_OVERRIDES[r.name]?.category
  if (overrideCategory) return overrideCategory
  const topics = r.topics || []
  if (topics.includes('hidden')) return 'hide'
  if (topics.includes('mod')) return 'mod'
  if (topics.includes('project')) return 'project'
  if (r.fork) return 'hide'
  if (MOD_LANGS.has(r.language)) return 'mod'
  const b = blob(r)
  if (MOD_RE.test(b) && !TOOL_RE.test(b)) return 'mod'
  return 'project'
}

/** @param {object} r GitHub API repo object @returns {CardItem} */
function toItem(r) {
  const ov = REPO_OVERRIDES[r.name] || {}
  const category = categorize(r) // 'mod' | 'project' (hide already filtered)
  const created = new Date(r.created_at)
  const year = Number.isNaN(created.getTime()) ? '' : String(created.getFullYear())
  const links = [{ label: 'GitHub', href: r.html_url }]
  if (r.homepage) links.unshift({ label: 'Site', href: r.homepage })
  // The mod's home on its game's mod site is where players actually get it, so lead with it.
  if (ov.modPage) links.unshift({ label: ov.modPage.label, href: ov.modPage.href })
  const stars = r.stargazers_count || 0
  const title = ov.title || r.name

  if (category === 'mod') {
    const game = detectGame(r)
    return {
      id: 'gh-' + r.id,
      category,
      title,
      game,
      tag: r.language || 'Mod',
      status: r.archived ? 'archived' : 'live',
      year,
      blurb: ov.blurb || r.description || `A ${game} modification.`,
      links,
      stars,
      pushed: r.pushed_at,
    }
  }

  return {
    id: 'gh-' + r.id,
    category,
    title,
    tag: r.language || 'Code',
    stack: [r.language, stars ? `★ ${stars}` : null].filter(Boolean),
    year,
    blurb: ov.blurb || r.description || `A ${r.language || 'code'} project.`,
    links,
    stars,
    pushed: r.pushed_at,
  }
}

function readCache() {
  try {
    const c = JSON.parse(sessionStorage.getItem(CACHE_KEY) || 'null')
    if (c && Date.now() - c.t < CACHE_TTL) return c.data
  } catch {
    /* ignore */
  }
  return null
}

function writeCache(data) {
  try {
    sessionStorage.setItem(CACHE_KEY, JSON.stringify({ t: Date.now(), data }))
  } catch {
    /* ignore */
  }
}

/**
 * @param {{ useCache?: boolean }} [opts] `useCache: false` skips the browser-only sessionStorage
 *   cache; scripts/generate-fallback.mjs passes it so Node always classifies a live fetch.
 * @returns {Promise<CardItem[]>}
 */
export async function fetchRepos({ useCache = true } = {}) {
  const cached = useCache ? readCache() : null
  if (cached) return cached

  // The timer covers headers AND body: abort() rejects a pending fetch() or res.json().
  const ctrl = new AbortController()
  const timer = setTimeout(() => ctrl.abort(), FETCH_TIMEOUT_MS)
  let raw
  try {
    const res = await fetch(API, {
      headers: { Accept: 'application/vnd.github+json' },
      signal: ctrl.signal,
    })
    if (!res.ok) throw new Error(`GitHub API ${res.status}`)
    raw = await res.json()
  } finally {
    clearTimeout(timer)
  }
  if (!Array.isArray(raw)) throw new Error('Unexpected GitHub response')

  const items = raw
    .filter((r) => categorize(r) !== 'hide')
    .map(toItem)
    .sort((a, b) => new Date(b.pushed) - new Date(a.pushed))

  if (useCache) writeCache(items)
  return items
}

export function splitRepos(items) {
  return {
    mods: items.filter((i) => i.category === 'mod'),
    projects: items.filter((i) => i.category === 'project'),
  }
}
