import Link from 'next/link'

export default function NotFound() {
  return (
    <section className="page narrow">
      <div className="page-head">
        <p className="section-eyebrow">404</p>
        <h1 className="page-title">Page not found</h1>
        <div className="hero-rule" aria-hidden="true" />
      </div>
      <div className="article-body">
        <p>The page you were looking for does not exist. It may have moved, or the link may be out of date.</p>
      </div>
      <div className="article-back">
        <Link href="/" className="text-link">&larr; Back to home</Link>
      </div>
    </section>
  )
}
