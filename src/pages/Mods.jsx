import { useReveal } from '../hooks/useReveal.js'
import { useGithub } from '../hooks/useGithub.js'
import Card, { CardSkeleton } from '../components/Card.jsx'

export default function Mods() {
  const { loading, mods, usingFallback } = useGithub()
  useReveal([loading, mods.length])

  return (
    <div className="page">
      <header className="page-head">
        <div className="container">
          <span className="eyebrow">What I run</span>
          <h1>Mods &amp; Servers</h1>
          <p>
            Game modifications for Avorion, Skyrim, Moonlight Peaks and more — pulled live from my
            GitHub, so this list stays current as I keep building. Some are polished, some are
            experiments, all of them scratched an itch.
          </p>
        </div>
      </header>
      <div className="container">
        <div className="grid">
          {loading
            ? Array.from({ length: 6 }).map((_, i) => <CardSkeleton key={i} />)
            : mods.map((m) => <Card key={m.id} item={m} kind="mod" />)}
        </div>
        {!loading && mods.length === 0 && (
          <p className="feed-note">No mods found right now.</p>
        )}
        {usingFallback && (
          <p className="feed-note">Showing a saved list — couldn&#39;t reach GitHub just now.</p>
        )}
      </div>
    </div>
  )
}
