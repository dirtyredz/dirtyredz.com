import './Card.css'

const statusLabel = {
  live: 'Live',
  wip: 'In Progress',
  archived: 'Archived',
}

export default function Card({ item, kind }) {
  const { title, blurb, links = [], year, image } = item
  // mods have game/tag/status; projects have tag/stack
  const topLeft = kind === 'mod' ? item.game : item.tag
  const chips = kind === 'mod' ? [item.tag] : item.stack || []

  return (
    <article className="card reveal">
      {image && (
        <div className="card__media">
          <img src={image} alt={title} loading="lazy" />
        </div>
      )}
      <div className="card__body">
        <div className="card__top">
          <span className="card__kicker">{topLeft}</span>
          <div className="card__meta">
            {item.status && (
              <span className={`card__status card__status--${item.status}`}>
                <i></i>
                {statusLabel[item.status] || item.status}
              </span>
            )}
            {year && <span className="card__year">{year}</span>}
          </div>
        </div>

        <h3 className="card__title">{title}</h3>
        <p className="card__blurb">{blurb}</p>

        <div className="card__foot">
          <div className="card__chips">
            {chips.filter(Boolean).map((c) => (
              <span key={c} className="chip">
                {c}
              </span>
            ))}
          </div>
          <div className="card__links">
            {links.map((l) => (
              <a
                key={l.label}
                href={l.href}
                target={l.href.startsWith('http') ? '_blank' : undefined}
                rel="noreferrer"
                className="card__link"
              >
                {l.label} →
              </a>
            ))}
          </div>
        </div>
      </div>
    </article>
  )
}
