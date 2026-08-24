import Link from 'next/link'
import { notFound } from 'next/navigation'
import { RESOURCE_MAP, CONTENT_PAGES, getResource, getHub } from '../../../data/content'
import { DownloadIcon } from '../../../components/Icons'
import DuaQunootPdfButton from '../../../components/DuaQunootPdf'
import ZakatCalculator from '../../../components/ZakatCalculator'
import shahadahContent from '../../../data/shahadah-content'
import { duaQunootContent } from '../../../data/dua-qunoot-content'
import { duaWithSalahContent } from '../../../data/dua-with-salah-content'
import { zakatContent } from '../../../data/zakat-content'
import { zakatAlFitrContent } from '../../../data/zakat-al-fitr-content'
import { halalLifestyleContent } from '../../../data/halal-lifestyle-content'
import { halalMeaningContent } from '../../../data/halal-meaning-content'
import { halalFoodContent } from '../../../data/halal-food-content'
import { halalBankingContent } from '../../../data/halal-banking-content'
import { halalInsuranceContent } from '../../../data/halal-insurance-content'
import { halalInvestingContent } from '../../../data/halal-investing-content'
import { musicInIslamContent } from '../../../data/music-in-islam-content'


export function generateStaticParams() {
  return Object.keys(RESOURCE_MAP).map(slug => ({ slug }))
}

