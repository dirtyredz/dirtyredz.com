import { useReveal } from '../hooks/useReveal.js'
import Card from '../components/Card.jsx'
import { mods } from '../data/mods.js'

export default function Mods() {
  useReveal()
  return (
    <div className="page">
      <header className="page-head">
        <div className="container">
          <span className="eyebrow">What I run</span>
          <h1>Mods &amp; Servers</h1>
          <p>
            Game modifications, modpacks, and the servers I host. This is where the Dirtyredz
            name earned its keep — building, tweaking, and running worlds for friends and
            communities. Some are live, some are retired, some are still cooking.
          </p>
        </div>
      </header>
      <div className="container">
        <div className="grid">
          {mods.map((m) => (
            <Card key={m.id} item={m} kind="mod" />
          ))}
        </div>
      </div>
    </div>
  )
}
