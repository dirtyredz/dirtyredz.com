import { Link } from 'react-router-dom'
import { useReveal } from '../hooks/useReveal.js'
import Card from '../components/Card.jsx'
import { mods } from '../data/mods.js'
import { projects } from '../data/projects.js'
import { site, socials } from '../data/site.js'
import './Home.css'

export default function Home() {
  useReveal()

  const featuredMods = mods.slice(0, 3)
  const featuredProjects = projects.slice(0, 2)

  return (
    <div className="home">
      {/* HERO */}
      <section className="hero">
        <div className="hero__grid-lines" aria-hidden="true"></div>
        <div className="container hero__inner">
          <p className="hero__hi">
            <span className="hero__dot"></span> Hey, I&#39;m {site.name.split(' ')[0]}
          </p>
          <h1 className="hero__title">
            I&#39;m <span className="hl">Dirtyredz</span> — I build,
            <br /> break, and <span className="hl">mod</span> things.
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
          <div className="hero__socials">
            {socials.slice(0, 5).map((s) => (
              <a key={s.label} href={s.href} target="_blank" rel="noreferrer">
                {s.label}
              </a>
            ))}
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
          {featuredMods.map((m) => (
            <Card key={m.id} item={m} kind="mod" />
          ))}
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
          {featuredProjects.map((p) => (
            <Card key={p.id} item={p} kind="project" />
          ))}
        </div>
      </section>

      {/* CONNECT */}
      <section className="section container">
        <div className="connect reveal">
          <div>
            <span className="eyebrow">Say hi</span>
            <h2 className="connect__title">Come find me around the web.</h2>
            <p className="connect__lead">
              I&#39;m not looking for work here — just sharing what I&#39;m into. If any of it
              lands with you, the door&#39;s open on any of these.
            </p>
          </div>
          <div className="connect__links">
            {socials.map((s) => (
              <a key={s.label} href={s.href} target="_blank" rel="noreferrer" className="connect__pill">
                {s.label} ↗
              </a>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
