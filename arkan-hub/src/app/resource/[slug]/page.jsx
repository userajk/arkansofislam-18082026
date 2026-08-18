import Link from 'next/link'
import { notFound } from 'next/navigation'
import { RESOURCE_MAP, getResource, getHub } from '../../../data/content'
import { DownloadIcon } from '../../../components/Icons'
import shahadahContent from '../../../data/shahadah-content'
import { duaQunootContent } from '../../../data/dua-qunoot-content'
import { duaWithSalahContent } from '../../../data/dua-with-salah-content'

const CONTENT_PAGES = new Set(['shahadah', 'dua-qunoot', 'dua-with-salah'])

export function generateStaticParams() {
  return Object.keys(RESOURCE_MAP).map(slug => ({ slug }))
}

export async function generateMetadata({ params }) {
  const { slug } = await params
  const resource = getResource(slug)
  if (!resource) return { title: 'Resource Not Found' }
  const meta = {
    title: resource.title,
    description: resource.desc,
  }
  if (!CONTENT_PAGES.has(slug)) {
    meta.robots = { index: false, follow: false }
  }
  return meta
}

export default async function ResourcePage({ params }) {
  const { slug } = await params
  const resource = getResource(slug)

  if (!resource) notFound()

  const hub = resource.hubSlug ? getHub(resource.hubSlug) : null

  if (slug === 'shahadah') {
    return (
      <article className="page narrow">
        <div className="page-head">
          <p className="section-eyebrow">{resource.category}</p>
          <h1 className="page-title">{resource.title}</h1>
          <div className="hero-rule" aria-hidden="true" />
          <p className="page-lede">{resource.desc}</p>
        </div>

        <div className="article-body">
          <section className="content-section">
            <h2 className="article-h2">{shahadahContent.intro.title}</h2>
            {shahadahContent.intro.content.split('\n\n').map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </section>

          <section className="content-section">
            <h2 className="article-h2">{shahadahContent.shahadahStatement.title}</h2>
            <p>{shahadahContent.shahadahStatement.intro}</p>
            <div className="shahadah-single-card">
              {shahadahContent.shahadahStatement.languages.map((lang, i) => (
                <div key={i} className="shahadah-language-group">
                  <h4 className="shahadah-lang-name">{lang.name}</h4>
                  <p className="shahadah-lang-text">{lang.script}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="content-section">
            <h2 className="article-h2">{shahadahContent.twoPartsExplained.title}</h2>
            <p>{shahadahContent.twoPartsExplained.intro}</p>
            {shahadahContent.twoPartsExplained.parts.map((part, i) => (
              <div key={i} className="two-parts-section">
                <div className="part-header">
                  <span className="part-number">{part.number}</span>
                  <h3 className="part-title">{part.title}</h3>
                </div>
                <div className="part-content">
                  {part.explanation.split('\n\n').map((para, j) => (
                    <p key={j}>{para}</p>
                  ))}
                  <div className="reflection-box">
                    <p><strong>Reflect:</strong> {part.reflection}</p>
                  </div>
                </div>
              </div>
            ))}
          </section>

          <section className="content-section">
            <h2 className="article-h2">{shahadahContent.forNewMuslims.title}</h2>
            {shahadahContent.forNewMuslims.sections.map((section, i) => (
              <div key={i}>
                <h3 className="article-h3">{section.heading}</h3>
                {section.qna && (
                  <div className="qa-section">
                    {section.qna.map((item, j) => (
                      <div key={j} className="qa-item">
                        <p className="qa-question"><strong>Q: {item.q}</strong></p>
                        <p className="qa-answer">{item.a}</p>
                      </div>
                    ))}
                  </div>
                )}
                {section.content && (
                  <div className="content-box">
                    {section.content.split('\n\n').map((para, j) => (
                      <p key={j}>{para}</p>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </section>

          <section className="content-section">
            <h2 className="article-h2">{shahadahContent.conditions.title}</h2>
            <p>{shahadahContent.conditions.intro}</p>
            <div className="conditions-grid">
              {shahadahContent.conditions.list.map((condition, i) => (
                <div key={i} className="condition-card">
                  <h3 className="condition-title">{condition.title}</h3>
                  <p className="condition-desc">{condition.desc}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="content-section">
            <h2 className="article-h2">{shahadahContent.howToDeclare.title}</h2>
            <div className="steps-timeline">
              {shahadahContent.howToDeclare.steps.map((step, i) => (
                <div key={i} className="step-item">
                  <div className="step-number">{step.number}</div>
                  <div className="step-content">
                    <h3 className="step-title">{step.title}</h3>
                    <p className="step-desc">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <p className="step-note"><em>{shahadahContent.howToDeclare.note}</em></p>
          </section>

          <section className="content-section">
            <h2 className="article-h2">{shahadahContent.afterShahadah.title}</h2>
            <p>{shahadahContent.afterShahadah.intro}</p>
            <div className="next-steps">
              <div className="next-steps-section">
                <h3 className="article-h3">{shahadahContent.afterShahadah.immediate.title}</h3>
                <ul className="steps-list">
                  {shahadahContent.afterShahadah.immediate.items.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
              <div className="next-steps-section">
                <h3 className="article-h3">{shahadahContent.afterShahadah.shortTerm.title}</h3>
                <ul className="steps-list">
                  {shahadahContent.afterShahadah.shortTerm.items.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
              <div className="next-steps-section">
                <h3 className="article-h3">{shahadahContent.afterShahadah.ongoing.title}</h3>
                <ul className="steps-list">
                  {shahadahContent.afterShahadah.ongoing.items.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          <section className="content-section reassurance-section">
            <h2 className="article-h2">{shahadahContent.reassurance.title}</h2>
            {shahadahContent.reassurance.content.split('\n\n').map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </section>

          <section className="content-section">
            <h2 className="article-h2">{shahadahContent.resources.title}</h2>
            <div className="related-topics">
              {shahadahContent.resources.relatedTopics.map((topic, i) => (
                <div key={i} className="related-topic">
                  <h3>{topic.title}</h3>
                  <p>{topic.desc}</p>
                </div>
              ))}
            </div>
          </section>
        </div>

        <div className="note-box">
          Content is provided for educational purposes only. Please verify religious matters with qualified scholars.
        </div>

        <div className="article-back">
          {hub && <Link href={`/hub/${hub.slug}`} className="text-link">&larr; Back to {hub.title}</Link>}
          <Link href="/directory" className="text-link">&larr; Back to the directory</Link>
        </div>
      </article>
    )
  }

  if (slug === 'dua-with-salah') {
    return (
      <article className="page">
        <div className="page-head">
          <p className="section-eyebrow">{resource.category}</p>
          <h1 className="page-title">{duaWithSalahContent.title}</h1>
          <div className="hero-rule" aria-hidden="true" />
          <p className="page-lede">{duaWithSalahContent.description}</p>
        </div>

        <div className="article-body" style={{ maxWidth: '100%' }}>
          <p style={{ fontSize: '15px', color: 'var(--text-soft)', marginBottom: '32px', textAlign: 'center' }}>
            {duaWithSalahContent.intro}
          </p>
          <div className="res-grid">
            {duaWithSalahContent.items.map(item => (
              <Link key={item.slug} href={`/resource/${item.slug}`} className="res-card">
                <span className="res-icon">📖</span>
                <span className="res-category">{item.category}</span>
                <h3 className="res-title">{item.title}</h3>
                <p className="res-desc">{item.desc}</p>
                <span className="res-more">Read more <span aria-hidden="true">→</span></span>
              </Link>
            ))}
          </div>
        </div>

        <div className="article-back">
          {hub && <Link href={`/hub/${hub.slug}`} className="text-link">&larr; Back to {hub.title}</Link>}
          <Link href="/directory" className="text-link">&larr; Back to the directory</Link>
        </div>
      </article>
    )
  }

  if (slug === 'dua-qunoot') {
    return (
      <article className="page narrow">
        <div className="page-head">
          <p className="section-eyebrow">Dua</p>
          <h1 className="page-title">Dua Qunoot</h1>
          <div className="hero-rule" aria-hidden="true" />
          <p className="page-lede">The essential dua recited with Witr prayer. Learn about Dua Qunoot, its meaning, benefits, and how to recite it.</p>
        </div>

        <div className="article-body">
          <section className="content-section">
            <h2 className="article-h2">{duaQunootContent.intro.title}</h2>
            {duaQunootContent.intro.content.split('\n\n').map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </section>

          <section className="content-section">
            <h2 className="article-h2">{duaQunootContent.duaQunootStatement.title}</h2>
            <p>{duaQunootContent.duaQunootStatement.intro}</p>
            <div className="shahadah-single-card">
              {duaQunootContent.duaQunootStatement.languages.map((lang, i) => (
                <div key={i} className="shahadah-language-group">
                  <h4 className="shahadah-lang-name">{lang.name}</h4>
                  <p className="shahadah-lang-text">{lang.script}</p>
                </div>
              ))}
            </div>
            <div style={{ marginTop: '2rem', textAlign: 'center' }}>
              <span className="btn-gold">
                <DownloadIcon /> Download Dua Qunoot (Arabic PDF)
              </span>
              <p className="dl-note" style={{ marginTop: '1rem' }}>PDF with Arabic text and transliteration coming soon</p>
            </div>
          </section>

          <section className="content-section">
            <h2 className="article-h2">{duaQunootContent.history.title}</h2>
            {duaQunootContent.history.sections.map((section, i) => (
              <div key={i}>
                <h3 className="article-h3">{section.heading}</h3>
                {section.content.split('\n\n').map((para, j) => (
                  <p key={j}>{para}</p>
                ))}
              </div>
            ))}
          </section>

          <section className="content-section">
            <h2 className="article-h2">{duaQunootContent.whenToRecite.title}</h2>
            {duaQunootContent.whenToRecite.sections.map((section, i) => (
              <div key={i}>
                <h3 className="article-h3">{section.heading}</h3>
                {section.content.split('\n\n').map((para, j) => (
                  <p key={j}>{para}</p>
                ))}
              </div>
            ))}
          </section>

          <section className="content-section">
            <h2 className="article-h2">{duaQunootContent.benefits.title}</h2>
            <div className="benefits-grid">
              {duaQunootContent.benefits.items.map((benefit, i) => (
                <div key={i} className="benefit-card">
                  <h3 className="benefit-title">{benefit.title}</h3>
                  <p className="benefit-desc">{benefit.desc}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="content-section">
            <h2 className="article-h2">{duaQunootContent.faq.title}</h2>
            <div className="faq-section">
              {duaQunootContent.faq.questions.map((item, i) => (
                <div key={i} className="faq-item">
                  <p className="faq-question"><strong>Q: {item.q}</strong></p>
                  <p className="faq-answer">{item.a}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="content-section">
            <h2 className="article-h2">{duaQunootContent.resources.title}</h2>
            <div className="related-topics">
              {duaQunootContent.resources.relatedTopics.map((topic, i) => (
                <div key={i} className="related-topic">
                  <h3>{topic.title}</h3>
                  <p>{topic.desc}</p>
                </div>
              ))}
            </div>
          </section>
        </div>

        <div className="note-box">
          Content is provided for educational purposes only. Please verify religious matters with qualified scholars.
        </div>

        <div className="article-back">
          {hub && <Link href={`/hub/${hub.slug}`} className="text-link">&larr; Back to {hub.title}</Link>}
          <Link href="/directory" className="text-link">&larr; Back to the directory</Link>
        </div>
      </article>
    )
  }

  return (
    <article className="page narrow">
      <div className="page-head">
        <p className="section-eyebrow">{resource.category}</p>
        <h1 className="page-title">{resource.title}</h1>
        <div className="hero-rule" aria-hidden="true" />
        <p className="page-lede">{resource.desc}</p>
      </div>

      {resource.download && (
        <div className="dl-cta">
          <span className="btn-gold dl-cta-btn">
            <DownloadIcon /> Download PDF
          </span>
          <p className="dl-note">The printable version is being prepared and will be available here soon.</p>
        </div>
      )}

      <div className="article-body">
        <p>
          This page is a placeholder for the full {resource.title} resource. The complete version will include
          clear explanations, references, and practical steps you can apply straight away.
        </p>
        <p>
          Content for this section is currently being written and reviewed. In the finished resource you will find
          structured sections, supporting evidence, and printable companions where relevant.
        </p>
        <h2 className="article-h2">What this resource will cover</h2>
        <p>
          A plain-language introduction to the topic, step-by-step guidance, answers to the questions people ask
          most often, and pointers to related guides elsewhere in the directory.
        </p>
      </div>

      <div className="note-box">
        Content is provided for educational purposes only. Please verify religious matters with qualified scholars.
      </div>

      <div className="article-back">
        {hub && <Link href={`/hub/${hub.slug}`} className="text-link">&larr; Back to {hub.title}</Link>}
        <Link href="/directory" className="text-link">&larr; Back to the directory</Link>
      </div>
    </article>
  )
}
