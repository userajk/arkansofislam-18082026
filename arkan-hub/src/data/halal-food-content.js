export const halalFoodContent = {
  intro: {
    title: 'Halal Food in Islam',
    paragraphs: [
      'Islam provides clear guidelines on what Muslims can and cannot eat. The Quran and the teachings of the Prophet Muhammad (peace be upon him) establish the rules, and Islamic scholars have developed detailed rulings based on these sources.',
      'The general principle is straightforward: all food is halal (permissible) unless it falls into one of the specific categories that are haram (forbidden). The Quran lists these prohibitions directly, and the hadith provide additional detail on how they are applied.',
    ],
  },

  prohibitedFoods: {
    title: 'What Foods Are Haram (Forbidden)?',
    intro: 'Surah Al-Ma\'idah (5:3) provides the most detailed list of prohibited foods in the Quran:',
    quranText: '"Forbidden to you are dead animals, blood, the flesh of swine, and that which has been dedicated to other than Allah, and [those animals] killed by strangling or by a violent blow or by a head-long fall or by the goring of horns, and those from which a wild animal has eaten, except what you [are able to] slaughter [before its death], and those which are sacrificed on stone altars..." — Surah Al-Ma\'idah (5:3)',
    categories: [
      { name: 'Dead animals (maytah)', desc: 'Any animal that dies of natural causes, disease, or accident — without being properly slaughtered — is haram. This includes animals killed by strangling, blows, falls, or attacks by other animals.' },
      { name: 'Blood', desc: 'Flowing blood (dam masfuh) is prohibited. This is the blood that drains from an animal during slaughter. Residual blood remaining in the meat after proper slaughter is forgiven.' },
      { name: 'Pork', desc: 'The flesh of swine is explicitly prohibited in four places in the Quran (2:173, 5:3, 6:145, 16:115). This includes all pork products and by-products such as lard and gelatin derived from pigs.' },
      { name: 'Animals dedicated to other than Allah', desc: 'Any animal slaughtered with the invocation of a name other than Allah is haram. This applies to sacrificial rituals dedicated to idols, saints, or any entity besides Allah.' },
      { name: 'Intoxicants', desc: 'Alcohol and all intoxicating substances are prohibited. Surah Al-Ma\'idah (5:90) states: "O you who have believed, indeed, intoxicants, gambling, stone altars, and divining arrows are but defilement from the work of Satan, so avoid it."' },
    ],
  },

  halalSlaughter: {
    title: 'Halal Slaughter (Zabiha)',
    paragraphs: [
      'For meat to be halal, the animal must be slaughtered according to Islamic guidelines. This method is called dhabihah (or zabiha). The requirements are:',
    ],
    requirements: [
      'The person slaughtering must be a Muslim or a person of the Book (Christian or Jewish), who is sane and of legal age.',
      'The name of Allah must be invoked at the time of slaughter — typically by saying "Bismillah, Allahu Akbar" (In the name of Allah, Allah is the Greatest).',
      'The slaughter must be done with a sharp instrument that cuts the throat, windpipe, and blood vessels in the neck, causing the blood to drain rapidly.',
      'The animal must be alive and healthy at the time of slaughter.',
      'The spinal cord should not be severed during the initial cut, to allow the heart to continue pumping and drain the blood.',
      'The blood must be fully drained from the carcass.',
    ],
    afterRequirements: 'The method is designed to cause the least pain to the animal and to drain the blood — since consuming blood is separately prohibited in the Quran.',
  },

  permittedAnimals: {
    title: 'Which Animals Are Halal?',
    sections: [
      { heading: 'Land animals', content: 'Cattle, sheep, goats, camels, deer, and rabbits are halal when properly slaughtered. Domesticated poultry (chicken, duck, turkey, quail) are also halal. Horses are considered halal by the majority of scholars (Shafi\'i, Hanbali) based on a hadith in Sahih al-Bukhari and Sahih Muslim in which the companions ate horse meat with the Prophet\'s knowledge, though the Hanafi school considers it makruh (disliked).' },
      { heading: 'Prohibited land animals', content: 'Animals with fangs that prey on others (lions, wolves, dogs, cats) and birds with talons (eagles, hawks, vultures) are haram. This is based on the hadith narrated by Ibn Abbas (may Allah be pleased with him): "The Messenger of Allah (peace be upon him) prohibited every beast of prey with fangs and every bird with talons." (Sahih Muslim) Donkeys and mules are also haram based on the Prophet\'s prohibition at the Battle of Khaybar (Sahih al-Bukhari and Sahih Muslim).' },
      { heading: 'Other prohibited animals', content: 'Insects are generally not consumed, though some scholars permit locusts based on the hadith: "Two types of dead animals and two types of blood have been made lawful for us. The two dead animals are fish and locusts." (Reported by Ibn Umar, may Allah be pleased with him; recorded by Ahmad and Ibn Majah)' },
    ],
  },

  seafood: {
    title: 'Seafood in Islam',
    paragraphs: [
      'The rulings on seafood differ between the schools of Islamic jurisprudence:',
    ],
    schools: [
      { name: 'Hanafi school', ruling: 'Only fish is halal from the sea. Shellfish (shrimp, crab, lobster), squid, octopus, and other non-fish sea creatures are not permitted.' },
      { name: 'Shafi\'i, Maliki, and Hanbali schools', ruling: 'All seafood is halal. This is based on the verse in Surah Al-Ma\'idah (5:96): "Lawful to you is the catch of the sea and its food as provision for you and the travelers." And the hadith: "Its water is pure and its dead are halal." (Reported by Abu Hurairah, may Allah be pleased with him; recorded by Abu Dawud, al-Tirmidhi, al-Nasa\'i, and Ibn Majah, and authenticated by al-Tirmidhi)' },
    ],
    note: 'Fish that die naturally in the water (floating dead fish) are considered makruh or haram by some scholars within the Hanafi school, while other schools permit them based on the general permission for sea creatures.',
  },

  gelatinAlcohol: {
    title: 'Gelatin, Additives, and Alcohol in Food',
    sections: [
      { heading: 'Gelatin', content: 'Gelatin is derived from the collagen of animal bones and skin. If it comes from a halal-slaughtered animal, it is halal. Gelatin from pork is haram. Gelatin from cattle or other animals not slaughtered according to Islamic guidelines is a matter of scholarly debate — some scholars consider it haram, while others argue that the chemical transformation (istihalah) during manufacturing changes its nature. Many Muslims avoid doubtful gelatin and choose plant-based or halal-certified alternatives.' },
      { heading: 'Alcohol in food and flavouring', content: 'Alcohol as a beverage (wine, beer, spirits) is haram by consensus. However, scholars differ on trace amounts of alcohol that occur naturally in food (such as in bread from fermentation, or vinegar) or that are used as a carrier in flavourings (such as vanilla extract). Many scholars hold that if the amount is so small that it cannot intoxicate even in large quantities, it is permissible. Others recommend caution and avoidance.' },
      { heading: 'Vinegar', content: 'Vinegar is halal even though it is produced through the fermentation of alcohol. The Prophet Muhammad (peace be upon him) said: "What a good condiment vinegar is." (Sahih Muslim, narrated by Jabir ibn Abdullah, may Allah be pleased with him) The transformation from wine to vinegar is considered a complete change of substance (istihalah).' },
      { heading: 'Enzymes and emulsifiers', content: 'Food additives such as rennet (used in cheese), enzymes, and emulsifiers may be derived from animal or plant sources. If derived from a halal animal that was properly slaughtered, they are halal. If derived from pork or a non-halal source, their permissibility is debated. Checking halal certification is the safest approach.' },
    ],
  },

  kosherVsHalal: {
    title: 'Is Kosher Food Halal for Muslims?',
    paragraphs: [
      'Kosher food follows Jewish dietary laws (kashrut), which share some similarities with halal — both prohibit pork and require specific slaughter methods. However, there are key differences:',
    ],
    differences: [
      { aspect: 'Invocation at slaughter', kosher: 'A blessing is recited, but not necessarily over each individual animal', halal: 'The name of Allah must be pronounced at the time of slaughter of each animal' },
      { aspect: 'Alcohol', kosher: 'Permitted (kosher wine exists)', halal: 'All alcohol is prohibited' },
      { aspect: 'Mixing meat and dairy', kosher: 'Strictly separated — cannot be consumed together', halal: 'No restriction on combining meat and dairy' },
      { aspect: 'Seafood', kosher: 'Only fish with fins and scales', halal: 'Varies by school — Hanafi allows only fish; others allow all seafood' },
    ],
    conclusion: 'Because of these differences — particularly regarding the invocation of Allah\'s name — most scholars do not consider kosher food automatically halal. However, some scholars permit it in situations where halal food is unavailable, based on the Quranic verse permitting the food of the People of the Book (Surah Al-Ma\'idah 5:5).',
  },

  faq: [
    { q: 'What is halal food in Islam?', a: 'Halal food is any food that is permissible under Islamic dietary law. This includes all plant-based foods, properly slaughtered meat (zabiha), seafood (with some variation between schools), dairy, eggs, and any product free from haram ingredients like pork and alcohol.' },
    { q: 'What foods are Muslims not allowed to eat?', a: 'Muslims are prohibited from eating pork and its by-products, blood, dead animals (not properly slaughtered), animals slaughtered in a name other than Allah, predatory animals with fangs, and birds of prey with talons. Alcohol and intoxicants are also forbidden.' },
    { q: 'What are the Muslim dietary restrictions?', a: 'The main restrictions are: no pork, no blood, no alcohol, no meat from animals that died without proper slaughter, and no predatory animals. Meat must be slaughtered by a Muslim or Person of the Book with the name of Allah invoked. The Hanafi school additionally restricts non-fish seafood.' },
    { q: 'Is halal meat healthier?', a: 'The halal slaughter method drains the blood from the animal, which removes toxins and bacteria that blood can carry. However, "halal" is a religious and legal category, not a health claim. The wholesomeness of any meat depends on the quality of farming, handling, and preparation.' },
    { q: 'Is gelatin halal?', a: 'Gelatin from a halal-slaughtered animal is halal. Gelatin from pork is haram. Gelatin from non-halal-slaughtered cattle is debated among scholars. Many Muslims choose halal-certified or plant-based gelatin alternatives to avoid doubt.' },
    { q: 'Can Muslims eat kosher food?', a: 'Kosher and halal share some similarities (both prohibit pork), but they differ on key points — kosher permits alcohol and does not require invoking Allah\'s name on each animal. Most scholars do not consider kosher automatically halal, though some permit it when halal food is unavailable, citing the Quranic permission for the food of the People of the Book (5:5).' },
    { q: 'Is seafood halal in Islam?', a: 'This depends on the school of thought. The Shafi\'i, Maliki, and Hanbali schools consider all seafood halal based on Surah Al-Ma\'idah (5:96). The Hanafi school permits only fish, excluding shellfish and other sea creatures.' },
    { q: 'Is chicken halal?', a: 'Chicken is halal when slaughtered according to Islamic guidelines — by a Muslim or Person of the Book, with the name of Allah invoked, using a sharp instrument to cut the throat and drain the blood. Non-zabiha chicken is not considered halal by the majority of scholars.' },
    { q: 'What foods are prohibited in the Quran?', a: 'Surah Al-Ma\'idah (5:3) and Surah Al-An\'am (6:145) list the main prohibitions: dead animals (not properly slaughtered), flowing blood, pork, and animals dedicated to other than Allah. Surah Al-Ma\'idah (5:90) additionally prohibits intoxicants and gambling.' },
    { q: 'Is vanilla extract halal?', a: 'Vanilla extract contains a small percentage of alcohol as a carrier. Scholars differ — some permit it because the amount is too small to intoxicate, while others recommend using alcohol-free vanilla alternatives. Vanilla powder and vanilla bean paste are generally accepted as halal.' },
  ],

  images: [
    {
      id: 'halal-food-spread',
      prompt: 'A beautifully arranged overhead photograph of a traditional halal food spread on a rustic wooden table. Include dates in a small bowl, a jar of golden honey with a dipper, a bottle of olive oil, grilled lamb chops, fresh flatbread (naan), a bowl of mixed nuts and dried fruits, fresh pomegranate cut open, a bowl of hummus, and fresh mint leaves scattered around. Warm, natural lighting. Food photography style, appetising and inviting. Clean background. No text, no watermarks, no logos, no branding, no stamps of any kind.',
      fileName: 'halal-food-spread.jpg',
      alt: 'A spread of halal foods including dates, honey, olive oil, lamb, flatbread, and fresh fruits on a wooden table',
      caption: 'Common halal foods: dates, honey, olive oil, lamb, and fresh produce.',
    },
    {
      id: 'halal-meat-market',
      prompt: 'A photograph of a clean, well-lit halal butcher shop display counter showing various cuts of fresh raw meat — lamb cuts, chicken pieces, and beef steaks — neatly arranged on a stainless steel counter with fresh herbs (rosemary, thyme) placed alongside. Professional butcher shop environment. No people visible. Natural lighting. No text, no watermarks, no logos, no branding, no stamps of any kind.',
      fileName: 'halal-meat-counter.jpg',
      alt: 'A halal butcher shop display with fresh cuts of lamb, chicken, and beef',
      caption: 'Halal meat must come from animals slaughtered according to Islamic guidelines.',
    },
  ],
}
