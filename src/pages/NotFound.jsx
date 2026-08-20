import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <div className="page" style={{ display: 'grid', placeItems: 'center', textAlign: 'center', minHeight: '80vh' }}>
      <div className="container">
        <p className="eyebrow" style={{ justifyContent: 'center' }}>Error 404</p>
        <h1 style={{ fontSize: 'clamp(3rem, 12vw, 7rem)', marginBottom: '12px' }}>
          Nothing here.
        </h1>
        <p style={{ color: 'var(--text-dim)', maxWidth: '42ch', margin: '0 auto 28px' }}>
          This page wandered off into the field and never came back. Let&#39;s get you home.
        </p>
        <Link to="/" className="btn btn-primary">
          Back home
        </Link>
      </div>
    </div>
  )
}
