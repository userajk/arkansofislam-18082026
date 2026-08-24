export const halalInvestingContent = {
  intro: {
    title: 'Halal Investing — A Guide to Islamic Investment',
    paragraphs: [
      'Investing is not only permissible in Islam — it is encouraged. The Quran states: "Allah has permitted trade" (Surah Al-Baqarah, 2:275). Growing wealth through legitimate means and paying zakat on it is part of a Muslim\'s financial responsibility.',
      'However, not all investments are halal. Islamic law places restrictions on what you can invest in and how the investment is structured. This guide covers the main categories: stocks, mutual funds, forex, gold, and other assets — and explains what makes each halal or haram.',
    ],
  },

  screeningCriteria: {
    title: 'What Makes a Stock Halal?',
    paragraphs: [
      'Not every publicly traded company is suitable for Muslim investors. Islamic scholars and Shariah advisory boards have developed screening criteria to determine whether a stock is halal. These criteria fall into two categories:',
    ],
    businessScreening: {
      title: 'Business Activity Screening',
      intro: 'The company\'s primary business must not involve haram activities. Stocks are excluded if the company earns its revenue primarily from:',
      excluded: [
        'Alcohol production or distribution',
        'Pork and pork-related products',
        'Conventional banking, insurance, and interest-based financial services',
        'Gambling and casinos',
        'Tobacco',
        'Adult entertainment',
        'Weapons and defence (scholars differ on this — some permit defence companies, others do not)',
      ],
      note: 'Some scholars apply a tolerance threshold: if a company\'s haram revenue is below 5% of total revenue, the stock may still be permissible — but the investor should donate (purify) that percentage of any dividends received to charity. This threshold varies between Shariah boards.',
    },
    financialScreening: {
      title: 'Financial Ratio Screening',
      intro: 'Even if a company\'s business is halal, its financial structure matters. Common thresholds used by major Shariah indices (such as DJIM, S&P Shariah, FTSE Shariah) include:',
      ratios: [
        { name: 'Debt-to-market-cap ratio', threshold: 'Total interest-bearing debt must be less than 33% of the company\'s market capitalisation.' },
        { name: 'Cash and interest-bearing investments', threshold: 'Cash and interest-bearing securities must be less than 33% of market capitalisation.' },
        { name: 'Accounts receivable', threshold: 'Accounts receivable must be less than 49% (or 33%, depending on the standard) of total assets.' },
      ],
      note: 'Different Shariah boards apply slightly different thresholds. The AAOIFI (Accounting and Auditing Organization for Islamic Financial Institutions) standard is widely referenced but not the only one. Check which standard your chosen halal investment platform or fund follows.',
    },
  },

  mutualFunds: {
    title: 'Halal Mutual Funds and ETFs',
    paragraphs: [
      'Halal mutual funds and exchange-traded funds (ETFs) pool investors\' money and invest only in Shariah-compliant stocks. They are managed by fund managers under the supervision of a Shariah advisory board.',
    ],
    howTheyWork: [
      'The fund screens out companies that fail the business activity or financial ratio tests.',
      'The portfolio is reviewed periodically (usually quarterly) and non-compliant stocks are removed.',
      'Any income earned from non-compliant sources (such as interest on the fund\'s cash holdings) is calculated and donated to charity — a process called purification.',
      'The fund charges a management fee, which is permissible as it is payment for a service.',
    ],
    note: 'Halal ETFs and mutual funds are now available in most major markets. They track indices like the Dow Jones Islamic Market Index (DJIM) or the S&P Shariah Index, which apply standardised screening criteria.',
  },

  forexTrading: {
    title: 'Is Forex Trading Halal?',
    paragraphs: [
      'Foreign exchange (forex) trading — buying and selling currencies — is a subject of scholarly debate. The key issues are:',
    ],
    issues: [
      { name: 'Spot trading (immediate exchange)', desc: 'The Prophet Muhammad (peace be upon him) said: "Gold for gold, silver for silver... [must be exchanged] equal for equal, hand to hand. If the types differ, then sell however you wish, provided it is hand to hand." (Sahih Muslim, narrated by Ubadah ibn al-Samit, may Allah be pleased with him) Currencies are treated as a form of money (like gold and silver). Exchanging different currencies is permitted if it is done on the spot — meaning both sides of the trade settle immediately. This is the basis for permitting spot forex.' },
      { name: 'Leverage and margin', desc: 'Most retail forex brokers offer leverage (e.g., 50:1 or 100:1), meaning you trade with borrowed money. If the broker charges interest (rollover fees or swap fees) on the leveraged position, this is riba and is haram. Some brokers offer "Islamic accounts" or "swap-free accounts" that waive overnight interest — but scholars caution that some of these accounts simply hide the interest in wider spreads or fixed fees.' },
      { name: 'Futures and options', desc: 'Currency futures and options involve selling what you do not yet own and settling at a future date, not on the spot. Most scholars consider these haram because they violate the "hand to hand" requirement and involve excessive speculation (gharar).' },
    ],
    conclusion: 'Spot forex trading in a genuine Islamic (swap-free) account — without leverage or with interest-free leverage — is considered permissible by some scholars. Forex futures, options, and interest-bearing margin accounts are considered haram by the majority of scholars.',
  },

  goldTrading: {
    title: 'Gold and Commodity Trading',
    paragraphs: [
      'Gold holds a special status in Islamic law because the Prophet (peace be upon him) treated it as a form of currency (alongside silver). The rules for trading gold come from the hadith on riba al-fadl (excess in exchange):',
    ],
    hadith: '"Gold for gold, silver for silver, wheat for wheat, barley for barley, dates for dates, salt for salt — equal for equal, like for like, hand to hand. If the types differ, then sell however you wish, provided it is hand to hand." (Sahih Muslim, narrated by Ubadah ibn al-Samit, may Allah be pleased with him)',
    rules: [
      { rule: 'Gold for gold', desc: 'Must be exchanged in equal weight, on the spot. You cannot sell 10 grams of gold for 11 grams — the excess is riba al-fadl.' },
      { rule: 'Gold for currency', desc: 'Since gold and currency are different types, the exchange does not need to be equal in value — but it must still happen on the spot (hand to hand). Deferred payment for gold is not permitted.' },
      { rule: 'Gold ETFs and digital gold', desc: 'Scholars debate whether buying gold ETFs or digital gold counts as possessing gold "hand to hand." Some scholars permit gold ETFs that are backed by physical gold and allow redemption, while others require actual physical possession.' },
    ],
  },

  marginAndFutures: {
    title: 'Margin Trading, Futures, and Options',
    paragraphs: [
      'Several common trading practices are problematic under Islamic law:',
    ],
    items: [
      { name: 'Margin trading', desc: 'Trading with borrowed money from the broker. If the broker charges interest on the borrowed amount, it is haram (riba). Some Islamic brokers offer margin without interest, instead charging a flat fee — scholars differ on whether this is genuinely halal or a disguised form of interest.' },
      { name: 'Short selling', desc: 'Selling shares you do not own (borrowed from the broker) and buying them back later at a lower price. Most scholars prohibit this because you are selling what you do not possess. The Prophet (peace be upon him) said: "Do not sell what you do not have." (Reported by Hakim ibn Hizam, may Allah be pleased with him; recorded by Abu Dawud and al-Tirmidhi, who graded it sahih)' },
      { name: 'Futures contracts', desc: 'Agreements to buy or sell an asset at a future date and price. Both sides settle later, not on the spot. Scholars generally consider conventional futures haram due to gharar (uncertainty) and the sale of what is not yet owned or possessed.' },
      { name: 'Options', desc: 'The right (but not obligation) to buy or sell an asset at a set price in the future. Most scholars consider options haram because the buyer pays for a right that may expire worthless (resembling gambling) and the underlying asset is not exchanged on the spot.' },
    ],
  },

  purification: {
    title: 'Income Purification',
    paragraphs: [
      'Even halal stocks may generate a small amount of income from non-compliant sources — for example, interest earned on the company\'s cash reserves. Islamic scholars require investors to "purify" this portion by donating it to charity.',
      'The process is straightforward: check the company\'s annual report for the percentage of income derived from non-compliant sources (interest income, haram business segments). Calculate that percentage of your total dividends and capital gains, and donate it. This donation is not counted as sadaqah (voluntary charity) or zakat — it is simply the removal of impure income.',
      'Many halal investment platforms and funds handle purification automatically, disclosing the purification percentage in their reports.',
    ],
  },

  faq: [
    { q: 'Is the stock market halal in Islam?', a: 'Investing in stocks is permissible in Islam, provided the companies pass Shariah screening — their business must not involve haram activities, and their financial ratios (debt, interest income) must fall within acceptable thresholds. Halal stock indices like the Dow Jones Islamic Market Index provide screened lists.' },
    { q: 'Is forex trading halal in Islam?', a: 'Spot forex trading (immediate currency exchange) is considered permissible by some scholars, provided the account does not charge or pay interest (swap/rollover fees). Forex futures, options, and interest-bearing margin accounts are considered haram by the majority of scholars. "Islamic accounts" offered by brokers should be evaluated carefully.' },
    { q: 'Are mutual funds halal?', a: 'Halal mutual funds that invest only in Shariah-compliant stocks and are supervised by a Shariah board are permissible. They screen out non-compliant companies and purify any incidental non-compliant income by donating it to charity.' },
    { q: 'Is gold trading halal?', a: 'Trading physical gold is halal if it is exchanged on the spot (hand to hand). Gold for currency must be settled immediately — deferred payment is not permitted. Gold ETFs and digital gold are debated: some scholars permit them if backed by physical gold, others require actual possession.' },
    { q: 'Is margin trading halal?', a: 'Margin trading with interest is haram because the interest charged on borrowed funds is riba. Some Islamic brokers offer interest-free margin, but scholars differ on whether these arrangements are genuinely Shariah-compliant or simply disguise the interest in other fees.' },
    { q: 'Is short selling halal?', a: 'Most scholars prohibit short selling because it involves selling shares you do not own. The Prophet (peace be upon him) said: "Do not sell what you do not have." (Abu Dawud, al-Tirmidhi) The practice also involves borrowing shares from the broker, which may include interest charges.' },
    { q: 'Are futures and options halal?', a: 'The majority of scholars consider conventional futures and options haram due to gharar (excessive uncertainty), the sale of what is not yet owned, and the resemblance to gambling in options (paying for a right that may expire worthless). Shariah-compliant alternatives such as salam (forward sale with full upfront payment) and istisna (manufacturing contracts) exist for specific commercial needs.' },
    { q: 'What is income purification in Islamic investing?', a: 'Income purification is the process of donating to charity the portion of investment income that came from non-compliant sources (such as interest earned by the company). It is not considered sadaqah or zakat — it is simply removing impure income from your earnings.' },
  ],
}
