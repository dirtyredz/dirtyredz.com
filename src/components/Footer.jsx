import { Link } from 'react-router-dom'
import { site, github } from '../data/site.js'
import './Footer.css'

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__brand">
          <span className="footer__mark">DR</span>
          <div>
            <div className="footer__word">dirtyredz</div>
            <p className="footer__tag">{site.tagline}</p>
          </div>
        </div>

        <div className="footer__cols">
          <div className="footer__col">
            <span className="footer__head">Site</span>
            <Link to="/">Home</Link>
            <Link to="/mods">Mods</Link>
            <Link to="/projects">Projects</Link>
            <Link to="/about">About</Link>
          </div>
          <div className="footer__col">
            <span className="footer__head">Code</span>
            <a href={github} target="_blank" rel="noreferrer">
              GitHub ↗
            </a>
          </div>
        </div>
      </div>
      <div className="container footer__bottom">
        <span>© {year} {site.name} — {site.handle}</span>
        <span>Built with React + Vite · {site.location}</span>
      </div>
    </footer>
  )
}
