import { useState } from 'react'

export default function Contact() {
  const [sent, setSent] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })

  const update = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }))

  const submit = e => {
    e.preventDefault()
    setSent(true)
  }

  return (
    <section className="page narrow">
      <div className="page-head">
        <p className="section-eyebrow">Contact</p>
        <h1 className="page-title">Get in touch</h1>
        <div className="hero-rule" aria-hidden="true" />
        <p className="page-lede">Questions, corrections, or ideas for new resources — we read everything.</p>
      </div>

      {sent ? (
        <p className="form-success">Thank you, {form.name || 'friend'} — your message has been received. We will reply to {form.email || 'your email'} soon.</p>
      ) : (
        <form className="contact-form" onSubmit={submit}>
          <div className="form-row">
            <label className="form-field">
              <span className="form-label">Name</span>
              <input className="form-input" name="name" required value={form.name} onChange={update} placeholder="Your name" />
            </label>
            <label className="form-field">
              <span className="form-label">Email</span>
              <input className="form-input" name="email" type="email" required value={form.email} onChange={update} placeholder="you@example.com" />
            </label>
          </div>
          <label className="form-field">
            <span className="form-label">Subject</span>
            <input className="form-input" name="subject" required value={form.subject} onChange={update} placeholder="What is this about?" />
          </label>
          <label className="form-field">
            <span className="form-label">Message</span>
            <textarea className="form-input form-textarea" name="message" required rows="6" value={form.message} onChange={update} placeholder="Write your message…" />
          </label>
          <button className="btn-gold" type="submit">Send message</button>
        </form>
      )}
    </section>
  )
}
