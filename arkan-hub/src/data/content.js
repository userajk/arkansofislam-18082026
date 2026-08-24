export const slugify = s =>
  s.toLowerCase().replace(/&/g, 'and').replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')

export const HUBS = [
  {
    num: '01',
    slug: 'core-pillars',
    title: 'The 5 Pillars',
    desc: 'Guides, tools, and checklists for Salah, Zakat, Sawm, Hajj, and more.',
    intro: 'The foundations of worship, explained clearly. Each topic below opens a practical guide with steps, tools, and answers to common questions.',
    items: [
      { title: 'Salah', desc: 'Step-by-step prayer guides, prayer times, and common questions.' },
      { title: 'Zakat', desc: 'Calculate your zakat on gold, savings, and investments with our free calculator.' },
      { title: 'Zakat al-Fitr', slug: 'zakat-al-fitr', desc: 'Fitrana guide — how much to pay, when to pay, and who is obligated before Eid.' },
      { title: 'Sawm', desc: 'Fasting essentials for Ramadan and voluntary fasts through the year.' },
      { title: 'Hajj', desc: 'A complete walkthrough of the pilgrimage, from ihram to tawaf.' },
      { title: 'Shahadah', desc: 'The declaration of faith and what it means in daily life.' },
    ],
  },
  {
    num: '02',
    slug: 'guides',
    title: 'Guides',
    desc: 'Practical step-by-step Islamic guides for daily life.',
    intro: 'Plain-language guides for everyday situations — written to be read in minutes and applied straight away.',
    items: [
      { title: 'New Muslim Guide', desc: 'A gentle starting point for those new to Islam.' },
      { title: 'Ramadan Guide', desc: 'Prepare for the month of fasting, prayer, and reflection.' },
      { title: 'Jummah Guide', desc: 'The etiquette and virtues of the Friday prayer.' },
      { title: 'Janazah Guide', desc: 'Funeral rites explained step by step for families.' },
      { title: 'Wudu', desc: 'How to perform ablution correctly, with common mistakes to avoid.' },
      { title: 'Islamic Etiquette', desc: 'Adab for daily interactions, food, and the home.' },
      { title: 'Halal Lifestyle', desc: 'Practical guidance on halal food, finance, and living.' },
      { title: 'Islamic Finance Basics', desc: 'Riba-free banking, saving, and spending fundamentals.' },
    ],
  },
  {
    num: '03',
    slug: 'relationships-family',
    title: 'Family Life',
    desc: 'Baby names, Nikah, Mahr, parenting, and family resources.',
    intro: 'Resources for every stage of family life — from marriage and parenting to raising children with faith.',
    items: [
      { title: 'Islamic Baby Names Directory', desc: 'Meaningful names with their origins and meanings.' },
      { title: 'Nikah Checklist', desc: 'Everything to arrange before, during, and after the marriage contract.' },
      { title: 'Mahr Template', desc: 'A simple template for documenting the marriage gift.' },
      { title: 'Parenting Playbooks', desc: 'Raising children with faith, patience, and purpose.' },
      { title: 'Kids Prayer Reward Chart', desc: 'A printable chart to encourage young ones to pray.' },
    ],
  },
  {
    num: '04',
    slug: 'travel-heritage',
    title: 'Travel & Heritage',
    desc: 'Halal travel guides, mosque directories, landmarks, and heritage sites.',
    intro: 'Travel with confidence — find mosques, plan halal trips, and keep up worship wherever you are.',
    items: [
      { title: 'Mosque Directory', desc: 'Find mosques and prayer spaces near you and abroad.' },
      { title: 'Islamic Landmarks', desc: 'Historic sites and heritage destinations worth visiting.' },
      { title: 'Halal City Guides', desc: 'Food, prayer, and travel notes for major cities.' },
      { title: 'Family Travel Tips', desc: 'Travelling with children while keeping up worship.' },
      { title: 'Visitor Etiquette', desc: 'Respectful conduct when visiting mosques and holy sites.' },
    ],
  },
  {
    num: '05',
    slug: 'history-prophetic-stories',
    title: 'Islamic History',
    desc: 'Seerah, stories of the Prophets, Islamic history, and reflections.',
    intro: 'Learn from the past — the life of the Prophet (peace be upon him), the stories of the messengers, and the history of the Muslim world.',
    items: [
      { title: 'Seerah Timeline', desc: 'The life of the Prophet (peace be upon him) in chronological chapters.' },
      { title: 'Stories of the Prophets', desc: 'Narratives of the messengers, from Adam to Muhammad (peace be upon him).' },
      { title: 'Battle Summaries', desc: 'Key events, causes, and lessons from the early battles.' },
      { title: 'Surah Reflections', desc: 'Context and themes from selected chapters of the Quran.' },
      { title: 'Islamic History Maps', desc: 'Visual maps of the growth of the Muslim world.' },
      { title: 'Lessons & Essays', desc: 'Reflections drawing lessons from history for today.' },
    ],
  },
  {
    num: '06',
    slug: 'hadith',
    title: 'Hadith',
    desc: 'The words of the Prophet (peace be upon him) — collections, commentary, and daily lessons.',
    intro: 'Learn from the recorded words and actions of the Prophet (peace be upon him) — from the major collections to short daily narrations with context.',
    items: [
      { title: 'Forty Hadith of Nabawi', desc: 'The forty foundational narrations with brief commentary.' },
      { title: 'Hadith of the Day', desc: 'A short narration each day, with context and a practical lesson.' },
      { title: 'Sahih Collections Overview', desc: 'Bukhari, Muslim, and the other major books explained.' },
      { title: 'How Hadith Are Graded', desc: 'Sahih, hasan, daif — what the grades mean and why they matter.' },
      { title: 'Hadith on Character', desc: 'Selected narrations on honesty, patience, and kindness.' },
      { title: 'Etiquette in the Sunnah', desc: 'Daily manners drawn from the example of the Prophet (peace be upon him).' },
    ],
  },
  {
    num: '07',
    slug: 'health-islam',
    title: 'Health & Islam',
    desc: 'Wellbeing of body and soul — sunnah foods, mental health, fasting, and hygiene.',
    intro: 'Care for the body and the soul together — practical guidance on food, rest, hygiene, and mental wellbeing rooted in the sunnah.',
    items: [
      { title: 'Sunnah Foods', desc: 'Dates, honey, olive oil, and the foods loved by the Prophet (peace be upon him).' },
      { title: 'Mental Wellbeing', desc: 'Anxiety, grief, and hope — an Islamic perspective on the heart and mind.' },
      { title: 'Fasting & Health', desc: 'What fasting does for the body, and how to fast well.' },
      { title: 'Sleep in the Sunnah', desc: 'Rest, night routines, and the duas before sleeping.' },
      { title: 'Hygiene & Purity', desc: 'Cleanliness as half of faith — taharah in daily life.' },
      { title: 'Fitness & the Believer', desc: 'Keeping the body strong as a trust from Allah.' },
    ],
  },
  {
    num: "08",
    slug: "umrah-companion",
    title: "Umrah Companion",
    desc: "Everything for your Umrah — steps, packing, and visiting the two holy cities.",
    intro: "A complete companion for your journey — from preparing ihram at home to the final tawaf, with guides for Makkah and Madinah.",
    items: [
      { title: "Umrah Step-by-Step", desc: "The full rite in order — ihram, tawaf, sai, and exiting ihram." },
      { title: "Ihram Essentials", desc: "What to wear, what to avoid, and the intentions to make." },
      { title: "Makkah Visitor Guide", desc: "The Haram, etiquette, and practical tips for your stay." },
      { title: "Madinah Visitor Guide", desc: "Visiting the Prophet’s Mosque with respect and ease." },
      { title: "Umrah Packing Checklist", desc: "Everything to pack, printable before you fly." },
    ],
  },
  {
    num: "09",
    slug: "dua",
    title: "Dua",
    desc: "Supplications and prayers for every moment, situation, and life stage.",
    intro: "Dua is the conversation with Allah. Here you will find authentic supplications for prayer, travel, family, morning, evening, and all of life’s moments — in Arabic, transliteration, and multiple languages.",
    items: [
      { title: "Daily Duas", desc: "Supplications for morning, evening, and everything between." },
      { title: "Dua with Salah", desc: "Authentic supplications to recite with Salah, including Dua Qunoot for Witr prayer." },
      { title: "Travel Duas", desc: "Duas for journeys, arrival, safe travel, and returning home." },
      { title: "Family Duas", desc: "Supplications for spouses, parents, children, and loved ones." },
      { title: "Duas for Umrah", desc: "Supplications specific to tawaf, sai, and the holy cities." },
      { title: "Duas for Specific Situations", desc: "Prayers for healing, grief, success, protection, and life challenges." },
    ],
  },
]

