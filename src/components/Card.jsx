import './Card.css'

export function CardSkeleton() {
  return (
    <div className="card card--skeleton" aria-hidden="true">
      <div className="card__body">
        <div className="sk sk--kicker"></div>
        <div className="sk sk--title"></div>
        <div className="sk sk--line"></div>
        <div className="sk sk--line" style={{ width: '80%' }}></div>
        <div className="card__foot">
          <div className="sk sk--chip"></div>
          <div className="sk sk--chip" style={{ width: '54px' }}></div>
        </div>
      </div>
    </div>
  )
}

const statusLabel = {
  live: 'Live',
  wip: 'In Progress',
  archived: 'Archived',
}

export default function Card({ item, kind }) {
  const { title, blurb, links = [], year, image, private: isPrivate } = item
  // mods have game/tag/status; projects have tag/stack
  const topLeft = kind === 'mod' ? item.game : item.tag
  const chips = kind === 'mod' ? [item.tag] : item.stack || []
  // Never surface a repo link for private items — only non-GitHub links (e.g. a demo)
  const shownLinks = isPrivate
    ? links.filter((l) => !/github\.com/i.test(l.href || ''))
    : links

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
            {isPrivate ? (
              <span className="card__status card__status--private">
                <svg viewBox="0 0 24 24" width="12" height="12" aria-hidden="true">
                  <path
                    fill="currentColor"
                    d="M12 1a5 5 0 0 0-5 5v3H6a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-9a2 2 0 0 0-2-2h-1V6a5 5 0 0 0-5-5Zm3 8H9V6a3 3 0 0 1 6 0v3Z"
                  />
                </svg>
                Private
              </span>
            ) : (
              item.status && (
                <span className={`card__status card__status--${item.status}`}>
                  <i></i>
                  {statusLabel[item.status] || item.status}
                </span>
              )
            )}
            {year && <span className="card__year">{year}</span>}
          </div>
        </div>

        <h3 className="card__title">{title}</h3>
        {blurb && <p className="card__blurb">{blurb}</p>}

        <div className="card__foot">
          <div className="card__chips">
            {chips.filter(Boolean).map((c) => (
              <span key={c} className="chip">
                {c}
              </span>
            ))}
          </div>
          <div className="card__links">
            {shownLinks.map((l) => (
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
