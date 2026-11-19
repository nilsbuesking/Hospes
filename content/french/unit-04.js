/*
 * French — Unit 4: Le vin (I)
 * Content file only. The engine (app.js) reads this structure; no code here.
 * Original material. Forms and claims to be checked are listed in CONTENT-CHECKS.md.
 * French text uses the typographic apostrophe (’) and a no-break space before ? ! : as in French print.
 */
Hospes.addLecture('french', {
  id: 'fr-04',
  number: 4,
  title: 'Le vin (I)',
  subtitle: 'Ordering wine by the glass and the bottle, colours, styles and sweetness, the apéritif, toasting; describing and comparing; le, la, les as “it”; j’aime le vin, je bois du vin',
  minutes: 50,

  intro: `
    <p>This is the first of two wine units. It covers what you need in a bar, a bistro or a wine bar: asking what is available by the glass, saying what kind of wine you like (red or white, light or full, dry or sweet), tasting before you choose, ordering an apéritif, and toasting. Unit 5 goes on to regions, appellations and the vocabulary of tasting.</p>
    <p>Most of the language is description: <span class="fr">un rouge léger</span>, <span class="fr">un blanc sec</span>, <span class="fr">plus rond</span>, <span class="fr">moins sucré</span>. The grammar of the unit is therefore about adjectives (their feminine forms, and comparing with them), and about the two ways French uses articles with food and drink: <span class="fr">j’aime <b>le</b> vin</span> (wine in general) against <span class="fr">je bois <b>du</b> vin</span> (some wine).</p>
  `,

  background: [
    {
      title: 'Named after the place, not the grape',
      html: `
        <p>The habit that most puzzles visitors: most French wines are named after where they come from, not after the grape. A <span class="fr">chablis</span> is a white wine from the area around Chablis in northern Burgundy; that it is made from Chardonnay is something the label often does not say. A <span class="fr">sancerre</span> is mostly Sauvignon Blanc, a <span class="fr">beaujolais</span> Gamay.</p>
        <p>The protected place names are <span class="fr">appellations</span> (officially <span class="fr">AOC</span>, now usually <span class="fr">AOP</span>), and each has rules on which grapes may be used. There are exceptions: Alsace wines are labelled by grape (<span class="fr">riesling</span>, <span class="fr">gewurztraminer</span>), and so, increasingly, are simpler wines sold as <span class="fr">IGP</span> or <span class="fr">Vin de France</span>. On a wine list in France, expect place names first; in a wine bar, the staff will tell you the grape if you ask: <span class="fr">C’est quel cépage ?</span></p>
        <p>When a place name stands for the wine it is written with a small letter and is masculine, whatever the place: <span class="fr">un bourgogne</span>, <span class="fr">un chablis</span>, <span class="fr">un bordeaux</span>, because <span class="fr">le vin</span> is understood. Practice varies, and you will also see capitals.</p>`
    },
    {
      title: 'By the glass, the jug and the bottle',
      html: `
        <p>Wine by the glass (<span class="fr">au verre</span>) is ordinary in cafés and brasseries and the whole point of a wine bar (<span class="fr">un bar à vins</span>). A glass is usually 12 or 15 cl; the list should say. In a café, <span class="fr">un verre de rouge</span>, or just <span class="fr">un rouge</span>, gets you the house red; <span class="fr">un ballon de rouge</span> (after the round glass) is the same order in older, more popular café French.</p>
        <p>With a meal, house wine often comes in a <span class="fr">pichet</span> (Unit 2), usually of 25 or 50 cl. A <span class="fr">demi-bouteille</span> holds 37.5 cl, half a standard 75 cl bottle. In a restaurant, a bottle you order is normally opened at the table and a little poured for whoever ordered it to taste: this is to check that the wine is sound, not whether you like it. A wine is sent back if it is faulty, most often <span class="fr">bouchonné</span> (“corked”, with a musty smell of damp cardboard), not because it is not to your taste.</p>
        <p>Prices on a list are per bottle unless a column says <span class="fr">verre</span>. Mark-ups in French restaurants vary as much as anywhere; a modest local wine is often the best value on a regional list.</p>`
    },
    {
      title: 'Sweetness: sec, moelleux, brut',
      html: `
        <p>For still wines, the scale runs from dry to sweet:</p>
        <ul>
          <li><span class="fr">sec</span>: dry, the default for most French red and white wine;</li>
          <li><span class="fr">demi-sec</span>: off-dry, with some sweetness;</li>
          <li><span class="fr">moelleux</span>: medium sweet (literally “soft, mellow”);</li>
          <li><span class="fr">liquoreux</span> or <span class="fr">doux</span>: sweet, dessert wine (Sauternes, for example).</li>
        </ul>
        <p>Sparkling wines (<span class="fr">les vins effervescents</span>, informally <span class="fr">les bulles</span>, “bubbles”) use a different scale with misleading names: <span class="fr">brut</span> is dry and the usual choice; <span class="fr">extra-dry</span>, despite the English, is slightly sweeter than brut; <span class="fr">demi-sec</span> is clearly sweet. Besides champagne, look for <span class="fr">crémant</span>, sparkling wine made by the same method in other regions (Alsace, Burgundy, the Loire and others), usually at a fraction of the price.</p>
        <p class="aside"><strong>German angle.</strong> The German labels follow a similar logic but do not line up exactly: <em>trocken</em> is <span class="fr">sec</span>, <em>halbtrocken</em> roughly <span class="fr">demi-sec</span>, <em>lieblich</em> or <em>süß</em> roughly <span class="fr">moelleux</span> or <span class="fr">doux</span>. For sparkling wine, <em>brut</em> is international.</p>`
    },
    {
      title: 'L’apéritif',
      html: `
        <p>The French apéritif, informally <span class="fr">l’apéro</span>, is the drink before a meal, at home or in a bar, often with something small to eat. In a restaurant the waiter may offer one: <span class="fr">Vous prenez un apéritif ?</span> You are free to say no and go straight to wine with the meal.</p>
        <p>Classic orders include <span class="fr">un kir</span> (white wine with a little crème de cassis, blackcurrant liqueur, named after Félix Kir, a post-war mayor of Dijon), <span class="fr">un kir royal</span> (with champagne instead of wine), <span class="fr">une coupe de champagne</span>, a glass of white wine, and, in the south, <span class="fr">un pastis</span> (aniseed spirit, diluted with water). Customs vary a good deal by region and generation; beer and spritz-style drinks have become common apéritifs too.</p>
        <p>When glasses are raised, the usual words are <span class="fr">Santé !</span> (“health”) or <span class="fr">À la vôtre !</span> (“to yours”, formal or plural; <span class="fr">à la tienne</span> to a friend). Look the other person in the eye as you clink: in France, as in Germany, not doing so is said to bring bad luck, at least in jest.</p>`
    }
  ],

  pronunciation: `
    <p>Wine French is full of place names and borrowed grape names. The rules you already know apply to them, with a few traps.</p>
    <h3>Silent endings in place names</h3>
    <p>As in ordinary words, final consonants are mostly silent: <span class="fr">Bordeaux</span> [bɔʁdo], <span class="fr">Chablis</span> [ʃabli], <span class="fr">Beaujolais</span> [boʒɔlɛ], <span class="fr">Médoc</span> [medɔk] (final <span class="fr">c</span> heard), <span class="fr">Sancerre</span> [sɑ̃sɛʁ].</p>
    <h3>s between vowels is [z]</h3>
    <p>A single <span class="fr">s</span> between two vowels is [z]: <span class="fr">rosé</span> [ʁoze], <span class="fr">raisin</span> [ʁɛzɛ̃] (grape). Double <span class="fr">ss</span> stays [s]: <span class="fr">la cuisson</span>, <span class="fr">le poisson</span> (Unit 2).</p>
    <h3>gn, ill, oi in wine words</h3>
    <ul>
      <li><span class="fr">Bourgogne</span> [buʁɡɔɲ], <span class="fr">Champagne</span> [ʃɑ̃paɲ], <span class="fr">Cognac</span> [kɔɲak], <span class="fr">vigne</span> [viɲ] (vine), <span class="fr">vigneron</span> [viɲəʁɔ̃] (winegrower).</li>
      <li><span class="fr">bouteille</span> [butɛj], <span class="fr">Pauillac</span> [pojak], <span class="fr">Pouilly</span> [puji].</li>
      <li><span class="fr">moelleux</span> [mwalø]: the <span class="fr">oe</span> is said like <span class="fr">oi</span>, an exception worth learning by ear.</li>
    </ul>
    <h3>vin, vingt, vent</h3>
    <p><span class="fr">vin</span> (wine) and <span class="fr">vingt</span> (twenty) are both [vɛ̃]; <span class="fr">vent</span> (wind) is [vɑ̃]. The two nasal vowels [ɛ̃] and [ɑ̃] are what tell <span class="fr">vin</span> from <span class="fr">vent</span>, and <span class="fr">pain</span> from <span class="fr">paon</span>. If you say <span class="fr">vin</span> with an open, bright vowel (as in English “van”, nasalised), you are close; [ɑ̃] is darker, further back, as in <span class="fr">blanc</span>.</p>
    <h3>Grape names</h3>
    <p>French says its own grape names the French way, with stress at the end: <span class="fr">merlot</span> [mɛʁlo], <span class="fr">pinot noir</span> [pino nwaʁ], <span class="fr">sauvignon</span> [soviɲɔ̃], <span class="fr">chardonnay</span> [ʃaʁdɔnɛ], <span class="fr">syrah</span> [siʁa]. German <span class="fr">riesling</span> becomes [ʁislin] or [ʁizliŋ], depending on the speaker.</p>
  `,

  phrasesIntro: `<p>From choosing a glass to raising it. Those marked “you will hear” are the staff’s.</p>`,
  phraseGroups: [
    { title: 'Choosing a wine', ids: ['p1', 'p2', 'p3', 'p4', 'p5', 'p6', 'p7', 'p8', 'p9', 'p10', 'p11', 'p12', 'p13'] },
    { title: 'The apéritif', ids: ['p14', 'p15', 'p16', 'p17'] },
    { title: 'Saying what you think', ids: ['p18', 'p19', 'p20', 'p21', 'p22', 'p23'] },
    { title: 'Toasting', ids: ['p24', 'p25', 'p26', 'p27'] }
  ],
  phrases: [
    { id: 'p1', fr: 'Qu’est-ce que vous avez comme vins au verre ?', en: 'What wines do you have by the glass?', lit: 'What do you have as wines by the glass?' },
    { id: 'p2', fr: 'Un verre de blanc, s’il vous plaît.', en: 'A glass of white, please.' },
    { id: 'p3', fr: 'Un ballon de rouge.', en: 'A glass of red.', note: 'Café French, a little old-fashioned: <span class="fr">un ballon</span> is a round wine glass.' },
    { id: 'p4', fr: 'Je voudrais un rouge léger.', en: 'I’d like a light red.' },
    { id: 'p5', fr: 'Vous avez un rosé bien frais ?', en: 'Do you have a nicely chilled rosé?', lit: 'You have a rosé well cool?' },
    { id: 'p6', fr: 'Vous le préférez sec ou plutôt fruité ?', en: 'Would you like it dry or rather fruity?', note: 'You will hear it.' },
    { id: 'p7', fr: 'Quel vin vous me conseillez avec le poisson ?', en: 'Which wine would you recommend with the fish?' },
    { id: 'p8', fr: 'C’est quel cépage ?', en: 'What grape is it?', note: '<span class="fr">Le cépage</span>: grape variety. <span class="fr">Le raisin</span> is the fruit.' },
    { id: 'p9', fr: 'Il vient d’où, ce vin ?', en: 'Where does this wine come from?', lit: 'It comes from where, this wine?' },
    { id: 'p10', fr: 'Je peux goûter ?', en: 'May I taste it?', note: 'Wine bars usually offer a taste before you choose a glass; in a café, less so.' },
    { id: 'p11', fr: 'La carte des vins, s’il vous plaît.', en: 'The wine list, please.' },
    { id: 'p12', fr: 'C’est quoi, le vin de la maison ?', en: 'What’s the house wine?' },
    { id: 'p13', fr: 'Vous avez des demi-bouteilles ?', en: 'Do you have half bottles?' },
    { id: 'p14', fr: 'Vous prenez un apéritif ?', en: 'Would you like an apéritif?', lit: 'You take an apéritif?', note: 'You will hear it.' },
    { id: 'p15', fr: 'Un kir, s’il vous plaît.', en: 'A kir, please.' },
    { id: 'p16', fr: 'Une coupe de champagne, s’il vous plaît.', en: 'A glass of champagne, please.', note: '<span class="fr">Une coupe</span>: a glass of champagne, whatever the actual shape of the glass.' },
    { id: 'p17', fr: 'On prend l’apéro ?', en: 'Shall we have a drink?', note: 'Casual: among friends, before dinner.' },
    { id: 'p18', fr: 'Il est très bon, ce vin.', en: 'This wine is very good.', lit: 'It is very good, this wine.' },
    { id: 'p19', fr: 'Il est un peu trop sucré pour moi.', en: 'It’s a bit too sweet for me.' },
    { id: 'p20', fr: 'Je préfère les vins secs.', en: 'I prefer dry wines.' },
    { id: 'p21', fr: 'Excusez-moi, je crois qu’il est bouchonné.', en: 'Excuse me, I think it’s corked.', note: 'The one good reason to send a wine back.' },
    { id: 'p22', fr: 'Il n’est pas assez frais.', en: 'It isn’t cold enough.', lit: 'It is not enough cool.' },
    { id: 'p23', fr: 'Vous avez un seau à glace ?', en: 'Do you have an ice bucket?' },
    { id: 'p24', fr: 'Santé !', en: 'Cheers!', lit: 'Health!' },
    { id: 'p25', fr: 'À la vôtre !', en: 'Cheers! (to you)', lit: 'To yours!', note: 'To someone you call <span class="fr">vous</span>, or to several people. To a friend: <span class="fr">À la tienne !</span>' },
    { id: 'p26', fr: 'Encore un verre ?', en: 'Another glass?', lit: 'Again a glass?' },
    { id: 'p27', fr: 'Non merci, je conduis.', en: 'No thanks, I’m driving.' }
  ],

  dialogue: {
    title: 'Au bar à vins',
    setting: '<p>Early evening in a wine bar in Beaune, in Burgundy. You and your partner sit at the counter. The man serving (<span class="fr">le serveur</span>) knows his wines.</p>',
    you: 'Vous',
    lines: [
      { who: 'Le serveur', fr: 'Bonsoir ! Qu’est-ce que je vous sers ?', en: 'Good evening! What can I get you?' },
      { who: 'Vous', fr: 'Bonsoir. Qu’est-ce que vous avez comme vins au verre ?', en: 'Good evening. What wines do you have by the glass?' },
      { who: 'Le serveur', fr: 'En blanc, un chablis et un mâcon. En rouge, un pinot noir de la côte de Beaune et un beaujolais.', en: 'In white, a Chablis and a Mâcon. In red, a Pinot Noir from the Côte de Beaune and a Beaujolais.' },
      { who: 'Vous', fr: 'Pour madame, un blanc sec. Le chablis, il est comment ?', en: 'For my partner, a dry white. What is the Chablis like?' },
      { who: 'Le serveur', fr: 'Très sec, vif, minéral. Le mâcon est plus rond et plus fruité.', en: 'Very dry, crisp, mineral. The Mâcon is rounder and fruitier.' },
      { who: 'Vous', fr: 'Alors, un verre de chablis. Et pour moi, un rouge léger.', en: 'A glass of Chablis, then. And for me, a light red.' },
      { who: 'Le serveur', fr: 'Je vous conseille le pinot noir. Vous voulez le goûter ?', en: 'I recommend the Pinot Noir. Would you like to taste it?' },
      { who: 'Vous', fr: 'Oui, volontiers.', en: 'Yes, gladly.' },
      { who: 'Vous', fr: 'Il est très bon. Il vient d’où exactement ?', en: 'It’s very good. Where exactly is it from?' },
      { who: 'Le serveur', fr: 'D’un petit vigneron à côté de Beaune. C’est moins tannique que le beaujolais… enfin, plus léger que la plupart des bourgognes !', en: 'From a small grower near Beaune. It’s less tannic than the Beaujolais… well, lighter than most Burgundies!' },
      { who: 'Vous', fr: 'Parfait, je le prends. Vous avez quelque chose à manger ?', en: 'Perfect, I’ll have it. Do you have anything to eat?' },
      { who: 'Le serveur', fr: 'Nous avons des planches : charcuterie, fromages, ou mixte.', en: 'We have boards: cured meats, cheeses, or mixed.' },
      { who: 'Vous', fr: 'Une planche mixte, s’il vous plaît.', en: 'A mixed board, please.' },
      { who: 'Le serveur', fr: 'Voilà : un chablis, un pinot noir et la planche. Bonne dégustation !', en: 'Here you are: a Chablis, a Pinot Noir and the board. Enjoy!' },
      { who: 'Vous', fr: 'Merci. Santé !', en: 'Thank you. Cheers!' }
    ],
    notes: [
      { ref: 'Qu’est-ce que je vous sers ?', html: '“What do I serve you?”: the standard opening behind a bar. Answer with the order, or with a question as here.' },
      { ref: 'il est comment ?', html: '“What is it like?”, literally “it is how?”. A useful all-purpose question: <span class="fr">Le canard, il est comment ?</span>' },
      { ref: 'vif, minéral', html: '<span class="fr">Vif</span> (“lively”) describes a crisp, fresh acidity; <span class="fr">minéral</span> a stony, flinty impression that wine people value and argue about. Both come back in Unit 5.' },
      { ref: 'plus rond et plus fruité', html: '<span class="fr">Rond</span> (“round”) is soft, smooth, without sharp edges; <span class="fr">plus</span> + adjective is “more …”, the comparative. See Grammar.' },
      { ref: 'Vous voulez le goûter ?', html: '<span class="fr">Le</span> here is “it” (the wine), placed before the verb it belongs to, like <span class="fr">nous</span> in <span class="fr">vous pouvez nous apporter</span> (Unit 3).' },
      { ref: 'volontiers', html: '“Gladly, with pleasure”: the elegant way to accept an offer. <span class="fr">Avec plaisir</span> means the same.' },
      { ref: 'un petit vigneron', html: 'A small winegrower, often one who makes and sells his or her own wine. <span class="fr">Le vigneron</span> grows the grapes and usually makes the wine; <span class="fr">le caviste</span> sells it in a shop.' },
      { ref: 'enfin', html: 'Here “well, I mean”: correcting oneself in mid-sentence. Elsewhere <span class="fr">enfin</span> means “at last”.' },
      { ref: 'Bonne dégustation !', html: '“Enjoy the tasting!”: <span class="fr">la dégustation</span> is tasting, and also the wine-bar word for enjoying what you drink.' }
    ]
  },

  vocab: [
    { id: 'v1', la: 'le rouge', head: 'le rouge', pos: 'noun', g: 'm', pron: '[ʁuʒ]', en: 'red wine (a red)', note: 'As an adjective: <span class="fr">rouge</span>, red, the same for both genders.' },
    { id: 'v2', la: 'le blanc', head: 'le blanc', pos: 'noun', g: 'm', pron: '[blɑ̃]', en: 'white wine (a white)', note: 'Adjective <span class="fr">blanc, blanche</span>.' },
    { id: 'v3', la: 'le rosé', head: 'le rosé', pos: 'noun', g: 'm', pron: '[ʁoze]', en: 'rosé' },
    { id: 'v4', la: 'le champagne', head: 'le champagne', pos: 'noun', g: 'm', pron: '[ʃɑ̃paɲ]', en: 'champagne', note: 'The wine is masculine; the region, <span class="fr">la Champagne</span>, feminine.' },
    { id: 'v5', la: 'le crémant', head: 'le crémant', pos: 'noun', g: 'm', pron: '[kʁemɑ̃]', en: 'crémant (sparkling wine made like champagne)' },
    { id: 'v6', la: 'pétillant, pétillante', head: 'pétillant', say: 'pétillant, pétillante', pos: 'adjective', pron: '[petijɑ̃, petijɑ̃t]', en: 'sparkling, fizzy', note: 'Also of water: <span class="fr">eau pétillante</span>.' },
    { id: 'v7', la: 'sec, sèche', head: 'sec', say: 'sec, sèche', pos: 'adjective', pron: '[sɛk, sɛʃ]', en: 'dry' },
    { id: 'v8', la: 'demi-sec', head: 'demi-sec', pos: 'adjective', pron: '[dəmi sɛk]', en: 'off-dry (still wine); sweet (champagne)' },
    { id: 'v9', la: 'moelleux, moelleuse', head: 'moelleux', say: 'moelleux, moelleuse', pos: 'adjective', pron: '[mwalø, mwaløz]', en: 'medium sweet (wine); soft, moist (cake)' },
    { id: 'v10', la: 'doux, douce', head: 'doux', say: 'doux, douce', pos: 'adjective', pron: '[du, dus]', en: 'sweet (wine); soft, mild, gentle' },
    { id: 'v11', la: 'brut', head: 'brut', pos: 'adjective', pron: '[bʁyt]', en: 'dry (sparkling wine)', note: 'The <span class="fr">t</span> is pronounced. Otherwise “raw, gross” (<span class="fr">le salaire brut</span>, gross pay).' },
    { id: 'v12', la: 'sucré, sucrée', head: 'sucré', say: 'sucré, sucrée', pos: 'adjective', pron: '[sykʁe]', en: 'sweet, sugary' },
    { id: 'v13', la: 'léger, légère', head: 'léger', say: 'léger, légère', pos: 'adjective', pron: '[leʒe, leʒɛʁ]', en: 'light' },
    { id: 'v14', la: 'corsé, corsée', head: 'corsé', say: 'corsé, corsée', pos: 'adjective', pron: '[kɔʁse]', en: 'full-bodied, strong', note: 'Also of coffee and sauces.' },
    { id: 'v15', la: 'fruité, fruitée', head: 'fruité', say: 'fruité, fruitée', pos: 'adjective', pron: '[fʁɥite]', en: 'fruity' },
    { id: 'v16', la: 'rond, ronde', head: 'rond', say: 'rond, ronde', pos: 'adjective', pron: '[ʁɔ̃, ʁɔ̃d]', en: 'round, smooth (wine)' },
    { id: 'v17', la: 'frais, fraîche', head: 'frais', say: 'frais, fraîche', pos: 'adjective', pron: '[fʁɛ, fʁɛʃ]', en: 'cool, chilled; fresh' },
    { id: 'v18', la: 'le cépage', head: 'le cépage', pos: 'noun', g: 'm', pron: '[sepaʒ]', en: 'grape variety' },
    { id: 'v19', la: 'le raisin', head: 'le raisin', pos: 'noun', g: 'm', pron: '[ʁɛzɛ̃]', en: 'grapes (the fruit)', note: 'A false friend: a raisin is <span class="fr">un raisin sec</span>.' },
    { id: 'v20', la: 'la région', head: 'la région', pos: 'noun', g: 'f', pron: '[ʁeʒjɔ̃]', en: 'region' },
    { id: 'v21', la: 'l’appellation', head: 'l’appellation', pos: 'noun', g: 'f', pron: '[apelasjɔ̃]', en: 'appellation, protected place name' },
    { id: 'v22', la: 'le vigneron, la vigneronne', head: 'le vigneron', say: 'le vigneron, la vigneronne', pos: 'noun', g: 'mf', pron: '[viɲəʁɔ̃, viɲəʁɔn]', en: 'winegrower, winemaker' },
    { id: 'v23', la: 'le caviste', head: 'le caviste', pos: 'noun', g: 'mf', pron: '[kavist]', en: 'wine merchant; wine shop', note: '<span class="fr">la cave</span>: cellar; also a wine shop.' },
    { id: 'v24', la: 'la carte des vins', head: 'la carte des vins', pos: 'noun', g: 'f', pron: '[kaʁt de vɛ̃]', en: 'wine list' },
    { id: 'v25', la: 'au verre', head: 'au verre', pos: 'phrase', pron: '[o vɛʁ]', en: 'by the glass' },
    { id: 'v26', la: 'la demi-bouteille', head: 'la demi-bouteille', pos: 'noun', g: 'f', pron: '[dəmi butɛj]', en: 'half bottle (37.5 cl)' },
    { id: 'v27', la: 'la coupe', head: 'la coupe', pos: 'noun', g: 'f', pron: '[kup]', en: 'glass of champagne; bowl (of ice cream); cup (trophy)' },
    { id: 'v28', la: 'le ballon', head: 'le ballon', pos: 'noun', g: 'm', pron: '[balɔ̃]', en: 'round wine glass (café French); ball' },
    { id: 'v29', la: 'l’apéritif', head: 'l’apéritif', pos: 'noun', g: 'm', pron: '[apeʁitif]', en: 'apéritif, drink before a meal', note: 'Informally <span class="fr">l’apéro</span>.' },
    { id: 'v30', la: 'le kir', head: 'le kir', pos: 'noun', g: 'm', pron: '[kiʁ]', en: 'kir (white wine with blackcurrant liqueur)' },
    { id: 'v31', la: 'le bouchon', head: 'le bouchon', pos: 'noun', g: 'm', pron: '[buʃɔ̃]', en: 'cork; stopper', note: 'In Lyon, also a traditional small restaurant. <span class="fr">bouchonné</span>: corked.' },
    { id: 'v32', la: 'le tire-bouchon', head: 'le tire-bouchon', pos: 'noun', g: 'm', pron: '[tiʁbuʃɔ̃]', en: 'corkscrew', note: 'Literally “pull-cork”.' },
    { id: 'v33', la: 'le seau à glace', head: 'le seau à glace', pos: 'noun', g: 'm', pron: '[so a glas]', en: 'ice bucket' },
    { id: 'v34', la: 'la dégustation', head: 'la dégustation', pos: 'noun', g: 'f', pron: '[degystasjɔ̃]', en: 'tasting' },
    { id: 'v35', la: 'goûter', head: 'goûter', pos: 'verb', pron: '[ɡute]', en: 'to taste, to try (food, drink)', note: '<span class="fr">le goûter</span>: children’s afternoon snack.' },
    { id: 'v36', la: 'boire', head: 'boire', pos: 'verb', pron: '[bwaʁ]', en: 'to drink', note: '<span class="fr">je bois, vous buvez</span>; past <span class="fr">j’ai bu</span>.' },
    { id: 'v37', la: 'aimer', head: 'aimer', pos: 'verb', pron: '[eme]', en: 'to like; to love', note: '<span class="fr">j’aime le vin rouge</span>: I like red wine (with <span class="fr">le</span>!).' },
    { id: 'v38', la: 'préférer', head: 'préférer', pos: 'verb', pron: '[pʁefeʁe]', en: 'to prefer', note: '<span class="fr">je préfère</span> [pʁefɛʁ], with <span class="fr">è</span>.' },
    { id: 'v39', la: 'la planche', head: 'la planche', pos: 'noun', g: 'f', pron: '[plɑ̃ʃ]', en: 'board (of cured meats or cheese); plank' },
    { id: 'v40', la: 'la charcuterie', head: 'la charcuterie', pos: 'noun', g: 'f', pron: '[ʃaʁkytʁi]', en: 'cured meats; pork butcher’s shop' },
    { id: 'v41', la: 'volontiers', head: 'volontiers', pos: 'adverb', pron: '[vɔlɔ̃tje]', en: 'gladly, with pleasure' },
    { id: 'v42', la: 'santé', head: 'santé', pos: 'interjection', pron: '[sɑ̃te]', en: 'cheers!', note: '<span class="fr">la santé</span>: health.' }
  ],

  grammar: [
    {
      title: 'Feminine adjectives that change more than -e',
      html: `
        <p>Unit 2 showed the basic rule: add <span class="fr">-e</span> for the feminine (<span class="fr">grillé → grillée</span>). Wine and drink vocabulary is full of adjectives that change more. You will need them as soon as you describe a drink that is feminine (<span class="fr">la bière</span>, <span class="fr">l’eau</span>, <span class="fr">la limonade</span>) or a wine that is not (<span class="fr">le vin</span>, <span class="fr">le champagne</span>).</p>
        <div class="tablewrap"><table><thead><tr><th>pattern</th><th>masculine</th><th>feminine</th><th>example</th></tr></thead>
        <tbody><tr><td>-c → -che</td><td class="fr">blanc</td><td class="fr">blanche</td><td class="fr">une bière blanche</td></tr>
        <tr><td>-c → -che, accent</td><td class="fr">sec</td><td class="fr">sèche</td><td class="fr">une saucisse sèche</td></tr>
        <tr><td>-s → -îche</td><td class="fr">frais</td><td class="fr">fraîche</td><td class="fr">une eau fraîche</td></tr>
        <tr><td>-x → -ce / -se</td><td class="fr">doux</td><td class="fr">douce</td><td class="fr">une moutarde douce</td></tr>
        <tr><td>-eux → -euse</td><td class="fr">moelleux</td><td class="fr">moelleuse</td><td class="fr">une texture moelleuse</td></tr>
        <tr><td>-er → -ère</td><td class="fr">léger</td><td class="fr">légère</td><td class="fr">une bière légère</td></tr>
        <tr><td>-en → -enne</td><td class="fr">italien</td><td class="fr">italienne</td><td class="fr">une cuisine italienne</td></tr></tbody></table></div>
        <p>The feminine is heard here, unlike <span class="fr">grillé/grillée</span>: <span class="fr">frais</span> [fʁɛ] / <span class="fr">fraîche</span> [fʁɛʃ], <span class="fr">léger</span> [leʒe] / <span class="fr">légère</span> [leʒɛʁ]. Wine itself is <span class="fr">le vin</span>, so with wine you mostly need the masculine.</p>`
    },
    {
      title: 'Comparing: plus, moins, aussi… que',
      html: `
        <p>To compare, put <span class="fr">plus</span> (more), <span class="fr">moins</span> (less) or <span class="fr">aussi</span> (as) in front of the adjective, and <span class="fr">que</span> (than, as) before the second item:</p>
        <ul>
          <li><span class="fr">Le mâcon est <b>plus</b> rond <b>que</b> le chablis.</span> “The Mâcon is rounder than the Chablis.”</li>
          <li><span class="fr">Le pinot est <b>moins</b> tannique <b>que</b> le beaujolais.</span> “The Pinot is less tannic than the Beaujolais.”</li>
          <li><span class="fr">Il est <b>aussi</b> cher <b>que</b> l’autre.</span> “It’s as expensive as the other one.”</li>
        </ul>
        <p>French has no ending like English <em>-er</em> or German <em>-er</em>: it is always <span class="fr">plus</span> + adjective, even for short words (<span class="fr">plus léger</span>, “lighter”; <span class="fr">plus sec</span>, “drier”). The exception is <span class="fr">bon</span>: “better” is <span class="fr">meilleur</span>, never <span class="fr">plus bon</span>. <span class="fr">Ce vin est meilleur que l’autre.</span></p>
        <p>Without the second item, the comparison stands alone: <span class="fr">Vous avez quelque chose de plus léger ?</span> “Do you have something lighter?” Note the <span class="fr">de</span> between <span class="fr">quelque chose</span> and an adjective.</p>
        <p><span class="fr">Plutôt</span> (“rather, on the whole”) softens a preference without comparing: <span class="fr">plutôt sec</span>, <span class="fr">plutôt fruité</span>, <span class="fr">je préfère plutôt le rouge</span>.</p>`
    },
    {
      title: 'le, la, les for “it” and “them”',
      html: `
        <p>When “it” or “them” is the object of the verb, French uses the same words as the definite article, placed before the verb, like <span class="fr">me, nous, vous</span> in Unit 3:</p>
        <ul>
          <li><span class="fr">Le pinot noir ? Je <b>le</b> prends.</span> “The Pinot Noir? I’ll have it.”</li>
          <li><span class="fr">La planche ? Je <b>la</b> prends.</span> “The board? I’ll take it.”</li>
          <li><span class="fr">Les olives ? Vous <b>les</b> avez ?</span> “The olives? Do you have them?”</li>
          <li><span class="fr">Vous voulez <b>le</b> goûter ?</span> “Do you want to taste it?” (before the second verb, the one it belongs to)</li>
        </ul>
        <p><span class="fr">Le</span> and <span class="fr">la</span> become <span class="fr">l’</span> before a vowel: <span class="fr">je l’aime</span> (“I like it”), <span class="fr">je l’ai goûté</span> (“I tasted it”). Choose <span class="fr">le</span> or <span class="fr">la</span> by the gender of the noun it replaces, not by the thing: the wine is <span class="fr">le</span>, the beer <span class="fr">la</span>.</p>
        <p class="aside"><strong>German angle.</strong> The choice follows the French gender, which German will not predict: <em>das Bier</em> is <em>es</em> in German but <span class="fr">la</span> in French (<span class="fr">je la prends</span>).</p>`
    },
    {
      title: 'J’aime le vin, je bois du vin',
      html: `
        <p>English often uses no article with food and drink: “I like wine”, “I drink wine”. French needs one, and it is not the same one in both sentences:</p>
        <ul>
          <li>With verbs of liking and preferring (<span class="fr">aimer</span>, <span class="fr">adorer</span>, <span class="fr">préférer</span>, <span class="fr">détester</span>), you speak of the thing in general, so you use <span class="fr">le, la, les</span>: <span class="fr">J’aime <b>le</b> vin rouge.</span> <span class="fr">Je préfère <b>les</b> vins secs.</span> <span class="fr">Je n’aime pas <b>la</b> bière.</span></li>
          <li>With verbs of having, drinking and eating, you mean some, an amount, so you use <span class="fr">du, de la, des</span> (Unit 1): <span class="fr">Je bois <b>du</b> vin rouge.</span> <span class="fr">Vous avez <b>du</b> champagne ?</span></li>
        </ul>
        <p>Watch the negative: after <span class="fr">je n’aime pas</span> the article stays (<span class="fr">je n’aime pas <b>le</b> vin doux</span>), because it is general; after <span class="fr">je ne bois pas</span> it becomes <span class="fr">de</span> (<span class="fr">je ne bois pas <b>de</b> vin</span>), as in Unit 3.</p>
        <p>The two common verbs of this unit:</p>
        <div class="tablewrap"><table><thead><tr><th></th><th>boire (to drink)</th><th>préférer (to prefer)</th></tr></thead>
        <tbody><tr><td>je</td><td class="fr">bois</td><td class="fr">préfère</td></tr>
        <tr><td>tu</td><td class="fr">bois</td><td class="fr">préfères</td></tr>
        <tr><td>il, elle, on</td><td class="fr">boit</td><td class="fr">préfère</td></tr>
        <tr><td>nous</td><td class="fr">buvons</td><td class="fr">préférons</td></tr>
        <tr><td>vous</td><td class="fr">buvez</td><td class="fr">préférez</td></tr>
        <tr><td>ils, elles</td><td class="fr">boivent</td><td class="fr">préfèrent</td></tr></tbody></table></div>
        <p><span class="fr">Bois, bois, boit</span> all sound [bwa]; <span class="fr">préfère, préfères, préfèrent</span> all [pʁefɛʁ]. Only the <span class="fr">nous</span> and <span class="fr">vous</span> forms sound different.</p>`
    }
  ],

  grammarCards: [
    { id: 'gc1', front: 'blanc, sec, frais, doux, léger: feminine?', back: 'blanche, sèche, fraîche, douce, légère' },
    { id: 'gc2', front: 'The Mâcon is rounder than the Chablis.', back: 'Le mâcon est plus rond que le chablis.' },
    { id: 'gc3', front: 'better (than)', back: 'meilleur (que): never plus bon' },
    { id: 'gc4', front: 'Do you have something lighter?', back: 'Vous avez quelque chose de plus léger ?' },
    { id: 'gc5', front: 'The Pinot Noir? I’ll have it. / The board? I’ll take it.', back: 'Je le prends. / Je la prends. (le, la, les before the verb)' },
    { id: 'gc6', front: 'I like red wine. / I drink red wine.', back: 'J’aime le vin rouge. / Je bois du vin rouge.' },
    { id: 'gc7', front: 'boire: je, vous', back: 'je bois, vous buvez (past: j’ai bu)' },
    { id: 'gc8', front: 'dry to sweet (still wine)', back: 'sec, demi-sec, moelleux, liquoreux (doux)' }
  ],

  reference: [
    { title: 'Sweetness', headers: ['still wine', 'sparkling wine', 'English'], rows: [
      ['sec', 'brut (extra-brut: drier still)', 'dry'], ['demi-sec', 'extra-dry, sec', 'off-dry'], ['moelleux', 'demi-sec', 'medium sweet'], ['liquoreux, doux', 'doux', 'sweet']] },
    { title: 'Measures', headers: ['French', 'size', 'English'], rows: [
      ['un verre', '12–15 cl', 'a glass'], ['un pichet', '25 or 50 cl', 'a jug'], ['une demi-bouteille', '37,5 cl', 'a half bottle'], ['une bouteille', '75 cl', 'a bottle'], ['un magnum', '1,5 l', 'a magnum']] },
    { title: 'Feminine adjectives', headers: ['masculine', 'feminine', 'English'], rows: [
      ['blanc', 'blanche', 'white'], ['sec', 'sèche', 'dry'], ['frais', 'fraîche', 'cool, fresh'], ['doux', 'douce', 'sweet, soft'], ['moelleux', 'moelleuse', 'medium sweet'], ['léger', 'légère', 'light'], ['rond', 'ronde', 'round'], ['bon', 'bonne', 'good']] },
    { title: 'Place and grape (examples)', headers: ['wine', 'colour', 'main grape'], rows: [
      ['chablis', 'white', 'chardonnay'], ['mâcon', 'white (mostly)', 'chardonnay'], ['sancerre', 'white (mostly)', 'sauvignon blanc'], ['bourgogne rouge', 'red', 'pinot noir'],
      ['beaujolais', 'red', 'gamay'], ['côtes-du-rhône', 'red (mostly)', 'grenache, syrah'], ['bordeaux rouge', 'red', 'merlot, cabernet sauvignon']] }
  ],

  exercises: [
    { id: 'e1', type: 'mc', prompt: 'A <span class="fr">chablis</span> is named after…', options: ['the place it comes from', 'its grape', 'its producer', 'its colour'], answer: 0, explain: 'Most French wines are named after their place of origin; chablis is made from chardonnay.' },
    { id: 'e2', type: 'mc', prompt: 'You want a dry sparkling wine. On the list, look for…', options: ['brut', 'demi-sec', 'doux', 'moelleux'], answer: 0, explain: 'For sparkling wine, brut is dry; demi-sec is clearly sweet.' },
    { id: 'e3', type: 'mc', prompt: 'When is it right to send a bottle back?', options: ['When it is faulty, e.g. corked', 'When you do not like it', 'When it is too expensive', 'Never'], answer: 0, explain: 'The taste at the table checks that the wine is sound: bouchonné is the classic fault.' },
    { id: 'e4', type: 'gap', prompt: '<span class="fr">une bière ___</span>', hint: ' (léger)', answers: ['légère'], full: 'une bière légère', explain: 'la bière is feminine: léger → légère.' },
    { id: 'e5', type: 'gap', prompt: '<span class="fr">une eau bien ___</span>', hint: ' (frais)', answers: ['fraîche', 'fraiche'], full: 'une eau bien fraîche', explain: 'frais → fraîche.' },
    { id: 'e6', type: 'gap', prompt: '<span class="fr">Le mâcon est plus rond ___ le chablis.</span>', hint: ' (than)', answers: ['que'], full: 'Le mâcon est plus rond que le chablis.', explain: 'plus… que: more… than.' },
    { id: 'e7', type: 'gap', prompt: '<span class="fr">Ce vin est ___ que l’autre.</span>', hint: ' (better)', answers: ['meilleur'], full: 'Ce vin est meilleur que l’autre.', explain: 'bon → meilleur, never plus bon.' },
    { id: 'e8', type: 'gap', prompt: '<span class="fr">La planche mixte ? Je ___ prends.</span>', hint: ' (it)', answers: ['la'], full: 'La planche mixte ? Je la prends.', explain: 'la planche is feminine: la.' },
    { id: 'e9', type: 'gap', prompt: '<span class="fr">J’aime ___ vin rouge.</span>', hint: ' (le or du?)', answers: ['le'], full: 'J’aime le vin rouge.', explain: 'After aimer, the general article le.' },
    { id: 'e10', type: 'gap', prompt: '<span class="fr">Je bois ___ vin rouge.</span>', hint: ' (le or du?)', answers: ['du'], full: 'Je bois du vin rouge.', explain: 'After boire, some wine: du.' },
    { id: 'e11', type: 'match', prompt: 'Match the French and the English.', pairs: [['sec', 'dry'], ['léger', 'light'], ['corsé', 'full-bodied'], ['sucré', 'sweet, sugary'], ['pétillant', 'sparkling']] },
    { id: 'e12', type: 'match', prompt: 'Match the French and the English.', pairs: [['le cépage', 'grape variety'], ['le tire-bouchon', 'corkscrew'], ['la carte des vins', 'wine list'], ['le vigneron', 'winegrower'], ['au verre', 'by the glass']] },
    { id: 'e13', type: 'order', prompt: 'Put the words in order.', source: 'What wines do you have by the glass?', tokens: ['Qu’est-ce', 'que', 'vous', 'avez', 'comme', 'vins', 'au', 'verre ?'] },
    { id: 'e14', type: 'order', prompt: 'Put the words in order.', source: 'Do you have something lighter?', tokens: ['Vous', 'avez', 'quelque', 'chose', 'de', 'plus', 'léger ?'] },
    { id: 'e15', type: 'translate', dir: 'en-fr', source: 'A glass of white, please.', accepted: ['Un verre de blanc, s’il vous plaît.', 'Un verre de vin blanc, s’il vous plaît.', 'Un blanc, s’il vous plaît.'], model: 'Un verre de blanc, s’il vous plaît.', explain: 'un verre de blanc: “wine” can be left out, as in English.' },
    { id: 'e16', type: 'translate', dir: 'en-fr', source: 'I prefer dry wines.', accepted: ['Je préfère les vins secs.'], model: 'Je préfère les vins secs.', explain: 'préférer + the general article les; secs agrees with vins (masculine plural).' },
    { id: 'e17', type: 'translate', dir: 'fr-en', source: 'Il est un peu trop sucré pour moi.', accepted: ['It’s a bit too sweet for me.', 'It is a bit too sweet for me', 'It’s a little too sweet for me', 'It is a little too sweet for me', 'It’s slightly too sweet for me', 'This is a bit too sweet for me'], model: 'It’s a bit too sweet for me.' },
    { id: 'e18', type: 'translate', dir: 'fr-en', source: 'Je peux goûter ?', accepted: ['May I taste it?', 'Can I taste it?', 'Can I taste?', 'May I taste?', 'Could I taste it?', 'Can I try it?', 'May I try it?', 'Can I have a taste?', 'May I have a taste?'], model: 'May I taste it?' },
    { id: 'e19', type: 'listen', text: 'Vous le préférez sec ou plutôt fruité ?', prompt: 'What are you being asked?', options: ['Would you like it dry or rather fruity?', 'Would you like it red or white?', 'Would you like it chilled?', 'Would you like a glass or a bottle?'], answer: 0, explain: 'sec: dry; plutôt fruité: rather fruity.' },
    { id: 'e20', type: 'listen', text: 'Le verre de chablis est à huit euros.', prompt: 'How much is the glass of Chablis?', options: ['8 €', '18 €', '6 €', '80 €'], answer: 0, explain: 'huit euros: 8 €. Note the liaison: [ɥitøʁo].' },
    { id: 'e21', type: 'listen', text: 'Une coupe de champagne, s’il vous plaît.', explain: 'Une coupe de champagne, s’il vous plaît.' },
    { id: 'e22', type: 'listen', text: 'Santé ! À la vôtre !', prompt: 'What are people doing?', options: ['Toasting', 'Asking for the bill', 'Complaining about the wine', 'Ordering an apéritif'], answer: 0, explain: 'Santé ! and À la vôtre ! are the usual toasts.' },
    { id: 'e23', type: 'mc', prompt: 'A <span class="fr">kir</span> is…', options: ['white wine with blackcurrant liqueur', 'red wine with lemonade', 'an aniseed spirit', 'a sparkling wine from Alsace'], answer: 0, explain: 'Named after Félix Kir, mayor of Dijon. Kir royal: with champagne.' }
  ],

  reading: {
    title: 'Les vins au verre du Tire-Bouchon',
    note: 'The by-the-glass list of an invented wine bar. Tap any word for its meaning.',
    text: `LE TIRE-BOUCHON — BAR À VINS
Nos vins au verre (12 cl)

Blancs
Mâcon-Villages, chardonnay, rond et fruité : 6 €
Chablis, chardonnay, sec et minéral : 8 €
Sancerre, sauvignon, vif et frais : 9 €

Rouges
Beaujolais-Villages, gamay, léger et fruité : 6 €
Bourgogne, pinot noir, fin et élégant : 8 €
Côtes-du-Rhône, grenache et syrah, rond et épicé : 6 €

Rosé
Côtes de Provence, sec et très frais : 7 €

Bulles
Crémant de Bourgogne brut : 7 €
Champagne brut, la coupe : 12 €

Pour finir
Muscat de Beaumes-de-Venise, doux : 7 €

Demandez le vin du moment !`,
    glosses: {
      'le': 'the', 'tire': 'pull (tirer: to pull)', 'bouchon': 'cork', 'bar': 'bar', 'à': 'for, of', 'vins': 'wines', 'nos': 'our', 'au': 'by the (à + le)', 'verre': 'glass', 'cl': 'centilitres',
      'blancs': 'whites (white wines)', 'mâcon': 'Mâcon (a town in southern Burgundy)', 'villages': 'villages: a better grade within the appellation', 'chardonnay': 'Chardonnay (white grape)', 'rond': 'round, smooth', 'et': 'and', 'fruité': 'fruity',
      'chablis': 'Chablis (town in northern Burgundy)', 'sec': 'dry', 'minéral': 'mineral, stony', 'sancerre': 'Sancerre (town on the upper Loire)', 'sauvignon': 'Sauvignon Blanc (white grape)', 'vif': 'crisp, lively', 'frais': 'fresh, cool',
      'rouges': 'reds (red wines)', 'beaujolais': 'Beaujolais (region south of Burgundy)', 'gamay': 'Gamay (red grape)', 'léger': 'light', 'bourgogne': 'Burgundy (the wine)', 'pinot': 'Pinot (grape family)', 'noir': 'black',
      'fin': 'fine, delicate', 'élégant': 'elegant', 'côtes': 'slopes, hillsides (la côte)', 'du': 'of the (de + le)', 'rhône': 'the Rhône (river and valley)', 'grenache': 'Grenache (red grape)', 'syrah': 'Syrah (red grape)', 'épicé': 'spicy',
      'rosé': 'rosé', 'de': 'of', 'provence': 'Provence (region in the south-east)', 'très': 'very', 'bulles': 'bubbles: sparkling wines', 'crémant': 'crémant (sparkling wine)', 'brut': 'dry (sparkling wine)',
      'champagne': 'champagne', 'la': 'the', 'coupe': 'glass of champagne', 'pour': 'for, to', 'finir': 'finish', 'muscat': 'Muscat (grape; sweet wine)', 'beaumes': 'Beaumes (part of a village name)', 'venise': 'Venise (part of a village name; also Venice)',
      'doux': 'sweet', 'vin': 'wine', 'demandez': 'ask for (demander)', 'moment': 'moment: “the wine of the moment”, a changing special'
    },
    translation: 'LE TIRE-BOUCHON, WINE BAR. Our wines by the glass (12 cl). Whites: Mâcon-Villages, Chardonnay, round and fruity, 6 €. Chablis, Chardonnay, dry and mineral, 8 €. Sancerre, Sauvignon, crisp and fresh, 9 €. Reds: Beaujolais-Villages, Gamay, light and fruity, 6 €. Bourgogne, Pinot Noir, fine and elegant, 8 €. Côtes-du-Rhône, Grenache and Syrah, round and spicy, 6 €. Rosé: Côtes de Provence, dry and very fresh, 7 €. Bubbles: Crémant de Bourgogne brut, 7 €; Champagne brut, by the glass, 12 €. To finish: Muscat de Beaumes-de-Venise, sweet, 7 €. Ask for the wine of the moment!',
    notes: [
      { ref: 'Mâcon-Villages', html: '<span class="fr">Villages</span> after a regional name marks wine from a group of better-placed villages within the appellation, a step up from the plain name. The same system exists in Beaujolais and the Rhône.' },
      { ref: 'sec et minéral', html: 'Adjectives after the noun and agreeing with it: <span class="fr">le chablis</span> is understood, so they are masculine. The list does what a waiter does: place, grape, then two or three words of style.' },
      { ref: 'Muscat de Beaumes-de-Venise', html: 'A sweet wine from a village in the southern Rhône, made from Muscat grapes with fermentation stopped by adding grape spirit, so it keeps much of its sugar. <span class="fr">Venise</span> here has nothing to do with Venice; the name is usually traced to the medieval Comtat Venaissin. A typical choice with dessert.' },
      { ref: 'le vin du moment', html: 'A changing special, often something the staff are enthusiastic about. Worth asking for.' }
    ],
    questions: [
      { id: 'r1', type: 'mc', prompt: 'You want a light red. Which is described that way?', options: ['the Beaujolais-Villages', 'the Côtes-du-Rhône', 'the Chablis', 'the Muscat'], answer: 0, explain: 'Beaujolais-Villages: léger et fruité.' },
      { id: 'r2', type: 'mc', prompt: 'Which grape is the Sancerre made from?', options: ['sauvignon', 'chardonnay', 'gamay', 'pinot noir'], answer: 0, explain: 'Sancerre, sauvignon.' },
      { id: 'r3', type: 'mc', prompt: 'Which wine would suit a dessert?', options: ['the Muscat de Beaumes-de-Venise', 'the Chablis', 'the Crémant', 'the Côtes de Provence'], answer: 0, explain: 'It is the only one described as doux (sweet).' },
      { id: 'r4', type: 'mc', prompt: 'How much wine is in a glass here?', options: ['12 cl', '25 cl', '15 cl', '75 cl'], answer: 0, explain: 'Nos vins au verre (12 cl).' }
    ]
  },

  test: {
    count: 12,
    vocabQuestions: 3,
    items: [
      { id: 't1', type: 'gap', prompt: '<span class="fr">une bière ___</span>', hint: ' (blanc)', answers: ['blanche'], full: 'une bière blanche', explain: 'blanc → blanche.' },
      { id: 't2', type: 'gap', prompt: '<span class="fr">Le beaujolais est moins tannique ___ le bordeaux.</span>', hint: ' (than)', answers: ['que'], full: 'Le beaujolais est moins tannique que le bordeaux.', explain: 'moins… que: less… than.' },
      { id: 't3', type: 'gap', prompt: '<span class="fr">Le chablis ? Je ___ prends.</span>', hint: ' (it)', answers: ['le'], full: 'Le chablis ? Je le prends.', explain: 'le chablis (le vin) is masculine: le.' },
      { id: 't4', type: 'gap', prompt: '<span class="fr">Je n’aime pas ___ vin doux.</span>', hint: ' (le or de?)', answers: ['le'], full: 'Je n’aime pas le vin doux.', explain: 'After aimer the general article stays, even in the negative.' },
      { id: 't5', type: 'gap', prompt: '<span class="fr">Vous ___ du vin ?</span>', hint: ' (boire)', answers: ['buvez'], full: 'Vous buvez du vin ?', explain: 'boire: vous buvez.' },
      { id: 't6', type: 'mc', prompt: 'In a café, <span class="fr">un ballon de rouge</span> is…', options: ['a glass of red wine', 'a red balloon', 'a bottle of red wine', 'a jug of red wine'], answer: 0, explain: 'un ballon: a round wine glass, in older café French.' },
      { id: 't7', type: 'mc', prompt: 'A <span class="fr">crémant</span> is…', options: ['a sparkling wine made like champagne, from another region', 'a sweet dessert wine', 'a creamy liqueur', 'a light red wine'], answer: 0, explain: 'Same method as champagne, usually a fraction of the price.' },
      { id: 't8', type: 'translate', dir: 'en-fr', source: 'I’d like a light red.', accepted: ['Je voudrais un rouge léger.', 'Je voudrais un vin rouge léger.'], model: 'Je voudrais un rouge léger.', explain: 'Adjectives after the noun: un rouge léger.' },
      { id: 't9', type: 'translate', dir: 'en-fr', source: 'Do you have something lighter?', accepted: ['Vous avez quelque chose de plus léger ?', 'Avez-vous quelque chose de plus léger ?'], model: 'Vous avez quelque chose de plus léger ?', explain: 'quelque chose de + adjective; plus léger: lighter.' },
      { id: 't10', type: 'translate', dir: 'fr-en', source: 'Non merci, je conduis.', accepted: ['No thanks, I’m driving.', 'No thank you, I’m driving', 'No thanks, I am driving', 'No thank you, I am driving', 'No thanks, I drive', 'No thanks, I’m the driver'], model: 'No thanks, I’m driving.' },
      { id: 't11', type: 'translate', dir: 'fr-en', source: 'C’est quel cépage ?', accepted: ['What grape is it?', 'Which grape is it?', 'What grape variety is it?', 'Which grape variety is it?', 'What grape is this?', 'What is the grape?', 'What’s the grape?', 'What variety is it?'], model: 'What grape is it?' },
      { id: 't12', type: 'translate', dir: 'en-fr', source: 'This wine is very good.', accepted: ['Ce vin est très bon.', 'Il est très bon, ce vin.'], model: 'Il est très bon, ce vin.', explain: 'bon (masculine) for le vin. Naming the topic at the end is very spoken French.' },
      { id: 't13', type: 'listen', text: 'Un verre de rosé bien frais.', accepted: ['Un verre de rosé bien frais.'], explain: 'Un verre de rosé bien frais: a glass of nicely chilled rosé.' },
      { id: 't14', type: 'listen', text: 'La bouteille est à trente-huit euros.', prompt: 'How much is the bottle?', options: ['38 €', '28 €', '48 €', '18 €'], answer: 0, explain: 'trente-huit: 38.' },
      { id: 't15', type: 'order', prompt: 'Put the words in order.', source: 'Which wine would you recommend with the fish?', tokens: ['Quel', 'vin', 'vous', 'me', 'conseillez', 'avec', 'le', 'poisson ?'] },
      { id: 't16', type: 'match', prompt: 'Match sweetness.', pairs: [['sec', 'dry'], ['demi-sec', 'off-dry'], ['moelleux', 'medium sweet'], ['liquoreux', 'very sweet'], ['brut', 'dry (sparkling)']] }
    ]
  }
});
