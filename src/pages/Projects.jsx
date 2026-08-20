import { useReveal } from '../hooks/useReveal.js'
import Card from '../components/Card.jsx'
import { projects } from '../data/projects.js'

export default function Projects() {
  useReveal()
  return (
    <div className="page">
      <header className="page-head">
        <div className="container">
          <span className="eyebrow">What I make</span>
          <h1>Projects</h1>
          <p>
            Software I build for fun, for myself, or just to figure something out. Not a portfolio
            to hire from — more like a workshop bench. Tools, components, experiments, and the
            occasional thing that made it out into the world.
          </p>
        </div>
      </header>
      <div className="container">
        <div className="grid">
          {projects.map((p) => (
            <Card key={p.id} item={p} kind="project" />
          ))}
        </div>
      </div>
    </div>
  )
}
