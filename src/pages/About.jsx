import { useReveal } from '../hooks/useReveal.js'
import { site, github } from '../data/site.js'
import './About.css'

const facts = [
  { k: 'Based in', v: site.location },
  { k: 'Served', v: 'USMC · 9 years' },
  { k: 'Developing since', v: '~2012, self-taught' },
  { k: 'Goes by', v: 'Dirtyredz' },
]

export default function About() {
  useReveal()
  return (
    <div className="page about">
      <header className="page-head">
        <div className="container">
          <span className="eyebrow">Who I am</span>
          <h1>About me</h1>
          <p>{site.tagline}</p>
        </div>
      </header>

      <div className="container about__grid">
        <div className="about__main">
          <p className="reveal about__lead">
            I&#39;m David — most of the internet knows me as <strong>Dirtyredz</strong>. I&#39;m a
            self-taught developer living in {site.location}, and I&#39;ve been building things on
            the web for over a decade.
          </p>

          <p className="reveal">
            My path into programming started while I was serving in the United States Marine
            Corps. I tried a bunch of different kinds of coding before web development finally
            stuck — I taught myself through trial and error, a lot of broken builds, and more
            tutorials than I can count. I never stopped tinkering, and I&#39;m still learning new
            tech all the time.
          </p>

          <p className="reveal">
            These days this site isn&#39;t a resume or a sales pitch — it&#39;s just my space. I
            spend my time on game mods and servers, small software projects, and whatever else
            catches my interest. If it&#39;s something I made or something I&#39;m into, it ends up
            here.
          </p>

          <h2 className="reveal about__h2">So what&#39;s with the &quot;Dirtyredz&quot;?</h2>
          <p className="reveal">
            In the Marine Corps I served as an infantryman, and later as an MV-22 airframe
            mechanic. I spent most of my time out in the field training — and being a redhead, the
            longer I was outdoors, the redder my hair got. Naturally, the longer I was out there,
            the dirtier I got too. My comrades started calling me the <em>Dirty Red Head</em>,
            which eventually got shortened to <strong>Dirtyredz</strong>. It&#39;s been my name
            online ever since, no matter what I&#39;m doing.
          </p>

          <div className="reveal about__cta">
            <a href={github} target="_blank" rel="noreferrer" className="connect__pill">
              github.com/dirtyredz ↗
            </a>
          </div>
        </div>

        <aside className="about__side reveal">
          <div className="about__card">
            <span className="about__card-head">The quick version</span>
            <ul className="about__facts">
              {facts.map((f) => (
                <li key={f.k}>
                  <span className="about__fact-k">{f.k}</span>
                  <span className="about__fact-v">{f.v}</span>
                </li>
              ))}
            </ul>
          </div>
        </aside>
      </div>
    </div>
  )
}
