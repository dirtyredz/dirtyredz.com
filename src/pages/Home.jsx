import { Link } from 'react-router-dom'
import { useReveal } from '../hooks/useReveal.js'
import { useGithub } from '../hooks/useGithub.js'
import Card, { CardSkeleton } from '../components/Card.jsx'
import { site, github } from '../data/site.js'
import './Home.css'

export default function Home() {
  const { loading, mods, projects } = useGithub()
  useReveal([loading])

  const featuredMods = mods.slice(0, 3)
  const featuredProjects = projects.slice(0, 3)

  return (
    <div className="home">
      {/* HERO */}
      <section className="hero">
        <div className="container hero__inner">
          <p className="hero__hi">
            <span className="hero__dot"></span> Hey, I&#39;m {site.name.split(' ')[0]}
          </p>
          <h1 className="hero__title">
            I&#39;m <span className="hl">Dirtyredz</span> —
            <br />
            <span className="nowrap">I build,</span> break, and{' '}
            <span className="hl">mod</span> things.
          </h1>
          <p className="hero__lead">
            Marine Corps veteran turned self-taught developer in {site.location}. This is my
            corner of the internet — the game mods and servers I run, the software I make for
            fun, and whatever else I&#39;m tinkering with. No sales pitch, just my stuff.
          </p>
          <div className="hero__cta">
            <Link to="/mods" className="btn btn-primary">
              See my mods
            </Link>
            <Link to="/projects" className="btn btn-ghost">
              Browse projects
            </Link>
          </div>
        </div>
      </section>

      {/* WHAT I'M ABOUT */}
      <section className="section container">
        <div className="pillars">
          <div className="pillar reveal">
            <span className="pillar__num">01</span>
            <h3>Mods &amp; servers</h3>
            <p>
              Game modifications, modpacks, and the servers I host for friends and communities.
              The stuff that made &quot;Dirtyredz&quot; a name in the first place.
            </p>
            <Link to="/mods" className="pillar__link">
              Explore mods →
            </Link>
          </div>
          <div className="pillar reveal">
            <span className="pillar__num">02</span>
            <h3>Software I make</h3>
            <p>
              Tools, components, and side projects I build because they&#39;re fun or because I
              needed them. Some end up on npm, some just live on my machine.
            </p>
            <Link to="/projects" className="pillar__link">
              See projects →
            </Link>
          </div>
          <div className="pillar reveal">
            <span className="pillar__num">03</span>
            <h3>The story</h3>
            <p>
              Nine years in the Marine Corps, a red beard full of field dirt, and a career I fell
              into and stuck with. Where the name comes from and who&#39;s behind it.
            </p>
            <Link to="/about" className="pillar__link">
              About me →
            </Link>
          </div>
        </div>
      </section>

      {/* FEATURED MODS */}
      <section className="section container">
        <div className="section-head reveal">
          <div>
            <span className="eyebrow">Featured</span>
            <h2 className="section-title">Mods &amp; servers</h2>
          </div>
          <Link to="/mods" className="section-head__link">
            All mods →
          </Link>
        </div>
        <div className="grid">
          {loading
            ? Array.from({ length: 3 }).map((_, i) => <CardSkeleton key={i} />)
            : featuredMods.map((m) => <Card key={m.id} item={m} kind="mod" />)}
        </div>
      </section>

      {/* FEATURED PROJECTS */}
      <section className="section container">
        <div className="section-head reveal">
          <div>
            <span className="eyebrow">Featured</span>
            <h2 className="section-title">Things I&#39;ve built</h2>
          </div>
          <Link to="/projects" className="section-head__link">
            All projects →
          </Link>
        </div>
        <div className="grid">
          {loading
            ? Array.from({ length: 3 }).map((_, i) => <CardSkeleton key={i} />)
            : featuredProjects.map((p) => <Card key={p.id} item={p} kind="project" />)}
        </div>
      </section>

      {/* CODE */}
      <section className="section container">
        <div className="connect reveal">
          <div>
            <span className="eyebrow">The code</span>
            <h2 className="connect__title">It&#39;s all on GitHub.</h2>
            <p className="connect__lead">
              I&#39;m not on social media — no feeds, no DMs. If you want to see what I&#39;m
              actually up to, the honest version lives in my repos: the mods, the tools, and this
              very site.
            </p>
          </div>
          <div className="connect__links">
            <a href={github} target="_blank" rel="noreferrer" className="connect__pill">
              github.com/dirtyredz ↗
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
