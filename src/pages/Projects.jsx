import { useReveal } from '../hooks/useReveal.js'
import { useGithub } from '../hooks/useGithub.js'
import Card, { CardSkeleton } from '../components/Card.jsx'

export default function Projects() {
  const { loading, projects, usingFallback } = useGithub()
  useReveal([loading, projects.length])

  return (
    <div className="page">
      <header className="page-head">
        <div className="container">
          <span className="eyebrow">What I make</span>
          <h1>Projects</h1>
          <p>
            Software I build for fun, for myself, or just to figure something out — pulled live
            from my GitHub. Tools, components, sites, and experiments. Not a portfolio to hire
            from; more like a workshop bench.
          </p>
        </div>
      </header>
      <div className="container">
        <div className="grid">
          {loading
            ? Array.from({ length: 6 }).map((_, i) => <CardSkeleton key={i} />)
            : projects.map((p) => <Card key={p.id} item={p} kind="project" />)}
        </div>
        {!loading && projects.length === 0 && (
          <p className="feed-note">No projects found right now.</p>
        )}
        {usingFallback && (
          <p className="feed-note">Showing a saved list — couldn&#39;t reach GitHub just now.</p>
        )}
      </div>
    </div>
  )
}
