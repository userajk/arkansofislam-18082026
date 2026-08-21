import Link from 'next/link'

export const metadata = {
  title: 'Privacy Policy',
  robots: { index: false, follow: false },
}

export default function Privacy() {
  return (
    <section className="page narrow">
      <div className="page-head">
        <p className="section-eyebrow">Legal</p>
        <h1 className="page-title">Privacy policy</h1>
        <div className="hero-rule" aria-hidden="true" />
      </div>
      <div className="article-body">
        <p>
          This is a placeholder privacy policy for Arkans of Islam. The site stores only your
          theme preference, kept locally in your browser. No personal data is collected, transmitted, or shared.
        </p>
        <p>A full policy will be published before launch.</p>
      </div>
      <div className="article-back">
        <Link href="/" className="text-link">&larr; Back to home</Link>
      </div>
    </section>
  )
}
