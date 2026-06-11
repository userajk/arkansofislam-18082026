import { Link } from 'react-router-dom'

export function SimplePage({ eyebrow, title, children }) {
  return (
    <section className="page narrow">
      <div className="page-head">
        <p className="section-eyebrow">{eyebrow}</p>
        <h1 className="page-title">{title}</h1>
        <div className="hero-rule" aria-hidden="true" />
      </div>
      <div className="article-body">{children}</div>
      <div className="article-back">
        <Link to="/" className="text-link">← Back to home</Link>
      </div>
    </section>
  )
}

export function Privacy() {
  return (
    <SimplePage eyebrow="Legal" title="Privacy policy">
      <p>
        This is a placeholder privacy policy for the Arkan Directory Hub prototype. The site stores only your
        theme preference, kept locally in your browser. No personal data is collected, transmitted, or shared.
      </p>
      <p>A full policy will be published before launch.</p>
    </SimplePage>
  )
}

export function Terms() {
  return (
    <SimplePage eyebrow="Legal" title="Terms of use">
      <p>
        This is a placeholder terms page for the Arkan Directory Hub prototype. Content across the site is
        provided for educational purposes only and is not a substitute for guidance from qualified scholars.
      </p>
      <p>Full terms will be published before launch.</p>
    </SimplePage>
  )
}

export function NotFound() {
  return (
    <SimplePage eyebrow="404" title="Page not found">
      <p>The page you were looking for does not exist. It may have moved, or the link may be out of date.</p>
    </SimplePage>
  )
}
