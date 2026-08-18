import Link from 'next/link'

export const metadata = {
  title: 'Terms of Use',
  robots: { index: false, follow: false },
}

export default function Terms() {
  return (
    <section className="page narrow">
      <div className="page-head">
        <p className="section-eyebrow">Legal</p>
        <h1 className="page-title">Terms of use</h1>
        <div className="hero-rule" aria-hidden="true" />
      </div>
      <div className="article-body">
        <p>
          This is a placeholder terms page for the Arkan Directory Hub prototype. Content across the site is
          provided for educational purposes only and is not a substitute for guidance from qualified scholars.
        </p>
        <p>Full terms will be published before launch.</p>
      </div>
      <div className="article-back">
        <Link href="/" className="text-link">&larr; Back to home</Link>
      </div>
    </section>
  )
}