export const FEATURED = [
  { title: 'Salah Step-by-Step', category: 'Core Pillars', desc: 'Learn the prayer from takbir to tasleem with clear, simple steps.' },
  { title: 'Zakat Calculator', category: 'Core Pillars', desc: 'Calculate your zakat on gold, savings, and investments.', slug: 'zakat' },
  { title: 'Muslim Baby Names', category: 'Family', desc: 'Browse meaningful names with their origins and meanings.' },
  { title: 'Nikah Checklist', category: 'Family', desc: 'A complete checklist for planning the marriage contract.' },
  { title: 'Travel Duas', category: 'Travel', desc: 'Duas for setting out, arriving, and returning safely.' },
  { title: 'Seerah Timeline', category: 'History', desc: 'The life of the Prophet (peace be upon him) in chronological chapters.' },
].map(r => ({ ...r, slug: r.slug || slugify(r.title) }))

export const EVERYDAY_GUIDES = HUBS[1].items.slice(0, 6).map(g => ({ ...g, slug: slugify(g.title) }))

export const DOWNLOADS = [
  { title: 'Hajj Packing Checklist', desc: 'Everything to pack for the days of Hajj.' },
  { title: 'Umrah Checklist', desc: 'A printable companion for your Umrah journey.' },
  { title: 'Zakat Calculator', desc: 'Find out how much zakat you owe on your wealth.', slug: 'zakat' },
  { title: 'Prayer Tracker', desc: 'Track your five daily prayers each month.' },
  { title: 'Kids Reward Chart', desc: 'Encourage children with a printable reward chart.' },
].map(d => ({ ...d, slug: d.slug || slugify(d.title) }))

