/*
 * French — Unit 1: Au café
 * Content file only. The engine (app.js) reads this structure; no code here.
 * Original material. Forms and claims to be checked are listed in CONTENT-CHECKS.md.
 * French text uses the typographic apostrophe (’) and a no-break space before ? ! : as in French print.
 */
Hospes.addLecture('french', {
  id: 'fr-01',
  number: 1,
  title: 'Au café',
  subtitle: 'Greetings, ordering coffee and drinks, paying; un/une and le/la; “some”; numbers to 20',
  minutes: 45,

  intro: `
    <p>The café is the easiest place to start speaking French: the exchanges are short, they follow a set pattern, and the same dozen phrases work from Lille to Marseille. By the end of this unit you should be able to walk in, greet the staff, order a coffee, a beer or a glass of wine, ask for water and the toilets, and pay, without switching to English.</p>
    <p>Each unit works the same way.</p>
    <ol>
      <li><strong>Phrases</strong>: whole sentences to use as they are, with audio. Learn them as blocks; the grammar behind them follows.</li>
      <li><strong>Dialogue</strong>: the phrases in a realistic exchange. Listen first with the French only, then with the English.</li>
      <li><strong>Vocabulary</strong>: the words of the unit, with their gender (blue for masculine, red for feminine) and pronunciation.</li>
      <li><strong>Grammar</strong>: only what the phrases need, explained through English and, where it helps, German.</li>
      <li><strong>Exercises</strong>, a <strong>reading</strong> (here a café price board) and a <strong>test</strong>.</li>
    </ol>
    <p class="aside"><strong>Audio.</strong> Every French word and sentence has a speaker button. For now the iPhone’s own French voice reads them; recorded neural voices will replace it unit by unit. Under Progress → Audio you can choose the voice and the speed. Read everything aloud yourself as well: speaking is a separate skill from understanding, and the café is where you will need it.</p>
  `,

  background: [
    {
      title: 'Café, bar, brasserie, bar-tabac',
      html: `
        <p>The words overlap, and many places call themselves two of them at once (“Café-Brasserie du Marché”). Roughly:</p>
        <ul>
          <li><span class="fr">un café</span> serves coffee, drinks and light food from morning to evening. It is where people stop for an espresso at the counter on the way to work, and where they sit for an hour on the terrace.</li>
          <li><span class="fr">un bar</span> is mainly for drinks, often opening later in the day. In everyday speech a <span class="fr">bar</span> and a <span class="fr">café</span> are often the same thing.</li>
          <li><span class="fr">une brasserie</span> also serves full meals, typically at most hours of the day and with a fixed menu of classics (steak-frites, choucroute, seafood platters). The word means “brewery”, and the type is associated with beer-drinking Alsace; the big Paris brasseries go back to the later nineteenth century.</li>
          <li><span class="fr">un bar-tabac</span> or <span class="fr">café-tabac</span> is a café that also holds the licence to sell tobacco, and often stamps, lottery tickets and public-transport tickets. The red diamond sign (<span class="fr">la carotte</span>) marks it.</li>
        </ul>
        <p>Paris cafés have a long history: Le Procope, opened in the 1680s, is usually named as the oldest still trading, though it has long been a restaurant rather than a café and the claim depends on what counts as continuous.</p>`
    },
    {
      title: 'Counter, inside, terrace: why the price changes',
      html: `
        <p>The same coffee often costs less <span class="fr">au comptoir</span> (standing at the bar) than <span class="fr">en salle</span> (at a table inside) or <span class="fr">en terrasse</span> (outside). You pay for the table and the service, not the coffee. Many cafés show two or three columns of prices on the board; this unit’s reading is such a board.</p>
        <p>Two practical consequences. If you order at the counter, drink at the counter: carrying the cup to a table is not done. And on a busy terrace, wait for the waiter to come to you; going to the bar to order is unusual outside self-service places.</p>
        <p><span class="fr">Service compris</span> on a price list means the service charge is included. French prices have had to include service since the late 1980s, so a tip is optional. At a café most people leave small change, rounding up, or nothing; nobody adds a percentage.</p>`
    },
    {
      title: 'What “un café” means',
      html: `
        <p>Order <span class="fr">un café</span> and you get an espresso: a small cup of strong black coffee. Variants you will hear:</p>
        <ul>
          <li><span class="fr">un (café) allongé</span>: an espresso lengthened with hot water;</li>
          <li><span class="fr">un (café) serré</span>: an extra-short, extra-strong espresso;</li>
          <li><span class="fr">une noisette</span>: an espresso with a dash of milk or milk foam, named after its hazelnut colour;</li>
          <li><span class="fr">un (café) crème</span>: a large cup of coffee with hot frothed milk, the nearest thing to a latte;</li>
          <li><span class="fr">un déca</span>: a decaf (short for <span class="fr">décaféiné</span>).</li>
        </ul>
        <p>A <span class="fr">café crème</span> is mostly a morning drink; after a meal the French order <span class="fr">un café</span>. <span class="fr">Café au lait</span> exists, but more as a home breakfast drink in a bowl than as something ordered in a café. Large milky drinks ordered after lunch are the classic mark of a tourist, though nobody will refuse to serve one.</p>`
    },
    {
      title: 'Bonjour first',
      html: `
        <p>The most important French word in this unit is <span class="fr">bonjour</span>. On entering a café or shop, and before asking anyone anything, you greet: <span class="fr">Bonjour, monsieur</span> or <span class="fr">Bonjour, madame</span>, or just <span class="fr">Bonjour</span>. Starting with the order (“Un café, s’il vous plaît”) without the greeting comes across as brusque, and many French people say it explains a good part of the reputation of Parisian waiters for rudeness. From late afternoon, <span class="fr">bonsoir</span> replaces it.</p>
        <p>To call a waiter, say <span class="fr">Excusez-moi !</span> or <span class="fr">S’il vous plaît !</span> with a raised hand or eye contact. <span class="fr">Garçon !</span> survives in films and is now considered rude.</p>
        <p class="aside"><strong>German angle.</strong> The French <span class="fr">vous</span> is the German <em>Sie</em>: always <span class="fr">vous</span> with staff, strangers and anyone older. <span class="fr">Tu</span> (<em>du</em>) is for friends, family and children. English lost this distinction, so it is easy to overlook in phrases like <span class="fr">s’il vous plaît</span> (formal) against <span class="fr">s’il te plaît</span> (to a friend).</p>`
    }
  ],

  pronunciation: `
    <p>Only the sounds this unit needs. A general overview is under Reference → Sounds.</p>
    <h3>Stress at the end</h3>
    <p>French has no strong word stress. Syllables are of nearly equal length, and the last syllable of a word group is slightly longer: <span class="fr">ca<b>fé</b></span>, <span class="fr">crois<b>sant</b></span>, <span class="fr">un café, s’il vous <b>plaît</b></span>. English and German speakers tend to stress the first syllable (<em>CAfé</em>); resisting that habit does more for your accent than any single sound.</p>
    <h3>Silent endings</h3>
    <p>Final <span class="fr">-s, -t, -d, -x, -z</span> and a final <span class="fr">-e</span> are normally silent: <span class="fr">croissant</span> [kʁwasɑ̃], <span class="fr">chaud</span> [ʃo], <span class="fr">deux</span> [dø], <span class="fr">tartine</span> [taʁtin]. Final <span class="fr">-c, -r, -f, -l</span> are often pronounced (<span class="fr">avec</span>, <span class="fr">bonsoir</span>, <span class="fr">sel</span>); English teachers remember them as the consonants in <em>careful</em>. The exception that matters here: <span class="fr">-er</span> at the end of a verb is [e], so <span class="fr">payer</span> is [peje].</p>
    <h3>Nasal vowels</h3>
    <p>A vowel followed by <span class="fr">n</span> or <span class="fr">m</span> in the same syllable becomes nasal, and the consonant is not pronounced. There is no [ŋ] at the end: German speakers in particular add one (“bong-shoor”).</p>
    <ul>
      <li><span class="fr">an, en</span> [ɑ̃]: <span class="fr">croissant</span>, <span class="fr">France</span>, <span class="fr">sans</span>;</li>
      <li><span class="fr">on</span> [ɔ̃]: <span class="fr">bonjour</span>, <span class="fr">pression</span>, <span class="fr">comptoir</span>;</li>
      <li><span class="fr">in, ain, ein</span> [ɛ̃]: <span class="fr">vin</span>, <span class="fr">pain</span>, <span class="fr">infusion</span>;</li>
      <li><span class="fr">un</span> [œ̃]: in Paris and much of the north now mostly said like <span class="fr">in</span>.</li>
    </ul>
    <h3>Vowels a German speaker already has</h3>
    <ul>
      <li><span class="fr">u</span> is German <em>ü</em>: <span class="fr">jus</span> [ʒy], <span class="fr">sucre</span> [sykʁ]. English has no such sound; do not say “joos”.</li>
      <li><span class="fr">ou</span> is German <em>u</em>: <span class="fr">bonjour</span>, <span class="fr">vous</span>, <span class="fr">pour</span>.</li>
      <li><span class="fr">eu</span> is German <em>ö</em>: <span class="fr">deux</span> [dø], <span class="fr">serveuse</span>; before a pronounced consonant it is the open <em>ö</em> of <em>Köln</em>: <span class="fr">beurre</span> [bœʁ].</li>
      <li><span class="fr">é</span> is the German long <em>e</em> of <em>See</em>, but short and without the English glide towards “ee”: <span class="fr">café</span>, <span class="fr">thé</span>. <span class="fr">è, ê</span> and <span class="fr">ai</span> are the open <em>e</em> of <em>Bett</em>: <span class="fr">bière</span>, <span class="fr">verre</span>, <span class="fr">lait</span>.</li>
      <li><span class="fr">oi</span> is [wa]: <span class="fr">croissant</span>, <span class="fr">trois</span>, <span class="fr">bonsoir</span>.</li>
    </ul>
    <h3>Consonants</h3>
    <ul>
      <li><span class="fr">r</span> is made at the back of the mouth [ʁ], as in standard German <em>rot</em>. For a German speaker this is free; English speakers have to learn it.</li>
      <li><span class="fr">ch</span> is German <em>sch</em> [ʃ]: <span class="fr">chocolat</span>, <span class="fr">chaud</span>. <span class="fr">j</span>, and <span class="fr">g</span> before <span class="fr">e, i</span>, are the voiced version [ʒ], as in English <em>pleasure</em> or the German pronunciation of <em>Garage</em>: <span class="fr">jus</span>, <span class="fr">orange</span>.</li>
      <li><span class="fr">h</span> is always silent; <span class="fr">qu</span> is [k]; <span class="fr">ç</span> is [s] (<span class="fr">ça</span>).</li>
    </ul>
    <h3>Liaison: the hidden consonant</h3>
    <p>A silent final consonant is pronounced when the next word starts with a vowel and the two belong closely together. You will meet it with prices: <span class="fr">deux euros</span> [døzøʁo], <span class="fr">trois euros</span> [tʁwazøʁo], <span class="fr">un euro</span> [œ̃nøʁo], <span class="fr">vous avez</span> [vuzave]. Note that the <span class="fr">s</span> and <span class="fr">x</span> come out as [z]. Use the speaker buttons on the phrases to hear it.</p>
  `,

  phrasesIntro: `<p>Learn these as whole sentences. Tap a speaker button to hear one, or play them all; the slow setting helps with the linking between words.</p>`,
  phraseGroups: [
    { title: 'Greeting and getting attention', ids: ['p1', 'p2', 'p3', 'p4'] },
    { title: 'Ordering', ids: ['p5', 'p6', 'p7', 'p8', 'p9', 'p10', 'p11', 'p12', 'p13', 'p14'] },
    { title: 'Questions you will need', ids: ['p15', 'p16', 'p17', 'p18'] },
    { title: 'Paying and leaving', ids: ['p19', 'p20', 'p21', 'p22', 'p23', 'p24', 'p25'] }
  ],
  phrases: [
    { id: 'p1', fr: 'Bonjour, monsieur. / Bonjour, madame.', en: 'Hello (to a man / to a woman).', note: 'Always the first thing you say. <span class="fr">Monsieur/madame</span> without a surname is polite, not stiff.' },
    { id: 'p2', fr: 'Bonsoir !', en: 'Good evening!', note: 'From late afternoon on; also used as a greeting, not only on leaving.' },
    { id: 'p3', fr: 'Excusez-moi !', en: 'Excuse me!', note: 'To call the waiter. Never <span class="fr">Garçon !</span>' },
    { id: 'p4', fr: 'C’est libre ?', en: 'Is this (table, seat) free?', lit: 'It is free?' },
    { id: 'p5', fr: 'Un café, s’il vous plaît.', en: 'An espresso, please.', lit: 'A coffee, if it pleases you.' },
    { id: 'p6', fr: 'Je voudrais un crème.', en: 'I’d like a coffee with frothed milk.' },
    { id: 'p7', fr: 'Je vais prendre un thé.', en: 'I’ll have a tea.', lit: 'I am going to take a tea.' },
    { id: 'p8', fr: 'Pour moi, une bière pression.', en: 'For me, a draught beer.' },
    { id: 'p9', fr: 'Un demi, s’il vous plaît.', en: 'A (small) draught beer, please.', note: 'A <span class="fr">demi</span> is traditionally 25 cl, half of the old half-litre measure.' },
    { id: 'p10', fr: 'Un verre de vin rouge, s’il vous plaît.', en: 'A glass of red wine, please.' },
    { id: 'p11', fr: 'Une carafe d’eau, s’il vous plaît.', en: 'A jug of tap water, please.', note: 'Free with a meal; at the counter, ask for <span class="fr">un verre d’eau</span>.' },
    { id: 'p12', fr: 'Avec du lait, s’il vous plaît.', en: 'With milk, please.' },
    { id: 'p13', fr: 'Sans sucre, merci.', en: 'No sugar, thank you.', lit: 'Without sugar, thanks.' },
    { id: 'p14', fr: 'La même chose, s’il vous plaît.', en: 'The same again, please.', lit: 'The same thing, please.' },
    { id: 'p15', fr: 'Vous avez des croissants ?', en: 'Do you have croissants?' },
    { id: 'p16', fr: 'Sur place ou à emporter ?', en: 'To have here or to take away?', note: 'You will be asked this, mostly in bakeries and coffee bars. Answer <span class="fr">Sur place</span> or <span class="fr">À emporter</span>.' },
    { id: 'p17', fr: 'Où sont les toilettes ?', en: 'Where are the toilets?' },
    { id: 'p18', fr: 'Vous avez le wifi ?', en: 'Do you have wifi?', note: 'Said [wifi] in French.' },
    { id: 'p19', fr: 'L’addition, s’il vous plaît.', en: 'The bill, please.' },
    { id: 'p20', fr: 'Ça fait combien ?', en: 'How much is that?', lit: 'That makes how much?' },
    { id: 'p21', fr: 'Je vous dois combien ?', en: 'How much do I owe you?', note: 'The usual question at the counter.' },
    { id: 'p22', fr: 'Je peux payer par carte ?', en: 'Can I pay by card?' },
    { id: 'p23', fr: 'Gardez la monnaie.', en: 'Keep the change.' },
    { id: 'p24', fr: 'Merci, bonne journée !', en: 'Thank you, have a nice day!' },
    { id: 'p25', fr: 'Merci, bonne soirée !', en: 'Thank you, have a nice evening!' }
  ],

  dialogue: {
    title: 'Un café au comptoir',
    setting: '<p>A weekday morning in a café in Lyon. You stand at the counter. The waiter (<span class="fr">le serveur</span>) is drying glasses.</p>',
    you: 'Vous',
    lines: [
      { who: 'Le serveur', fr: 'Bonjour, monsieur !', en: 'Good morning, sir!' },
      { who: 'Vous', fr: 'Bonjour ! Un café, s’il vous plaît.', en: 'Good morning! An espresso, please.' },
      { who: 'Le serveur', fr: 'Un café, très bien. Et avec ceci ?', en: 'An espresso, very good. Anything else?' },
      { who: 'Vous', fr: 'Vous avez des croissants ?', en: 'Do you have croissants?' },
      { who: 'Le serveur', fr: 'Désolé, il n’y a plus de croissants. J’ai des pains au chocolat.', en: 'Sorry, there are no croissants left. I have pains au chocolat.' },
      { who: 'Vous', fr: 'D’accord, un pain au chocolat.', en: 'All right, a pain au chocolat.' },
      { who: 'Le serveur', fr: 'Voilà : un café et un pain au chocolat.', en: 'Here you are: an espresso and a pain au chocolat.' },
      { who: 'Vous', fr: 'Merci. Et un verre d’eau, s’il vous plaît.', en: 'Thank you. And a glass of water, please.' },
      { who: 'Le serveur', fr: 'Bien sûr.', en: 'Of course.' },
      { who: 'Vous', fr: 'Je vous dois combien ?', en: 'How much do I owe you?' },
      { who: 'Le serveur', fr: 'Trois euros dix, s’il vous plaît.', en: 'Three euros ten, please.' },
      { who: 'Vous', fr: 'Je peux payer par carte ?', en: 'Can I pay by card?' },
      { who: 'Le serveur', fr: 'Oui, bien sûr. Allez-y.', en: 'Yes, of course. Go ahead.' },
      { who: 'Vous', fr: 'Merci. Bonne journée !', en: 'Thank you. Have a nice day!' },
      { who: 'Le serveur', fr: 'Merci, à vous aussi. Au revoir !', en: 'Thank you, you too. Goodbye!' }
    ],
    notes: [
      { ref: 'Et avec ceci ?', html: 'Literally “and with this?”, the standard question for “anything else?” in cafés, bakeries and shops. You may also hear <span class="fr">Et avec ça ?</span> (more casual) or <span class="fr">Ce sera tout ?</span> (“Will that be all?”). Answer <span class="fr">C’est tout, merci</span> (“That’s all, thanks”).' },
      { ref: 'il n’y a plus de croissants', html: '“There are no more croissants.” <span class="fr">Il y a</span> is “there is / there are”; <span class="fr">ne… plus</span> is “no longer, no more”. In speech the <span class="fr">ne</span> is often dropped: <span class="fr">il y a plus de croissants</span>. You need to recognise this, not produce it yet. Note <span class="fr">de</span> after the negative; see Grammar, “Some”.' },
      { ref: 'D’accord', html: '“Agreed, OK”: the all-purpose word for accepting something. Informally shortened to <span class="fr">d’ac</span>.' },
      { ref: 'Voilà', html: '“Here you are, there you go”. It is used constantly when handing something over, and at the end of an explanation (“so there it is”).' },
      { ref: 'Trois euros dix', html: '3,10 €. Prices are said as euros + cents without the word <em>cents</em>. The <span class="fr">s</span> of <span class="fr">trois</span> is linked to <span class="fr">euros</span>: [tʁwazøʁo]. The total matches the counter prices on this unit’s price board (1,60 + 1,50).' },
      { ref: 'Allez-y', html: '“Go ahead”, literally “go there”: here, to hold your card to the terminal. Contactless payment is everywhere; a PIN is asked for above a limit.' },
      { ref: 'à vous aussi', html: '“To you too”: the standard reply to <span class="fr">bonne journée</span>.' }
    ]
  },

  vocab: [
    { id: 'v1', la: 'le café', head: 'le café', pos: 'noun', g: 'm', pron: '[kafe]', en: 'coffee (an espresso); café', de: 'der Kaffee; das Café', note: 'The drink and the place.' },
    { id: 'v2', la: 'un crème', head: 'un crème', pos: 'noun', g: 'm', pron: '[kʁɛm]', en: 'coffee with frothed milk', note: 'Short for <span class="fr">un café crème</span>, hence masculine; but <span class="fr">la crème</span> (cream) is feminine.' },
    { id: 'v3', la: 'la noisette', head: 'la noisette', pos: 'noun', g: 'f', pron: '[nwazɛt]', en: 'espresso with a dash of milk', note: 'Literally “hazelnut”. Also heard as <span class="fr">un café noisette</span>.' },
    { id: 'v4', la: 'le déca', head: 'le déca', pos: 'noun', g: 'm', pron: '[deka]', en: 'decaf', note: 'Short for <span class="fr">le décaféiné</span>.' },
    { id: 'v5', la: 'le thé', head: 'le thé', pos: 'noun', g: 'm', pron: '[te]', en: 'tea' },
    { id: 'v6', la: 'l’infusion', head: 'l’infusion', pos: 'noun', g: 'f', pron: '[ɛ̃fyzjɔ̃]', en: 'herbal tea', note: 'Nouns in <span class="fr">-tion/-sion</span> are feminine.' },
    { id: 'v7', la: 'le chocolat chaud', head: 'le chocolat chaud', pos: 'noun', g: 'm', pron: '[ʃɔkɔla ʃo]', en: 'hot chocolate' },
    { id: 'v8', la: 'le lait', head: 'le lait', pos: 'noun', g: 'm', pron: '[lɛ]', en: 'milk', de: 'die Milch', note: 'German <em>die Milch</em>, French masculine.' },
    { id: 'v9', la: 'le sucre', head: 'le sucre', pos: 'noun', g: 'm', pron: '[sykʁ]', en: 'sugar' },
    { id: 'v10', la: 'l’eau', head: 'l’eau', pos: 'noun', g: 'f', pron: '[o]', en: 'water', de: 'das Wasser', note: '<span class="fr">l’eau plate</span> still, <span class="fr">l’eau gazeuse</span> sparkling, <span class="fr">l’eau du robinet</span> tap water.' },
    { id: 'v11', la: 'la carafe d’eau', head: 'la carafe d’eau', pos: 'noun', g: 'f', pron: '[kaʁaf do]', en: 'jug of tap water' },
    { id: 'v12', la: 'le jus d’orange', head: 'le jus d’orange', pos: 'noun', g: 'm', pron: '[ʒy dɔʁɑ̃ʒ]', en: 'orange juice', note: '<span class="fr">une orange pressée</span> is freshly squeezed.' },
    { id: 'v13', la: 'la bière', head: 'la bière', pos: 'noun', g: 'f', pron: '[bjɛʁ]', en: 'beer', de: 'das Bier' },
    { id: 'v14', la: 'la pression', head: 'la pression', pos: 'noun', g: 'f', pron: '[pʁɛsjɔ̃]', en: 'draught beer', note: 'Literally “pressure”. <span class="fr">une bière pression</span> or just <span class="fr">une pression</span>.' },
    { id: 'v15', la: 'le demi', head: 'le demi', pos: 'noun', g: 'm', pron: '[dəmi]', en: 'small glass of draught beer', note: 'Traditionally 25 cl. A bigger glass is <span class="fr">une pinte</span> (50 cl in most bars).' },
    { id: 'v16', la: 'le verre', head: 'le verre', pos: 'noun', g: 'm', pron: '[vɛʁ]', en: 'glass', note: 'Masculine despite the final <span class="fr">-e</span>.' },
    { id: 'v17', la: 'le vin', head: 'le vin', pos: 'noun', g: 'm', pron: '[vɛ̃]', en: 'wine', note: '<span class="fr">rouge</span> red, <span class="fr">blanc</span> white, <span class="fr">rosé</span> rosé.' },
    { id: 'v18', la: 'le croissant', head: 'le croissant', pos: 'noun', g: 'm', pron: '[kʁwasɑ̃]', en: 'croissant' },
    { id: 'v19', la: 'le pain au chocolat', head: 'le pain au chocolat', pos: 'noun', g: 'm', pron: '[pɛ̃ o ʃɔkɔla]', en: 'pain au chocolat', note: 'Called <span class="fr">une chocolatine</span> in much of the south-west.' },
    { id: 'v20', la: 'la tartine', head: 'la tartine', pos: 'noun', g: 'f', pron: '[taʁtin]', en: 'bread with butter and jam', note: 'A length of baguette, split; <span class="fr">tartine beurre-confiture</span>.' },
    { id: 'v21', la: 'le comptoir', head: 'le comptoir', pos: 'noun', g: 'm', pron: '[kɔ̃twaʁ]', en: 'bar counter', note: 'The <span class="fr">p</span> is silent.' },
    { id: 'v22', la: 'la terrasse', head: 'la terrasse', pos: 'noun', g: 'f', pron: '[tɛʁas]', en: 'outside tables' },
    { id: 'v23', la: 'la salle', head: 'la salle', pos: 'noun', g: 'f', pron: '[sal]', en: 'inside seating', note: '<span class="fr">en salle</span>: at a table inside.' },
    { id: 'v24', la: 'le serveur, la serveuse', head: 'le serveur', say: 'le serveur, la serveuse', pos: 'noun', g: 'mf', pron: '[sɛʁvœʁ, sɛʁvøz]', en: 'waiter, waitress' },
    { id: 'v25', la: 'l’addition', head: 'l’addition', pos: 'noun', g: 'f', pron: '[adisjɔ̃]', en: 'the bill' },
    { id: 'v26', la: 'la carte', head: 'la carte', pos: 'noun', g: 'f', pron: '[kaʁt]', en: 'menu; (bank) card', note: 'A false friend: <span class="fr">la carte</span> is the menu; <span class="fr">le menu</span> is a set menu at a fixed price.' },
    { id: 'v27', la: 'la monnaie', head: 'la monnaie', pos: 'noun', g: 'f', pron: '[mɔnɛ]', en: 'change (coins)', note: 'Not “money” (<span class="fr">l’argent</span>).' },
    { id: 'v28', la: 'payer', head: 'payer', pos: 'verb', pron: '[peje]', en: 'to pay', note: '<span class="fr">je peux payer</span> I can pay; <span class="fr">payer par carte</span> by card, <span class="fr">en espèces</span> in cash.' },
    { id: 'v29', la: 'prendre', head: 'prendre', pos: 'verb', pron: '[pʁɑ̃dʁ]', en: 'to take; to have (food, drink)', note: '<span class="fr">je prends</span> I’ll have, <span class="fr">je vais prendre</span> I’m going to have.' },
    { id: 'v30', la: 'je voudrais', head: 'je voudrais', pos: 'phrase', pron: '[ʒə vudʁɛ]', en: 'I would like', de: 'ich hätte gern, ich möchte' },
    { id: 'v31', la: 's’il vous plaît', head: 's’il vous plaît', pos: 'phrase', pron: '[sil vu plɛ]', en: 'please', note: 'To a friend: <span class="fr">s’il te plaît</span>.' },
    { id: 'v32', la: 'merci', head: 'merci', pos: 'interjection', pron: '[mɛʁsi]', en: 'thank you' },
    { id: 'v33', la: 'bonjour', head: 'bonjour', pos: 'interjection', pron: '[bɔ̃ʒuʁ]', en: 'hello, good morning' },
    { id: 'v34', la: 'bonsoir', head: 'bonsoir', pos: 'interjection', pron: '[bɔ̃swaʁ]', en: 'good evening' },
    { id: 'v35', la: 'au revoir', head: 'au revoir', pos: 'interjection', pron: '[o ʁəvwaʁ]', en: 'goodbye', de: 'auf Wiedersehen', note: 'The same image as the German: “until the seeing again”.' },
    { id: 'v36', la: 'combien', head: 'combien', pos: 'adverb', pron: '[kɔ̃bjɛ̃]', en: 'how much, how many' },
    { id: 'v37', la: 'avec', head: 'avec', pos: 'preposition', pron: '[avɛk]', en: 'with' },
    { id: 'v38', la: 'sans', head: 'sans', pos: 'preposition', pron: '[sɑ̃]', en: 'without' },
    { id: 'v39', la: 'chaud, chaude', head: 'chaud', say: 'chaud, chaude', pos: 'adjective', pron: '[ʃo, ʃod]', en: 'hot, warm', note: 'A false friend for Italian travellers: <span class="fr">chaud</span> is hot. Cold is <span class="fr">froid, froide</span>.' },
    { id: 'v40', la: 'froid, froide', head: 'froid', say: 'froid, froide', pos: 'adjective', pron: '[fʁwa, fʁwad]', en: 'cold' }
  ],

  grammar: [
    {
      title: 'Two genders: un, une; le, la',
      html: `
        <p>Every French noun is masculine or feminine. The gender shows in the words for “a” and “the”:</p>
        <div class="tablewrap"><table><thead><tr><th></th><th>masculine</th><th>feminine</th><th>plural (both)</th></tr></thead>
        <tbody><tr><th>a / some</th><td class="fr">un café</td><td class="fr">une bière</td><td class="fr">des croissants</td></tr>
        <tr><th>the</th><td class="fr">le café</td><td class="fr">la bière</td><td class="fr">les croissants</td></tr></tbody></table></div>
        <p>Before a vowel or a silent <span class="fr">h</span>, <span class="fr">le</span> and <span class="fr">la</span> both shorten to <span class="fr">l’</span>: <span class="fr">l’eau</span> (f.), <span class="fr">l’addition</span> (f.), <span class="fr">l’hôtel</span> (m.). That hides the gender, which is why the vocabulary list marks it.</p>
        <p>Gender is mostly a fact about the word, not about the thing, so learn every noun with its article: not <span class="fr">bière</span> but <span class="fr">la bière</span>. A few endings help: nouns in <span class="fr">-tion, -sion</span> are feminine (<span class="fr">l’addition, la pression</span>), and most nouns in <span class="fr">-age</span> and <span class="fr">-ment</span> are masculine. A final <span class="fr">-e</span> leans feminine but with many exceptions (<span class="fr">le verre, le beurre, le crème</span>).</p>
        <p class="aside"><strong>German angle.</strong> French has no neuter, and German genders are no guide: <em>das Bier</em> is <span class="fr">la bière</span>, <em>die Milch</em> is <span class="fr">le lait</span>, <em>das Wasser</em> is <span class="fr">l’eau</span> (f.), <em>der Kaffee</em> happens to match <span class="fr">le café</span>. Treat every French gender as new information.</p>
        <p>In this unit the gender matters mainly for <span class="fr">un</span> or <span class="fr">une</span> when you order. Get it wrong and you will still be understood; get it right and you sound like someone who has learnt French.</p>`
    },
    {
      title: 'Ordering politely',
      html: `
        <p>Three patterns cover almost every order, all perfectly polite:</p>
        <ul>
          <li>the thing + <span class="fr">s’il vous plaît</span>: <span class="fr">Un café, s’il vous plaît.</span> Short, normal, not abrupt;</li>
          <li><span class="fr">Je voudrais</span> + the thing: <span class="fr">Je voudrais un crème.</span> “I would like”;</li>
          <li><span class="fr">Je vais prendre</span> + the thing: <span class="fr">Je vais prendre une bière.</span> “I’m going to have”, the usual way to give an order at a table. <span class="fr">Je prends…</span> (“I’ll have…”) works the same way.</li>
        </ul>
        <p>With a companion: <span class="fr">Pour moi, un thé, et pour madame, un café.</span> To order two of something, just put the number first: <span class="fr">deux cafés</span>, <span class="fr">deux demis</span>. The plural <span class="fr">-s</span> is written but not heard.</p>
        <p>Avoid <span class="fr">je veux</span> (“I want”). It is grammatically fine but, as with German <em>ich will</em> in a café, it sounds demanding from an adult.</p>
        <p class="aside"><strong>German angle.</strong> <span class="fr">Je voudrais</span> is a conditional, like <em>ich möchte</em> or <em>ich hätte gern</em>, and has the same politeness. You will learn how the conditional is formed later; for now it is a fixed phrase.</p>`
    },
    {
      title: '“Some”: du, de la, de l’',
      html: `
        <p>When you mean an unspecified amount of something you cannot count (milk, sugar, water, bread), French puts <em>some</em> in front where English usually puts nothing:</p>
        <div class="tablewrap"><table><thead><tr><th></th><th>form</th><th>example</th></tr></thead>
        <tbody><tr><th>masc.</th><td class="fr">du</td><td class="fr">Vous avez du lait ?</td></tr>
        <tr><th>fem.</th><td class="fr">de la</td><td class="fr">Avec de la crème.</td></tr>
        <tr><th>vowel</th><td class="fr">de l’</td><td class="fr">Je voudrais de l’eau.</td></tr>
        <tr><th>plural</th><td class="fr">des</td><td class="fr">Vous avez des croissants ?</td></tr></tbody></table></div>
        <p>English: “Do you have milk?” German: <em>Haben Sie Milch?</em> French cannot leave the article out: <span class="fr">Vous avez du lait ?</span> This is the single most frequent error of English and German speakers.</p>
        <p>Two refinements.</p>
        <ol>
          <li>After a negative, all of these become plain <span class="fr">de</span> (<span class="fr">d’</span> before a vowel): <span class="fr">pas de sucre</span>, <span class="fr">pas de lait</span>, <span class="fr">il n’y a plus de croissants</span>. After <span class="fr">sans</span> (“without”) there is no article at all: <span class="fr">sans sucre</span>.</li>
          <li>When you order a portion, you count it: <span class="fr">un café</span> (a cup), <span class="fr">une bière</span> (a glass), <span class="fr">une eau gazeuse</span> (a bottle). <span class="fr">De l’eau</span> is water in general; <span class="fr">une eau minérale</span> is a bottle you will pay for.</li>
        </ol>`
    },
    {
      title: 'Questions by intonation',
      html: `
        <p>The simplest French question is a statement with the voice rising at the end: <span class="fr">Vous avez des croissants ?</span> “You have croissants?” This is how most spoken questions are asked, it is not casual or impolite, and it lets you turn every statement you know into a question.</p>
        <p>With a question word, put it at the end in speech: <span class="fr">Ça fait combien ?</span> (“That makes how much?”), <span class="fr">Je vous dois combien ?</span> The other question forms (<span class="fr">Est-ce que… ?</span> and turning the verb round, <span class="fr">Avez-vous… ?</span>) come in a later unit; you will hear them, and the second is the more formal.</p>`
    },
    {
      title: 'Numbers to 20 and prices',
      html: `
        <p>The numbers are under Reference → Tables. Prices are said as euros and then cents, without the word for cent: 1,50 € is <span class="fr">un euro cinquante</span>; 3,10 € is <span class="fr">trois euros dix</span>; 0,80 € is <span class="fr">quatre-vingts centimes</span>. Note the decimal comma, and that the euro sign follows the number with a space.</p>
        <p>Watch the liaison before <span class="fr">euros</span>: <span class="fr">deux euros</span> [døzøʁo], <span class="fr">trois euros</span> [tʁwazøʁo], <span class="fr">six euros</span> [sizøʁo], <span class="fr">dix euros</span> [dizøʁo], <span class="fr">un euro</span> [œ̃nøʁo]; <span class="fr">neuf euros</span> has [v]: [nœvøʁo]. The numbers 17 to 19 are built like the English: <span class="fr">dix-sept</span> (ten-seven). The numbers above 60 are famously odd; they follow in a later unit.</p>`
    }
  ],

  grammarCards: [
    { id: 'gc1', front: 'le, la, l’, les', back: '“the”: le (masc.), la (fem.), l’ before a vowel or silent h, les (plural)' },
    { id: 'gc2', front: 'un, une, des', back: '“a, an”: un (masc.), une (fem.); des = “some” (plural)' },
    { id: 'gc3', front: 'du, de la, de l’', back: '“some” for things you cannot count: du lait, de la crème, de l’eau. After a negative: pas de lait. After sans: no article.' },
    { id: 'gc4', front: 'How do you order politely?', back: 'Un café, s’il vous plaît. / Je voudrais un café. / Je vais prendre un café. Avoid je veux.' },
    { id: 'gc5', front: '1,50 €', back: 'un euro cinquante' },
    { id: 'gc6', front: 'What do you say first on entering a café or shop?', back: 'Bonjour (monsieur / madame).' }
  ],

  reference: [
    { title: 'Numbers 0–20', headers: ['', 'French', 'said'], rows: [
      ['0', 'zéro', '[zeʁo]'], ['1', 'un, une', '[œ̃, yn]'], ['2', 'deux', '[dø]'], ['3', 'trois', '[tʁwa]'], ['4', 'quatre', '[katʁ]'],
      ['5', 'cinq', '[sɛ̃k]'], ['6', 'six', '[sis]'], ['7', 'sept', '[sɛt]'], ['8', 'huit', '[ɥit]'], ['9', 'neuf', '[nœf]'],
      ['10', 'dix', '[dis]'], ['11', 'onze', '[ɔ̃z]'], ['12', 'douze', '[duz]'], ['13', 'treize', '[tʁɛz]'], ['14', 'quatorze', '[katɔʁz]'],
      ['15', 'quinze', '[kɛ̃z]'], ['16', 'seize', '[sɛz]'], ['17', 'dix-sept', '[disɛt]'], ['18', 'dix-huit', '[dizɥit]'], ['19', 'dix-neuf', '[diznœf]'],
      ['20', 'vingt', '[vɛ̃]']] },
    { title: 'Articles', headers: ['', 'masc.', 'fem.', 'before a vowel', 'plural'], rows: [
      ['the', 'le', 'la', 'l’', 'les'], ['a', 'un', 'une', 'un / une', 'des'], ['some', 'du', 'de la', 'de l’', 'des'], ['not any', 'de', 'de', 'd’', 'de']] }
  ],

  exercises: [
    { id: 'e1', type: 'mc', prompt: 'You walk into a café. What do you say first?', options: ['Bonjour, monsieur.', 'Garçon !', 'Un café !', 'Au revoir.'], answer: 0, explain: 'Greet first, always. Garçon is considered rude today.' },
    { id: 'e2', type: 'mc', prompt: 'In a French café, <span class="fr">un café</span> is…', options: ['an espresso', 'a large filter coffee', 'a coffee with frothed milk', 'a cappuccino'], answer: 0, explain: 'The milky one is un crème.' },
    { id: 'e3', type: 'gap', prompt: '<span class="fr">___ bière, s’il vous plaît.</span>', hint: ' (un or une?)', answers: ['une', 'Une'], full: 'Une bière, s’il vous plaît.', explain: 'la bière is feminine (unlike das Bier).' },
    { id: 'e4', type: 'gap', prompt: '<span class="fr">Et ___ croissant, s’il vous plaît.</span>', hint: ' (un or une?)', answers: ['un'], full: 'Et un croissant, s’il vous plaît.', explain: 'le croissant is masculine.' },
    { id: 'e5', type: 'gap', prompt: '<span class="fr">Je vais prendre ___ infusion.</span>', hint: ' (un or une?)', answers: ['une'], full: 'Je vais prendre une infusion.', explain: 'Nouns in -sion and -tion are feminine: l’infusion hides it, une infusion shows it.' },
    { id: 'e6', type: 'gap', prompt: '<span class="fr">Vous avez ___ lait ?</span>', hint: ' (some: du, de la or de l’?)', answers: ['du'], full: 'Vous avez du lait ?', explain: 'le lait is masculine and uncounted: du lait. English and German leave the article out; French cannot.' },
    { id: 'e7', type: 'gap', prompt: '<span class="fr">Je voudrais ___ eau, s’il vous plaît.</span>', hint: ' (some: du, de la or de l’?)', answers: ['de l’', 'de l\'', 'de l'], full: 'Je voudrais de l’eau, s’il vous plaît.', explain: 'Before a vowel: de l’. (Une eau would be a bottle of mineral water.)' },
    { id: 'e8', type: 'gap', prompt: '<span class="fr">Pas ___ sucre, merci.</span>', hint: ' (after a negative)', answers: ['de'], full: 'Pas de sucre, merci.', explain: 'After a negative, du / de la / de l’ all become de.' },
    { id: 'e9', type: 'match', prompt: 'Match the French and the English.', pairs: [['l’addition', 'the bill'], ['la pression', 'draught beer'], ['la terrasse', 'the outside tables'], ['le comptoir', 'the bar counter'], ['la monnaie', 'the change']] },
    { id: 'e10', type: 'mc', prompt: 'You want tap water with your meal, free of charge. Ask for…', options: ['une carafe d’eau', 'une eau minérale', 'une eau gazeuse', 'un verre de vin'], answer: 0, explain: 'Une eau minérale or gazeuse is a bottle you pay for.' },
    { id: 'e11', type: 'order', prompt: 'Put the words in order.', source: 'I would like a glass of red wine, please.', tokens: ['Je', 'voudrais', 'un', 'verre', 'de', 'vin', 'rouge,', 's’il', 'vous', 'plaît.'] },
    { id: 'e12', type: 'order', prompt: 'Put the words in order.', source: 'Can I pay by card?', tokens: ['Je', 'peux', 'payer', 'par', 'carte ?'] },
    { id: 'e13', type: 'translate', dir: 'fr-en', source: 'L’addition, s’il vous plaît.', accepted: ['The bill, please.', 'Bill, please', 'The bill please', 'The check, please.', 'Could I have the bill, please?', 'Can I have the bill, please?'], model: 'The bill, please.' },
    { id: 'e14', type: 'translate', dir: 'en-fr', source: 'A coffee and a croissant, please.', accepted: ['Un café et un croissant, s’il vous plaît.', 'Je voudrais un café et un croissant, s’il vous plaît.', 'Je vais prendre un café et un croissant, s’il vous plaît.', 'Je prends un café et un croissant, s’il vous plaît.', 'Un crème et un croissant, s’il vous plaît.'], model: 'Un café et un croissant, s’il vous plaît.', explain: 'Both nouns are masculine, so un twice. The thing + s’il vous plaît is a complete, polite order.' },
    { id: 'e15', type: 'translate', dir: 'en-fr', source: 'Do you have milk?', accepted: ['Vous avez du lait ?', 'Avez-vous du lait ?', 'Avez vous du lait', 'Est-ce que vous avez du lait ?', 'Est ce que vous avez du lait'], model: 'Vous avez du lait ?', explain: 'A statement with rising intonation is a normal question. “Milk” needs du (some), because le lait is masculine and uncounted.' },
    { id: 'e16', type: 'translate', dir: 'en-fr', source: 'Without sugar, thank you.', accepted: ['Sans sucre, merci.', 'Pas de sucre, merci.'], model: 'Sans sucre, merci.', explain: 'No article after sans. Pas de sucre (“no sugar”) is just as good.' },
    { id: 'e17', type: 'translate', dir: 'fr-en', source: 'Je vais prendre un demi.', accepted: ['I’ll have a small beer.', 'I will have a small beer', 'I’ll have a draught beer', 'I will have a draught beer', 'I’ll have a small draught beer', 'I will have a small draught beer', 'I’ll have a beer', 'I will have a beer', 'I’m going to have a beer', 'I’m going to have a small beer', 'I’m going to have a draught beer', 'I am going to have a beer', 'I am going to have a small beer', 'I am going to have a draught beer', 'I’ll have a half', 'I’ll take a small beer', 'I’ll have a demi'], model: 'I’ll have a (small) draught beer.' },
    { id: 'e18', type: 'listen', text: 'Trois euros dix, s’il vous plaît.', prompt: 'How much do you have to pay?', options: ['3,10 €', '3,20 €', '13,10 €', '2,10 €'], answer: 0, explain: 'Trois euros dix: 3,10 €. Treize would be 13.' },
    { id: 'e19', type: 'listen', text: 'Un café, s’il vous plaît.', explain: 'Un café, s’il vous plaît.' },
    { id: 'e20', type: 'listen', text: 'Sur place ou à emporter ?', prompt: 'What are you being asked?', options: ['To have here or to take away?', 'Inside or on the terrace?', 'Cash or card?', 'Still or sparkling?'], answer: 0, explain: 'Sur place (here) ou à emporter (to take away)?' },
    { id: 'e21', type: 'listen', text: 'Une carafe d’eau, s’il vous plaît.', explain: 'Une carafe d’eau, s’il vous plaît: a jug of tap water.' },
    { id: 'e22', type: 'mc', prompt: 'Which number is <span class="fr">quinze</span>?', options: ['15', '50', '5', '14'], answer: 0, explain: 'quinze 15, quatorze 14, cinq 5, cinquante 50.' }
  ],

  reading: {
    title: 'L’ardoise du Café du Marché',
    note: 'A price board (ardoise, “slate”) of the kind found outside and inside French cafés. Where two prices are given, the first is at the counter, the second at a table. Tap any word for its meaning.',
    text: `CAFÉ DU MARCHÉ
Boissons chaudes — comptoir / salle
Café (expresso) : 1,60 € / 2,50 €
Café allongé : 1,80 € / 2,80 €
Déca : 1,80 € / 2,80 €
Noisette : 1,90 € / 2,90 €
Café crème : 3,00 € / 4,50 €
Chocolat chaud : 3,50 € / 5,00 €
Thé ou infusion : 3,00 € / 4,50 €

Boissons fraîches
Jus d’orange pressé : 4,50 € / 6,00 €
Eau minérale, plate ou gazeuse : 3,00 € / 4,00 €
Bière pression, le demi (25 cl) : 3,50 € / 5,00 €
Verre de vin rouge, blanc ou rosé : 4,00 € / 5,50 €

Viennoiseries
Croissant : 1,40 €
Pain au chocolat : 1,50 €
Tartine beurre-confiture : 2,50 €

Prix nets, service compris`,
    glosses: {
      'café': 'coffee; café', 'du': 'of the (de + le)', 'marché': 'market (le marché)', 'boissons': 'drinks (la boisson)', 'chaudes': 'hot (fem. pl.)',
      'comptoir': 'counter', 'salle': 'room; here: at a table inside', 'expresso': 'espresso', 'allongé': 'lengthened (with hot water)', 'déca': 'decaf',
      'noisette': 'espresso with a dash of milk', 'crème': 'cream; here: coffee with frothed milk', 'chocolat': 'chocolate', 'chaud': 'hot',
      'thé': 'tea', 'ou': 'or', 'infusion': 'herbal tea', 'fraîches': 'cool, cold (fem. pl.)', 'jus': 'juice', 'd': 'of (de before a vowel)',
      'orange': 'orange', 'pressé': 'squeezed', 'eau': 'water', 'minérale': 'mineral', 'plate': 'still (literally: flat)', 'gazeuse': 'sparkling',
      'bière': 'beer', 'pression': 'draught', 'le': 'the', 'demi': 'small draught beer (25 cl)', 'cl': 'centilitres', 'verre': 'glass',
      'de': 'of', 'vin': 'wine', 'rouge': 'red', 'blanc': 'white', 'rosé': 'rosé', 'viennoiseries': 'pastries (croissants and the like; literally: Viennese things)',
      'croissant': 'croissant', 'pain': 'bread; here: pain au chocolat', 'au': 'with the (à + le)', 'tartine': 'bread with a spread', 'beurre': 'butter',
      'confiture': 'jam', 'prix': 'prices (le prix)', 'nets': 'net, final', 'service': 'service', 'compris': 'included'
    },
    translation: 'CAFÉ DU MARCHÉ. Hot drinks: counter / table. Coffee (espresso) 1.60 / 2.50. Long coffee 1.80 / 2.80. Decaf 1.80 / 2.80. Espresso with a dash of milk 1.90 / 2.90. Coffee with frothed milk 3.00 / 4.50. Hot chocolate 3.50 / 5.00. Tea or herbal tea 3.00 / 4.50. Cold drinks: freshly squeezed orange juice 4.50 / 6.00. Mineral water, still or sparkling 3.00 / 4.00. Draught beer, the demi (25 cl) 3.50 / 5.00. Glass of red, white or rosé wine 4.00 / 5.50. Pastries: croissant 1.40, pain au chocolat 1.50, bread with butter and jam 2.50. Net prices, service included.',
    notes: [
      { ref: 'Boissons chaudes, boissons fraîches', html: 'The adjective follows the noun, as it usually does in French, and takes the feminine plural ending because <span class="fr">la boisson</span> is feminine: <span class="fr">chaud → chaudes</span>, <span class="fr">frais → fraîches</span>.' },
      { ref: 'Café (expresso) : 1,60 €', html: 'French print puts a space before the colon, and the euro sign after the price. In Paris the counter price of an espresso is now often two euros or more; outside the big cities it can be lower. These prices are invented but realistic.' },
      { ref: 'Viennoiseries', html: 'The croissant’s ancestor, the <em>Kipferl</em>, is usually said to have come to Paris from Vienna in the nineteenth century, hence “Viennese things”. The many stories linking it to the siege of Vienna in 1683 are legends.' },
      { ref: 'Prix nets, service compris', html: 'The price you see is the price you pay: service is included. A tip is optional.' }
    ],
    questions: [
      { id: 'r1', type: 'mc', prompt: 'What does an espresso cost standing at the counter?', options: ['1,60 €', '2,50 €', '1,80 €', '3,00 €'], answer: 0, explain: 'Café (expresso): 1,60 € au comptoir, 2,50 € en salle.' },
      { id: 'r2', type: 'mc', prompt: 'You order a coffee with frothed milk and sit down at a table. What do you pay?', options: ['4,50 €', '3,00 €', '2,90 €', '5,00 €'], answer: 0, explain: 'Café crème en salle: 4,50 €.' },
      { id: 'r3', type: 'mc', prompt: 'What does <span class="fr">service compris</span> mean?', options: ['Service is included in the prices.', 'Service is extra.', 'Table service only.', 'Self-service.'], answer: 0, explain: 'compris = included; a tip is optional.' },
      { id: 'r4', type: 'mc', prompt: 'Which of these is sparkling?', options: ['eau gazeuse', 'eau plate', 'jus pressé', 'thé'], answer: 0, explain: 'gazeuse = sparkling; plate = still.' }
    ]
  },

  test: {
    count: 12,
    vocabQuestions: 3,
    items: [
      { id: 't1', type: 'gap', prompt: '<span class="fr">___ thé, s’il vous plaît.</span>', hint: ' (un or une?)', answers: ['un', 'Un'], full: 'Un thé, s’il vous plaît.', explain: 'le thé is masculine.' },
      { id: 't2', type: 'gap', prompt: '<span class="fr">Je voudrais ___ pression.</span>', hint: ' (un or une?)', answers: ['une'], full: 'Je voudrais une pression.', explain: 'la pression is feminine (-sion).' },
      { id: 't3', type: 'gap', prompt: '<span class="fr">Vous avez ___ sucre ?</span>', hint: ' (some)', answers: ['du'], full: 'Vous avez du sucre ?', explain: 'le sucre, masculine and uncounted: du sucre.' },
      { id: 't4', type: 'gap', prompt: '<span class="fr">Pas ___ lait, merci.</span>', hint: ' (after a negative)', answers: ['de'], full: 'Pas de lait, merci.', explain: 'After a negative: de.' },
      { id: 't5', type: 'gap', prompt: '<span class="fr">Une carafe ___ eau, s’il vous plaît.</span>', hint: ' (of)', answers: ['d’', 'd\'', 'd', 'de l’', 'de l\''], full: 'Une carafe d’eau, s’il vous plaît.', explain: 'de (of) shortens to d’ before a vowel: une carafe d’eau, un jus d’orange.' },
      { id: 't6', type: 'mc', prompt: 'Which is the polite way to order?', options: ['Je voudrais un café.', 'Je veux un café.', 'Donnez café !', 'Garçon, un café !'], answer: 0, explain: 'Je voudrais (I would like) is polite; je veux (I want) sounds demanding.' },
      { id: 't7', type: 'mc', prompt: '<span class="fr">Je vous dois combien ?</span> means…', options: ['How much do I owe you?', 'How many would you like?', 'Can I pay by card?', 'Is this table free?'], answer: 0, explain: 'devoir = to owe; combien = how much.' },
      { id: 't8', type: 'mc', prompt: 'Why is a coffee cheaper <span class="fr">au comptoir</span>?', options: ['You pay less for standing at the bar than for a table.', 'The cup is smaller.', 'It is decaf.', 'Service is not included.'], answer: 0, explain: 'You pay for the table and service, not the coffee.' },
      { id: 't9', type: 'translate', dir: 'en-fr', source: 'The bill, please.', accepted: ['L’addition, s’il vous plaît.', 'L addition s il vous plait', 'Je voudrais l’addition, s’il vous plaît.'], model: 'L’addition, s’il vous plaît.', explain: 'l’addition: la shortens to l’ before a vowel.' },
      { id: 't10', type: 'translate', dir: 'en-fr', source: 'A glass of white wine, please.', accepted: ['Un verre de vin blanc, s’il vous plaît.', 'Je voudrais un verre de vin blanc, s’il vous plaît.', 'Je vais prendre un verre de vin blanc, s’il vous plaît.'], model: 'Un verre de vin blanc, s’il vous plaît.', explain: 'un verre (masc.) de vin blanc: the colour follows the noun.' },
      { id: 't11', type: 'translate', dir: 'fr-en', source: 'Je peux payer par carte ?', accepted: ['Can I pay by card?', 'May I pay by card?', 'Could I pay by card?', 'Can I pay with a card?', 'Can I pay with card?', 'Can I pay by credit card?'], model: 'Can I pay by card?' },
      { id: 't12', type: 'translate', dir: 'fr-en', source: 'Merci, bonne soirée !', accepted: ['Thank you, have a nice evening!', 'Thanks, have a nice evening', 'Thank you, have a good evening', 'Thanks, have a good evening', 'Thank you, enjoy your evening', 'Thanks, enjoy your evening', 'Thank you, good evening'], model: 'Thank you, have a nice evening!' },
      { id: 't13', type: 'listen', text: 'Deux cafés, s’il vous plaît.', accepted: ['Deux cafés, s’il vous plaît.', '2 cafés, s’il vous plaît.'], explain: 'Deux cafés: the plural -s is written but not heard.' },
      { id: 't14', type: 'listen', text: 'Ça fait quatre euros vingt.', prompt: 'How much is it?', options: ['4,20 €', '4,02 €', '24 €', '14,20 €'], answer: 0, explain: 'quatre euros vingt = 4,20 €. Quatorze would be 14.' },
      { id: 't15', type: 'order', prompt: 'Put the words in order.', source: 'Where are the toilets?', tokens: ['Où', 'sont', 'les', 'toilettes ?'] },
      { id: 't16', type: 'match', prompt: 'Match the numbers.', pairs: [['deux', '2'], ['douze', '12'], ['six', '6'], ['seize', '16'], ['dix', '10']] }
    ]
  }
});
