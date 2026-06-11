import { Link, useParams } from 'react-router-dom'
import { getResource, getHub } from '../data/content'
import { DownloadIcon } from '../components/Icons'

export default function ResourcePage() {
  const { slug } = useParams()
  const resource = getResource(slug)

  if (!resource) {
    return (
      <section className="page">
        <div className="page-head">
          <h1 className="page-title">Resource not found</h1>
          <p className="page-lede">That resource does not exist yet. <Link to="/directory" className="text-link">Browse the directory</Link> instead.</p>
        </div>
      </section>
    )
  }

  const hub = resource.hubSlug ? getHub(resource.hubSlug) : null

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
          <button className="btn-gold dl-cta-btn" onClick={() => {}}>
            <DownloadIcon /> Download PDF
          </button>
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
        {hub && <Link to={`/hub/${hub.slug}`} className="text-link">← Back to {hub.title}</Link>}
        <Link to="/directory" className="text-link">← Back to the directory</Link>
      </div>
    </article>
  )
}