export async function generateMetadata({ params }) {
  const { slug } = await params
  const resource = getResource(slug)
  if (!resource) return { title: 'Resource Not Found' }

  if (slug === 'zakat-al-fitr') {
    return {
      title: { absolute: 'Zakat al-Fitr (Fitrana) — Amount, Rules & When to Pay | Arkans of Islam' },
      description: 'Learn about zakat al-fitr (fitrana) — what it is, how much to pay per person, when to pay before Eid al-Fitr, and who is obligated. Includes the difference between zakat and fitrana.',
      keywords: 'zakat al fitr, fitrana, fitra, zakat ul fitr, fitrana in islam, zakat al fitr amount, fitra amount, eid al fitr zakat, fitra ramadan, fitra and zakat, sadaqatul fitr',
    }
  }

  if (slug === 'zakat') {
    return {
      title: { absolute: 'Calculating Zakat — Free Zakat Calculator | Arkans of Islam' },
      description: 'Use our free zakat calculator to find how much zakat you owe on gold, silver, savings, stocks, and other assets. Includes zakat on gold per tola, nisab threshold, and common questions answered.',
      keywords: 'calculating zakat, zakat calculator, zakat on gold, zakat on gold per tola, nisab for zakat, zakat on savings, zakat on stocks, zakat on property, zakat percentage, how to calculate zakat',
    }
  }

  if (slug === 'halal-lifestyle') {
    return {
      title: { absolute: 'Halal Lifestyle — Food, Finance & Living Guide | Arkans of Islam' },
      description: 'Practical guidance on living a halal life — covering food, finance, insurance, investing, and everyday decisions rooted in the Quran and Sunnah.',
      keywords: 'halal lifestyle, halal living, halal guide, halal in islam, halal and haram',
      robots: { index: false, follow: true },
    }
  }

  if (slug === 'halal-meaning-in-islam') {
    return {
      title: { absolute: 'Halal Meaning in Islam — Definition, Quran & Hadith | Arkans of Islam' },
      description: 'What does halal mean in Islam? Learn the definition of halal and haram, the five categories of actions, Quranic verses, hadith references, and how halal applies to food, finance, and daily life.',
      keywords: 'halal meaning in islam, halal in islam, halal and haram, halal haram, halal definition, what is halal, halal meaning, halal and haram in islam, concept of halal and haram, halal for muslim',
    }
  }

  if (slug === 'halal-food-in-islam') {
    return {
      title: { absolute: 'Halal Food in Islam — What Muslims Can & Cannot Eat | Arkans of Islam' },
      description: 'Complete guide to halal food in Islam — what Muslims can and cannot eat, halal slaughter (zabiha), prohibited foods, seafood rules, gelatin, kosher vs halal, and dietary restrictions.',
      keywords: 'halal food in islam, muslim food, muslim dietary restrictions, halal meat, muslim food restrictions, halal food list, foods prohibited in islam, zabiha, halal slaughter, kosher halal, muslim food rules, halal meat in islam',
    }
  }

  if (slug === 'halal-banking') {
    return {
      title: { absolute: 'Halal Banking — Islamic Finance, Mortgages & Credit Cards | Arkans of Islam' },
      description: 'Understanding halal banking — why interest (riba) is haram, how Islamic banking works, halal mortgages (diminishing musharakah, murabaha), halal credit cards, and savings accounts.',
      keywords: 'halal banking, halal credit card, halal mortgage, riba in islam, islamic banking, halal way to buy a house, halal interest, compound interest halal, halal fixed deposit',
    }
  }

  if (slug === 'halal-insurance') {
    return {
      title: { absolute: 'Is Insurance Halal in Islam? Takaful & Islamic Insurance Guide | Arkans of Islam' },
      description: 'Is insurance halal or haram in Islam? Learn why conventional insurance is debated, what takaful (Islamic insurance) is, and practical guidance for life, car, home, and health insurance.',
      keywords: 'halal insurance, life insurance halal, life insurance haram, takaful, islamic insurance, halal car insurance, home insurance halal, is insurance halal in islam',
    }
  }

  if (slug === 'halal-investing') {
    return {
      title: { absolute: 'Halal Investing — Stocks, Forex, Gold & Islamic Finance Guide | Arkans of Islam' },
      description: 'Guide to halal investing — Shariah stock screening criteria, halal mutual funds, is forex trading halal, gold trading in Islam, margin trading, and income purification.',
      keywords: 'halal investing, stock market islam, forex trading in islam, halal stocks, mutual funds halal, gold trading in islam, halal investment, margin trading halal, islamically halal stock',
    }
  }

  if (slug === 'music-in-islam') {
    return {
      title: { absolute: 'Is Music Halal or Haram in Islam? Scholarly Views & Evidence | Arkans of Islam' },
      description: 'Is music halal or haram in Islam? An honest look at the scholarly debate — hadith evidence, the prohibition view, the permissibility view, areas of agreement, nasheeds, and practical guidance.',
      keywords: 'music is haram, music halal in islam, is music haram, halal music, nasheeds, duff in islam, musical instruments islam, is listening to music a sin in islam',
    }
  }

  if (slug === 'dua-with-salah') {
    return {
      title: resource.title,
      description: resource.desc,
      robots: { index: false, follow: true },
    }
  }

  if (slug === 'dua-qunoot') {
    return {
      title: 'Dua e Qunoot — Arabic Text, Translation & PDF Download',
      description: 'Full Dua e Qunoot in Arabic with English translation, Urdu tarjuma, Roman transliteration, word-by-word meaning, and free PDF download. Learn how to recite it in Witr prayer.',
      keywords: 'dua e qunoot, dua qunoot, dua e qunoot in english, dua e qunoot pdf, dua e qunoot urdu translation, witr ki dua, dua qunoot arabic',
    }
  }

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

  if (slug === 'zakat-al-fitr') {
    const faqSchema = {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: zakatAlFitrContent.faq.map(item => ({
        '@type': 'Question',
        name: item.q,
        acceptedAnswer: { '@type': 'Answer', text: item.a }
      }))
    }

    return (
      <article className="page narrow">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
        <div className="page-head">
          <p className="section-eyebrow">Core Pillars</p>
          <h1 className="page-title">Zakat al-Fitr (Fitrana) — A Complete Guide</h1>
          <div className="hero-rule" aria-hidden="true" />
          <p className="page-lede">Everything you need to know about Zakat al-Fitr — what it is, how much to pay, when to pay it, and who is obligated before the Eid al-Fitr prayer.</p>
        </div>

        <div className="article-body">
          <section className="content-section">
            <h2 className="article-h2">{zakatAlFitrContent.intro.title}</h2>
            {zakatAlFitrContent.intro.paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </section>

          <section className="content-section">
            <h2 className="article-h2">{zakatAlFitrContent.howMuch.title}</h2>
            {zakatAlFitrContent.howMuch.paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </section>

          <section className="content-section">
            <h2 className="article-h2">{zakatAlFitrContent.whenToPay.title}</h2>
            {zakatAlFitrContent.whenToPay.paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </section>

          <section className="content-section">
            <h2 className="article-h2">{zakatAlFitrContent.whoMustPay.title}</h2>
            {zakatAlFitrContent.whoMustPay.paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </section>

          <section className="content-section">
            <h2 className="article-h2">{zakatAlFitrContent.whoReceives.title}</h2>
            {zakatAlFitrContent.whoReceives.paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </section>

          <section className="content-section">
            <h2 className="article-h2">{zakatAlFitrContent.difference.title}</h2>
            <div className="zakat-gold-table-wrap">
              <table className="zakat-gold-table">
                <thead>
                  <tr>
                    <th></th>
                    <th>Zakat</th>
                    <th>Zakat al-Fitr</th>
                  </tr>
                </thead>
                <tbody>
                  {zakatAlFitrContent.difference.rows.map((row, i) => (
                    <tr key={i}>
                      <td><strong>{row.aspect}</strong></td>
                      <td>{row.zakat}</td>
                      <td>{row.fitr}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <section className="content-section">
            <h2 className="article-h2">Frequently Asked Questions</h2>
            <div className="faq-section">
              {zakatAlFitrContent.faq.map((item, i) => (
                <div key={i} className="faq-item">
                  <h3 className="faq-question">{item.q}</h3>
                  <p className="faq-answer">{item.a}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="content-section">
            <h2 className="article-h2">Related: Zakat on Wealth</h2>
            <p>Zakat al-Fitr and Zakat on wealth are separate obligations with different rules. If you also need to calculate your annual zakat on gold, savings, and investments, use our free calculator.</p>
            <p><Link href="/resource/zakat" className="text-link">Zakat Calculator — Calculate Your Zakat on Gold, Savings & Assets &rarr;</Link></p>
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

  if (slug === 'zakat') {
    const faqSchema = {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: zakatContent.faq.map(item => ({
        '@type': 'Question',
        name: item.q,
        acceptedAnswer: { '@type': 'Answer', text: item.a }
      }))
    }

    return (
      <article className="page narrow">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
        <div className="page-head">
          <p className="section-eyebrow">Core Pillars</p>
          <h1 className="page-title">Calculating Zakat — Free Online Calculator</h1>
          <div className="hero-rule" aria-hidden="true" />
          <p className="page-lede">Calculate zakat on gold, silver, cash, savings, investments, and other assets. Enter your values below to find out how much zakat you owe.</p>
        </div>

        <ZakatCalculator />

        <div className="article-body">
          <section className="content-section">
            <h2 className="article-h2">{zakatContent.whatIsZakat.title}</h2>
            {zakatContent.whatIsZakat.paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </section>

          <section className="content-section">
            <h2 className="article-h2">{zakatContent.zakatOnGold.title}</h2>
            {zakatContent.zakatOnGold.paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
            <p><strong>{zakatContent.zakatOnGold.howTo}</strong></p>
            <p>{zakatContent.zakatOnGold.example}</p>

            <div className="zakat-gold-table-wrap">
              <table className="zakat-gold-table">
                <thead>
                  <tr>
                    <th>Gold (Tola)</th>
                    <th>Gold (Grams)</th>
                    <th>Zakat Rate</th>
                  </tr>
                </thead>
                <tbody>
                  {zakatContent.zakatOnGold.table.map((row, i) => (
                    <tr key={i} className={row.note ? 'nisab-row' : ''}>
                      <td>{row.tola} tola{row.note ? ` — ${row.note}` : ''}</td>
                      <td>{row.grams}g</td>
                      <td>2.5% of market value</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p>{zakatContent.zakatOnGold.silverNote}</p>
          </section>

          <section className="content-section">
            <h2 className="article-h2">Frequently Asked Questions</h2>
            <div className="faq-section">
              {zakatContent.faq.map((item, i) => (
                <div key={i} className="faq-item">
                  <h3 className="faq-question">{item.q}</h3>
                  <p className="faq-answer">{item.a}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="content-section">
            <h2 className="article-h2">Related: Zakat al-Fitr (Fitrana)</h2>
            <p>Besides annual zakat on wealth, Muslims are also required to pay Zakat al-Fitr (Fitrana) before the Eid al-Fitr prayer at the end of Ramadan. It is a separate obligation with different rules.</p>
            <p><Link href="/resource/zakat-al-fitr" className="text-link">Zakat al-Fitr Guide — Amount, Rules & When to Pay &rarr;</Link></p>
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

  if (slug === 'halal-lifestyle') {
    return (
      <article className="page">
        <div className="page-head">
          <p className="section-eyebrow">{resource.category}</p>
          <h1 className="page-title">{halalLifestyleContent.title}</h1>
          <div className="hero-rule" aria-hidden="true" />
          <p className="page-lede">{halalLifestyleContent.description}</p>
        </div>

        <div className="article-body" style={{ maxWidth: '100%' }}>
          <p style={{ fontSize: '15px', color: 'var(--text-soft)', marginBottom: '32px', textAlign: 'center' }}>
            {halalLifestyleContent.intro}
          </p>
          <div className="res-grid">
            {halalLifestyleContent.items.map(item => (
              <Link key={item.slug} href={`/resource/${item.slug}`} className="res-card">
                <span className="res-icon">📖</span>
                <span className="res-category">{item.category}</span>
                <h3 className="res-title">{item.title}</h3>
                <p className="res-desc">{item.desc}</p>
                <span className="res-more">Read more <span aria-hidden="true">&rarr;</span></span>
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

  if (slug === 'halal-meaning-in-islam') {
    const faqSchema = {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: halalMeaningContent.faq.map(item => ({
        '@type': 'Question',
        name: item.q,
        acceptedAnswer: { '@type': 'Answer', text: item.a }
      }))
    }

    return (
      <article className="page narrow">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
        <div className="page-head">
          <p className="section-eyebrow">Guides</p>
          <h1 className="page-title">Halal Meaning in Islam — What Is Halal and Haram?</h1>
          <div className="hero-rule" aria-hidden="true" />
          <p className="page-lede">A clear explanation of what halal and haram mean, the Quranic and hadith basis, and how these concepts apply to food, finance, and everyday life.</p>
        </div>

        <div className="article-body">
          <section className="content-section">
            <h2 className="article-h2">{halalMeaningContent.intro.title}</h2>
            {halalMeaningContent.intro.paragraphs.map((p, i) => <p key={i}>{p}</p>)}
          </section>

          <section className="content-section">
            <h2 className="article-h2">{halalMeaningContent.categories.title}</h2>
            <p>{halalMeaningContent.categories.intro}</p>
            {halalMeaningContent.categories.items.map((item, i) => (
              <div key={i} className="faq-item">
                <h3 className="faq-question">{item.name}</h3>
                <p className="faq-answer">{item.desc}</p>
              </div>
            ))}
            <p><em>{halalMeaningContent.categories.note}</em></p>
          </section>

          <section className="content-section">
            <h2 className="article-h2">{halalMeaningContent.quranBasis.title}</h2>
            {halalMeaningContent.quranBasis.paragraphs.map((p, i) => <p key={i}>{p}</p>)}
          </section>

          <section className="content-section">
            <h2 className="article-h2">{halalMeaningContent.hadithBasis.title}</h2>
            {halalMeaningContent.hadithBasis.paragraphs.map((p, i) => <p key={i}>{p}</p>)}
            <blockquote className="hadith-block">{halalMeaningContent.hadithBasis.hadith}</blockquote>
            {halalMeaningContent.hadithBasis.afterHadith.map((p, i) => <p key={i}>{p}</p>)}
          </section>

          <section className="content-section">
            <h2 className="article-h2">{halalMeaningContent.principles.title}</h2>
            {halalMeaningContent.principles.items.map((item, i) => (
              <div key={i} className="faq-item">
                <h3 className="faq-question">{item.name}</h3>
                <p className="faq-answer">{item.desc}</p>
              </div>
            ))}
          </section>

          <section className="content-section">
            <h2 className="article-h2">{halalMeaningContent.areasOverview.title}</h2>
            <p>{halalMeaningContent.areasOverview.intro}</p>
            {halalMeaningContent.areasOverview.areas.map((area, i) => (
              <div key={i} className="faq-item">
                <h3 className="faq-question"><Link href={`/resource/${area.slug}`} className="text-link">{area.title}</Link></h3>
                <p className="faq-answer">{area.desc}</p>
              </div>
            ))}
          </section>

          <section className="content-section">
            <h2 className="article-h2">Frequently Asked Questions</h2>
            <div className="faq-section">
              {halalMeaningContent.faq.map((item, i) => (
                <div key={i} className="faq-item">
                  <h3 className="faq-question">{item.q}</h3>
                  <p className="faq-answer">{item.a}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="content-section">
            <h2 className="article-h2">Explore All Halal Guides</h2>
            <p><Link href="/resource/halal-lifestyle" className="text-link">Halal Lifestyle Hub — Food, Finance, Insurance, Investing & More &rarr;</Link></p>
          </section>
        </div>

        <div className="note-box">
          Content is provided for educational purposes only. Please verify religious matters with qualified scholars.
        </div>

        <div className="article-back">
          {hub && <Link href={`/hub/${hub.slug}`} className="text-link">&larr; Back to {hub.title}</Link>}
          <Link href="/resource/halal-lifestyle" className="text-link">&larr; Back to Halal Lifestyle</Link>
          <Link href="/directory" className="text-link">&larr; Back to the directory</Link>
        </div>
      </article>
    )
  }

  if (slug === 'halal-food-in-islam') {
    const faqSchema = {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: halalFoodContent.faq.map(item => ({
        '@type': 'Question',
        name: item.q,
        acceptedAnswer: { '@type': 'Answer', text: item.a }
      }))
    }

    return (
      <article className="page narrow">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
        <div className="page-head">
          <p className="section-eyebrow">Guides</p>
          <h1 className="page-title">Halal Food in Islam — What Muslims Can and Cannot Eat</h1>
          <div className="hero-rule" aria-hidden="true" />
          <p className="page-lede">A complete guide to Islamic dietary rules — prohibited foods, halal slaughter, seafood, gelatin, and the difference between kosher and halal.</p>
        </div>

        <div className="article-body">
          <section className="content-section">
            <h2 className="article-h2">{halalFoodContent.intro.title}</h2>
            {halalFoodContent.intro.paragraphs.map((p, i) => <p key={i}>{p}</p>)}
          </section>

          <section className="content-section">
            <h2 className="article-h2">{halalFoodContent.prohibitedFoods.title}</h2>
            <p>{halalFoodContent.prohibitedFoods.intro}</p>
            <blockquote className="hadith-block">{halalFoodContent.prohibitedFoods.quranText}</blockquote>
            {halalFoodContent.prohibitedFoods.categories.map((cat, i) => (
              <div key={i} className="faq-item">
                <h3 className="faq-question">{cat.name}</h3>
                <p className="faq-answer">{cat.desc}</p>
              </div>
            ))}
          </section>

          <section className="content-section">
            <h2 className="article-h2">{halalFoodContent.halalSlaughter.title}</h2>
            {halalFoodContent.halalSlaughter.paragraphs.map((p, i) => <p key={i}>{p}</p>)}
            <ol>
              {halalFoodContent.halalSlaughter.requirements.map((req, i) => (
                <li key={i}>{req}</li>
              ))}
            </ol>
            <p>{halalFoodContent.halalSlaughter.afterRequirements}</p>
          </section>

          <section className="content-section">
            <h2 className="article-h2">{halalFoodContent.permittedAnimals.title}</h2>
            {halalFoodContent.permittedAnimals.sections.map((sec, i) => (
              <div key={i}>
                <h3 className="article-h3">{sec.heading}</h3>
                <p>{sec.content}</p>
              </div>
            ))}
          </section>

          <section className="content-section">
            <h2 className="article-h2">{halalFoodContent.seafood.title}</h2>
            {halalFoodContent.seafood.paragraphs.map((p, i) => <p key={i}>{p}</p>)}
            {halalFoodContent.seafood.schools.map((school, i) => (
              <div key={i} className="faq-item">
                <h3 className="faq-question">{school.name}</h3>
                <p className="faq-answer">{school.ruling}</p>
              </div>
            ))}
            <p><em>{halalFoodContent.seafood.note}</em></p>
          </section>

          <section className="content-section">
            <h2 className="article-h2">{halalFoodContent.gelatinAlcohol.title}</h2>
            {halalFoodContent.gelatinAlcohol.sections.map((sec, i) => (
              <div key={i}>
                <h3 className="article-h3">{sec.heading}</h3>
                <p>{sec.content}</p>
              </div>
            ))}
          </section>

          <section className="content-section">
            <h2 className="article-h2">{halalFoodContent.kosherVsHalal.title}</h2>
            {halalFoodContent.kosherVsHalal.paragraphs.map((p, i) => <p key={i}>{p}</p>)}
            <div className="zakat-gold-table-wrap">
              <table className="zakat-gold-table">
                <thead>
                  <tr><th></th><th>Kosher</th><th>Halal</th></tr>
                </thead>
                <tbody>
                  {halalFoodContent.kosherVsHalal.differences.map((row, i) => (
                    <tr key={i}>
                      <td><strong>{row.aspect}</strong></td>
                      <td>{row.kosher}</td>
                      <td>{row.halal}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p>{halalFoodContent.kosherVsHalal.conclusion}</p>
          </section>

          <section className="content-section">
            <h2 className="article-h2">Frequently Asked Questions</h2>
            <div className="faq-section">
              {halalFoodContent.faq.map((item, i) => (
                <div key={i} className="faq-item">
                  <h3 className="faq-question">{item.q}</h3>
                  <p className="faq-answer">{item.a}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="content-section">
            <h2 className="article-h2">Related Guides</h2>
            <p>Understanding halal food is part of a broader framework. Learn the full meaning of halal and how it applies to other areas of life.</p>
            <p><Link href="/resource/halal-meaning-in-islam" className="text-link">Halal Meaning in Islam — Definition, Quran & Hadith &rarr;</Link></p>
            <p><Link href="/resource/halal-lifestyle" className="text-link">Halal Lifestyle Hub — All Guides &rarr;</Link></p>
          </section>
        </div>

        <div className="note-box">
          Content is provided for educational purposes only. Please verify religious matters with qualified scholars.
        </div>

        <div className="article-back">
          {hub && <Link href={`/hub/${hub.slug}`} className="text-link">&larr; Back to {hub.title}</Link>}
          <Link href="/resource/halal-lifestyle" className="text-link">&larr; Back to Halal Lifestyle</Link>
          <Link href="/directory" className="text-link">&larr; Back to the directory</Link>
        </div>
      </article>
    )
  }

  if (slug === 'halal-banking') {
    const faqSchema = {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: halalBankingContent.faq.map(item => ({
        '@type': 'Question',
        name: item.q,
        acceptedAnswer: { '@type': 'Answer', text: item.a }
      }))
    }

    return (
      <article className="page narrow">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
        <div className="page-head">
          <p className="section-eyebrow">Guides</p>
          <h1 className="page-title">Halal Banking — Islamic Finance Without Interest</h1>
          <div className="hero-rule" aria-hidden="true" />
          <p className="page-lede">Why interest (riba) is prohibited in Islam, how Islamic banking works, and practical options for mortgages, credit cards, and savings.</p>
        </div>

        <div className="article-body">
          <section className="content-section">
            <h2 className="article-h2">{halalBankingContent.intro.title}</h2>
            {halalBankingContent.intro.paragraphs.map((p, i) => <p key={i}>{p}</p>)}
          </section>

          <section className="content-section">
            <h2 className="article-h2">{halalBankingContent.ribaProhibition.title}</h2>
            {halalBankingContent.ribaProhibition.paragraphs.map((p, i) => <p key={i}>{p}</p>)}
            {halalBankingContent.ribaProhibition.verses.map((v, i) => (
              <blockquote key={i} className="hadith-block">
                <strong>{v.ref}:</strong> {v.text}
              </blockquote>
            ))}
            <blockquote className="hadith-block">{halalBankingContent.ribaProhibition.hadith}</blockquote>
            <p>{halalBankingContent.ribaProhibition.afterHadith}</p>
          </section>

          <section className="content-section">
            <h2 className="article-h2">{halalBankingContent.islamicBankingModels.title}</h2>
            <p>{halalBankingContent.islamicBankingModels.intro}</p>
            {halalBankingContent.islamicBankingModels.models.map((model, i) => (
              <div key={i} className="faq-item">
                <h3 className="faq-question">{model.name}</h3>
                <p className="faq-answer">{model.desc}</p>
              </div>
            ))}
          </section>

          <section className="content-section">
            <h2 className="article-h2">{halalBankingContent.halalMortgages.title}</h2>
            {halalBankingContent.halalMortgages.paragraphs.map((p, i) => <p key={i}>{p}</p>)}
            {halalBankingContent.halalMortgages.options.map((opt, i) => (
              <div key={i} className="faq-item">
                <h3 className="faq-question">{opt.name}</h3>
                <p className="faq-answer">{opt.desc}</p>
              </div>
            ))}
            <p><em>{halalBankingContent.halalMortgages.note}</em></p>
          </section>

          <section className="content-section">
            <h2 className="article-h2">{halalBankingContent.halalCreditCards.title}</h2>
            {halalBankingContent.halalCreditCards.paragraphs.map((p, i) => <p key={i}>{p}</p>)}
            {halalBankingContent.halalCreditCards.types.map((type, i) => (
              <div key={i} className="faq-item">
                <h3 className="faq-question">{type.name}</h3>
                <p className="faq-answer">{type.desc}</p>
              </div>
            ))}
          </section>

          <section className="content-section">
            <h2 className="article-h2">{halalBankingContent.savingsAccounts.title}</h2>
            {halalBankingContent.savingsAccounts.paragraphs.map((p, i) => <p key={i}>{p}</p>)}
            {halalBankingContent.savingsAccounts.types.map((type, i) => (
              <div key={i} className="faq-item">
                <h3 className="faq-question">{type.name}</h3>
                <p className="faq-answer">{type.desc}</p>
              </div>
            ))}
            <p><em>{halalBankingContent.savingsAccounts.note}</em></p>
          </section>

          <section className="content-section">
            <h2 className="article-h2">Frequently Asked Questions</h2>
            <div className="faq-section">
              {halalBankingContent.faq.map((item, i) => (
                <div key={i} className="faq-item">
                  <h3 className="faq-question">{item.q}</h3>
                  <p className="faq-answer">{item.a}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="content-section">
            <h2 className="article-h2">Related Guides</h2>
            <p><Link href="/resource/halal-insurance" className="text-link">Is Insurance Halal in Islam? Takaful & Islamic Insurance Guide &rarr;</Link></p>
            <p><Link href="/resource/halal-investing" className="text-link">Halal Investing — Stocks, Forex, Gold & Islamic Finance &rarr;</Link></p>
            <p><Link href="/resource/halal-meaning-in-islam" className="text-link">Halal Meaning in Islam — Definition, Quran & Hadith &rarr;</Link></p>
            <p><Link href="/resource/halal-lifestyle" className="text-link">Halal Lifestyle Hub — All Guides &rarr;</Link></p>
          </section>
        </div>

        <div className="note-box">
          Content is provided for educational purposes only. Please verify religious matters with qualified scholars.
        </div>

        <div className="article-back">
          {hub && <Link href={`/hub/${hub.slug}`} className="text-link">&larr; Back to {hub.title}</Link>}
          <Link href="/resource/halal-lifestyle" className="text-link">&larr; Back to Halal Lifestyle</Link>
          <Link href="/directory" className="text-link">&larr; Back to the directory</Link>
        </div>
      </article>
    )
  }

  if (slug === 'halal-insurance') {
    const faqSchema = {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: halalInsuranceContent.faq.map(item => ({
        '@type': 'Question',
        name: item.q,
        acceptedAnswer: { '@type': 'Answer', text: item.a }
      }))
    }

    return (
      <article className="page narrow">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
        <div className="page-head">
          <p className="section-eyebrow">Guides</p>
          <h1 className="page-title">Is Insurance Halal in Islam? A Guide to Takaful</h1>
          <div className="hero-rule" aria-hidden="true" />
          <p className="page-lede">Why conventional insurance is debated among scholars, how takaful (Islamic insurance) works, and practical guidance for life, car, home, and health coverage.</p>
        </div>

        <div className="article-body">
          <section className="content-section">
            <h2 className="article-h2">{halalInsuranceContent.intro.title}</h2>
            {halalInsuranceContent.intro.paragraphs.map((p, i) => <p key={i}>{p}</p>)}
          </section>

          <section className="content-section">
            <h2 className="article-h2">{halalInsuranceContent.whyDebated.title}</h2>
            <p>{halalInsuranceContent.whyDebated.intro}</p>
            {halalInsuranceContent.whyDebated.issues.map((issue, i) => (
              <div key={i} className="faq-item">
                <h3 className="faq-question">{issue.name}</h3>
                <p className="faq-answer">{issue.desc}</p>
              </div>
            ))}
            <p><em>{halalInsuranceContent.whyDebated.note}</em></p>
          </section>

          <section className="content-section">
            <h2 className="article-h2">{halalInsuranceContent.takaful.title}</h2>
            {halalInsuranceContent.takaful.paragraphs.map((p, i) => <p key={i}>{p}</p>)}
            <ol>
              {halalInsuranceContent.takaful.howItWorks.map((step, i) => (
                <li key={i}>{step}</li>
              ))}
            </ol>
            <p><strong>{halalInsuranceContent.takaful.keyDifference}</strong></p>
          </section>

          <section className="content-section">
            <h2 className="article-h2">{halalInsuranceContent.types.title}</h2>
            {halalInsuranceContent.types.items.map((item, i) => (
              <div key={i} className="faq-item">
                <h3 className="faq-question">{item.name}</h3>
                <p className="faq-answer">{item.desc}</p>
              </div>
            ))}
          </section>

          <section className="content-section">
            <h2 className="article-h2">{halalInsuranceContent.practicalGuidance.title}</h2>
            {halalInsuranceContent.practicalGuidance.paragraphs.map((p, i) => <p key={i}>{p}</p>)}
            {halalInsuranceContent.practicalGuidance.points.map((pt, i) => (
              <div key={i} className="faq-item">
                <h3 className="faq-question">{pt.scenario}</h3>
                <p className="faq-answer">{pt.guidance}</p>
              </div>
            ))}
            <p><em>{halalInsuranceContent.practicalGuidance.note}</em></p>
          </section>

          <section className="content-section">
            <h2 className="article-h2">Frequently Asked Questions</h2>
            <div className="faq-section">
              {halalInsuranceContent.faq.map((item, i) => (
                <div key={i} className="faq-item">
                  <h3 className="faq-question">{item.q}</h3>
                  <p className="faq-answer">{item.a}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="content-section">
            <h2 className="article-h2">Related Guides</h2>
            <p><Link href="/resource/halal-banking" className="text-link">Halal Banking — Islamic Finance Without Interest &rarr;</Link></p>
            <p><Link href="/resource/halal-investing" className="text-link">Halal Investing — Stocks, Forex & Gold &rarr;</Link></p>
            <p><Link href="/resource/halal-meaning-in-islam" className="text-link">Halal Meaning in Islam — Definition, Quran & Hadith &rarr;</Link></p>
            <p><Link href="/resource/halal-lifestyle" className="text-link">Halal Lifestyle Hub — All Guides &rarr;</Link></p>
          </section>
        </div>

        <div className="note-box">
          Content is provided for educational purposes only. Please verify religious matters with qualified scholars.
        </div>

        <div className="article-back">
          {hub && <Link href={`/hub/${hub.slug}`} className="text-link">&larr; Back to {hub.title}</Link>}
          <Link href="/resource/halal-lifestyle" className="text-link">&larr; Back to Halal Lifestyle</Link>
          <Link href="/directory" className="text-link">&larr; Back to the directory</Link>
        </div>
      </article>
    )
  }

  if (slug === 'halal-investing') {
    const faqSchema = {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: halalInvestingContent.faq.map(item => ({
        '@type': 'Question',
        name: item.q,
        acceptedAnswer: { '@type': 'Answer', text: item.a }
      }))
    }

    return (
      <article className="page narrow">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
        <div className="page-head">
          <p className="section-eyebrow">Guides</p>
          <h1 className="page-title">Halal Investing — Stocks, Forex, Gold & Islamic Finance</h1>
          <div className="hero-rule" aria-hidden="true" />
          <p className="page-lede">How to invest in a Shariah-compliant way — stock screening criteria, halal mutual funds, forex trading, gold trading, and what makes an investment permissible or prohibited.</p>
        </div>

        <div className="article-body">
          <section className="content-section">
            <h2 className="article-h2">{halalInvestingContent.intro.title}</h2>
            {halalInvestingContent.intro.paragraphs.map((p, i) => <p key={i}>{p}</p>)}
          </section>

          <section className="content-section">
            <h2 className="article-h2">{halalInvestingContent.screeningCriteria.title}</h2>
            {halalInvestingContent.screeningCriteria.paragraphs.map((p, i) => <p key={i}>{p}</p>)}

            <h3 className="article-h3">{halalInvestingContent.screeningCriteria.businessScreening.title}</h3>
            <p>{halalInvestingContent.screeningCriteria.businessScreening.intro}</p>
            <ul>
              {halalInvestingContent.screeningCriteria.businessScreening.excluded.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
            <p><em>{halalInvestingContent.screeningCriteria.businessScreening.note}</em></p>

            <h3 className="article-h3">{halalInvestingContent.screeningCriteria.financialScreening.title}</h3>
            <p>{halalInvestingContent.screeningCriteria.financialScreening.intro}</p>
            <div className="zakat-gold-table-wrap">
              <table className="zakat-gold-table">
                <thead>
                  <tr><th>Ratio</th><th>Threshold</th></tr>
                </thead>
                <tbody>
                  {halalInvestingContent.screeningCriteria.financialScreening.ratios.map((r, i) => (
                    <tr key={i}><td><strong>{r.name}</strong></td><td>{r.threshold}</td></tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p><em>{halalInvestingContent.screeningCriteria.financialScreening.note}</em></p>
          </section>

          <section className="content-section">
            <h2 className="article-h2">{halalInvestingContent.mutualFunds.title}</h2>
            {halalInvestingContent.mutualFunds.paragraphs.map((p, i) => <p key={i}>{p}</p>)}
            <ol>
              {halalInvestingContent.mutualFunds.howTheyWork.map((step, i) => (
                <li key={i}>{step}</li>
              ))}
            </ol>
            <p><em>{halalInvestingContent.mutualFunds.note}</em></p>
          </section>

          <section className="content-section">
            <h2 className="article-h2">{halalInvestingContent.forexTrading.title}</h2>
            {halalInvestingContent.forexTrading.paragraphs.map((p, i) => <p key={i}>{p}</p>)}
            {halalInvestingContent.forexTrading.issues.map((issue, i) => (
              <div key={i} className="faq-item">
                <h3 className="faq-question">{issue.name}</h3>
                <p className="faq-answer">{issue.desc}</p>
              </div>
            ))}
            <p><strong>{halalInvestingContent.forexTrading.conclusion}</strong></p>
          </section>

          <section className="content-section">
            <h2 className="article-h2">{halalInvestingContent.goldTrading.title}</h2>
            {halalInvestingContent.goldTrading.paragraphs.map((p, i) => <p key={i}>{p}</p>)}
            <blockquote className="hadith-block">{halalInvestingContent.goldTrading.hadith}</blockquote>
            {halalInvestingContent.goldTrading.rules.map((r, i) => (
              <div key={i} className="faq-item">
                <h3 className="faq-question">{r.rule}</h3>
                <p className="faq-answer">{r.desc}</p>
              </div>
            ))}
          </section>

          <section className="content-section">
            <h2 className="article-h2">{halalInvestingContent.marginAndFutures.title}</h2>
            {halalInvestingContent.marginAndFutures.paragraphs.map((p, i) => <p key={i}>{p}</p>)}
            {halalInvestingContent.marginAndFutures.items.map((item, i) => (
              <div key={i} className="faq-item">
                <h3 className="faq-question">{item.name}</h3>
                <p className="faq-answer">{item.desc}</p>
              </div>
            ))}
          </section>

          <section className="content-section">
            <h2 className="article-h2">{halalInvestingContent.purification.title}</h2>
            {halalInvestingContent.purification.paragraphs.map((p, i) => <p key={i}>{p}</p>)}
          </section>

          <section className="content-section">
            <h2 className="article-h2">Frequently Asked Questions</h2>
            <div className="faq-section">
              {halalInvestingContent.faq.map((item, i) => (
                <div key={i} className="faq-item">
                  <h3 className="faq-question">{item.q}</h3>
                  <p className="faq-answer">{item.a}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="content-section">
            <h2 className="article-h2">Related Guides</h2>
            <p><Link href="/resource/halal-banking" className="text-link">Halal Banking — Islamic Finance Without Interest &rarr;</Link></p>
            <p><Link href="/resource/halal-insurance" className="text-link">Is Insurance Halal in Islam? &rarr;</Link></p>
            <p><Link href="/resource/halal-meaning-in-islam" className="text-link">Halal Meaning in Islam — Definition, Quran & Hadith &rarr;</Link></p>
            <p><Link href="/resource/halal-lifestyle" className="text-link">Halal Lifestyle Hub — All Guides &rarr;</Link></p>
          </section>
        </div>

        <div className="note-box">
          Content is provided for educational purposes only. Please verify religious matters with qualified scholars.
        </div>

        <div className="article-back">
          {hub && <Link href={`/hub/${hub.slug}`} className="text-link">&larr; Back to {hub.title}</Link>}
          <Link href="/resource/halal-lifestyle" className="text-link">&larr; Back to Halal Lifestyle</Link>
          <Link href="/directory" className="text-link">&larr; Back to the directory</Link>
        </div>
      </article>
    )
  }

  if (slug === 'music-in-islam') {
    const faqSchema = {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: musicInIslamContent.faq.map(item => ({
        '@type': 'Question',
        name: item.q,
        acceptedAnswer: { '@type': 'Answer', text: item.a }
      }))
    }

    return (
      <article className="page narrow">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
        <div className="page-head">
          <p className="section-eyebrow">Guides</p>
          <h1 className="page-title">Is Music Halal or Haram in Islam?</h1>
          <div className="hero-rule" aria-hidden="true" />
          <p className="page-lede">An honest look at the scholarly debate on music — the evidence from hadith, the different views, the areas where scholars agree, and practical guidance for Muslims.</p>
        </div>

        <div className="article-body">
          <section className="content-section">
            <h2 className="article-h2">{musicInIslamContent.intro.title}</h2>
            {musicInIslamContent.intro.paragraphs.map((p, i) => <p key={i}>{p}</p>)}
          </section>

          <section className="content-section">
            <h2 className="article-h2">{musicInIslamContent.prohibitionView.title}</h2>
            {musicInIslamContent.prohibitionView.paragraphs.map((p, i) => <p key={i}>{p}</p>)}
            {musicInIslamContent.prohibitionView.evidence.map((ev, i) => (
              <div key={i}>
                <h3 className="article-h3">{ev.type}</h3>
                <p>{ev.text}</p>
              </div>
            ))}
            <p><em>{musicInIslamContent.prohibitionView.scholars}</em></p>
          </section>

          <section className="content-section">
            <h2 className="article-h2">{musicInIslamContent.permissibilityView.title}</h2>
            {musicInIslamContent.permissibilityView.paragraphs.map((p, i) => <p key={i}>{p}</p>)}
            {musicInIslamContent.permissibilityView.evidence.map((ev, i) => (
              <div key={i}>
                <h3 className="article-h3">{ev.type}</h3>
                <p>{ev.text}</p>
              </div>
            ))}
          </section>

          <section className="content-section">
            <h2 className="article-h2">{musicInIslamContent.areasOfAgreement.title}</h2>
            <p>{musicInIslamContent.areasOfAgreement.intro}</p>
            {musicInIslamContent.areasOfAgreement.points.map((pt, i) => (
              <div key={i} className="faq-item">
                <h3 className="faq-question">{pt.point}</h3>
                <p className="faq-answer">{pt.desc}</p>
              </div>
            ))}
          </section>

          <section className="content-section">
            <h2 className="article-h2">{musicInIslamContent.practicalGuidance.title}</h2>
            {musicInIslamContent.practicalGuidance.paragraphs.map((p, i) => <p key={i}>{p}</p>)}
            <ol>
              {musicInIslamContent.practicalGuidance.steps.map((step, i) => (
                <li key={i}>{step}</li>
              ))}
            </ol>
          </section>

          <section className="content-section">
            <h2 className="article-h2">Frequently Asked Questions</h2>
            <div className="faq-section">
              {musicInIslamContent.faq.map((item, i) => (
                <div key={i} className="faq-item">
                  <h3 className="faq-question">{item.q}</h3>
                  <p className="faq-answer">{item.a}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="content-section">
            <h2 className="article-h2">Related Guides</h2>
            <p><Link href="/resource/halal-meaning-in-islam" className="text-link">Halal Meaning in Islam — Definition, Quran & Hadith &rarr;</Link></p>
            <p><Link href="/resource/halal-lifestyle" className="text-link">Halal Lifestyle Hub — All Guides &rarr;</Link></p>
          </section>
        </div>

        <div className="note-box">
          Content is provided for educational purposes only. Please verify religious matters with qualified scholars.
        </div>

        <div className="article-back">
          {hub && <Link href={`/hub/${hub.slug}`} className="text-link">&larr; Back to {hub.title}</Link>}
          <Link href="/resource/halal-lifestyle" className="text-link">&larr; Back to Halal Lifestyle</Link>
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
    const faqSchema = {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: duaQunootContent.faq.questions.map(item => ({
        '@type': 'Question',
        name: item.q,
        acceptedAnswer: { '@type': 'Answer', text: item.a }
      }))
    }

    return (
      <article className="page narrow">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
        <div className="page-head">
          <p className="section-eyebrow">Dua</p>
          <h1 className="page-title">Dua e Qunoot</h1>
          <div className="hero-rule" aria-hidden="true" />
          <p className="page-lede">{resource.desc}</p>
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
                  <p className={`shahadah-lang-text${lang.name === 'Arabic' ? ' qunoot-arabic' : ''}`}>{lang.script}</p>
                </div>
              ))}
            </div>
            <div className="dl-cta" style={{ marginTop: '2rem' }}>
              <DuaQunootPdfButton
                arabicText={duaQunootContent.duaQunootStatement.languages[0].script}
                urduTranslation={duaQunootContent.duaQunootStatement.languages[3].script}
              />
              <p className="dl-note" style={{ marginTop: '0.75rem' }}>A4 portrait PDF with Arabic text and transliteration — prints or saves to your device.</p>
            </div>
          </section>

          <section className="content-section">
            <h2 className="article-h2">{duaQunootContent.wordByWord.title}</h2>
            <p>{duaQunootContent.wordByWord.intro}</p>
            <div className="word-by-word-grid">
              {duaQunootContent.wordByWord.phrases.map((phrase, i) => (
                <div key={i} className="wbw-row">
                  <span className="wbw-arabic">{phrase.arabic}</span>
                  <span className="wbw-meaning">{phrase.meaning}</span>
                </div>
              ))}
            </div>
          </section>

          <section className="content-section">
            <h2 className="article-h2">{duaQunootContent.howToRecite.title}</h2>
            {duaQunootContent.howToRecite.sections.map((section, i) => (
              <div key={i}>
                <h3 className="article-h3">{section.heading}</h3>
                {section.content.split('\n\n').map((para, j) => (
                  <p key={j}>{para}</p>
                ))}
              </div>
            ))}
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
            <h2 className="article-h2">{duaQunootContent.duringCalamity.title}</h2>
            {duaQunootContent.duringCalamity.content.split('\n\n').map((para, i) => (
              <p key={i}>{para}</p>
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
                  <h3 className="faq-question">{item.q}</h3>
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
