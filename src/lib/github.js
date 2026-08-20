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
//   2. Or add an entry to OVERRIDES below: name -> 'mod' | 'project' | 'hide'
// ============================================================

export const GITHUB_USER = 'dirtyredz'

const API = `https://api.github.com/users/${GITHUB_USER}/repos?per_page=100&sort=updated`
const CACHE_KEY = 'dr_gh_repos_v1'
const CACHE_TTL = 30 * 60 * 1000 // 30 min

// name -> 'mod' | 'project' | 'hide'
// Use for repos the heuristic can't classify — e.g. empty/near-empty repos
// that report no language and have no description.
export const OVERRIDES = {
  Vampscape: 'mod',
  'trains-via-interrupt': 'mod',
}

// name -> game, for mods whose game can't be inferred from language/keywords.
const GAME_OVERRIDES = {
  Vampscape: 'Moonlight Peaks',
  'trains-via-interrupt': 'Factorio',
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
  if (GAME_OVERRIDES[r.name]) return GAME_OVERRIDES[r.name]
  const b = blob(r)
  for (const [re, game] of GAME_RULES) if (re.test(b)) return game
  return LANG_GAME[r.language] || 'Game'
}

function categorize(r) {
  const ov = OVERRIDES[r.name]
  if (ov) return ov
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

function toItem(r) {
  const category = categorize(r) // 'mod' | 'project' (hide already filtered)
  const created = new Date(r.created_at)
  const year = Number.isNaN(created.getTime()) ? '' : String(created.getFullYear())
  const links = [{ label: 'GitHub', href: r.html_url }]
  if (r.homepage) links.unshift({ label: 'Site', href: r.homepage })
  const stars = r.stargazers_count || 0

  if (category === 'mod') {
    const game = detectGame(r)
    return {
      id: 'gh-' + r.id,
      category,
      title: r.name,
      game,
      tag: r.language || 'Mod',
      status: r.archived ? 'archived' : 'live',
      year,
      blurb: r.description || `A ${game} modification.`,
      links,
      stars,
      pushed: r.pushed_at,
    }
  }

  return {
    id: 'gh-' + r.id,
    category,
    title: r.name,
    tag: r.language || 'Code',
    stack: [r.language, stars ? `★ ${stars}` : null].filter(Boolean),
    year,
    blurb: r.description || `A ${r.language || 'code'} project.`,
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

export async function fetchRepos() {
  const cached = readCache()
  if (cached) return cached

  const res = await fetch(API, { headers: { Accept: 'application/vnd.github+json' } })
  if (!res.ok) throw new Error(`GitHub API ${res.status}`)
  const raw = await res.json()
  if (!Array.isArray(raw)) throw new Error('Unexpected GitHub response')

  const items = raw
    .filter((r) => categorize(r) !== 'hide')
    .map(toItem)
    .sort((a, b) => new Date(b.pushed) - new Date(a.pushed))

  writeCache(items)
  return items
}

export function splitRepos(items) {
  return {
    mods: items.filter((i) => i.category === 'mod'),
    projects: items.filter((i) => i.category === 'project'),
  }
}
