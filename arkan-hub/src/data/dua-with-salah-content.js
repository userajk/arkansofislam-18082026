export const duaWithSalahContent = {
  title: 'Dua with Salah',
  description: 'Authentic supplications to recite with Salah, including Dua Qunoot for Witr prayer.',
  intro: 'Here you will find important duas recited during and after Salah. The most significant of these is Dua Qunoot, recited during Witr prayer.',

  items: [
    {
      title: 'Dua Qunoot',
      slug: 'dua-qunoot',
      category: 'Essential Dua',
      desc: 'The essential dua recited with Witr prayer. Learn about Dua Qunoot, its meaning, benefits, and how to recite it.'
    }
    // NOTE: 'duas-after-fard', 'duas-tashahhud', and 'duas-sujud' cards were
    // removed because those pages are not built yet (they 404'd, causing broken
    // internal links). Re-add them here once the corresponding resource pages
    // exist under src/data + src/app/resource/[slug]/page.jsx and CONTENT_PAGES.
  ]
}
