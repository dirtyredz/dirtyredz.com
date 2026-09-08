import { useReveal } from '../hooks/useReveal.js'
import { useGithub } from '../hooks/useGithub.js'
import Card, { CardSkeleton } from '../components/Card.jsx'
import './Mods.css'

// A group's recency = its most-recently-pushed mod. Computed across the whole group rather than
// trusting position: mods arrive newest-first, but manual entries (data/manual.js) are prepended by
// mergeManual and carry no `pushed`, so a positional [0] tie-break would misread epoch 0.
function groupRecency(items) {
  return Math.max(0, ...items.map((m) => new Date(m.pushed || 0).getTime()))
}

// Group mods by their game, then order the groups by size (largest first), tie-broken by recency so
// an active game floats up. Within a group, the incoming order is kept (manual first, then newest).
function groupByGame(mods) {
  const groups = new Map()
  for (const m of mods) {
    const game = m.game || 'Other'
    if (!groups.has(game)) groups.set(game, [])
    groups.get(game).push(m)
  }
  return [...groups.entries()].sort(
    ([, a], [, b]) => b.length - a.length || groupRecency(b) - groupRecency(a),
  )
}

export default function Mods() {
  const { loading, mods, usingFallback } = useGithub()
  useReveal([loading, mods.length])

  const groups = groupByGame(mods)

  return (
    <div className="page">
      <header className="page-head">
        <div className="container">
          <span className="eyebrow">What I run</span>
          <h1>Mods &amp; Servers</h1>
          <p>
            Game modifications for Avorion, Skyrim, Moonlight Peaks and more — pulled live from my
            GitHub, so this list stays current as I keep building. Grouped by game, with a link to
            each mod&#39;s home on its game&#39;s mod site (Nexus, the Factorio Mod Portal) where it lives
            there. Some are polished, some are experiments, all of them scratched an itch.
          </p>
        </div>
      </header>
      <div className="container">
        {loading ? (
          <div className="grid">
            {Array.from({ length: 6 }).map((_, i) => (
              <CardSkeleton key={i} />
            ))}
          </div>
        ) : (
          groups.map(([game, items]) => (
            <section key={game} className="mod-group">
              <div className="mod-group__head">
                <h2 className="mod-group__title">{game}</h2>
                <span className="mod-group__count">
                  {items.length} {items.length === 1 ? 'mod' : 'mods'}
                </span>
              </div>
              <div className="grid">
                {items.map((m) => (
                  <Card key={m.id} item={m} kind="mod" />
                ))}
              </div>
            </section>
          ))
        )}
        {!loading && mods.length === 0 && <p className="feed-note">No mods found right now.</p>}
        {usingFallback && (
          <p className="feed-note">Showing a saved list — couldn&#39;t reach GitHub just now.</p>
        )}
      </div>
    </div>
  )
}
