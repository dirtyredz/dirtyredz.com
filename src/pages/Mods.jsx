import { useReveal } from '../hooks/useReveal.js'
import { useGithub } from '../hooks/useGithub.js'
import Card, { CardSkeleton } from '../components/Card.jsx'
import './Mods.css'

// Group mods by their game, then order the groups by size (largest first), tie-broken by the most
// recently pushed mod so an active game floats up. Mods arrive already sorted newest-first, so each
// group keeps that order.
function groupByGame(mods) {
  const groups = new Map()
  for (const m of mods) {
    const game = m.game || 'Other'
    if (!groups.has(game)) groups.set(game, [])
    groups.get(game).push(m)
  }
  return [...groups.entries()].sort(
    (a, b) =>
      b[1].length - a[1].length ||
      new Date(b[1][0]?.pushed || 0) - new Date(a[1][0]?.pushed || 0),
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
            GitHub, so this list stays current as I keep building. Grouped by game, with links to the
            Nexus page where the mod lives there. Some are polished, some are experiments, all of them
            scratched an itch.
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
