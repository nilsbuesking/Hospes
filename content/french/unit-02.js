/*
 * French — Unit 2: Au restaurant (I)
 * Content file only. The engine (app.js) reads this structure; no code here.
 * Original material. Forms and claims to be checked are listed in CONTENT-CHECKS.md.
 * French text uses the typographic apostrophe (’) and a no-break space before ? ! : as in French print.
 */
Hospes.addLecture('french', {
  id: 'fr-02',
  number: 2,
  title: 'Au restaurant (I)',
  subtitle: 'Booking a table, reading the menu, ordering a meal; times; à la, au, aux; adjectives after the noun; questions with qu’est-ce que and quel',
  minutes: 50,

  intro: `
    <p>This unit takes you from the telephone call or the door of the restaurant to the moment the food arrives: booking a table, saying when and for how many, understanding the menu and its set-price formulas, ordering a starter and a main course, saying how you want your meat cooked, and choosing something to drink. The bill, complaints and dietary needs follow in Unit 3.</p>
    <p>Most of what you say in a restaurant fits a handful of patterns you already know from the café: <span class="fr">je voudrais…</span>, <span class="fr">je vais prendre…</span>, <span class="fr">pour moi…</span>. What is new is mostly vocabulary, and the waiter’s questions, which you need to recognise when they come quickly.</p>
    <p class="aside"><strong>Before you start.</strong> Unit 1 is assumed: <span class="fr">un/une</span>, <span class="fr">le/la</span>, <span class="fr">du/de la</span>, questions by intonation, and the numbers to 20. This unit adds the numbers to 69, which you need for times and prices.</p>
  `,

  background: [
    {
      title: 'When the French eat out',
      html: `
        <p>Restaurant kitchens in France traditionally keep fixed hours: lunch (<span class="fr">le déjeuner</span>) roughly from noon to two, dinner (<span class="fr">le dîner</span>) from about half past seven. In between, many restaurants stop serving food altogether. Arriving at three in the afternoon and expecting a meal works in a <span class="fr">brasserie</span> or a place that advertises <span class="fr">service continu</span> (“continuous service”), much less often in an ordinary restaurant.</p>
        <p>Hours vary with region and type of place: dinner tends to start later in the south and in big cities, and earlier in small towns and the countryside. Treat the times above as a rule of thumb, not a timetable.</p>
        <p>For dinner, and for a popular place at lunch, booking is normal and often necessary. Many restaurants now take bookings online, but the phone call is still common, and the phrases are the same in person.</p>`
    },
    {
      title: 'La carte, le menu, la formule',
      html: `
        <p>Three words that English speakers regularly confuse:</p>
        <ul>
          <li><span class="fr">la carte</span> is the menu, the full list of dishes. You order <span class="fr">à la carte</span> when you choose dishes individually, each at its own price.</li>
          <li><span class="fr">le menu</span> is a set menu at a fixed price, usually two or three courses with a limited choice in each. <span class="fr">Le menu à 32 €</span> might offer three starters, three main courses and three desserts.</li>
          <li><span class="fr">la formule</span> is a cheaper, shorter set menu, typically at lunch: <span class="fr">entrée + plat</span> or <span class="fr">plat + dessert</span>. Many restaurants write it on a board (<span class="fr">l’ardoise</span>) and change it daily.</li>
        </ul>
        <p>The <span class="fr">plat du jour</span> (“dish of the day”) is a single main course that changes daily, often the best value in the house. The courses themselves are <span class="fr">l’entrée</span> (starter), <span class="fr">le plat</span> (main course) and <span class="fr">le dessert</span>; cheese, where offered, comes between main course and dessert.</p>
        <p class="aside"><strong>False friend.</strong> <span class="fr">L’entrée</span> is the course you enter the meal with: the starter. In American English an “entrée” is the main course; British usage has mostly followed the French, but menus in English are inconsistent.</p>`
    },
    {
      title: 'Bread, water and the order of things',
      html: `
        <p>Bread usually comes without being asked for and without charge, in a basket, and it goes on the tablecloth beside your plate rather than on a side plate. It is eaten with the meal and especially with cheese, not as a starter with butter; butter on the table is the exception in an ordinary restaurant.</p>
        <p>Tap water in a jug (<span class="fr">une carafe d’eau</span>) is free when you eat; the waiter may ask <span class="fr">plate ou gazeuse ?</span> to sell you a bottle, and <span class="fr">une carafe, s’il vous plaît</span> is a perfectly normal answer.</p>
        <p>Coffee comes after dessert, not with it. If you want both together, say so: <span class="fr">le café avec le dessert, s’il vous plaît</span>. A <span class="fr">café gourmand</span>, an espresso served with two or three small desserts, is a popular compromise.</p>`
    },
    {
      title: 'How the meat is cooked',
      html: `
        <p>A waiter taking an order for steak, duck breast or lamb will ask <span class="fr">Quelle cuisson ?</span> (“What cooking?”). The usual answers, from least to most cooked:</p>
        <ul>
          <li><span class="fr">bleu</span>: seared outside, nearly raw inside;</li>
          <li><span class="fr">saignant</span>: rare (literally “bleeding”);</li>
          <li><span class="fr">à point</span>: medium-rare to medium;</li>
          <li><span class="fr">bien cuit</span>: well done.</li>
        </ul>
        <p>It is widely reported that French kitchens cook a degree less than British or American ones: a French <span class="fr">à point</span> often arrives pinker than an English “medium”. If you want it cooked through, say <span class="fr">bien cuit</span>; for something in between, <span class="fr">à point, plutôt bien cuit</span> (“medium, towards well done”) is understood. Duck breast (<span class="fr">le magret</span>) is normally served pink, and some chefs are reluctant to cook it further.</p>`
    }
  ],

  pronunciation: `
    <p>Only what this unit adds. Unit 1 and Reference → Sounds cover the basics.</p>
    <h3>ill and gn</h3>
    <ul>
      <li><span class="fr">ill</span> after a vowel, and usually after <span class="fr">i</span> at the start of a syllable, is [j], German <em>j</em>: <span class="fr">grillé</span> [gʁije], <span class="fr">bouteille</span> [butɛj], <span class="fr">feuille</span> [fœj]. Exceptions with [l] exist (<span class="fr">ville</span>, <span class="fr">mille</span>), but menus rarely contain them.</li>
      <li><span class="fr">gn</span> is [ɲ], the sound in Spanish <em>señor</em> or Italian <em>gnocchi</em>, close to English “ny” in <em>canyon</em>: <span class="fr">agneau</span> [aɲo], <span class="fr">champignon</span> [ʃɑ̃piɲɔ̃].</li>
    </ul>
    <h3>Silent letters in food words</h3>
    <ul>
      <li><span class="fr">bœuf</span> [bœf] but <span class="fr">les bœufs</span> [bø]: the <span class="fr">f</span> disappears in the plural. On a menu you will nearly always meet the singular.</li>
      <li><span class="fr">porc</span> [pɔʁ], <span class="fr">tabac</span> [taba]: the final <span class="fr">c</span> is silent in these, against the <em>careful</em> rule of Unit 1. <span class="fr">Persil</span> (parsley) is said either with or without its final <span class="fr">l</span>.</li>
      <li><span class="fr">œuf</span> [œf], <span class="fr">les œufs</span> [lezø]: like <span class="fr">bœuf</span>.</li>
    </ul>
    <h3>Times: liaison with heures</h3>
    <p><span class="fr">Heure</span> begins with a silent <span class="fr">h</span>, so the number before it links: <span class="fr">deux heures</span> [døzœʁ], <span class="fr">trois heures</span> [tʁwazœʁ], <span class="fr">six heures</span> [sizœʁ], <span class="fr">dix heures</span> [dizœʁ], <span class="fr">neuf heures</span> [nœvœʁ] (with [v]), <span class="fr">une heure</span> [ynœʁ], <span class="fr">vingt heures</span> [vɛ̃tœʁ] (the <span class="fr">t</span> of <span class="fr">vingt</span> comes back). Compare <span class="fr">deux personnes</span> [dø pɛʁsɔn]: <span class="fr">personnes</span> begins with a consonant, so nothing links.</p>
    <h3>Numbers before a consonant</h3>
    <p><span class="fr">Cinq, six, huit, dix</span> lose their final consonant before a word starting with a consonant, at least in careful speech: <span class="fr">six personnes</span> [si pɛʁsɔn], <span class="fr">huit jours</span> [ɥi ʒuʁ]. <span class="fr">Cinq</span> increasingly keeps its [k] everywhere. On their own, or at the end of a phrase, all four keep it: <span class="fr">nous sommes six</span> [sis].</p>
  `,

  phrasesIntro: `<p>The phrases follow the course of a meal. Those marked “you will hear” are the waiter’s: learn to recognise them first, then to answer.</p>`,
  phraseGroups: [
    { title: 'Booking and arriving', ids: ['p1', 'p2', 'p3', 'p4', 'p5', 'p6'] },
    { title: 'The menu', ids: ['p7', 'p8', 'p9', 'p10', 'p11'] },
    { title: 'Ordering', ids: ['p12', 'p13', 'p14', 'p15', 'p16', 'p17', 'p18', 'p19', 'p20', 'p21'] },
    { title: 'Drinks', ids: ['p22', 'p23'] },
    { title: 'During the meal', ids: ['p24', 'p25', 'p26', 'p27'] }
  ],
  phrases: [
    { id: 'p1', fr: 'Je voudrais réserver une table pour deux personnes.', en: 'I’d like to book a table for two.', lit: '… for two persons.' },
    { id: 'p2', fr: 'Pour ce soir, vers vingt heures.', en: 'For this evening, at about eight.', note: 'Bookings use the 24-hour clock. <span class="fr">Vers</span> is “around”; <span class="fr">à vingt heures</span> is “at eight” exactly.' },
    { id: 'p3', fr: 'J’ai réservé au nom de Martin.', en: 'I’ve booked under the name Martin.', lit: 'I have booked in the name of Martin.' },
    { id: 'p4', fr: 'Vous avez une table pour deux ?', en: 'Do you have a table for two?', note: 'Without a booking. Hold up two fingers as well; nobody minds.' },
    { id: 'p5', fr: 'On peut s’asseoir en terrasse ?', en: 'Can we sit outside?', lit: 'One can sit on the terrace?', note: '<span class="fr">On</span> (“one”) is the everyday spoken word for “we”.' },
    { id: 'p6', fr: 'Désolé, c’est complet.', en: 'Sorry, we’re full.', note: 'You will hear it. <span class="fr">Complet</span>: full, fully booked.' },
    { id: 'p7', fr: 'La carte, s’il vous plaît.', en: 'The menu, please.' },
    { id: 'p8', fr: 'Quel est le plat du jour ?', en: 'What is the dish of the day?' },
    { id: 'p9', fr: 'Qu’est-ce que vous me conseillez ?', en: 'What do you recommend?', lit: 'What do you advise me?' },
    { id: 'p10', fr: 'Qu’est-ce que c’est, exactement ?', en: 'What is that, exactly?', note: 'Point at the line on the menu as you ask.' },
    { id: 'p11', fr: 'Je vais prendre la formule entrée-plat.', en: 'I’ll have the set starter and main course.' },
    { id: 'p12', fr: 'Vous avez choisi ?', en: 'Have you decided?', lit: 'You have chosen?', note: 'You will hear it. Also <span class="fr">Vous avez fait votre choix ?</span>' },
    { id: 'p13', fr: 'Encore quelques minutes, s’il vous plaît.', en: 'A few more minutes, please.' },
    { id: 'p14', fr: 'En entrée, je vais prendre la soupe à l’oignon.', en: 'As a starter, I’ll have the onion soup.' },
    { id: 'p15', fr: 'Et comme plat, le poulet rôti.', en: 'And as a main course, the roast chicken.' },
    { id: 'p16', fr: 'Pour moi, la même chose.', en: 'The same for me.' },
    { id: 'p17', fr: 'Quelle cuisson pour la viande ?', en: 'How would you like the meat cooked?', lit: 'Which cooking for the meat?', note: 'You will hear it, often just <span class="fr">Quelle cuisson ?</span>' },
    { id: 'p18', fr: 'À point, s’il vous plaît.', en: 'Medium, please.' },
    { id: 'p19', fr: 'Saignant, s’il vous plaît.', en: 'Rare, please.' },
    { id: 'p20', fr: 'C’est servi avec quoi ?', en: 'What does it come with?', lit: 'It is served with what?' },
    { id: 'p21', fr: 'Je peux avoir des frites à la place ?', en: 'Can I have chips instead?', lit: '… in the place?' },
    { id: 'p22', fr: 'Un pichet de vin rouge, s’il vous plaît.', en: 'A jug of red wine, please.', note: 'House wine served in a jug, usually 25 or 50 cl: cheaper than a bottle.' },
    { id: 'p23', fr: 'Et comme boisson ?', en: 'And to drink?', lit: 'And as a drink?', note: 'You will hear it.' },
    { id: 'p24', fr: 'Bon appétit !', en: 'Enjoy your meal!', note: 'The waiter says it as the food arrives; answer <span class="fr">Merci !</span> Between diners, the reply is <span class="fr">Merci, vous aussi</span> or <span class="fr">Bon appétit !</span>' },
    { id: 'p25', fr: 'Tout se passe bien ?', en: 'Is everything all right?', lit: 'Everything is going well?', note: 'You will hear it. Answer <span class="fr">Très bien, merci.</span>' },
    { id: 'p26', fr: 'C’était délicieux.', en: 'It was delicious.' },
    { id: 'p27', fr: 'Pas de dessert, juste un café.', en: 'No dessert, just a coffee.' }
  ],

  dialogue: {
    title: 'Une table en terrasse',
    setting: '<p>A Friday evening at a brasserie in Bordeaux. You booked a table for two this afternoon; your partner is with you. The waiter (<span class="fr">le serveur</span>) meets you at the door.</p>',
    you: 'Vous',
    lines: [
      { who: 'Le serveur', fr: 'Bonsoir ! Vous avez réservé ?', en: 'Good evening! Have you booked?' },
      { who: 'Vous', fr: 'Bonsoir. Oui, une table pour deux, au nom de Martin.', en: 'Good evening. Yes, a table for two, under the name Martin.' },
      { who: 'Le serveur', fr: 'Martin… oui, voilà. Vous préférez en salle ou en terrasse ?', en: 'Martin… yes, there you are. Would you prefer inside or outside?' },
      { who: 'Vous', fr: 'En terrasse, s’il vous plaît.', en: 'Outside, please.' },
      { who: 'Le serveur', fr: 'Très bien, suivez-moi. Voici la carte. Ce soir, le plat du jour, c’est un bœuf bourguignon.', en: 'Very good, follow me. Here is the menu. Tonight the dish of the day is a beef bourguignon.' },
      { who: 'Le serveur', fr: 'Vous avez choisi ?', en: 'Have you decided?' },
      { who: 'Vous', fr: 'Oui. Pour madame, la formule entrée-plat : la salade de chèvre chaud, puis le saumon grillé.', en: 'Yes. For my partner, the starter-and-main set menu: the warm goat’s cheese salad, then the grilled salmon.' },
      { who: 'Le serveur', fr: 'Très bien. Et pour vous ?', en: 'Very good. And for you?' },
      { who: 'Vous', fr: 'En entrée, la soupe à l’oignon, et comme plat, l’entrecôte.', en: 'As a starter, the onion soup, and as a main course, the rib-eye steak.' },
      { who: 'Le serveur', fr: 'Quelle cuisson pour l’entrecôte ?', en: 'How would you like the steak cooked?' },
      { who: 'Vous', fr: 'À point, s’il vous plaît. C’est servi avec quoi ?', en: 'Medium, please. What does it come with?' },
      { who: 'Le serveur', fr: 'Avec des frites maison ou des haricots verts, au choix.', en: 'With home-made chips or green beans, as you prefer.' },
      { who: 'Vous', fr: 'Des frites, s’il vous plaît.', en: 'Chips, please.' },
      { who: 'Le serveur', fr: 'Et comme boisson ?', en: 'And to drink?' },
      { who: 'Vous', fr: 'Un pichet de vin rouge et une carafe d’eau, s’il vous plaît.', en: 'A jug of red wine and a jug of tap water, please.' },
      { who: 'Le serveur', fr: 'Un pichet de vingt-cinq ou de cinquante centilitres ?', en: 'A 25 or a 50 centilitre jug?' },
      { who: 'Vous', fr: 'De cinquante, s’il vous plaît.', en: 'Fifty, please.' },
      { who: 'Le serveur', fr: 'Parfait. Je vous apporte ça tout de suite.', en: 'Perfect. I’ll bring that right away.' }
    ],
    notes: [
      { ref: 'Vous avez réservé ?', html: '“Have you booked?” This is the past tense with <span class="fr">avoir</span> (<span class="fr">j’ai réservé</span>, “I have booked / I booked”), which you will meet properly later. For now, recognise the pattern: a form of <span class="fr">avoir</span> plus a verb ending in <span class="fr">-é</span>.' },
      { ref: 'au nom de Martin', html: '“In the name of Martin”. Give your surname; a French restaurant will rarely ask for a first name. If your name is hard for French ears, spell it, or give a simpler one: nobody checks.' },
      { ref: 'Pour madame', html: 'Referring to your companion as <span class="fr">madame</span> or <span class="fr">monsieur</span> when ordering is normal and polite, whatever your relationship. <span class="fr">Ma femme</span> (my wife) or <span class="fr">mon mari</span> (my husband) are also fine.' },
      { ref: 'suivez-moi', html: '“Follow me”: an imperative, the <span class="fr">vous</span> form without <span class="fr">vous</span>, as in <span class="fr">excusez-moi</span> from Unit 1.' },
      { ref: 'la salade de chèvre chaud', html: 'A green salad with warm goat’s cheese on toast, a fixture of French brasserie menus. <span class="fr">Chèvre</span> is the goat and, by extension, the cheese; <span class="fr">chaud</span> belongs to the cheese, not the salad, which is why it is masculine.' },
      { ref: 'puis', html: '“Then, next”. In speech also <span class="fr">ensuite</span>.' },
      { ref: 'l’entrecôte', html: 'A rib-eye or entrecôte steak, literally “between the ribs”; feminine. <span class="fr">Entrecôte à la bordelaise</span>, with a red-wine and shallot sauce, is the local speciality in Bordeaux.' },
      { ref: 'frites maison', html: '<span class="fr">Maison</span> (“house”) after a dish means home-made, made on the premises; it does not change for gender or number: <span class="fr">des frites maison</span>, <span class="fr">une tarte maison</span>.' },
      { ref: 'au choix', html: '“As you choose”, “your choice of”: menus use it constantly (<span class="fr">fromage ou dessert au choix</span>).' },
      { ref: 'Je vous apporte ça tout de suite', html: '“I’m bringing you that at once”: French uses the present tense for something about to happen, as English does in “I’m bringing it now”.' }
    ]
  },

  vocab: [
    { id: 'v1', la: 'le restaurant', head: 'le restaurant', pos: 'noun', g: 'm', pron: '[ʁɛstɔʁɑ̃]', en: 'restaurant', note: 'Informally <span class="fr">le resto</span>.' },
    { id: 'v2', la: 'réserver', head: 'réserver', pos: 'verb', pron: '[ʁezɛʁve]', en: 'to book, to reserve', note: '<span class="fr">j’ai réservé</span>: I have booked. The noun is <span class="fr">la réservation</span>.' },
    { id: 'v3', la: 'la table', head: 'la table', pos: 'noun', g: 'f', pron: '[tabl]', en: 'table' },
    { id: 'v4', la: 'la personne', head: 'la personne', pos: 'noun', g: 'f', pron: '[pɛʁsɔn]', en: 'person', note: 'Always feminine, even for a man.' },
    { id: 'v5', la: 'le soir', head: 'le soir', pos: 'noun', g: 'm', pron: '[swaʁ]', en: 'evening', note: '<span class="fr">ce soir</span>: this evening, tonight.' },
    { id: 'v6', la: 'le midi', head: 'le midi', pos: 'noun', g: 'm', pron: '[midi]', en: 'midday; lunchtime', note: '<span class="fr">ce midi</span>: today at lunch. <span class="fr">Le Midi</span>, with a capital, is the south of France.' },
    { id: 'v7', la: 'l’heure', head: 'l’heure', pos: 'noun', g: 'f', pron: '[œʁ]', en: 'hour; time (of day); o’clock', note: '<span class="fr">à vingt heures</span>: at eight p.m.' },
    { id: 'v8', la: 'complet, complète', head: 'complet', say: 'complet, complète', pos: 'adjective', pron: '[kɔ̃plɛ, kɔ̃plɛt]', en: 'full, fully booked' },
    { id: 'v9', la: 'le menu', head: 'le menu', pos: 'noun', g: 'm', pron: '[məny]', en: 'set menu (at a fixed price)', note: 'A false friend: the menu as a list of dishes is <span class="fr">la carte</span>.' },
    { id: 'v10', la: 'la formule', head: 'la formule', pos: 'noun', g: 'f', pron: '[fɔʁmyl]', en: 'short set menu (e.g. starter and main)' },
    { id: 'v11', la: 'le plat du jour', head: 'le plat du jour', pos: 'noun', g: 'm', pron: '[pla dy ʒuʁ]', en: 'dish of the day' },
    { id: 'v12', la: 'l’entrée', head: 'l’entrée', pos: 'noun', g: 'f', pron: '[ɑ̃tʁe]', en: 'starter', note: 'Also “entrance”. Not the American “main course”.' },
    { id: 'v13', la: 'le plat', head: 'le plat', pos: 'noun', g: 'm', pron: '[pla]', en: 'main course; dish', note: 'Fully, <span class="fr">le plat principal</span>.' },
    { id: 'v14', la: 'le dessert', head: 'le dessert', pos: 'noun', g: 'm', pron: '[desɛʁ]', en: 'dessert, pudding', note: 'One <span class="fr">s</span> sound: [desɛʁ], not [dezɛʁ] (that would be <span class="fr">désert</span>, desert).' },
    { id: 'v15', la: 'la viande', head: 'la viande', pos: 'noun', g: 'f', pron: '[vjɑ̃d]', en: 'meat' },
    { id: 'v16', la: 'le poisson', head: 'le poisson', pos: 'noun', g: 'm', pron: '[pwasɔ̃]', en: 'fish', note: 'Double <span class="fr">ss</span> is [s]. With one <span class="fr">s</span>, <span class="fr">poison</span> [pwazɔ̃] is poison.' },
    { id: 'v17', la: 'le poulet', head: 'le poulet', pos: 'noun', g: 'm', pron: '[pulɛ]', en: 'chicken' },
    { id: 'v18', la: 'le bœuf', head: 'le bœuf', pos: 'noun', g: 'm', pron: '[bœf]', en: 'beef', note: 'Also the animal (ox).' },
    { id: 'v19', la: 'le porc', head: 'le porc', pos: 'noun', g: 'm', pron: '[pɔʁ]', en: 'pork', note: 'Final <span class="fr">c</span> silent.' },
    { id: 'v20', la: 'l’agneau', head: 'l’agneau', pos: 'noun', g: 'm', pron: '[aɲo]', en: 'lamb' },
    { id: 'v21', la: 'le canard', head: 'le canard', pos: 'noun', g: 'm', pron: '[kanaʁ]', en: 'duck', note: '<span class="fr">le magret de canard</span>: duck breast.' },
    { id: 'v22', la: 'l’entrecôte', head: 'l’entrecôte', pos: 'noun', g: 'f', pron: '[ɑ̃tʁəkot]', en: 'rib-eye steak' },
    { id: 'v23', la: 'le saumon', head: 'le saumon', pos: 'noun', g: 'm', pron: '[somɔ̃]', en: 'salmon' },
    { id: 'v24', la: 'les légumes', head: 'les légumes', pos: 'noun', g: 'm', pron: '[legym]', en: 'vegetables', note: 'Masculine: <span class="fr">un légume</span>.' },
    { id: 'v25', la: 'les frites', head: 'les frites', pos: 'noun', g: 'f', pron: '[fʁit]', en: 'chips (fries)' },
    { id: 'v26', la: 'les haricots verts', head: 'les haricots verts', pos: 'noun', g: 'm', pron: '[aʁiko vɛʁ]', en: 'green beans', note: 'No liaison: <span class="fr">les haricots</span> is [le aʁiko], because this <span class="fr">h</span> blocks it.' },
    { id: 'v27', la: 'la salade', head: 'la salade', pos: 'noun', g: 'f', pron: '[salad]', en: 'salad; lettuce' },
    { id: 'v28', la: 'la soupe', head: 'la soupe', pos: 'noun', g: 'f', pron: '[sup]', en: 'soup' },
    { id: 'v29', la: 'le fromage', head: 'le fromage', pos: 'noun', g: 'm', pron: '[fʁɔmaʒ]', en: 'cheese', note: 'Masculine, like most nouns in <span class="fr">-age</span>. <span class="fr">Le chèvre</span>: goat’s cheese.' },
    { id: 'v30', la: 'la cuisson', head: 'la cuisson', pos: 'noun', g: 'f', pron: '[kɥisɔ̃]', en: 'cooking (how long something is cooked)' },
    { id: 'v31', la: 'saignant', head: 'saignant', pos: 'adjective', pron: '[sɛɲɑ̃]', en: 'rare (meat)', note: 'Literally “bleeding”. Answering <span class="fr">Quelle cuisson ?</span> you use this form whatever the meat.' },
    { id: 'v32', la: 'à point', head: 'à point', pos: 'phrase', pron: '[a pwɛ̃]', en: 'medium (meat)' },
    { id: 'v33', la: 'bien cuit', head: 'bien cuit', pos: 'phrase', pron: '[bjɛ̃ kɥi]', en: 'well done (meat)' },
    { id: 'v34', la: 'grillé, grillée', head: 'grillé', say: 'grillé, grillée', pos: 'adjective', pron: '[gʁije]', en: 'grilled' },
    { id: 'v35', la: 'rôti, rôtie', head: 'rôti', say: 'rôti, rôtie', pos: 'adjective', pron: '[ʁoti]', en: 'roast, roasted', note: '<span class="fr">le rôti</span>: a roast (joint).' },
    { id: 'v36', la: 'maison', head: 'maison', pos: 'adjective', pron: '[mɛzɔ̃]', en: 'home-made (after a dish)', note: 'As a noun, <span class="fr">la maison</span>: house. As an adjective it never changes.' },
    { id: 'v37', la: 'le pichet', head: 'le pichet', pos: 'noun', g: 'm', pron: '[piʃɛ]', en: 'jug (of house wine)' },
    { id: 'v38', la: 'la bouteille', head: 'la bouteille', pos: 'noun', g: 'f', pron: '[butɛj]', en: 'bottle' },
    { id: 'v39', la: 'choisir', head: 'choisir', pos: 'verb', pron: '[ʃwaziʁ]', en: 'to choose', note: '<span class="fr">vous avez choisi ?</span> have you chosen? <span class="fr">le choix</span>: the choice.' },
    { id: 'v40', la: 'conseiller', head: 'conseiller', pos: 'verb', pron: '[kɔ̃seje]', en: 'to recommend, to advise' },
    { id: 'v41', la: 'délicieux, délicieuse', head: 'délicieux', say: 'délicieux, délicieuse', pos: 'adjective', pron: '[delisjø, delisjøz]', en: 'delicious' },
    { id: 'v42', la: 'à la place', head: 'à la place', pos: 'phrase', pron: '[a la plas]', en: 'instead' }
  ],

  grammar: [
    {
      title: 'Booking: numbers to 69 and times',
      html: `
        <p>The tens from 20 to 60 are regular, and the units are added with a hyphen, except for 1, which takes <span class="fr">et</span>:</p>
        <div class="tablewrap"><table><thead><tr><th></th><th>French</th><th></th><th>French</th></tr></thead>
        <tbody><tr><td>20</td><td class="fr">vingt</td><td>21</td><td class="fr">vingt et un</td></tr>
        <tr><td>30</td><td class="fr">trente</td><td>22</td><td class="fr">vingt-deux</td></tr>
        <tr><td>40</td><td class="fr">quarante</td><td>35</td><td class="fr">trente-cinq</td></tr>
        <tr><td>50</td><td class="fr">cinquante</td><td>41</td><td class="fr">quarante et un</td></tr>
        <tr><td>60</td><td class="fr">soixante</td><td>69</td><td class="fr">soixante-neuf</td></tr></tbody></table></div>
        <p>Restaurants, stations and shops use the 24-hour clock, and so do most people when making arrangements: <span class="fr">à vingt heures</span> (at 8 p.m.), <span class="fr">à vingt heures trente</span> (8.30 p.m.), <span class="fr">à dix-neuf heures quarante-cinq</span> (7.45 p.m.). The minutes simply follow <span class="fr">heures</span>. Written, it is <span class="fr">20 h</span>, <span class="fr">20 h 30</span>.</p>
        <p>The everyday 12-hour forms (<span class="fr">huit heures et demie</span>, “half past eight”) come in a later unit; in a booking, the 24-hour clock is clearer and never wrong.</p>
        <p class="aside"><strong>German angle.</strong> <span class="fr">Vingt et un</span> puts the tens first, the reverse of <em>einundzwanzig</em>: English order, not German. And French says <span class="fr">vingt heures trente</span> where German says <em>zwanzig Uhr dreißig</em>, exactly in parallel.</p>`
    },
    {
      title: 'Reading dish names: de, à la, au, aux',
      html: `
        <p>French dish names are built with two small words, and once you see the pattern a menu becomes much easier to read.</p>
        <ul>
          <li><span class="fr">de</span> usually says what the dish is made of or from: <span class="fr">une salade de tomates</span> (a tomato salad), <span class="fr">un magret de canard</span> (a duck breast), <span class="fr">une soupe de poisson</span> (fish soup).</li>
          <li><span class="fr">à</span> usually says what it is flavoured with, filled with, or cooked in the style of: <span class="fr">la soupe à l’oignon</span> (onion soup), <span class="fr">la tarte aux pommes</span> (apple tart), <span class="fr">le poulet à la crème</span> (chicken in cream sauce), <span class="fr">à la bordelaise</span> (in the Bordeaux style).</li>
        </ul>
        <p>This is a tendency, not a rule: you will meet exceptions. What is a rule is how <span class="fr">à</span> and <span class="fr">de</span> combine with <span class="fr">le</span> and <span class="fr">les</span>:</p>
        <div class="tablewrap"><table><thead><tr><th></th><th>+ le</th><th>+ la</th><th>+ l’</th><th>+ les</th></tr></thead>
        <tbody><tr><th>à</th><td class="fr">au</td><td class="fr">à la</td><td class="fr">à l’</td><td class="fr">aux</td></tr>
        <tr><th>de</th><td class="fr">du</td><td class="fr">de la</td><td class="fr">de l’</td><td class="fr">des</td></tr></tbody></table></div>
        <p>So: <span class="fr">un pain au chocolat</span> (à + le chocolat), <span class="fr">une tarte aux fraises</span> (à + les fraises), <span class="fr">le plat du jour</span> (de + le jour). You already know <span class="fr">du</span> as “some” from Unit 1; it is the same word.</p>`
    },
    {
      title: 'Adjectives come after the noun, and agree',
      html: `
        <p>Most French adjectives, and all those describing how food is cooked, follow the noun: <span class="fr">le poulet rôti</span>, <span class="fr">le saumon grillé</span>, <span class="fr">les haricots verts</span>, <span class="fr">le vin rouge</span>. A few short, common adjectives go in front (<span class="fr">un bon restaurant</span>, <span class="fr">un petit café</span>); they come in a later unit.</p>
        <p>The adjective takes the gender and number of its noun. In writing:</p>
        <ul>
          <li>feminine: add <span class="fr">-e</span>: <span class="fr">le poulet rôti</span>, <span class="fr">la viande rôtie</span>;</li>
          <li>plural: add <span class="fr">-s</span>: <span class="fr">les légumes grillés</span>, <span class="fr">les tomates grillées</span>;</li>
          <li>an adjective already ending in <span class="fr">-e</span> does not change for gender: <span class="fr">rouge</span>, <span class="fr">rose</span>.</li>
        </ul>
        <p>You often cannot hear the difference: <span class="fr">grillé, grillée, grillés</span> all sound [gʁije]. You can hear it when the feminine <span class="fr">-e</span> brings out a silent consonant: <span class="fr">chaud</span> [ʃo], <span class="fr">chaude</span> [ʃod]; <span class="fr">complet</span> [kɔ̃plɛ], <span class="fr">complète</span> [kɔ̃plɛt]. Some adjectives change more: <span class="fr">délicieux, délicieuse</span>; <span class="fr">blanc, blanche</span>.</p>
        <p>The point for ordering: you will mostly read these, not say them, and a wrong ending in speech is usually inaudible. For writing exercises in this app, make the adjective agree.</p>
        <p class="aside"><strong>German angle.</strong> German inflects the adjective in front of the noun (<em>gegrillter Lachs</em>), French after it (<span class="fr">saumon grillé</span>). The predicative adjective, which German leaves unchanged (<em>der Fisch ist frisch, die Suppe ist frisch</em>), agrees in French too: <span class="fr">le poisson est frais, la soupe est fraîche</span>.</p>`
    },
    {
      title: 'Asking about the menu: qu’est-ce que and quel',
      html: `
        <p>Unit 1 asked questions by rising intonation. Two more patterns cover most of what you will ask a waiter.</p>
        <p><strong><span class="fr">Qu’est-ce que</span></strong> means “what” at the start of a question (literally “what is it that”), followed by a normal statement: <span class="fr">Qu’est-ce que vous me conseillez ?</span> (“What do you recommend me?”), <span class="fr">Qu’est-ce que vous avez comme dessert ?</span> (“What do you have in the way of desserts?”). <span class="fr">Qu’est-ce que c’est ?</span> is “What is it?”. The written form is long, the spoken one short: [kɛskə].</p>
        <p><strong><span class="fr">Quel</span></strong> means “which, what” before a noun, and agrees with it in writing: <span class="fr">quel vin ?</span> (m.), <span class="fr">quelle cuisson ?</span> (f.), <span class="fr">quels desserts ?</span>, <span class="fr">quelles boissons ?</span> All four sound the same: [kɛl]. With <span class="fr">être</span> it asks for a piece of information: <span class="fr">Quel est le plat du jour ?</span></p>
        <p>The casual alternative puts <span class="fr">quoi</span> (“what”) at the end: <span class="fr">C’est quoi, le plat du jour ?</span>, <span class="fr">C’est servi avec quoi ?</span> This is everyday speech, not rude, and you will hear it often.</p>`
    },
    {
      title: 'Structuring an order: en entrée, comme plat',
      html: `
        <p>To order a meal course by course, put the course first and the dish after it:</p>
        <ul>
          <li><span class="fr">En entrée, je vais prendre…</span> (“As a starter…”)</li>
          <li><span class="fr">Comme plat, …</span> or <span class="fr">En plat, …</span> (“As a main course…”)</li>
          <li><span class="fr">Comme dessert, …</span> or <span class="fr">En dessert, …</span></li>
          <li><span class="fr">Comme boisson, …</span> (“To drink…”)</li>
        </ul>
        <p><span class="fr">En</span> and <span class="fr">comme</span> (“as”) are interchangeable here, and neither takes an article: <span class="fr">en entrée</span>, not <span class="fr">en l’entrée</span>. The dish itself takes <span class="fr">le/la</span> when you order it from the menu (<span class="fr">la soupe à l’oignon</span>, “the onion soup” listed), as in English.</p>
        <p>For several people, take one person at a time: <span class="fr">Pour madame, …; pour moi, …</span>. Waiters are used to this and will often prompt with <span class="fr">Et pour vous ?</span></p>`
    }
  ],

  grammarCards: [
    { id: 'gc1', front: 'à + le, à + les; de + le, de + les', back: 'au, aux; du, des (à la, à l’, de la, de l’ do not change)' },
    { id: 'gc2', front: 'la soupe ___ oignon; la tarte ___ pommes', back: 'la soupe à l’oignon; la tarte aux pommes' },
    { id: 'gc3', front: 'Where does a French adjective usually go?', back: 'After the noun, agreeing with it: le poulet rôti, la viande rôtie, les légumes grillés.' },
    { id: 'gc4', front: 'quel, quelle, quels, quelles', back: '“which, what” before a noun, agreeing with it; all said [kɛl]: quelle cuisson ? quel vin ?' },
    { id: 'gc5', front: '21, 35, 41, 69', back: 'vingt et un, trente-cinq, quarante et un, soixante-neuf' },
    { id: 'gc6', front: 'at 8.30 p.m. (booking)', back: 'à vingt heures trente (20 h 30)' },
    { id: 'gc7', front: 'Meat: rare, medium, well done', back: 'saignant, à point, bien cuit (bleu: barely cooked)' }
  ],

  reference: [
    { title: 'Numbers 20–69', headers: ['', 'French', 'said'], rows: [
      ['20', 'vingt', '[vɛ̃]'], ['21', 'vingt et un', '[vɛ̃te œ̃]'], ['22', 'vingt-deux', '[vɛ̃tdø]'], ['25', 'vingt-cinq', '[vɛ̃tsɛ̃k]'],
      ['30', 'trente', '[tʁɑ̃t]'], ['31', 'trente et un', '[tʁɑ̃te œ̃]'], ['40', 'quarante', '[kaʁɑ̃t]'], ['45', 'quarante-cinq', '[kaʁɑ̃tsɛ̃k]'],
      ['50', 'cinquante', '[sɛ̃kɑ̃t]'], ['60', 'soixante', '[swasɑ̃t]'], ['69', 'soixante-neuf', '[swasɑ̃tnœf]']] },
    { title: 'Times (24-hour clock)', headers: ['written', 'said', 'English'], rows: [
      ['12 h', 'midi / douze heures', 'noon'], ['12 h 30', 'midi et demi / douze heures trente', '12.30 p.m.'], ['13 h', 'treize heures', '1 p.m.'],
      ['19 h 30', 'dix-neuf heures trente', '7.30 p.m.'], ['20 h', 'vingt heures', '8 p.m.'], ['20 h 45', 'vingt heures quarante-cinq', '8.45 p.m.'], ['21 h 15', 'vingt et une heures quinze', '9.15 p.m.']] },
    { title: 'à and de with the article', headers: ['', '+ le', '+ la', '+ l’', '+ les'], rows: [
      ['à', 'au', 'à la', 'à l’', 'aux'], ['de', 'du', 'de la', 'de l’', 'des']] },
    { title: 'Cooking meat', headers: ['French', 'English'], rows: [
      ['bleu', 'very rare'], ['saignant', 'rare'], ['à point', 'medium(-rare)'], ['bien cuit', 'well done']] }
  ],

  exercises: [
    { id: 'e1', type: 'mc', prompt: 'On a French menu, <span class="fr">l’entrée</span> is…', options: ['the starter', 'the main course', 'the dessert', 'the entrance fee'], answer: 0, explain: 'The course you “enter” the meal with. The main course is le plat.' },
    { id: 'e2', type: 'mc', prompt: 'You want to choose dishes individually, each at its own price. You order…', options: ['à la carte', 'le menu', 'la formule', 'le plat du jour'], answer: 0, explain: 'Le menu and la formule are set menus at a fixed price.' },
    { id: 'e3', type: 'mc', prompt: 'The waiter asks <span class="fr">Quelle cuisson ?</span> You want your steak pink but not bloody. You say…', options: ['À point.', 'Bien cuit.', 'Bleu.', 'Saignant.'], answer: 0, explain: 'À point is medium; saignant is rare, bleu very rare, bien cuit well done.' },
    { id: 'e4', type: 'gap', prompt: '<span class="fr">la tarte ___ pommes</span>', hint: ' (à + les)', answers: ['aux'], full: 'la tarte aux pommes', explain: 'à + les = aux. Apple tart: the dish is flavoured with apples.' },
    { id: 'e5', type: 'gap', prompt: '<span class="fr">un pain ___ chocolat</span>', hint: ' (à + le)', answers: ['au'], full: 'un pain au chocolat', explain: 'à + le = au.' },
    { id: 'e6', type: 'gap', prompt: '<span class="fr">Quel est le plat ___ jour ?</span>', hint: ' (de + le)', answers: ['du'], full: 'Quel est le plat du jour ?', explain: 'de + le = du.' },
    { id: 'e7', type: 'gap', prompt: '<span class="fr">la soupe ___ oignon</span>', hint: ' (à + l’)', answers: ['à l’', 'à l\'', 'à l', 'a l’', 'a l\''], full: 'la soupe à l’oignon', explain: 'à + l’ does not combine: à l’oignon.' },
    { id: 'e8', type: 'gap', prompt: '<span class="fr">la viande ___</span>', hint: ' (rôti, rôtie, rôtis or rôties?)', answers: ['rôtie'], full: 'la viande rôtie', explain: 'la viande is feminine singular: rôtie.' },
    { id: 'e9', type: 'gap', prompt: '<span class="fr">___ cuisson pour la viande ?</span>', hint: ' (quel or quelle?)', answers: ['Quelle', 'quelle'], full: 'Quelle cuisson pour la viande ?', explain: 'la cuisson is feminine: quelle. Both are said [kɛl].' },
    { id: 'e10', type: 'match', prompt: 'Match the French and the English.', pairs: [['le poisson', 'fish'], ['l’agneau', 'lamb'], ['le canard', 'duck'], ['le porc', 'pork'], ['le saumon', 'salmon']] },
    { id: 'e11', type: 'match', prompt: 'Match the numbers.', pairs: [['vingt et un', '21'], ['trente-cinq', '35'], ['quarante', '40'], ['cinquante-deux', '52'], ['soixante', '60']] },
    { id: 'e12', type: 'order', prompt: 'Put the words in order.', source: 'I’d like to book a table for four people.', tokens: ['Je', 'voudrais', 'réserver', 'une', 'table', 'pour', 'quatre', 'personnes.'] },
    { id: 'e13', type: 'order', prompt: 'Put the words in order.', source: 'What do you recommend?', tokens: ['Qu’est-ce', 'que', 'vous', 'me', 'conseillez ?'] },
    { id: 'e14', type: 'translate', dir: 'fr-en', source: 'Vous avez une table pour deux ?', accepted: ['Do you have a table for two?', 'Have you got a table for two?', 'Do you have a table for two people?', 'Is there a table for two?', 'You have a table for two?'], model: 'Do you have a table for two?' },
    { id: 'e15', type: 'translate', dir: 'en-fr', source: 'As a starter, I’ll have the onion soup.', accepted: ['En entrée, je vais prendre la soupe à l’oignon.', 'Comme entrée, je vais prendre la soupe à l’oignon.', 'En entrée, je prends la soupe à l’oignon.', 'Comme entrée, je prends la soupe à l’oignon.', 'En entrée, la soupe à l’oignon.', 'Comme entrée, la soupe à l’oignon.'], model: 'En entrée, je vais prendre la soupe à l’oignon.', explain: 'En entrée or comme entrée, with no article; je vais prendre or je prends; soupe à l’oignon, with à l’ before the vowel.' },
    { id: 'e16', type: 'translate', dir: 'en-fr', source: 'Medium, please.', accepted: ['À point, s’il vous plaît.'], model: 'À point, s’il vous plaît.', explain: 'À point is the answer to Quelle cuisson ? The à has a grave accent.' },
    { id: 'e17', type: 'translate', dir: 'en-fr', source: 'What is the dish of the day?', accepted: ['Quel est le plat du jour ?', 'C’est quoi, le plat du jour ?', 'C’est quoi le plat du jour ?', 'Qu’est-ce que c’est, le plat du jour ?'], model: 'Quel est le plat du jour ?', explain: 'Quel (masculine, agreeing with le plat) + est. du = de + le.' },
    { id: 'e18', type: 'translate', dir: 'fr-en', source: 'C’est servi avec quoi ?', accepted: ['What does it come with?', 'What is it served with?', 'What’s it served with?', 'What does it come with', 'It is served with what?', 'What is it served with', 'What comes with it?'], model: 'What does it come with?' },
    { id: 'e19', type: 'listen', text: 'Pour ce soir, vers vingt heures.', prompt: 'When is the booking for?', options: ['This evening, around 8 p.m.', 'This evening, around 10 p.m.', 'Tomorrow, around 8 p.m.', 'This evening, around 7 p.m.'], answer: 0, explain: 'ce soir: this evening; vingt heures: 20.00, 8 p.m.' },
    { id: 'e20', type: 'listen', text: 'Désolé, c’est complet.', prompt: 'What does the waiter tell you?', options: ['They are full.', 'The kitchen is closed.', 'Your table is ready.', 'Everything is included.'], answer: 0, explain: 'complet: full, fully booked.' },
    { id: 'e21', type: 'listen', text: 'Et comme plat, le poulet rôti.', explain: 'Et comme plat, le poulet rôti: and as a main course, the roast chicken.' },
    { id: 'e22', type: 'listen', text: 'Le menu est à trente-deux euros.', prompt: 'How much is the set menu?', options: ['32 €', '22 €', '42 €', '23 €'], answer: 0, explain: 'trente-deux: 32. Vingt-deux 22, quarante-deux 42.' },
    { id: 'e23', type: 'mc', prompt: 'On a menu, <span class="fr">frites maison</span> are…', options: ['home-made chips', 'chips for the table', 'chips in the house style with sauce', 'chips for take-away'], answer: 0, explain: 'maison after a dish: made on the premises. It never changes its ending.' }
  ],

  reading: {
    title: 'L’ardoise de la Brasserie des Quais',
    note: 'A lunchtime board (ardoise) outside a brasserie. Tap any word for its meaning.',
    text: `BRASSERIE DES QUAIS
Formule du midi — du lundi au vendredi
Entrée + plat ou plat + dessert : 19,50 €
Entrée + plat + dessert : 24,00 €

Entrées
Soupe à l’oignon gratinée
Salade de chèvre chaud
Œuf mayonnaise

Plats
Plat du jour : bœuf bourguignon
Saumon grillé, légumes de saison
Entrecôte, frites maison (supplément 4 €)

Desserts
Tarte aux pommes
Mousse au chocolat
Café gourmand

Pain et carafe d’eau offerts`,
    glosses: {
      'brasserie': 'brasserie (restaurant serving at most hours)', 'des': 'of the (de + les)', 'quais': 'quays, riverside streets (le quai)',
      'formule': 'short set menu', 'du': 'of the (de + le); here: from', 'midi': 'midday, lunchtime', 'lundi': 'Monday', 'au': 'to the (à + le)', 'vendredi': 'Friday',
      'entrée': 'starter', 'plat': 'main course; dish', 'ou': 'or', 'dessert': 'dessert', 'entrées': 'starters', 'soupe': 'soup', 'à': 'with; in the style of',
      'l': 'the (le or la before a vowel)', 'oignon': 'onion', 'gratinée': 'with a browned cheese crust (fem.)', 'salade': 'salad', 'de': 'of', 'chèvre': 'goat; goat’s cheese',
      'chaud': 'warm, hot', 'œuf': 'egg', 'mayonnaise': 'mayonnaise', 'plats': 'main courses', 'jour': 'day', 'bœuf': 'beef', 'bourguignon': 'Burgundy-style (stewed in red wine)',
      'saumon': 'salmon', 'grillé': 'grilled', 'légumes': 'vegetables', 'saison': 'season', 'entrecôte': 'rib-eye steak', 'frites': 'chips', 'maison': 'home-made',
      'supplément': 'extra charge', 'desserts': 'desserts', 'tarte': 'tart', 'aux': 'with (à + les)', 'pommes': 'apples (la pomme)', 'mousse': 'mousse',
      'chocolat': 'chocolate', 'café': 'coffee', 'gourmand': 'here: with small desserts (literally: greedy, food-loving)', 'pain': 'bread', 'et': 'and',
      'carafe': 'jug', 'd': 'of (de before a vowel)', 'eau': 'water', 'offerts': 'free, on the house (literally: offered)'
    },
    translation: 'BRASSERIE DES QUAIS. Lunch set menu, Monday to Friday. Starter + main or main + dessert: 19.50 €. Starter + main + dessert: 24.00 €. Starters: onion soup with a cheese crust; warm goat’s cheese salad; egg mayonnaise. Mains: dish of the day: beef bourguignon; grilled salmon with seasonal vegetables; rib-eye steak with home-made chips (4 € extra). Desserts: apple tart; chocolate mousse; espresso with small desserts. Bread and jug of water free.',
    notes: [
      { ref: 'du lundi au vendredi', html: '“From Monday to Friday”: <span class="fr">de… à…</span> with the article combined: <span class="fr">du</span> (de + le) and <span class="fr">au</span> (à + le). Days of the week take no capital in French.' },
      { ref: 'Soupe à l’oignon gratinée', html: 'Onion soup topped with bread and cheese and browned under the grill. <span class="fr">Gratinée</span> is feminine because it describes <span class="fr">la soupe</span>.' },
      { ref: 'Œuf mayonnaise', html: 'Hard-boiled egg halves with mayonnaise: a plain bistro classic, with its own fan club in Paris. The <span class="fr">f</span> of <span class="fr">œuf</span> is pronounced in the singular.' },
      { ref: 'supplément 4 €', html: 'A dish within the set menu that costs extra. Common for steak, and for anything with expensive ingredients.' },
      { ref: 'Pain et carafe d’eau offerts', html: '<span class="fr">Offert</span> means “given free”. Bread and tap water are free in practice almost everywhere; the board says so to reassure visitors. These prices are invented but realistic for a provincial city.' }
    ],
    questions: [
      { id: 'r1', type: 'mc', prompt: 'What do three courses cost at lunch?', options: ['24,00 €', '19,50 €', '4,00 €', '23,50 €'], answer: 0, explain: 'Entrée + plat + dessert: 24,00 €.' },
      { id: 'r2', type: 'mc', prompt: 'You choose the steak in the two-course formula. What do you pay?', options: ['23,50 €', '19,50 €', '24,00 €', '28,00 €'], answer: 0, explain: '19,50 € plus a supplément of 4 €.' },
      { id: 'r3', type: 'mc', prompt: 'On which days is the formula available?', options: ['Monday to Friday', 'Every day', 'Weekends only', 'Friday only'], answer: 0, explain: 'du lundi au vendredi: from Monday to Friday.' },
      { id: 'r4', type: 'mc', prompt: 'Which dish is made with apples?', options: ['la tarte aux pommes', 'la mousse au chocolat', 'le café gourmand', 'la soupe à l’oignon'], answer: 0, explain: 'les pommes: apples; à + les = aux.' }
    ]
  },

  test: {
    count: 12,
    vocabQuestions: 3,
    items: [
      { id: 't1', type: 'gap', prompt: '<span class="fr">la mousse ___ chocolat</span>', hint: ' (à + le)', answers: ['au'], full: 'la mousse au chocolat', explain: 'à + le = au.' },
      { id: 't2', type: 'gap', prompt: '<span class="fr">les légumes ___</span>', hint: ' (grillé, grillée, grillés or grillées?)', answers: ['grillés'], full: 'les légumes grillés', explain: 'les légumes is masculine plural: grillés.' },
      { id: 't3', type: 'gap', prompt: '<span class="fr">___ vin vous me conseillez ?</span>', hint: ' (quel or quelle?)', answers: ['Quel', 'quel'], full: 'Quel vin vous me conseillez ?', explain: 'le vin is masculine: quel.' },
      { id: 't4', type: 'gap', prompt: '<span class="fr">une tarte ___ fraises</span>', hint: ' (à + les)', answers: ['aux'], full: 'une tarte aux fraises', explain: 'à + les = aux: a strawberry tart.' },
      { id: 't5', type: 'mc', prompt: '<span class="fr">Vous avez choisi ?</span> means…', options: ['Have you decided?', 'Have you booked?', 'Have you finished?', 'Have you paid?'], answer: 0, explain: 'choisir: to choose. Vous avez réservé ? would be “have you booked?”.' },
      { id: 't6', type: 'mc', prompt: 'You booked for half past seven in the evening. In French that is…', options: ['dix-neuf heures trente', 'sept heures trente', 'vingt heures trente', 'dix-sept heures trente'], answer: 0, explain: '19 h 30. Bookings use the 24-hour clock.' },
      { id: 't7', type: 'mc', prompt: 'What usually comes free with a meal in a French restaurant?', options: ['bread and tap water', 'bread, butter and mineral water', 'coffee', 'a glass of wine'], answer: 0, explain: 'Bread and a carafe d’eau. Butter is the exception, mineral water is paid for.' },
      { id: 't8', type: 'translate', dir: 'en-fr', source: 'I’d like to book a table for two.', accepted: ['Je voudrais réserver une table pour deux.', 'Je voudrais réserver une table pour deux personnes.'], model: 'Je voudrais réserver une table pour deux personnes.', explain: 'je voudrais + infinitive: “I would like to …”. la table is feminine: une table.' },
      { id: 't9', type: 'translate', dir: 'en-fr', source: 'The same for me.', accepted: ['Pour moi, la même chose.', 'La même chose pour moi.'], model: 'Pour moi, la même chose.', explain: 'la même chose: the same thing.' },
      { id: 't10', type: 'translate', dir: 'fr-en', source: 'Qu’est-ce que vous me conseillez ?', accepted: ['What do you recommend?', 'What would you recommend?', 'What do you suggest?', 'What would you suggest?', 'What do you advise?', 'What do you recommend to me?', 'What can you recommend?'], model: 'What do you recommend?' },
      { id: 't11', type: 'translate', dir: 'fr-en', source: 'Je peux avoir des frites à la place ?', accepted: ['Can I have chips instead?', 'Can I have fries instead?', 'Could I have chips instead?', 'Could I have fries instead?', 'May I have chips instead?', 'May I have fries instead?', 'Can I get chips instead?', 'Can I get fries instead?'], model: 'Can I have chips instead?' },
      { id: 't12', type: 'translate', dir: 'en-fr', source: 'Well done, please.', accepted: ['Bien cuit, s’il vous plaît.'], model: 'Bien cuit, s’il vous plaît.', explain: 'bien cuit: well cooked, well done.' },
      { id: 't13', type: 'listen', text: 'Une table pour quatre personnes.', accepted: ['Une table pour quatre personnes.', 'Une table pour 4 personnes.'], explain: 'Une table pour quatre personnes: the final -s of personnes is silent.' },
      { id: 't14', type: 'listen', text: 'À vingt et une heures, au nom de Martin.', prompt: 'When is the booking?', options: ['at 9 p.m.', 'at 8 p.m.', 'at 7 p.m.', 'at 11 a.m.'], answer: 0, explain: 'vingt et une heures: 21 h, 9 p.m. Heure is feminine, hence une.' },
      { id: 't15', type: 'order', prompt: 'Put the words in order.', source: 'Can we sit outside?', tokens: ['On', 'peut', 's’asseoir', 'en', 'terrasse ?'] },
      { id: 't16', type: 'match', prompt: 'Match the courses.', pairs: [['l’entrée', 'starter'], ['le plat', 'main course'], ['le dessert', 'dessert'], ['la boisson', 'drink'], ['le fromage', 'cheese']] }
    ]
  }
});
