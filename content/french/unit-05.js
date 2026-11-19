/*
 * French — Unit 5: Le vin (II)
 * Content file only. The engine (app.js) reads this structure; no code here.
 * Original material. Forms and claims to be checked are listed in CONTENT-CHECKS.md.
 * French text uses the typographic apostrophe (’) and a no-break space before ? ! : as in French print.
 */
Hospes.addLecture('french', {
  id: 'fr-05',
  number: 5,
  title: 'Le vin (II)',
  subtitle: 'The wine regions, reading a label, tasting at a domaine, buying from a wine merchant; numbers to 1000 and years; il faut; en; verbs with se',
  minutes: 55,

  intro: `
    <p>Unit 4 was about ordering wine. This one is about choosing and buying it: knowing roughly what comes from where, reading a label, taking part in a tasting at a winery (<span class="fr">un domaine</span>), describing what you taste, and buying a few bottles, or a case, from the grower or a wine merchant (<span class="fr">un caviste</span>).</p>
    <p>There is more vocabulary here than in earlier units, and some of it is specialist. You do not need all of it to enjoy a tasting; the aim is to follow what the grower says and to have a few words of your own. The grammar adds the numbers above 69 (prices of cases, and vintages), <span class="fr">il faut</span> (“one must”), the little word <span class="fr">en</span> (“of it, of them”), which you need in every shop, and verbs with <span class="fr">se</span> such as <span class="fr">ça se garde</span> (“it keeps”).</p>
  `,

  background: [
    {
      title: 'The regions in brief',
      html: `
        <p>A sketch, not a map: each region has many appellations and exceptions.</p>
        <ul>
          <li><span class="fr">Bordeaux</span> (south-west): mostly red blends. On the left bank of the Gironde (Médoc, Graves) Cabernet Sauvignon leads; on the right bank (Saint-Émilion, Pomerol) Merlot. Estates are called <span class="fr">châteaux</span>, whether or not there is a castle. Also dry whites and the sweet wines of Sauternes.</li>
          <li><span class="fr">La Bourgogne</span> (Burgundy, east-centre): Pinot Noir for red, Chardonnay for white, from many small vineyards. Chablis lies to the north, the Côte d’Or (Côte de Nuits, Côte de Beaune) in the middle, the Mâconnais to the south. Estates are <span class="fr">domaines</span>.</li>
          <li><span class="fr">Le Beaujolais</span>: Gamay, mostly light, fruity reds; the ten <span class="fr">crus</span> (Morgon, Fleurie and others) are more serious.</li>
          <li><span class="fr">La vallée du Rhône</span>: in the north Syrah (Côte-Rôtie, Hermitage, Crozes-Hermitage); in the south blends led by Grenache (Côtes-du-Rhône, Châteauneuf-du-Pape).</li>
          <li><span class="fr">La vallée de la Loire</span>: crisp whites (Sauvignon Blanc in Sancerre and Pouilly-Fumé; Chenin Blanc in Vouvray and Anjou), light reds from Cabernet Franc (Chinon, Saumur-Champigny), and Muscadet near the coast.</li>
          <li><span class="fr">L’Alsace</span>: mostly whites, labelled by grape (Riesling, Gewurztraminer, Pinot Gris).</li>
          <li><span class="fr">La Champagne</span>: sparkling wine from Pinot Noir, Chardonnay and Pinot Meunier.</li>
          <li>The south: <span class="fr">la Provence</span> (rosé), <span class="fr">le Languedoc</span> and <span class="fr">le Roussillon</span> (large, varied, often good value), and <span class="fr">le Sud-Ouest</span> (Cahors, Madiran, Jurançon and others).</li>
        </ul>`
    },
    {
      title: 'Reading a label',
      html: `
        <p>A French label (<span class="fr">l’étiquette</span>) usually shows:</p>
        <ul>
          <li>the <strong>appellation</strong>: <span class="fr">Appellation Vouvray Contrôlée</span> (older wording) or <span class="fr">Appellation d’Origine Protégée</span>. This is the legally important line;</li>
          <li>the <strong>producer</strong>: <span class="fr">Domaine…</span> or <span class="fr">Château…</span>, sometimes a cooperative (<span class="fr">cave coopérative</span>) or a merchant (<span class="fr">négociant</span>) who buys grapes or wine;</li>
          <li>the <strong>vintage</strong> (<span class="fr">le millésime</span>): the year of the harvest;</li>
          <li><span class="fr">mis en bouteille au domaine</span> or <span class="fr">au château</span>: bottled by the estate that grew the grapes;</li>
          <li>alcohol (<span class="fr">13 % vol.</span>), volume, <span class="fr">contient des sulfites</span> (contains sulphites), and logos such as the green EU organic leaf (<span class="fr">agriculture biologique</span>).</li>
        </ul>
        <p>The word <span class="fr">cru</span> (“growth”: a vineyard or estate of recognised quality) works differently by region. In Burgundy, <span class="fr">grand cru</span> is the top level of vineyard, <span class="fr">premier cru</span> the next. In Bordeaux, <span class="fr">cru classé</span> refers to classifications of châteaux, the best known from 1855 for the Médoc and Sauternes. In Beaujolais, the <span class="fr">crus</span> are ten village appellations. Treat <span class="fr">cru</span> on a label as a claim to check against the region, not as a uniform grade.</p>`
    },
    {
      title: 'Visiting a domaine',
      html: `
        <p>Many growers welcome visitors for a tasting (<span class="fr">une dégustation</span>), from a few glasses at a counter to a tour of the cellar (<span class="fr">la cave</span>). Large estates and some famous names charge and require booking; at small family domaines a tasting is often free or cheap, and calling or emailing ahead is polite. Harvest time (<span class="fr">les vendanges</span>, roughly September to early October, varying by year and region) is the busiest and worst time to drop in.</p>
        <p>There is no strict obligation to buy after a free tasting, but buying a bottle or two is the usual courtesy if you have been given time and several wines. Spitting (<span class="fr">cracher</span>, into a <span class="fr">crachoir</span>) is normal and expected if you are driving or tasting a lot; nobody is offended.</p>
        <p>Bringing wine home to Britain: since Brexit, travellers from the EU have personal allowances for alcohol bought abroad (for still wine, 18 litres at the time of writing, with separate limits for sparkling wine and spirits). Rules change: check the current allowance on the UK government’s website before buying several cases.</p>`
    },
    {
      title: 'Bio, biodynamie, nature',
      html: `
        <p><span class="fr">Bio</span> (short for <span class="fr">biologique</span>) means organic: certified under EU rules, with the green leaf logo and often the French <span class="fr">AB</span> logo. <span class="fr">Biodynamie</span> (biodynamics) goes further, following practices based on Rudolf Steiner’s ideas; it has its own private certifications (Demeter, Biodyvin). <span class="fr">Vin nature</span> or <span class="fr">vin naturel</span> means minimal intervention in the cellar, few or no added sulphites; there is a voluntary label, <span class="fr">Vin méthode nature</span>, but the term itself is not legally defined, and styles range from very clean to cloudy and funky.</p>
        <p>In wine bars in Paris and other cities, natural wines are a fashion and sometimes the whole list. If that is not your taste, ask: <span class="fr">Vous avez des vins plus classiques ?</span></p>`
    }
  ],

  pronunciation: `
    <p>Place names again, now from all over France, and the sounds of the tasting room.</p>
    <h3>Saint- and liaison</h3>
    <p><span class="fr">Saint</span> is [sɛ̃]; before a vowel the <span class="fr">t</span> links: <span class="fr">Saint-Émilion</span> [sɛ̃temiljɔ̃], <span class="fr">Saint-Estèphe</span> [sɛ̃tɛstɛf]. Before a consonant it does not: <span class="fr">Saint-Joseph</span> [sɛ̃ʒozɛf].</p>
    <h3>eau, au</h3>
    <p><span class="fr">eau</span> and <span class="fr">au</span> are both a closed [o], as in German <em>Boot</em> but shorter: <span class="fr">château</span> [ʃato], <span class="fr">Bordeaux</span> [bɔʁdo], <span class="fr">Meursault</span> [mœʁso] (the <span class="fr">lt</span> is silent).</p>
    <h3>Final -ac, -ux, -et</h3>
    <ul>
      <li>Southern names in <span class="fr">-ac</span> pronounce the <span class="fr">c</span>: <span class="fr">Pauillac</span> [pojak], <span class="fr">Bergerac</span> [bɛʁʒəʁak], <span class="fr">Armagnac</span> [aʁmaɲak].</li>
      <li><span class="fr">Margaux</span> [maʁɡo], <span class="fr">Sauternes</span> [sotɛʁn] (the final <span class="fr">s</span> is silent, the <span class="fr">rn</span> heard).</li>
      <li><span class="fr">Muscadet</span> [myskadɛ], <span class="fr">Pomerol</span> [pɔmʁɔl].</li>
    </ul>
    <h3>Numbers above 69</h3>
    <p>The odd numbers are odd in sound too: <span class="fr">quatre-vingts</span> [katʁəvɛ̃] (no <span class="fr">s</span> heard before a consonant, [z] before a vowel: <span class="fr">quatre-vingts euros</span> [katʁəvɛ̃zøʁo]); <span class="fr">quatre-vingt-un</span> [katʁəvɛ̃œ̃] (the <span class="fr">t</span> is silent); <span class="fr">cent</span> [sɑ̃], <span class="fr">cent euros</span> [sɑ̃tøʁo]; <span class="fr">mille</span> [mil] (with [l], an exception to the <span class="fr">ill</span> rule of Unit 2).</p>
  `,

  phrasesIntro: `<p>For a wine shop or a domaine. Those marked “you will hear” are the merchant’s or the grower’s.</p>`,
  phraseGroups: [
    { title: 'Choosing', ids: ['p1', 'p2', 'p3', 'p4', 'p5', 'p6', 'p7', 'p8'] },
    { title: 'At the domaine', ids: ['p9', 'p10', 'p11', 'p12'] },
    { title: 'Tasting', ids: ['p13', 'p14', 'p15', 'p16', 'p17', 'p18', 'p19'] },
    { title: 'Buying', ids: ['p20', 'p21', 'p22', 'p23', 'p24', 'p25', 'p26', 'p27'] }
  ],
  phrases: [
    { id: 'p1', fr: 'Vous avez des vins de la région ?', en: 'Do you have local wines?', lit: '… wines of the region?' },
    { id: 'p2', fr: 'Je cherche un bon bordeaux, pas trop cher.', en: 'I’m looking for a good Bordeaux, not too expensive.' },
    { id: 'p3', fr: 'Quel est votre budget ?', en: 'What’s your budget?', note: 'You will hear it.' },
    { id: 'p4', fr: 'Entre quinze et vingt euros la bouteille.', en: 'Between fifteen and twenty euros a bottle.' },
    { id: 'p5', fr: 'Qu’est-ce qui vous plaît, d’habitude ?', en: 'What do you usually like?', lit: 'What pleases you, usually?', note: 'You will hear it.' },
    { id: 'p6', fr: 'Je n’y connais pas grand-chose.', en: 'I don’t know much about it.', note: 'Honest and disarming; merchants usually like to help.' },
    { id: 'p7', fr: 'C’est quel millésime ?', en: 'What vintage is it?' },
    { id: 'p8', fr: 'Il faut le boire maintenant ou le garder ?', en: 'Should it be drunk now or kept?', lit: 'Must one drink it now or keep it?' },
    { id: 'p9', fr: 'Vous faites des dégustations ?', en: 'Do you do tastings?' },
    { id: 'p10', fr: 'Il faut prendre rendez-vous ?', en: 'Do we need to make an appointment?', lit: 'Must one take an appointment?' },
    { id: 'p11', fr: 'On peut visiter la cave ?', en: 'Can we see the cellar?' },
    { id: 'p12', fr: 'C’est un vin bio ?', en: 'Is it an organic wine?' },
    { id: 'p13', fr: 'Il a une belle robe.', en: 'It has a lovely colour.', lit: 'It has a beautiful dress.', note: '<span class="fr">La robe</span>, “the dress”, is the tasting word for a wine’s colour and appearance.' },
    { id: 'p14', fr: 'Le nez est très fruité.', en: 'The nose is very fruity.' },
    { id: 'p15', fr: 'Je sens des fruits rouges.', en: 'I can smell red berries.', lit: 'I smell some red fruits.' },
    { id: 'p16', fr: 'En bouche, il est rond et souple.', en: 'On the palate it’s round and supple.', lit: 'In mouth…' },
    { id: 'p17', fr: 'Il est encore un peu jeune.', en: 'It’s still a bit young.' },
    { id: 'p18', fr: 'Il a une belle longueur.', en: 'It has a long finish.', lit: 'It has a beautiful length.' },
    { id: 'p19', fr: 'C’est un peu trop boisé pour moi.', en: 'It’s a bit too oaky for me.', lit: '… too woody…' },
    { id: 'p20', fr: 'Ça se marie bien avec quoi ?', en: 'What does it go well with?', lit: 'It marries itself well with what?' },
    { id: 'p21', fr: 'Ça va très bien avec le fromage.', en: 'It goes very well with cheese.', note: 'You will hear it.' },
    { id: 'p22', fr: 'Il peut se garder cinq ou six ans.', en: 'It will keep for five or six years.', note: 'You will hear it.' },
    { id: 'p23', fr: 'Je vais en prendre six.', en: 'I’ll take six (of it).', note: '<span class="fr">En</span>, “of it”, cannot be left out: see Grammar. <span class="fr">J’en prends six</span> is the same, shorter.' },
    { id: 'p24', fr: 'Vous pouvez me faire un carton ?', en: 'Can you make up a case for me?', note: '<span class="fr">Un carton</span>: a cardboard box, usually of six or twelve bottles.' },
    { id: 'p25', fr: 'C’est pour offrir.', en: 'It’s a present.', lit: 'It is for giving.', note: 'The shop will often wrap it.' },
    { id: 'p26', fr: 'Vous livrez au Royaume-Uni ?', en: 'Do you deliver to the UK?' },
    { id: 'p27', fr: 'Vous avez des vins plus classiques ?', en: 'Do you have more traditional wines?', note: 'Useful in a bar whose list is all natural wines.' }
  ],

  dialogue: {
    title: 'Une dégustation en Touraine',
    setting: '<p>A late-morning appointment at a small family domaine near Vouvray, on the Loire. The winegrower (<span class="fr">la vigneronne</span>) receives you in the tasting room, with the cellar behind her.</p>',
    you: 'Vous',
    lines: [
      { who: 'La vigneronne', fr: 'Bonjour ! Vous venez pour la dégustation ?', en: 'Hello! Are you here for the tasting?' },
      { who: 'Vous', fr: 'Bonjour. Oui, nous avons pris rendez-vous pour onze heures, au nom de Martin.', en: 'Hello. Yes, we made an appointment for eleven, in the name of Martin.' },
      { who: 'La vigneronne', fr: 'Très bien. On commence par le blanc : c’est du chenin, cent pour cent.', en: 'Very good. Let’s start with the white: it’s Chenin, one hundred per cent.' },
      { who: 'Vous', fr: 'Il a une belle robe, très claire. Et le nez est très floral.', en: 'It has a lovely colour, very pale. And the nose is very floral.' },
      { who: 'La vigneronne', fr: 'Oui, on sent les fleurs blanches, un peu de miel. En bouche, il est sec mais rond.', en: 'Yes, you get white flowers, a little honey. On the palate it’s dry but round.' },
      { who: 'Vous', fr: 'Il est très bon. Il faut le boire maintenant ou le garder ?', en: 'It’s very good. Should it be drunk now or kept?' },
      { who: 'La vigneronne', fr: 'Vous pouvez le boire maintenant, mais il peut se garder cinq ou six ans.', en: 'You can drink it now, but it will keep for five or six years.' },
      { who: 'La vigneronne', fr: 'Maintenant, notre rouge : du cabernet franc, élevé en fût de chêne.', en: 'Now our red: Cabernet Franc, aged in oak barrels.' },
      { who: 'Vous', fr: 'Il est encore un peu jeune, non ? Les tanins sont assez présents.', en: 'It’s still a bit young, isn’t it? The tannins are quite noticeable.' },
      { who: 'La vigneronne', fr: 'C’est vrai. Il sera meilleur dans deux ou trois ans.', en: 'That’s true. It will be better in two or three years.' },
      { who: 'Vous', fr: 'Et ça se marie bien avec quoi ?', en: 'And what does it go well with?' },
      { who: 'La vigneronne', fr: 'Avec une viande rouge, ou avec les fromages de chèvre de la région.', en: 'With red meat, or with the local goat’s cheeses.' },
      { who: 'Vous', fr: 'Parfait. Je vais prendre six bouteilles de blanc et six de rouge.', en: 'Perfect. I’ll take six bottles of white and six of red.' },
      { who: 'La vigneronne', fr: 'Je vous fais deux cartons ?', en: 'Shall I make you up two cases?' },
      { who: 'Vous', fr: 'Oui, s’il vous plaît. Ça fait combien ?', en: 'Yes, please. How much is that?' },
      { who: 'La vigneronne', fr: 'Le blanc est à douze euros, le rouge à quatorze. Ça fait cent cinquante-six euros.', en: 'The white is twelve euros, the red fourteen. That makes a hundred and fifty-six euros.' }
    ],
    notes: [
      { ref: 'nous avons pris rendez-vous', html: '<span class="fr">Prendre rendez-vous</span>: to make an appointment. Past with <span class="fr">avoir</span>, participle <span class="fr">pris</span> (Unit 3).' },
      { ref: 'c’est du chenin', html: 'A grape name with <span class="fr">du</span>: “it is (some) Chenin”, made from it. <span class="fr">C’est un chenin</span> would be “it is a Chenin (wine)”. Both are heard.' },
      { ref: 'cent pour cent', html: '“One hundred per cent”: <span class="fr">pour cent</span> is “per cent”, written <span class="fr">%</span>. Vouvray is made only from Chenin Blanc.' },
      { ref: 'on sent les fleurs blanches', html: '<span class="fr">On sent</span>: “one smells, you get”. <span class="fr">Sentir</span> covers both smell and feel. Tasters speak of <span class="fr">fleurs blanches</span> (white flowers), <span class="fr">fruits rouges</span> (red berries), <span class="fr">fruits noirs</span> (dark berries), and many more.' },
      { ref: 'élevé en fût de chêne', html: '<span class="fr">L’élevage</span> (“raising”) is the time a wine spends maturing before bottling; <span class="fr">élevé en fût</span>: matured in barrel, <span class="fr">en cuve</span>: in tank. <span class="fr">Le chêne</span>: oak.' },
      { ref: 'non ?', html: 'Tagged on at the end, <span class="fr">non ?</span> asks for agreement, like English “isn’t it?” or German <em>oder?</em>' },
      { ref: 'Il sera meilleur', html: '<span class="fr">Sera</span> is the future of <span class="fr">être</span>: “it will be”. Recognise it here; the future comes in a later unit.' },
      { ref: 'six de rouge', html: '“Six of red”: the noun <span class="fr">bouteilles</span> is not repeated. You could also say <span class="fr">six bouteilles de chaque</span> (“six of each”).' },
      { ref: 'cent cinquante-six', html: '156: <span class="fr">cent</span> + <span class="fr">cinquante-six</span>, no “and” as in English. See Grammar for the numbers above 69.' }
    ]
  },

  vocab: [
    { id: 'v1', la: 'le domaine', head: 'le domaine', pos: 'noun', g: 'm', pron: '[dɔmɛn]', en: 'wine estate (esp. Burgundy, Loire); domain' },
    { id: 'v2', la: 'le château', head: 'le château', pos: 'noun', g: 'm', pron: '[ʃato]', en: 'wine estate (Bordeaux); castle', note: 'Plural <span class="fr">les châteaux</span>.' },
    { id: 'v3', la: 'la cave', head: 'la cave', pos: 'noun', g: 'f', pron: '[kav]', en: 'cellar; wine shop', note: 'A false friend: a cave is <span class="fr">une grotte</span>.' },
    { id: 'v4', la: 'la vigne', head: 'la vigne', pos: 'noun', g: 'f', pron: '[viɲ]', en: 'vine; vineyard' },
    { id: 'v5', la: 'le vignoble', head: 'le vignoble', pos: 'noun', g: 'm', pron: '[viɲɔbl]', en: 'vineyard; wine-growing area' },
    { id: 'v6', la: 'les vendanges', head: 'les vendanges', pos: 'noun', g: 'f', pron: '[vɑ̃dɑ̃ʒ]', en: 'grape harvest', note: 'Usually plural.' },
    { id: 'v7', la: 'le millésime', head: 'le millésime', pos: 'noun', g: 'm', pron: '[milezim]', en: 'vintage (year)' },
    { id: 'v8', la: 'le cru', head: 'le cru', pos: 'noun', g: 'm', pron: '[kʁy]', en: 'growth: recognised vineyard or estate', note: '<span class="fr">grand cru</span>, <span class="fr">premier cru</span>; meaning varies by region. As an adjective <span class="fr">cru</span> means raw.' },
    { id: 'v9', la: 'l’étiquette', head: 'l’étiquette', pos: 'noun', g: 'f', pron: '[etikɛt]', en: 'label' },
    { id: 'v10', la: 'le fût', head: 'le fût', pos: 'noun', g: 'm', pron: '[fy]', en: 'barrel, cask', note: 'Also <span class="fr">la barrique</span> (a 225-litre barrel).' },
    { id: 'v11', la: 'le chêne', head: 'le chêne', pos: 'noun', g: 'm', pron: '[ʃɛn]', en: 'oak' },
    { id: 'v12', la: 'boisé, boisée', head: 'boisé', say: 'boisé, boisée', pos: 'adjective', pron: '[bwaze]', en: 'oaky, woody' },
    { id: 'v13', la: 'la robe', head: 'la robe', pos: 'noun', g: 'f', pron: '[ʁɔb]', en: 'colour, appearance (of wine); dress' },
    { id: 'v14', la: 'le nez', head: 'le nez', pos: 'noun', g: 'm', pron: '[ne]', en: 'nose, aroma' },
    { id: 'v15', la: 'la bouche', head: 'la bouche', pos: 'noun', g: 'f', pron: '[buʃ]', en: 'mouth; palate', note: '<span class="fr">en bouche</span>: on the palate.' },
    { id: 'v16', la: 'la longueur', head: 'la longueur', pos: 'noun', g: 'f', pron: '[lɔ̃ɡœʁ]', en: 'length, finish' },
    { id: 'v17', la: 'les tanins', head: 'les tanins', pos: 'noun', g: 'm', pron: '[tanɛ̃]', en: 'tannins', note: 'Also spelt <span class="fr">tannins</span>. <span class="fr">tannique</span>: tannic.' },
    { id: 'v18', la: 'souple', head: 'souple', pos: 'adjective', pron: '[supl]', en: 'supple, smooth (soft tannins)' },
    { id: 'v19', la: 'vif, vive', head: 'vif', say: 'vif, vive', pos: 'adjective', pron: '[vif, viv]', en: 'crisp, lively (fresh acidity)' },
    { id: 'v20', la: 'minéral, minérale', head: 'minéral', say: 'minéral, minérale', pos: 'adjective', pron: '[mineʁal]', en: 'mineral, stony' },
    { id: 'v21', la: 'floral, florale', head: 'floral', say: 'floral, florale', pos: 'adjective', pron: '[flɔʁal]', en: 'floral' },
    { id: 'v22', la: 'épicé, épicée', head: 'épicé', say: 'épicé, épicée', pos: 'adjective', pron: '[epise]', en: 'spicy' },
    { id: 'v23', la: 'jeune', head: 'jeune', pos: 'adjective', pron: '[ʒœn]', en: 'young' },
    { id: 'v24', la: 'les fruits rouges', head: 'les fruits rouges', pos: 'noun', g: 'm', pron: '[fʁɥi ʁuʒ]', en: 'red berries (strawberry, raspberry, cherry…)' },
    { id: 'v25', la: 'le miel', head: 'le miel', pos: 'noun', g: 'm', pron: '[mjɛl]', en: 'honey' },
    { id: 'v26', la: 'la fleur', head: 'la fleur', pos: 'noun', g: 'f', pron: '[flœʁ]', en: 'flower' },
    { id: 'v27', la: 'sentir', head: 'sentir', pos: 'verb', pron: '[sɑ̃tiʁ]', en: 'to smell; to feel', note: '<span class="fr">je sens, on sent</span>; <span class="fr">ça sent bon</span>: it smells good.' },
    { id: 'v28', la: 'garder', head: 'garder', pos: 'verb', pron: '[ɡaʁde]', en: 'to keep', note: '<span class="fr">un vin de garde</span>: a wine for keeping.' },
    { id: 'v29', la: 'se marier avec', head: 'se marier avec', pos: 'verb', pron: '[sə maʁje avɛk]', en: 'to go well with (food and wine); to marry' },
    { id: 'v30', la: 'cracher', head: 'cracher', pos: 'verb', pron: '[kʁaʃe]', en: 'to spit', note: '<span class="fr">le crachoir</span>: spittoon.' },
    { id: 'v31', la: 'chercher', head: 'chercher', pos: 'verb', pron: '[ʃɛʁʃe]', en: 'to look for', note: 'No preposition: <span class="fr">je cherche un vin</span>, I’m looking for a wine.' },
    { id: 'v32', la: 'livrer', head: 'livrer', pos: 'verb', pron: '[livʁe]', en: 'to deliver', note: '<span class="fr">la livraison</span>: delivery.' },
    { id: 'v33', la: 'offrir', head: 'offrir', pos: 'verb', pron: '[ɔfʁiʁ]', en: 'to give (as a present); to offer', note: '<span class="fr">c’est offert</span>: it’s on the house.' },
    { id: 'v34', la: 'le carton', head: 'le carton', pos: 'noun', g: 'm', pron: '[kaʁtɔ̃]', en: 'cardboard box; case (of wine)' },
    { id: 'v35', la: 'le rendez-vous', head: 'le rendez-vous', pos: 'noun', g: 'm', pron: '[ʁɑ̃devu]', en: 'appointment; meeting', note: '<span class="fr">prendre rendez-vous</span>: to make an appointment.' },
    { id: 'v36', la: 'bio', head: 'bio', pos: 'adjective', pron: '[bjo]', en: 'organic', note: 'Short for <span class="fr">biologique</span>; does not change: <span class="fr">des vins bio</span>.' },
    { id: 'v37', la: 'le sommelier, la sommelière', head: 'le sommelier', say: 'le sommelier, la sommelière', pos: 'noun', g: 'mf', pron: '[sɔməlje, sɔməljɛʁ]', en: 'wine waiter, sommelier' },
    { id: 'v38', la: 'l’année', head: 'l’année', pos: 'noun', g: 'f', pron: '[ane]', en: 'year', note: '<span class="fr">l’an</span> (m.) for counting: <span class="fr">cinq ans</span>; <span class="fr">l’année</span> for the year as a span: <span class="fr">une bonne année</span>.' },
    { id: 'v39', la: 'cher, chère', head: 'cher', say: 'cher, chère', pos: 'adjective', pron: '[ʃɛʁ]', en: 'expensive; dear' },
    { id: 'v40', la: 'maintenant', head: 'maintenant', pos: 'adverb', pron: '[mɛ̃tnɑ̃]', en: 'now' }
  ],

  grammar: [
    {
      title: 'Numbers from 70 to 1000, and years',
      html: `
        <p>French counts in twenties above sixty: 70 is “sixty-ten”, 80 “four twenties”, 90 “four twenties ten”.</p>
        <div class="tablewrap"><table><thead><tr><th></th><th>French</th><th></th><th>French</th></tr></thead>
        <tbody><tr><td>70</td><td class="fr">soixante-dix</td><td>71</td><td class="fr">soixante et onze</td></tr>
        <tr><td>72</td><td class="fr">soixante-douze</td><td>79</td><td class="fr">soixante-dix-neuf</td></tr>
        <tr><td>80</td><td class="fr">quatre-vingts</td><td>81</td><td class="fr">quatre-vingt-un</td></tr>
        <tr><td>90</td><td class="fr">quatre-vingt-dix</td><td>99</td><td class="fr">quatre-vingt-dix-neuf</td></tr>
        <tr><td>100</td><td class="fr">cent</td><td>156</td><td class="fr">cent cinquante-six</td></tr>
        <tr><td>200</td><td class="fr">deux cents</td><td>250</td><td class="fr">deux cent cinquante</td></tr>
        <tr><td>1000</td><td class="fr">mille</td><td>2000</td><td class="fr">deux mille</td></tr></tbody></table></div>
        <p>Three spelling details, which make no difference to understanding: <span class="fr">quatre-vingts</span> and <span class="fr">deux cents</span> take an <span class="fr">-s</span> only when nothing follows; <span class="fr">mille</span> never takes one; and 81 and 91 have no <span class="fr">et</span> (<span class="fr">quatre-vingt-un</span>), unlike 21 to 71.</p>
        <p>Years are read as ordinary numbers: <span class="fr">2023</span> is <span class="fr">deux mille vingt-trois</span>; <span class="fr">1990</span> is <span class="fr">mille neuf cent quatre-vingt-dix</span> (also written <span class="fr">mil</span>). A vintage is <span class="fr">un 2019</span> (masculine: <span class="fr">un vin</span> is understood).</p>
        <p>In Belgium and Switzerland you will meet <span class="fr">septante</span> (70) and <span class="fr">nonante</span> (90), and in parts of Switzerland <span class="fr">huitante</span> (80). They are standard there, not slang; in France they are recognised but not used.</p>
        <p class="aside"><strong>German angle.</strong> The twenties are as unique to French as <em>einundzwanzig</em> is to German. If you get lost in a long price, catch the first word: <span class="fr">quatre-vingt…</span> means 80 to 99; <span class="fr">soixante…</span> means 60 to 79.</p>`
    },
    {
      title: 'Il faut: one must, you need',
      html: `
        <p><span class="fr">Il faut</span> + infinitive says what is necessary, without saying who must do it: “one must, you have to, it should be”.</p>
        <ul>
          <li><span class="fr">Il faut prendre rendez-vous ?</span> “Do you need to make an appointment?”</li>
          <li><span class="fr">Il faut le boire maintenant ?</span> “Should it be drunk now?”</li>
          <li><span class="fr">Il faut le carafer.</span> “It needs decanting.”</li>
        </ul>
        <p><span class="fr">Il faut</span> + noun says what is needed: <span class="fr">il faut un tire-bouchon</span> (“we need a corkscrew”). In the negative, <span class="fr">il ne faut pas</span> means “one must not”, not “one need not”: <span class="fr">il ne faut pas le garder trop longtemps</span>, “it shouldn’t be kept too long”.</p>
        <p>The verb <span class="fr">falloir</span> exists only with <span class="fr">il</span>, so there is nothing else to learn about it for now. Its past is <span class="fr">il a fallu</span>, its future <span class="fr">il faudra</span>.</p>
        <p class="aside"><strong>German angle.</strong> <span class="fr">Il faut</span> is close to <em>man muss</em>, and <span class="fr">il ne faut pas</span> to <em>man darf nicht</em>, not <em>man muss nicht</em>. English “you mustn’t” works the same way.</p>`
    },
    {
      title: 'en: of it, of them, some',
      html: `
        <p>In a shop you constantly refer back to something already mentioned with a number or a quantity: “I’ll take six (of them)”, “Do you have any?” English can leave “of them” out; French cannot. It uses <span class="fr">en</span>, placed before the verb like the other pronouns:</p>
        <ul>
          <li><span class="fr">Ce vouvray ? J’<b>en</b> prends six.</span> “This Vouvray? I’ll take six (of it).”</li>
          <li><span class="fr">Vous avez du crémant ? — Oui, j’<b>en</b> ai.</span> “Do you have crémant? Yes, I have (some).”</li>
          <li><span class="fr">Vous <b>en</b> voulez combien ?</span> “How many (of them) do you want?”</li>
          <li><span class="fr">Il n’y <b>en</b> a plus.</span> “There’s none left.”</li>
        </ul>
        <p><span class="fr">En</span> replaces anything introduced with <span class="fr">du, de la, des</span> or a number. Compare with <span class="fr">le</span>, which replaces a definite thing: <span class="fr">Le vouvray ? Je <b>le</b> prends</span> (“I’ll have it”, the wine as a choice) against <span class="fr">J’<b>en</b> prends six</span> (“six of it”, a quantity).</p>
        <p>The phrase <span class="fr">je vais en prendre six</span> follows the rule of Unit 3: the pronoun goes before the verb it belongs to, <span class="fr">prendre</span>, not before <span class="fr">vais</span>.</p>`
    },
    {
      title: 'Verbs with se: ça se garde, ça se boit frais',
      html: `
        <p>French often uses a verb with <span class="fr">se</span> where English uses a passive or an intransitive verb:</p>
        <ul>
          <li><span class="fr">Il peut <b>se</b> garder cinq ans.</span> “It will keep (can be kept) for five years.”</li>
          <li><span class="fr">Ça <b>se</b> boit frais.</span> “It is drunk chilled, it should be served cool.”</li>
          <li><span class="fr">Ça <b>se</b> marie bien avec le fromage.</span> “It goes well with cheese.”</li>
          <li><span class="fr">Ça <b>se</b> mange avec du pain.</span> “You eat it with bread.”</li>
        </ul>
        <p>These sentences describe how something is normally done or how it behaves; you will meet them on labels, in shops and in recipes. The pattern is <span class="fr">ça/il/elle</span> + <span class="fr">se</span> + verb. Before a vowel <span class="fr">se</span> becomes <span class="fr">s’</span>: <span class="fr">ça s’accorde bien</span>.</p>
        <p class="aside"><strong>German angle.</strong> German does the same with <em>sich</em>: <em>der Wein hält sich fünf Jahre</em>, <em>das trinkt sich gut</em>. If a German reflexive comes naturally, the French one usually does too.</p>`
    }
  ],

  grammarCards: [
    { id: 'gc1', front: '70, 71, 80, 81, 90, 99', back: 'soixante-dix, soixante et onze, quatre-vingts, quatre-vingt-un, quatre-vingt-dix, quatre-vingt-dix-neuf' },
    { id: 'gc2', front: '2023 (as a year)', back: 'deux mille vingt-trois' },
    { id: 'gc3', front: 'Do you need to make an appointment?', back: 'Il faut prendre rendez-vous ?' },
    { id: 'gc4', front: 'il ne faut pas…', back: 'one must not… (German: man darf nicht), not “one need not”' },
    { id: 'gc5', front: 'This Vouvray? I’ll take six (of it).', back: 'Ce vouvray ? J’en prends six.' },
    { id: 'gc6', front: 'le or en? “I’ll have it” / “I’ll take three of it”', back: 'Je le prends. / J’en prends trois.' },
    { id: 'gc7', front: 'It will keep five years. / It’s served chilled.', back: 'Il peut se garder cinq ans. / Ça se boit frais.' },
    { id: 'gc8', front: 'robe, nez, bouche, longueur', back: 'colour, nose, palate, finish (the order of a tasting)' }
  ],

  reference: [
    { title: 'Numbers 70–1000', headers: ['', 'French', 'said'], rows: [
      ['70', 'soixante-dix', '[swasɑ̃tdis]'], ['71', 'soixante et onze', '[swasɑ̃teɔ̃z]'], ['75', 'soixante-quinze', '[swasɑ̃tkɛ̃z]'], ['80', 'quatre-vingts', '[katʁəvɛ̃]'],
      ['81', 'quatre-vingt-un', '[katʁəvɛ̃œ̃]'], ['90', 'quatre-vingt-dix', '[katʁəvɛ̃dis]'], ['95', 'quatre-vingt-quinze', '[katʁəvɛ̃kɛ̃z]'], ['100', 'cent', '[sɑ̃]'],
      ['200', 'deux cents', '[døsɑ̃]'], ['500', 'cinq cents', '[sɛ̃sɑ̃]'], ['1000', 'mille', '[mil]']] },
    { title: 'The regions', headers: ['region', 'main grapes', 'known for'], rows: [
      ['Bordeaux', 'cabernet sauvignon, merlot; sauvignon, sémillon', 'red blends; Sauternes'], ['Bourgogne', 'pinot noir, chardonnay', 'single-vineyard reds and whites'],
      ['Beaujolais', 'gamay', 'light reds; the ten crus'], ['Rhône (north)', 'syrah', 'Côte-Rôtie, Hermitage'], ['Rhône (south)', 'grenache, syrah, mourvèdre', 'Côtes-du-Rhône, Châteauneuf-du-Pape'],
      ['Loire', 'sauvignon, chenin, cabernet franc, melon', 'Sancerre, Vouvray, Chinon, Muscadet'], ['Alsace', 'riesling, gewurztraminer, pinot gris', 'whites labelled by grape'],
      ['Champagne', 'pinot noir, chardonnay, meunier', 'sparkling'], ['Provence', 'grenache, cinsault', 'rosé'], ['Languedoc', 'grenache, syrah, carignan', 'value reds']] },
    { title: 'Tasting words', headers: ['French', 'English'], rows: [
      ['la robe', 'colour, appearance'], ['le nez', 'nose'], ['la bouche', 'palate'], ['la longueur', 'length, finish'], ['vif', 'crisp'], ['rond', 'round'],
      ['souple', 'supple'], ['tannique', 'tannic'], ['boisé', 'oaky'], ['minéral', 'mineral'], ['fruité', 'fruity'], ['épicé', 'spicy']] }
  ],

  exercises: [
    { id: 'e1', type: 'mc', prompt: 'In Burgundy, which is the higher classification?', options: ['grand cru', 'premier cru', 'village', 'Bourgogne'], answer: 0, explain: 'Grand cru is the top vineyard level, premier cru the next.' },
    { id: 'e2', type: 'mc', prompt: 'A Bordeaux estate is usually called…', options: ['un château', 'un domaine', 'une cave', 'un caveau'], answer: 0, explain: 'In Bordeaux, château, whether or not there is a castle; in Burgundy, domaine.' },
    { id: 'e3', type: 'mc', prompt: 'On a label, <span class="fr">le millésime</span> is…', options: ['the year of the harvest', 'the alcohol content', 'the grape variety', 'the bottle size'], answer: 0, explain: 'millésime: vintage.' },
    { id: 'e4', type: 'mc', prompt: 'Which number is <span class="fr">quatre-vingt-dix-sept</span>?', options: ['97', '87', '77', '417'], answer: 0, explain: '4 × 20 + 10 + 7 = 97.' },
    { id: 'e5', type: 'gap', prompt: '<span class="fr">Il ___ prendre rendez-vous ?</span>', hint: ' (one must)', answers: ['faut'], full: 'Il faut prendre rendez-vous ?', explain: 'il faut + infinitive.' },
    { id: 'e6', type: 'gap', prompt: '<span class="fr">Ce crémant ? J’___ prends six.</span>', hint: ' (of it)', answers: ['en'], full: 'Ce crémant ? J’en prends six.', explain: 'With a number, en: “six of it”.' },
    { id: 'e7', type: 'gap', prompt: '<span class="fr">Le chinon ? Je ___ prends.</span>', hint: ' (it: le or en?)', answers: ['le'], full: 'Le chinon ? Je le prends.', explain: 'A definite thing, no quantity: le.' },
    { id: 'e8', type: 'gap', prompt: '<span class="fr">Ça ___ boit frais.</span>', hint: ' (it is drunk)', answers: ['se'], full: 'Ça se boit frais.', explain: 'se + verb: how something is normally done.' },
    { id: 'e9', type: 'gap', prompt: '<span class="fr">Il a une belle ___.</span>', hint: ' (colour, appearance: the tasting word)', answers: ['robe'], full: 'Il a une belle robe.', explain: 'la robe: the “dress” of a wine.' },
    { id: 'e10', type: 'match', prompt: 'Match the regions and grapes.', pairs: [['Beaujolais', 'gamay'], ['Sancerre', 'sauvignon'], ['Vouvray', 'chenin'], ['Côte-Rôtie', 'syrah'], ['Chablis', 'chardonnay']] },
    { id: 'e11', type: 'match', prompt: 'Match the numbers.', pairs: [['soixante-dix', '70'], ['soixante et onze', '71'], ['quatre-vingts', '80'], ['quatre-vingt-dix', '90'], ['cent cinquante', '150']] },
    { id: 'e12', type: 'order', prompt: 'Put the words in order.', source: 'Should it be drunk now or kept?', tokens: ['Il', 'faut', 'le boire', 'maintenant', 'ou', 'le garder ?'] },
    { id: 'e13', type: 'order', prompt: 'Put the words in order.', source: 'I’m looking for a good Bordeaux, not too expensive.', tokens: ['Je', 'cherche', 'un', 'bon', 'bordeaux,', 'pas', 'trop', 'cher.'] },
    { id: 'e14', type: 'translate', dir: 'en-fr', source: 'What does it go well with?', accepted: ['Ça se marie bien avec quoi ?', 'Ça va bien avec quoi ?', 'Il se marie bien avec quoi ?', 'Il va bien avec quoi ?', 'Avec quoi ça se marie bien ?', 'Avec quoi est-ce que ça va bien ?'], model: 'Ça se marie bien avec quoi ?', explain: 'se marier avec: to go well with; quoi at the end in speech.' },
    { id: 'e15', type: 'translate', dir: 'en-fr', source: 'It’s a present.', accepted: ['C’est pour offrir.', 'C’est un cadeau.'], model: 'C’est pour offrir.', explain: 'pour offrir: “for giving”; un cadeau, a present, works too.' },
    { id: 'e16', type: 'translate', dir: 'en-fr', source: 'Is it an organic wine?', accepted: ['C’est un vin bio ?', 'C’est un vin biologique ?', 'Est-ce que c’est un vin bio ?', 'Il est bio ?', 'Il est bio, ce vin ?', 'Ce vin est bio ?'], model: 'C’est un vin bio ?', explain: 'bio never changes and follows the noun.' },
    { id: 'e17', type: 'translate', dir: 'fr-en', source: 'Il est encore un peu jeune.', accepted: ['It’s still a bit young.', 'It is still a bit young', 'It’s still a little young', 'It is still a little young', 'It’s still slightly young', 'It is still rather young'], model: 'It’s still a bit young.' },
    { id: 'e18', type: 'translate', dir: 'fr-en', source: 'Je n’y connais pas grand-chose.', accepted: ['I don’t know much about it.', 'I do not know much about it', 'I don’t know a lot about it', 'I don’t know much about this', 'I know very little about it', 'I don’t know much about wine', 'I know little about it'], model: 'I don’t know much about it.' },
    { id: 'e19', type: 'listen', text: 'Ça fait quatre-vingt-quatre euros.', prompt: 'How much is it?', options: ['84 €', '64 €', '74 €', '24 €'], answer: 0, explain: 'quatre-vingt-quatre: 4 × 20 + 4 = 84.' },
    { id: 'e20', type: 'listen', text: 'Il peut se garder cinq ou six ans.', prompt: 'What are you told about the wine?', options: ['It will keep for five or six years.', 'It is five or six years old.', 'It costs five or six euros.', 'It should be opened five or six hours before.'], answer: 0, explain: 'se garder: to keep.' },
    { id: 'e21', type: 'listen', text: 'C’est un millésime deux mille dix-neuf.', prompt: 'Which vintage?', options: ['2019', '2009', '1999', '2016'], answer: 0, explain: 'deux mille dix-neuf: 2019.' },
    { id: 'e22', type: 'listen', text: 'Je sens des fruits rouges.', explain: 'Je sens des fruits rouges: I can smell red berries.' },
    { id: 'e23', type: 'mc', prompt: 'At a small domaine, after a free tasting of several wines, it is usual to…', options: ['buy a bottle or two', 'leave a tip of 20%', 'buy a case', 'leave without a word'], answer: 0, explain: 'Not an obligation, but a common courtesy.' }
  ],

  reading: {
    title: 'L’étiquette d’un vouvray',
    note: 'The front and back labels of an invented Loire white. Tap any word for its meaning.',
    text: `DOMAINE DES GRANGES
Vouvray
Appellation Vouvray Contrôlée
Sec — 2023
Mis en bouteille au domaine
Famille Moreau, vignerons à Vouvray, France
13 % vol. — 75 cl — Contient des sulfites
Agriculture biologique

Né sur les coteaux de Vouvray, ce chenin offre un nez de fleurs blanches et de poire. Bouche ronde et fraîche, belle longueur.
À servir à 10 °C avec les poissons, les volailles et les fromages de chèvre.
À boire dès maintenant ou à garder jusqu’en 2030.`,
    glosses: {
      'domaine': 'wine estate', 'des': 'of the (de + les)', 'granges': 'barns (la grange)', 'vouvray': 'Vouvray (village and appellation on the Loire)', 'appellation': 'protected place name',
      'contrôlée': 'controlled (guaranteed)', 'sec': 'dry', 'mis': 'put (mettre); mis en bouteille: bottled', 'en': 'in, into', 'bouteille': 'bottle', 'au': 'at the (à + le)',
      'famille': 'family', 'moreau': 'Moreau (a surname)', 'vignerons': 'winegrowers', 'à': 'in, at', 'france': 'France', 'vol': 'volume (alcohol by volume)', 'cl': 'centilitres',
      'contient': 'contains (contenir)', 'sulfites': 'sulphites', 'agriculture': 'farming, agriculture', 'biologique': 'organic', 'né': 'born', 'sur': 'on', 'les': 'the', 'coteaux': 'hillsides, slopes (le coteau)',
      'de': 'of', 'ce': 'this', 'chenin': 'Chenin Blanc (white grape)', 'offre': 'offers (offrir)', 'un': 'a', 'nez': 'nose, aroma', 'fleurs': 'flowers', 'blanches': 'white (fem. pl.)', 'et': 'and',
      'poire': 'pear', 'bouche': 'palate', 'ronde': 'round (fem.)', 'fraîche': 'fresh (fem.)', 'belle': 'beautiful, fine (fem.)', 'longueur': 'length, finish', 'servir': 'serve',
      'c': 'degrees Celsius', 'avec': 'with', 'poissons': 'fish (dishes)', 'volailles': 'poultry (la volaille)', 'fromages': 'cheeses', 'chèvre': 'goat; goat’s cheese', 'boire': 'drink',
      'dès': 'from (a time) on', 'maintenant': 'now', 'ou': 'or', 'garder': 'keep', 'jusqu': 'until (jusque before a vowel)'
    },
    translation: 'DOMAINE DES GRANGES. Vouvray. Appellation Vouvray Contrôlée. Dry, 2023. Bottled at the estate. The Moreau family, winegrowers at Vouvray, France. 13% vol., 75 cl. Contains sulphites. Organic farming. Born on the slopes of Vouvray, this Chenin offers a nose of white flowers and pear. Round and fresh on the palate, with a long finish. Serve at 10 °C with fish, poultry and goat’s cheeses. Drink now or keep until 2030.',
    notes: [
      { ref: 'Sec', html: 'Vouvray is made in every style from dry to sweet and sparkling, so the label must say which. <span class="fr">Sec</span> here; <span class="fr">demi-sec</span>, <span class="fr">moelleux</span> and <span class="fr">pétillant</span> or <span class="fr">mousseux</span> exist too.' },
      { ref: 'Mis en bouteille au domaine', html: 'Bottled by the grower, not by a merchant. A sign of a single estate, not in itself of quality.' },
      { ref: 'Bouche ronde et fraîche, belle longueur', html: 'Back labels write in note form, without verbs. The adjectives agree with <span class="fr">la bouche</span> and <span class="fr">la longueur</span>: <span class="fr">ronde, fraîche, belle</span>.' },
      { ref: 'À servir à 10 °C', html: '<span class="fr">À</span> + infinitive on a label is an instruction: “to be served”, “to drink”. Compare <span class="fr">à emporter</span>, “to take away”.' },
      { ref: 'jusqu’en 2030', html: '<span class="fr">Jusqu’en</span> + year: “until”. <span class="fr">Jusque</span> loses its <span class="fr">e</span> before a vowel.' }
    ],
    questions: [
      { id: 'r1', type: 'mc', prompt: 'Which grape is this wine made from?', options: ['chenin', 'chardonnay', 'sauvignon', 'gamay'], answer: 0, explain: 'ce chenin offre…' },
      { id: 'r2', type: 'mc', prompt: 'At what temperature should it be served?', options: ['10 °C', '13 °C', '18 °C', '75 °C'], answer: 0, explain: 'À servir à 10 °C. 13 % is the alcohol, 75 cl the volume.' },
      { id: 'r3', type: 'mc', prompt: 'How long can it be kept?', options: ['until 2030', 'until 2023', 'it must be drunk now', 'ten years'], answer: 0, explain: 'à garder jusqu’en 2030.' },
      { id: 'r4', type: 'mc', prompt: 'What does <span class="fr">agriculture biologique</span> tell you?', options: ['It is organic.', 'It is from a cooperative.', 'It is sweet.', 'It contains no sulphites.'], answer: 0, explain: 'biologique: organic. The label also says it contains sulphites.' }
    ]
  },

  test: {
    count: 12,
    vocabQuestions: 3,
    items: [
      { id: 't1', type: 'gap', prompt: '<span class="fr">Vous avez du chablis ? — Oui, j’___ ai.</span>', hint: ' (some)', answers: ['en'], full: 'Vous avez du chablis ? — Oui, j’en ai.', explain: 'en replaces du chablis.' },
      { id: 't2', type: 'gap', prompt: '<span class="fr">Il ___ le carafer.</span>', hint: ' (it needs: one must)', answers: ['faut'], full: 'Il faut le carafer.', explain: 'il faut + infinitive.' },
      { id: 't3', type: 'gap', prompt: '<span class="fr">Ça se ___ bien avec le fromage.</span>', hint: ' (goes well: marier)', answers: ['marie'], full: 'Ça se marie bien avec le fromage.', explain: 'se marier avec: to go well with.' },
      { id: 't4', type: 'gap', prompt: '<span class="fr">Le ___ est très fruité.</span>', hint: ' (the nose)', answers: ['nez'], full: 'Le nez est très fruité.', explain: 'le nez: the nose, the aroma.' },
      { id: 't5', type: 'mc', prompt: 'Which number is <span class="fr">soixante-quinze</span>?', options: ['75', '65', '95', '615'], answer: 0, explain: '60 + 15 = 75.' },
      { id: 't6', type: 'mc', prompt: '<span class="fr">Il ne faut pas le garder trop longtemps</span> means…', options: ['It shouldn’t be kept too long.', 'It doesn’t need to be kept long.', 'It can’t be kept.', 'It has been kept too long.'], answer: 0, explain: 'il ne faut pas: one must not (man darf nicht).' },
      { id: 't7', type: 'mc', prompt: 'Which region labels its wines by grape?', options: ['Alsace', 'Bordeaux', 'Burgundy', 'the Rhône'], answer: 0, explain: 'Alsace: riesling, gewurztraminer, pinot gris…' },
      { id: 't8', type: 'translate', dir: 'en-fr', source: 'Do you need to make an appointment?', accepted: ['Il faut prendre rendez-vous ?', 'Est-ce qu’il faut prendre rendez-vous ?', 'Faut-il prendre rendez-vous ?', 'Il faut prendre un rendez-vous ?'], model: 'Il faut prendre rendez-vous ?', explain: 'il faut + infinitive; prendre rendez-vous, usually without an article.' },
      { id: 't9', type: 'translate', dir: 'en-fr', source: 'I’ll take six bottles.', accepted: ['Je vais prendre six bouteilles.', 'Je prends six bouteilles.', 'J’en prends six.', 'Je vais en prendre six.'], model: 'Je vais prendre six bouteilles.', explain: 'je vais prendre or je prends; with en if the wine has been mentioned.' },
      { id: 't10', type: 'translate', dir: 'fr-en', source: 'Vous livrez au Royaume-Uni ?', accepted: ['Do you deliver to the UK?', 'Do you deliver to the United Kingdom?', 'Do you deliver to Britain?', 'Do you ship to the UK?', 'Do you deliver to the U.K.?', 'Can you deliver to the UK?'], model: 'Do you deliver to the UK?' },
      { id: 't11', type: 'translate', dir: 'fr-en', source: 'C’est un peu trop boisé pour moi.', accepted: ['It’s a bit too oaky for me.', 'It is a bit too oaky for me', 'It’s a little too oaky for me', 'It is a little too oaky for me', 'It’s a bit too woody for me', 'It is a bit too woody for me', 'This is a bit too oaky for me'], model: 'It’s a bit too oaky for me.' },
      { id: 't12', type: 'translate', dir: 'en-fr', source: 'Should it be drunk now or kept?', accepted: ['Il faut le boire maintenant ou le garder ?', 'Il faut le boire tout de suite ou le garder ?', 'On doit le boire maintenant ou le garder ?'], model: 'Il faut le boire maintenant ou le garder ?', explain: 'il faut + infinitive; le before each verb it belongs to.' },
      { id: 't13', type: 'listen', text: 'Il a une belle longueur.', accepted: ['Il a une belle longueur.'], explain: 'Il a une belle longueur: it has a long finish.' },
      { id: 't14', type: 'listen', text: 'Le carton de six est à quatre-vingt-dix euros.', prompt: 'How much is the case of six?', options: ['90 €', '80 €', '70 €', '96 €'], answer: 0, explain: 'quatre-vingt-dix: 90.' },
      { id: 't15', type: 'order', prompt: 'Put the words in order.', source: 'It has a lovely colour.', tokens: ['Il', 'a', 'une', 'belle', 'robe.'] },
      { id: 't16', type: 'match', prompt: 'Match the French and the English.', pairs: [['le millésime', 'vintage'], ['l’étiquette', 'label'], ['le fût', 'barrel'], ['les vendanges', 'grape harvest'], ['cracher', 'to spit']] }
    ]
  }
});