export const QUICK_CHIPS = [
  { label: 'Baby Names', q: 'baby names' },
  { label: 'Nikah Checklist', q: 'nikah' },
  { label: 'Salah Guide', q: 'salah' },
  { label: 'Travel Duas', q: 'dua' },
  { label: 'Zakat Calculator', q: 'zakat' },
  { label: 'Ramadan Guide', q: 'ramadan' },
]

export const WHY_POINTS = [
  { title: 'Structured Knowledge', desc: 'Every guide lives in a clear hub, so you always know where to look next.' },
  { title: 'Mobile-Friendly Resources', desc: 'Designed to read well on any screen — at home, at work, or on the go.' },
  { title: 'Practical Islamic Tools', desc: 'Checklists, worksheets, and trackers you can put to use the same day.' },
]

export const DIRECTORY_ITEMS = HUBS.flatMap(h =>
  h.items.map(i => ({ ...i, hub: h.title, hubSlug: h.slug, slug: i.slug || slugify(i.title) }))
)

const buildResourceMap = () => {
  const map = {}
  for (const item of DIRECTORY_ITEMS) {
    map[item.slug] = { title: item.title, desc: item.desc, category: item.hub, hubSlug: item.hubSlug }
  }
  for (const r of FEATURED) {
    if (!map[r.slug]) map[r.slug] = { title: r.title, desc: r.desc, category: r.category }
  }
  for (const d of DOWNLOADS) {
    if (!map[d.slug]) map[d.slug] = { title: d.title, desc: d.desc, category: 'Downloads', download: true }
  }
  // Add special resources
  map['dua-qunoot'] = { title: 'Dua e Qunoot', desc: 'Full Dua e Qunoot in Arabic with English translation, Urdu tarjuma, transliteration, word-by-word meaning, and downloadable PDF. Learn when and how to recite it in Witr prayer.', category: 'Dua' }
  map['zakat'] = { title: 'Zakat Calculator', desc: 'Free zakat calculator to find how much zakat you owe on gold, silver, savings, investments, and other assets. Includes nisab threshold, tola reference, and FAQ.', category: 'Core Pillars', hubSlug: 'core-pillars' }
  map['zakat-al-fitr'] = { title: 'Zakat al-Fitr (Fitrana)', desc: 'Complete guide to Zakat al-Fitr — what it is, how much fitrana to pay per person, when to pay before Eid al-Fitr, and the difference between zakat and fitrana.', category: 'Core Pillars', hubSlug: 'core-pillars' }
  return map
}

export const RESOURCE_MAP = buildResourceMap()

export const CONTENT_PAGES = new Set(['shahadah', 'dua-qunoot', 'dua-with-salah', 'zakat', 'zakat-al-fitr'])

export const getHub = slug => HUBS.find(h => h.slug === slug)
export const getResource = slug => RESOURCE_MAP[slug]
