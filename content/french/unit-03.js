/*
 * French — Unit 3: Au restaurant (II)
 * Content file only. The engine (app.js) reads this structure; no code here.
 * Original material. Forms and claims to be checked are listed in CONTENT-CHECKS.md.
 * French text uses the typographic apostrophe (’) and a no-break space before ? ! : as in French print.
 */
Hospes.addLecture('french', {
  id: 'fr-03',
  number: 3,
  title: 'Au restaurant (II)',
  subtitle: 'Dietary needs and allergies, putting a problem right, the bill and paying; ne… pas; the past with avoir; me, nous, vous before the verb',
  minutes: 50,

  intro: `
    <p>Unit 2 got the food to the table. This unit deals with everything that can make a meal go less smoothly, and with the end of it: asking what is in a dish, saying what you cannot or do not eat, pointing out politely that something is wrong, and asking for, checking and paying the bill.</p>
    <p>Three pieces of grammar carry most of it. Negation (<span class="fr">je ne mange pas de viande</span>) lets you say what you do not want. The past with <span class="fr">avoir</span> (<span class="fr">j’ai commandé</span>, “I ordered”) lets you say what happened. And the small words <span class="fr">me, nous, vous</span> before the verb (<span class="fr">vous pouvez nous apporter…</span>) let you ask someone to do something for you.</p>
  `,

  background: [
    {
      title: 'The bill comes when you ask for it',
      html: `
        <p>In France the table is yours for the evening. A waiter who brought the bill unasked would be signalling that you should leave, so it is rarely done, except in places with several sittings or at a busy lunch. Visitors from Britain sometimes wait twenty minutes for a bill that will never come. Catch the waiter’s eye and ask: <span class="fr">L’addition, s’il vous plaît</span>, or, a little softer, <span class="fr">On peut avoir l’addition ?</span> A writing gesture in the air is also understood.</p>
        <p>Payment is usually at the table: the waiter brings a portable card terminal (<span class="fr">le terminal</span>, informally <span class="fr">la machine</span>). In some bistros and cafés you pay at the till (<span class="fr">à la caisse</span>) on the way out. Cards are accepted almost everywhere, but some small places set a minimum amount, and an occasional one takes cash only; a sign on the door will usually say so.</p>
        <p>Splitting the bill (<span class="fr">payer séparément</span>) is generally possible for two or three people. For a large group, some restaurants dislike splitting it item by item; dividing the total equally (<span class="fr">partager en parts égales</span>) is easier for everyone.</p>`
    },
    {
      title: 'Tipping',
      html: `
        <p>Service is included in French prices by law (Unit 1), so there is no percentage to add and the card terminal will not ask for one, at least in most places. A tip (<span class="fr">le pourboire</span>) is a sign of satisfaction, not an obligation. Common practice, which varies by person and region, is to leave a few euros after a good meal, or to round up; leaving nothing is not considered rude.</p>
        <p>Tourist areas and some Paris restaurants have started to show tip suggestions on the terminal. You are free to decline them.</p>`
    },
    {
      title: 'Vegetarians, vegans and allergies',
      html: `
        <p>French cooking is built round meat, fish, butter and cream, and vegetarian dishes were long hard to find outside big cities. That has changed considerably, especially in cities, but a provincial menu may still have only one meat-free main course, or none. Two practical points:</p>
        <ul>
          <li><span class="fr">végétarien</span> should mean no meat and no fish, but some cooks do not count a meat stock (<span class="fr">un bouillon</span>), lardons in a salad, or fish. Ask about the stock and the sauce, not just the main ingredient.</li>
          <li><span class="fr">végan</span> (or <span class="fr">végétalien</span>) means no animal products at all. Expect to explain: <span class="fr">pas de lait, pas d’œufs, pas de beurre</span>.</li>
        </ul>
        <p>Under EU rules, restaurants must be able to tell you which of fourteen major allergens (gluten, nuts, milk, eggs, shellfish and others) a dish contains, and in France this information has to be available in writing. Ask for <span class="fr">la liste des allergènes</span>. For a serious allergy, say so clearly and early, and do not rely on a quick answer from a busy waiter.</p>`
    },
    {
      title: 'Complaining in France',
      html: `
        <p>Pointing out a problem is normal and expected; how you do it matters more than whether you do. The usual pattern is a polite opening (<span class="fr">Excusez-moi…</span>), a plain statement of fact (<span class="fr">ce n’est pas ce que j’ai commandé</span>), and a request (<span class="fr">vous pouvez…?</span>). Understatement helps: <span class="fr">c’est un peu froid</span> (“it’s a bit cold”) gets better results than an emphatic complaint.</p>
        <p>Leftovers: since 2021, as part of a law against food waste, restaurants have had to provide a container for you to take home what you have not eaten if you ask. The custom is still less established than in the English-speaking world, and the English word <em>doggy bag</em> is what most French people call it.</p>`
    }
  ],

  pronunciation: `
    <p>This unit’s phrases are longer, and in normal speech French drops and links sounds to keep them flowing. You do not need to copy all of it, but you need to recognise it.</p>
    <h3>The disappearing e</h3>
    <p>The unstressed <span class="fr">e</span> in short words (<span class="fr">je, ne, le, me, de, que</span>) and in the middle of words is often not pronounced in conversation:</p>
    <ul>
      <li><span class="fr">je peux</span> [ʒpø], <span class="fr">je ne sais pas</span> [ʒnəsepa] or even [ʃepa];</li>
      <li><span class="fr">on peut avoir l’addition</span>: [ɔ̃pøtavwaʁladisjɔ̃], one breath;</li>
      <li><span class="fr">samedi</span> [samdi], <span class="fr">maintenant</span> [mɛ̃tnɑ̃].</li>
    </ul>
    <p>Pronouncing every <span class="fr">e</span> is never wrong; it just sounds careful. The speaker buttons use careful speech; waiters will not.</p>
    <h3>ne… pas in speech</h3>
    <p>In speech the <span class="fr">ne</span> of the negative is very often dropped: <span class="fr">je mange pas de viande</span>, <span class="fr">c’est pas ce que j’ai commandé</span>. The <span class="fr">pas</span> carries the meaning. Listen for <span class="fr">pas</span>; write and, when in doubt, say both.</p>
    <h3>ui</h3>
    <p><span class="fr">ui</span> is [ɥi], a quick <span class="fr">u</span> (German <em>ü</em>) gliding into [i]: <span class="fr">cuit</span> [kɥi], <span class="fr">huile</span> [ɥil], <span class="fr">je suis</span> [ʒəsɥi]. It is one syllable. English speakers tend to say “kwee”; German speakers have the <em>ü</em> already, so make it short.</p>
    <h3>Food words borrowed from English</h3>
    <p>Words like <span class="fr">gluten</span> [glytɛn] and <span class="fr">végan</span> [vegɑ̃] or [vegan] are pronounced the French way. <span class="fr">Le doggy bag</span> keeps something like its English sound.</p>
  `,

  phrasesIntro: `<p>The phrases are grouped by situation. Those marked “you will hear” are the waiter’s.</p>`,
  phraseGroups: [
    { title: 'What is in it?', ids: ['p1', 'p2', 'p3', 'p4', 'p5', 'p6', 'p7', 'p8', 'p9'] },
    { title: 'Something is wrong', ids: ['p10', 'p11', 'p12', 'p13', 'p14', 'p15'] },
    { title: 'The bill', ids: ['p16', 'p17', 'p18', 'p19', 'p20', 'p21', 'p22', 'p23'] },
    { title: 'Leaving', ids: ['p24', 'p25', 'p26', 'p27'] }
  ],
  phrases: [
    { id: 'p1', fr: 'Je suis végétarien. / Je suis végétarienne.', en: 'I’m a vegetarian (man / woman).', note: 'No article: “I am vegetarian”. See Grammar.' },
    { id: 'p2', fr: 'Je ne mange pas de viande.', en: 'I don’t eat meat.' },
    { id: 'p3', fr: 'Il y a de la viande dedans ?', en: 'Is there meat in it?', lit: 'There is some meat inside?' },
    { id: 'p4', fr: 'C’est fait avec un bouillon de viande ?', en: 'Is it made with a meat stock?' },
    { id: 'p5', fr: 'Je suis allergique aux fruits à coque.', en: 'I’m allergic to nuts.', lit: '… to the fruits with a shell.', note: '<span class="fr">Les fruits à coque</span> is the term on allergen lists. <span class="fr">Les noix</span> are walnuts, though some people use the word for nuts in general.' },
    { id: 'p6', fr: 'Il y a du gluten dans ce plat ?', en: 'Is there gluten in this dish?' },
    { id: 'p7', fr: 'Vous avez la liste des allergènes ?', en: 'Do you have the list of allergens?' },
    { id: 'p8', fr: 'Sans fromage, s’il vous plaît.', en: 'Without cheese, please.' },
    { id: 'p9', fr: 'Je vais demander au chef.', en: 'I’ll ask the chef.', note: 'You will hear it.' },
    { id: 'p10', fr: 'Excusez-moi, ce n’est pas ce que j’ai commandé.', en: 'Excuse me, this isn’t what I ordered.' },
    { id: 'p11', fr: 'C’est un peu froid.', en: 'It’s a bit cold.' },
    { id: 'p12', fr: 'La viande est trop cuite.', en: 'The meat is overcooked.', lit: 'The meat is too cooked.' },
    { id: 'p13', fr: 'Il nous manque une fourchette.', en: 'We’re missing a fork.', lit: 'There is missing to us a fork.' },
    { id: 'p14', fr: 'Vous pouvez nous apporter du pain, s’il vous plaît ?', en: 'Could you bring us some bread, please?' },
    { id: 'p15', fr: 'On attend depuis une demi-heure.', en: 'We’ve been waiting for half an hour.', lit: 'We wait since half an hour.', note: 'French uses the present with <span class="fr">depuis</span> for something still going on, like German <em>Wir warten seit einer halben Stunde</em>.' },
    { id: 'p16', fr: 'On peut avoir l’addition, s’il vous plaît ?', en: 'Could we have the bill, please?' },
    { id: 'p17', fr: 'Vous payez ensemble ou séparément ?', en: 'Are you paying together or separately?', note: 'You will hear it.' },
    { id: 'p18', fr: 'On peut payer séparément ?', en: 'Can we pay separately?' },
    { id: 'p19', fr: 'C’est moi qui invite.', en: 'It’s on me.', lit: 'It is I who invite.', note: 'Also <span class="fr">Je vous invite</span> (to someone you call <span class="fr">vous</span>), <span class="fr">je t’invite</span> (to a friend).' },
    { id: 'p20', fr: 'Je crois qu’il y a une erreur.', en: 'I think there’s a mistake.' },
    { id: 'p21', fr: 'Nous avons pris deux cafés, pas trois.', en: 'We had two coffees, not three.', lit: 'We have taken two coffees, not three.' },
    { id: 'p22', fr: 'Vous prenez la carte ?', en: 'Do you take cards?', note: 'Also <span class="fr">Je peux payer par carte ?</span> from Unit 1.' },
    { id: 'p23', fr: 'Je pourrais avoir un reçu ?', en: 'Could I have a receipt?', note: 'For a business expense ask for <span class="fr">une facture</span>, an invoice with the company’s name.' },
    { id: 'p24', fr: 'Tout s’est bien passé ?', en: 'Was everything all right?', lit: 'Everything went well?', note: 'You will hear it at the end of the meal.' },
    { id: 'p25', fr: 'Oui, c’était très bon, merci.', en: 'Yes, it was very good, thank you.' },
    { id: 'p26', fr: 'Je peux emporter le reste ?', en: 'Can I take the rest with me?' },
    { id: 'p27', fr: 'Merci, à bientôt !', en: 'Thank you, see you soon!' }
  ],

  dialogue: {
    title: 'Un déjeuner d’affaires',
    setting: '<p>A working lunch in a bistro in Lyon, with a vegetarian colleague, Paul. You have a nut allergy. The waitress (<span class="fr">la serveuse</span>) has brought the menus.</p>',
    you: 'Vous',
    lines: [
      { who: 'Vous', fr: 'Excusez-moi, mon collègue est végétarien. Le risotto aux champignons, il est fait avec un bouillon de viande ?', en: 'Excuse me, my colleague is a vegetarian. The mushroom risotto: is it made with a meat stock?' },
      { who: 'La serveuse', fr: 'Non, c’est un bouillon de légumes. Il n’y a ni viande ni poisson.', en: 'No, it’s a vegetable stock. There is neither meat nor fish.' },
      { who: 'Vous', fr: 'Parfait. Et moi, je suis allergique aux fruits à coque.', en: 'Perfect. And I’m allergic to nuts.' },
      { who: 'La serveuse', fr: 'Je vais demander au chef.', en: 'I’ll ask the chef.' },
      { who: 'La serveuse', fr: 'Il n’y a pas de fruits à coque dans le risotto. Mais il y a du parmesan.', en: 'There are no nuts in the risotto. But there is Parmesan.' },
      { who: 'Vous', fr: 'Ce n’est pas un problème. Alors, deux risottos, s’il vous plaît.', en: 'That’s not a problem. Two risottos, then, please.' },
      { who: 'Vous', fr: 'Excusez-moi, ce n’est pas ce que j’ai commandé. J’ai demandé le risotto, pas les pâtes.', en: 'Excuse me, this isn’t what I ordered. I asked for the risotto, not the pasta.' },
      { who: 'La serveuse', fr: 'Oh, je suis désolée ! Je vous l’échange tout de suite.', en: 'Oh, I’m sorry! I’ll change it for you right away.' },
      { who: 'La serveuse', fr: 'Tout s’est bien passé ?', en: 'Was everything all right?' },
      { who: 'Vous', fr: 'Oui, c’était très bon, merci. On peut avoir l’addition, s’il vous plaît ?', en: 'Yes, it was very good, thank you. Could we have the bill, please?' },
      { who: 'La serveuse', fr: 'Bien sûr. Vous payez ensemble ou séparément ?', en: 'Of course. Are you paying together or separately?' },
      { who: 'Vous', fr: 'Ensemble. C’est moi qui invite.', en: 'Together. It’s on me.' },
      { who: 'Vous', fr: 'Excusez-moi, je crois qu’il y a une erreur. Nous avons pris deux cafés, pas trois.', en: 'Excuse me, I think there’s a mistake. We had two coffees, not three.' },
      { who: 'La serveuse', fr: 'Vous avez raison, pardon. Alors, ça fait quarante-six euros.', en: 'You’re right, sorry. So that comes to forty-six euros.' },
      { who: 'Vous', fr: 'Vous prenez la carte ?', en: 'Do you take cards?' },
      { who: 'La serveuse', fr: 'Oui, bien sûr. Je vous apporte le terminal.', en: 'Yes, of course. I’ll bring you the card machine.' },
      { who: 'Vous', fr: 'Merci beaucoup. Et je pourrais avoir une facture ?', en: 'Thank you very much. And could I have an invoice?' },
      { who: 'La serveuse', fr: 'Pas de problème. À quel nom ?', en: 'No problem. In what name?' }
    ],
    notes: [
      { ref: 'Le risotto aux champignons, il est fait…', html: 'Naming the topic first and then picking it up with a pronoun (<span class="fr">il</span>) is very common in spoken French: “The risotto, is it made…?” It is not an error.' },
      { ref: 'ni viande ni poisson', html: '“Neither meat nor fish”: <span class="fr">ne… ni… ni…</span>, with no article after <span class="fr">ni</span>. Recognise it; <span class="fr">pas de viande, pas de poisson</span> says the same.' },
      { ref: 'il y a du parmesan', html: 'Parmesan is traditionally made with animal rennet, which is why strict vegetarians avoid it. The waitress mentions it for that reason, or because of the allergy check; in either case it is the kind of detail worth listening for.' },
      { ref: 'j’ai commandé… J’ai demandé', html: 'The past with <span class="fr">avoir</span>: <span class="fr">j’ai commandé</span> “I ordered”, <span class="fr">j’ai demandé</span> “I asked for”. See Grammar.' },
      { ref: 'Je vous l’échange', html: '“I exchange it for you”: two pronouns before the verb, <span class="fr">vous</span> (for you) and <span class="fr">l’</span> (it). Recognise it for now.' },
      { ref: 'Tout s’est bien passé ?', html: 'A past with <span class="fr">être</span>, used with verbs like <span class="fr">se passer</span>. You will meet it properly later; learn this one as a phrase.' },
      { ref: 'ça fait quarante-six euros', html: '“That makes 46 euros”. Compare <span class="fr">Ça fait combien ?</span> from Unit 1. This unit’s reading shows the bill before the correction.' },
      { ref: 'une facture', html: 'An invoice, for a business expense; the waitress will want the company name. An ordinary receipt is <span class="fr">un reçu</span> or <span class="fr">un ticket</span>.' },
      { ref: 'À quel nom ?', html: '“In what name?”: the same <span class="fr">au nom de</span> as when booking in Unit 2.' }
    ]
  },

  vocab: [
    { id: 'v1', la: 'végétarien, végétarienne', head: 'végétarien', say: 'végétarien, végétarienne', pos: 'adjective', pron: '[veʒetaʁjɛ̃, veʒetaʁjɛn]', en: 'vegetarian' },
    { id: 'v2', la: 'végan, végane', head: 'végan', say: 'végan, végane', pos: 'adjective', pron: '[vegɑ̃, vegan]', en: 'vegan', note: 'Also <span class="fr">végétalien, végétalienne</span>.' },
    { id: 'v3', la: 'allergique', head: 'allergique', pos: 'adjective', pron: '[alɛʁʒik]', en: 'allergic', note: '<span class="fr">allergique à</span>: allergic to. <span class="fr">une allergie</span>: an allergy.' },
    { id: 'v4', la: 'l’allergène', head: 'l’allergène', pos: 'noun', g: 'm', pron: '[alɛʁʒɛn]', en: 'allergen' },
    { id: 'v5', la: 'le gluten', head: 'le gluten', pos: 'noun', g: 'm', pron: '[glytɛn]', en: 'gluten', note: '<span class="fr">sans gluten</span>: gluten-free.' },
    { id: 'v6', la: 'les fruits à coque', head: 'les fruits à coque', pos: 'noun', g: 'm', pron: '[fʁɥi a kɔk]', en: 'nuts (tree nuts)' },
    { id: 'v7', la: 'la noix', head: 'la noix', pos: 'noun', g: 'f', pron: '[nwa]', en: 'walnut; nut', note: '<span class="fr">la noisette</span> hazelnut, <span class="fr">l’amande</span> (f.) almond, <span class="fr">la cacahuète</span> peanut.' },
    { id: 'v8', la: 'les fruits de mer', head: 'les fruits de mer', pos: 'noun', g: 'm', pron: '[fʁɥi də mɛʁ]', en: 'seafood, shellfish' },
    { id: 'v9', la: 'l’œuf', head: 'l’œuf', pos: 'noun', g: 'm', pron: '[œf]', en: 'egg', note: 'Plural <span class="fr">les œufs</span> [lezø].' },
    { id: 'v10', la: 'le beurre', head: 'le beurre', pos: 'noun', g: 'm', pron: '[bœʁ]', en: 'butter' },
    { id: 'v11', la: 'le bouillon', head: 'le bouillon', pos: 'noun', g: 'm', pron: '[bujɔ̃]', en: 'stock, broth' },
    { id: 'v12', la: 'les champignons', head: 'les champignons', pos: 'noun', g: 'm', pron: '[ʃɑ̃piɲɔ̃]', en: 'mushrooms' },
    { id: 'v13', la: 'les pâtes', head: 'les pâtes', pos: 'noun', g: 'f', pron: '[pɑt]', en: 'pasta', note: 'Always plural. <span class="fr">La pâte</span> is dough or pastry.' },
    { id: 'v14', la: 'le pain', head: 'le pain', pos: 'noun', g: 'm', pron: '[pɛ̃]', en: 'bread' },
    { id: 'v15', la: 'le sel', head: 'le sel', pos: 'noun', g: 'm', pron: '[sɛl]', en: 'salt' },
    { id: 'v16', la: 'le poivre', head: 'le poivre', pos: 'noun', g: 'm', pron: '[pwavʁ]', en: 'pepper' },
    { id: 'v17', la: 'la fourchette', head: 'la fourchette', pos: 'noun', g: 'f', pron: '[fuʁʃɛt]', en: 'fork' },
    { id: 'v18', la: 'le couteau', head: 'le couteau', pos: 'noun', g: 'm', pron: '[kuto]', en: 'knife' },
    { id: 'v19', la: 'la cuillère', head: 'la cuillère', pos: 'noun', g: 'f', pron: '[kɥijɛʁ]', en: 'spoon', note: 'Also spelt <span class="fr">cuiller</span>.' },
    { id: 'v20', la: 'l’assiette', head: 'l’assiette', pos: 'noun', g: 'f', pron: '[asjɛt]', en: 'plate' },
    { id: 'v21', la: 'la serviette', head: 'la serviette', pos: 'noun', g: 'f', pron: '[sɛʁvjɛt]', en: 'napkin; towel' },
    { id: 'v22', la: 'le chef', head: 'le chef', pos: 'noun', g: 'm', pron: '[ʃɛf]', en: 'chef, head cook; boss' },
    { id: 'v23', la: 'commander', head: 'commander', pos: 'verb', pron: '[kɔmɑ̃de]', en: 'to order', note: '<span class="fr">j’ai commandé</span>: I ordered.' },
    { id: 'v24', la: 'demander', head: 'demander', pos: 'verb', pron: '[dəmɑ̃de]', en: 'to ask (for)', note: 'Not “to demand” (<span class="fr">exiger</span>).' },
    { id: 'v25', la: 'apporter', head: 'apporter', pos: 'verb', pron: '[apɔʁte]', en: 'to bring' },
    { id: 'v26', la: 'attendre', head: 'attendre', pos: 'verb', pron: '[atɑ̃dʁ]', en: 'to wait (for)', note: 'No preposition: <span class="fr">attendre le serveur</span>, to wait for the waiter. Not “to attend”.' },
    { id: 'v27', la: 'manger', head: 'manger', pos: 'verb', pron: '[mɑ̃ʒe]', en: 'to eat' },
    { id: 'v28', la: 'emporter', head: 'emporter', pos: 'verb', pron: '[ɑ̃pɔʁte]', en: 'to take away, take with you', note: '<span class="fr">à emporter</span>: to take away (Unit 1).' },
    { id: 'v29', la: 'le reste', head: 'le reste', pos: 'noun', g: 'm', pron: '[ʁɛst]', en: 'the rest, leftovers' },
    { id: 'v30', la: 'dedans', head: 'dedans', pos: 'adverb', pron: '[dədɑ̃]', en: 'inside, in it' },
    { id: 'v31', la: 'trop', head: 'trop', pos: 'adverb', pron: '[tʁo]', en: 'too, too much', note: '<span class="fr">trop cuit</span>: overcooked; <span class="fr">trop salé</span>: too salty.' },
    { id: 'v32', la: 'un peu', head: 'un peu', pos: 'adverb', pron: '[œ̃ pø]', en: 'a little, a bit' },
    { id: 'v33', la: 'l’erreur', head: 'l’erreur', pos: 'noun', g: 'f', pron: '[eʁœʁ]', en: 'mistake, error', note: 'Feminine, unlike most nouns in <span class="fr">-eur</span> for people (<span class="fr">le serveur</span>).' },
    { id: 'v34', la: 'le problème', head: 'le problème', pos: 'noun', g: 'm', pron: '[pʁɔblɛm]', en: 'problem', note: 'Masculine despite the <span class="fr">-e</span>. <span class="fr">Pas de problème</span>: no problem.' },
    { id: 'v35', la: 'ensemble', head: 'ensemble', pos: 'adverb', pron: '[ɑ̃sɑ̃bl]', en: 'together' },
    { id: 'v36', la: 'séparément', head: 'séparément', pos: 'adverb', pron: '[sepaʁemɑ̃]', en: 'separately' },
    { id: 'v37', la: 'le pourboire', head: 'le pourboire', pos: 'noun', g: 'm', pron: '[puʁbwaʁ]', en: 'tip, gratuity', de: 'das Trinkgeld', note: 'Literally “for drinking”, the same image as the German.' },
    { id: 'v38', la: 'le reçu', head: 'le reçu', pos: 'noun', g: 'm', pron: '[ʁəsy]', en: 'receipt' },
    { id: 'v39', la: 'la facture', head: 'la facture', pos: 'noun', g: 'f', pron: '[faktyʁ]', en: 'invoice' },
    { id: 'v40', la: 'en espèces', head: 'en espèces', pos: 'phrase', pron: '[ɑ̃n‿ɛspɛs]', en: 'in cash', note: 'Informally <span class="fr">en liquide</span>.' }
  ],

  grammar: [
    {
      title: 'Saying no: ne… pas',
      html: `
        <p>French negation has two parts that go round the verb: <span class="fr">ne</span> before it, <span class="fr">pas</span> after it. Before a vowel <span class="fr">ne</span> becomes <span class="fr">n’</span>.</p>
        <ul>
          <li><span class="fr">Je mange de la viande.</span> → <span class="fr">Je <b>ne</b> mange <b>pas</b> de viande.</span></li>
          <li><span class="fr">C’est ce que j’ai commandé.</span> → <span class="fr">Ce <b>n’</b>est <b>pas</b> ce que j’ai commandé.</span></li>
          <li><span class="fr">Il y a du gluten.</span> → <span class="fr">Il <b>n’</b>y a <b>pas</b> de gluten.</span></li>
        </ul>
        <p>Two other pairs work the same way: <span class="fr">ne… plus</span> “no longer, no more” (<span class="fr">il n’y a plus de pain</span>, “there’s no bread left”) and <span class="fr">ne… jamais</span> “never” (<span class="fr">je ne mange jamais de porc</span>).</p>
        <p>Remember from Unit 1 that after a negative, <span class="fr">du, de la, de l’, des</span> and <span class="fr">un, une</span> all become <span class="fr">de</span> (<span class="fr">d’</span> before a vowel): <span class="fr">pas de viande</span>, <span class="fr">pas d’œufs</span>, <span class="fr">pas de fruits à coque</span>. The definite article stays: <span class="fr">je n’aime pas <b>le</b> poisson</span> (“I don’t like fish”).</p>
        <p>In speech the <span class="fr">ne</span> is very often dropped (<span class="fr">je mange pas de viande</span>). In writing, and in this app’s exercises, keep it.</p>
        <p class="aside"><strong>German angle.</strong> German uses <em>kein</em> where French uses <span class="fr">pas de</span>: <em>ich esse kein Fleisch</em> = <span class="fr">je ne mange pas de viande</span>. The parallel is useful: wherever German would say <em>kein</em>, French has <span class="fr">pas de</span> without an article.</p>`
    },
    {
      title: 'What happened: the past with avoir',
      html: `
        <p>To say what you ordered, asked for or had, French uses the present of <span class="fr">avoir</span> (“to have”) with a past participle, much like English “I have ordered” or German <em>ich habe bestellt</em>. The same form covers English “I ordered” and “I have ordered”.</p>
        <div class="tablewrap"><table><thead><tr><th>avoir</th><th>+ participle</th><th>English</th></tr></thead>
        <tbody><tr><td class="fr">j’ai</td><td class="fr">commandé</td><td>I ordered, I have ordered</td></tr>
        <tr><td class="fr">vous avez</td><td class="fr">choisi</td><td>you chose, have you chosen</td></tr>
        <tr><td class="fr">nous avons</td><td class="fr">pris</td><td>we had, we took</td></tr>
        <tr><td class="fr">on a</td><td class="fr">réservé</td><td>we booked</td></tr></tbody></table></div>
        <p>The participle of every verb in <span class="fr">-er</span> ends in <span class="fr">-é</span> and sounds like the infinitive: <span class="fr">commander → commandé</span>, <span class="fr">demander → demandé</span>, <span class="fr">réserver → réservé</span>, <span class="fr">payer → payé</span>. Others need learning: <span class="fr">choisir → choisi</span>, <span class="fr">prendre → pris</span>, <span class="fr">boire → bu</span>, <span class="fr">attendre → attendu</span>.</p>
        <p>In the negative, <span class="fr">ne… pas</span> goes round <span class="fr">avoir</span>: <span class="fr">je <b>n’</b>ai <b>pas</b> commandé ça</span>, “I didn’t order that”.</p>
        <p>A small group of verbs (mostly of movement) uses <span class="fr">être</span> instead, and so do verbs with <span class="fr">se</span>, as in <span class="fr">tout s’est bien passé</span>. They come in a later unit.</p>
        <p class="aside"><strong>German angle.</strong> The split between <em>haben</em> and <em>sein</em> is similar in both languages, and the French <span class="fr">être</span> verbs largely overlap with the German <em>sein</em> verbs (<em>ich bin gegangen</em>, <span class="fr">je suis allé</span>). Unlike German, French keeps the participle next to <span class="fr">avoir</span>, not at the end: <span class="fr">j’ai commandé le risotto</span>, <em>ich habe das Risotto bestellt</em>.</p>`
    },
    {
      title: 'me, nous, vous before the verb',
      html: `
        <p>“To me, for us, to you” go in front of the verb in French, not after it:</p>
        <ul>
          <li><span class="fr">Vous pouvez <b>nous</b> apporter du pain ?</span> “Can you bring <b>us</b> some bread?”</li>
          <li><span class="fr">Qu’est-ce que vous <b>me</b> conseillez ?</span> “What do you recommend (to) <b>me</b>?”</li>
          <li><span class="fr">Je <b>vous</b> dois combien ?</span> “How much do I owe <b>you</b>?”</li>
          <li><span class="fr">Je <b>vous</b> apporte le terminal.</span> “I’ll bring <b>you</b> the card machine.”</li>
        </ul>
        <p>With <span class="fr">pouvoir</span> (“can”) and another verb, the pronoun goes before the second verb, the one it belongs to: <span class="fr">vous pouvez nous apporter…</span>. Before a vowel <span class="fr">me</span> becomes <span class="fr">m’</span>: <span class="fr">vous m’apportez l’addition ?</span></p>
        <p>The same position is used in <span class="fr">il nous manque une fourchette</span>, literally “to us is missing a fork”. <span class="fr">Manquer</span> works backwards compared with English: the thing missing is the subject.</p>`
    },
    {
      title: 'Je suis végétarien: no article',
      html: `
        <p>With <span class="fr">être</span>, words for what someone is (a diet, a job, a nationality, a religion) take no article in French: <span class="fr">je suis végétarien</span> (“I’m a vegetarian”), <span class="fr">il est serveur</span> (“he’s a waiter”), <span class="fr">elle est anglaise</span> (“she’s English”). German does the same: <em>ich bin Vegetarier</em>.</p>
        <p>These words agree with the person: a woman says <span class="fr">je suis végétarienne</span>, a man <span class="fr">je suis végétarien</span>. The feminine is not just written differently: <span class="fr">végétarien</span> [veʒetaʁjɛ̃] ends in a nasal vowel, <span class="fr">végétarienne</span> [veʒetaʁjɛn] in a pronounced [n]. <span class="fr">Allergique</span> already ends in <span class="fr">-e</span> and does not change.</p>`
    },
    {
      title: 'Degrees: un peu, trop, très, assez',
      html: `
        <p>A complaint usually needs one of these before an adjective:</p>
        <ul>
          <li><span class="fr">un peu</span> “a bit”: <span class="fr">c’est un peu froid</span>;</li>
          <li><span class="fr">trop</span> “too”: <span class="fr">c’est trop salé</span> (too salty), <span class="fr">la viande est trop cuite</span>;</li>
          <li><span class="fr">pas assez</span> “not enough”: <span class="fr">ce n’est pas assez cuit</span> (undercooked);</li>
          <li><span class="fr">très</span> “very”, for praise: <span class="fr">c’était très bon</span>.</li>
        </ul>
        <p>Note <span class="fr">trop cuite</span>: the adjective agrees with <span class="fr">la viande</span>, as in Unit 2. And <span class="fr">trop</span> means “too”, not “very”: <span class="fr">c’est trop bon</span> is informal, mostly young people’s, praise (“so good”), but <span class="fr">c’est trop cher</span> is a complaint (“too expensive”).</p>`
    }
  ],

  grammarCards: [
    { id: 'gc1', front: 'ne… pas, ne… plus, ne… jamais', back: 'not; no longer / no more; never. ne → n’ before a vowel: ce n’est pas…' },
    { id: 'gc2', front: 'I don’t eat meat.', back: 'Je ne mange pas de viande. (pas de, like German kein)' },
    { id: 'gc3', front: 'I ordered / we had / have you chosen?', back: 'j’ai commandé / nous avons pris / vous avez choisi ?' },
    { id: 'gc4', front: 'Past participles: commander, prendre, choisir, attendre', back: 'commandé, pris, choisi, attendu' },
    { id: 'gc5', front: 'Can you bring us some bread?', back: 'Vous pouvez nous apporter du pain ? (pronoun before the verb it belongs to)' },
    { id: 'gc6', front: 'I’m a vegetarian (man / woman).', back: 'Je suis végétarien / végétarienne. (no article)' },
    { id: 'gc7', front: 'a bit cold; too salty; not cooked enough', back: 'un peu froid; trop salé; pas assez cuit' }
  ],

  reference: [
    { title: 'Negation', headers: ['', 'French', 'example'], rows: [
      ['not', 'ne… pas', 'je ne mange pas de viande'], ['no longer, no more', 'ne… plus', 'il n’y a plus de pain'], ['never', 'ne… jamais', 'je ne bois jamais d’alcool'], ['neither… nor', 'ne… ni… ni', 'il n’y a ni viande ni poisson']] },
    { title: 'Past participles so far', headers: ['infinitive', 'participle', 'English'], rows: [
      ['commander', 'commandé', 'ordered'], ['demander', 'demandé', 'asked for'], ['réserver', 'réservé', 'booked'], ['payer', 'payé', 'paid'], ['manger', 'mangé', 'eaten'],
      ['choisir', 'choisi', 'chosen'], ['prendre', 'pris', 'taken, had'], ['boire', 'bu', 'drunk'], ['attendre', 'attendu', 'waited']] },
    { title: 'Common allergens (EU list, short names)', headers: ['French', 'English'], rows: [
      ['le gluten', 'gluten'], ['les fruits à coque', 'tree nuts'], ['les arachides', 'peanuts'], ['le lait', 'milk'], ['les œufs', 'eggs'], ['le poisson', 'fish'],
      ['les crustacés', 'crustaceans'], ['les mollusques', 'molluscs'], ['le soja', 'soya'], ['le céleri', 'celery'], ['la moutarde', 'mustard'], ['le sésame', 'sesame'],
      ['les sulfites', 'sulphites'], ['le lupin', 'lupin']] }
  ],

  exercises: [
    { id: 'e1', type: 'mc', prompt: 'You have finished your meal and want to leave. In France the bill…', options: ['comes when you ask for it', 'comes with the dessert', 'is brought automatically after coffee', 'is always paid at the till'], answer: 0, explain: 'Bringing it unasked would hint that you should leave. Ask: L’addition, s’il vous plaît.' },
    { id: 'e2', type: 'mc', prompt: 'A tip in a French restaurant is…', options: ['optional: service is included', 'a fixed 12.5%', 'added to the bill automatically', 'considered rude'], answer: 0, explain: 'Service compris: a few euros or rounding up after a good meal, if you wish.' },
    { id: 'e3', type: 'gap', prompt: '<span class="fr">Je ne mange pas ___ viande.</span>', hint: ' (after a negative)', answers: ['de'], full: 'Je ne mange pas de viande.', explain: 'After pas: de, not de la. German: kein Fleisch.' },
    { id: 'e4', type: 'gap', prompt: '<span class="fr">Ce ___ est pas ce que j’ai commandé.</span>', hint: ' (ne before a vowel)', answers: ['n’', 'n\'', 'n'], full: 'Ce n’est pas ce que j’ai commandé.', explain: 'ne becomes n’ before a vowel: n’est.' },
    { id: 'e5', type: 'gap', prompt: '<span class="fr">J’___ commandé le risotto.</span>', hint: ' (avoir)', answers: ['ai'], full: 'J’ai commandé le risotto.', explain: 'j’ai + participle: I ordered.' },
    { id: 'e6', type: 'gap', prompt: '<span class="fr">Nous avons ___ deux cafés.</span>', hint: ' (prendre, past participle)', answers: ['pris'], full: 'Nous avons pris deux cafés.', explain: 'prendre → pris.' },
    { id: 'e7', type: 'gap', prompt: '<span class="fr">Vous pouvez ___ apporter du pain ?</span>', hint: ' (to us)', answers: ['nous'], full: 'Vous pouvez nous apporter du pain ?', explain: 'The pronoun goes before the verb it belongs to: nous apporter.' },
    { id: 'e8', type: 'gap', prompt: '<span class="fr">Elle est ___.</span>', hint: ' (végétarien, végétarienne or une végétarienne?)', answers: ['végétarienne'], full: 'Elle est végétarienne.', explain: 'No article after être, and feminine for a woman.' },
    { id: 'e9', type: 'gap', prompt: '<span class="fr">La viande est trop ___.</span>', hint: ' (cuit, cuite, cuits or cuites?)', answers: ['cuite'], full: 'La viande est trop cuite.', explain: 'la viande is feminine singular: cuite.' },
    { id: 'e10', type: 'match', prompt: 'Match the French and the English.', pairs: [['la fourchette', 'fork'], ['le couteau', 'knife'], ['la cuillère', 'spoon'], ['l’assiette', 'plate'], ['la serviette', 'napkin']] },
    { id: 'e11', type: 'match', prompt: 'Match the French and the English.', pairs: [['le pourboire', 'tip'], ['le reçu', 'receipt'], ['la facture', 'invoice'], ['en espèces', 'in cash'], ['séparément', 'separately']] },
    { id: 'e12', type: 'order', prompt: 'Put the words in order.', source: 'Is there meat in it?', tokens: ['Il', 'y', 'a', 'de', 'la', 'viande', 'dedans ?'] },
    { id: 'e13', type: 'order', prompt: 'Put the words in order.', source: 'Could we have the bill, please?', tokens: ['On', 'peut', 'avoir', 'l’addition,', 's’il', 'vous', 'plaît ?'] },
    { id: 'e14', type: 'translate', dir: 'en-fr', source: 'I’m allergic to nuts.', accepted: ['Je suis allergique aux fruits à coque.', 'Je suis allergique aux noix.'], model: 'Je suis allergique aux fruits à coque.', explain: 'allergique à + les = aux. No article before allergique.' },
    { id: 'e15', type: 'translate', dir: 'en-fr', source: 'Without cheese, please.', accepted: ['Sans fromage, s’il vous plaît.'], model: 'Sans fromage, s’il vous plaît.', explain: 'No article after sans.' },
    { id: 'e16', type: 'translate', dir: 'en-fr', source: 'I think there’s a mistake.', accepted: ['Je crois qu’il y a une erreur.', 'Je pense qu’il y a une erreur.', 'Je crois qu’il y a une erreur dans l’addition.', 'Je pense qu’il y a une erreur dans l’addition.'], model: 'Je crois qu’il y a une erreur.', explain: 'je crois que (I believe that) + il y a; que becomes qu’ before il. l’erreur is feminine: une erreur.' },
    { id: 'e17', type: 'translate', dir: 'fr-en', source: 'On peut payer séparément ?', accepted: ['Can we pay separately?', 'Could we pay separately?', 'May we pay separately?', 'Can we split the bill?', 'Can we pay individually?'], model: 'Can we pay separately?' },
    { id: 'e18', type: 'translate', dir: 'fr-en', source: 'C’est un peu froid.', accepted: ['It’s a bit cold.', 'It is a bit cold', 'It’s a little cold', 'It is a little cold', 'This is a bit cold', 'This is a little cold', 'It’s slightly cold', 'It is slightly cold'], model: 'It’s a bit cold.' },
    { id: 'e19', type: 'listen', text: 'Vous payez ensemble ou séparément ?', prompt: 'What is the waitress asking?', options: ['Are you paying together or separately?', 'Are you paying by card or in cash?', 'Do you want a receipt?', 'Was everything all right?'], answer: 0, explain: 'ensemble: together; séparément: separately.' },
    { id: 'e20', type: 'listen', text: 'Il n’y a plus de pain.', prompt: 'What are you told?', options: ['There is no bread left.', 'There is no bread in it.', 'Bread is extra.', 'The bread is coming.'], answer: 0, explain: 'ne… plus: no more, no longer.' },
    { id: 'e21', type: 'listen', text: 'Je ne mange pas de viande.', explain: 'Je ne mange pas de viande: I don’t eat meat.' },
    { id: 'e22', type: 'listen', text: 'Ça fait cinquante-huit euros.', prompt: 'How much is it?', options: ['58 €', '48 €', '68 €', '18 €'], answer: 0, explain: 'cinquante-huit: 58. quarante-huit 48, soixante-huit 68.' },
    { id: 'e23', type: 'mc', prompt: 'You want to say a dish is undercooked. You say…', options: ['Ce n’est pas assez cuit.', 'C’est trop cuit.', 'C’est très cuit.', 'C’est bien cuit.'], answer: 0, explain: 'pas assez: not enough. Trop cuit would be overcooked.' }
  ],

  reading: {
    title: 'L’addition du Bistrot des Canuts',
    note: 'The bill from this unit’s dialogue, before the correction. TTC is “all taxes included”; TVA is VAT. Tap any word for its meaning.',
    text: `BISTROT DES CANUTS
Table 7 — 2 couverts — Serveuse : Léa

2 Risotto aux champignons — 33,00 €
1 Eau gazeuse 50 cl — 4,00 €
1 Verre de vin blanc — 4,00 €
3 Café — 7,50 €

Total TTC : 48,50 €
dont TVA 10 % : 4,05 €
dont TVA 20 % : 0,67 €

Service compris
Merci de votre visite, à bientôt !`,
    glosses: {
      'bistrot': 'bistro, small restaurant', 'des': 'of the (de + les)', 'canuts': 'silk weavers of Lyon (le canut)', 'table': 'table', 'couverts': 'covers, place settings: here, the number of diners',
      'serveuse': 'waitress', 'léa': 'Léa (a first name)', 'risotto': 'risotto', 'aux': 'with (à + les)', 'champignons': 'mushrooms', 'eau': 'water', 'gazeuse': 'sparkling',
      'cl': 'centilitres', 'verre': 'glass', 'de': 'of', 'vin': 'wine', 'blanc': 'white', 'café': 'coffee (espresso)', 'total': 'total', 'ttc': 'all taxes included (toutes taxes comprises)',
      'dont': 'of which', 'tva': 'VAT (taxe sur la valeur ajoutée)', 'service': 'service', 'compris': 'included', 'merci': 'thank you', 'votre': 'your', 'visite': 'visit', 'à': 'until; see you', 'bientôt': 'soon'
    },
    translation: 'BISTROT DES CANUTS. Table 7, 2 covers, waitress: Léa. 2 mushroom risottos 33.00 €. 1 sparkling water 50 cl 4.00 €. 1 glass of white wine 4.00 €. 3 coffees 7.50 €. Total including taxes: 48.50 €, of which VAT at 10%: 4.05 €; VAT at 20%: 0.67 €. Service included. Thank you for your visit, see you soon!',
    notes: [
      { ref: '2 couverts', html: '<span class="fr">Un couvert</span> is a place setting (knife, fork, glass); on a bill it counts the diners. <span class="fr">Mettre le couvert</span> is to lay the table.' },
      { ref: '3 Café — 7,50 €', html: 'The mistake: two coffees were drunk, so the line should read 2 × 2,50 € = 5,00 €, and the total 46,00 €, as in the dialogue. Bills often leave the item name in the singular whatever the number.' },
      { ref: 'dont TVA 10 %', html: 'Restaurant food and soft drinks carry VAT at 10 % in France, alcoholic drinks 20 %. The tax is already in the prices; the bill only shows how much of the total it is. Rates change: these are the rates as of 2026, as far as can be checked.' },
      { ref: 'Bistrot des Canuts', html: 'The <span class="fr">canuts</span> were the silk weavers of Lyon’s Croix-Rousse district, famous for their revolts in the 1830s. The bistro is invented.' }
    ],
    questions: [
      { id: 'r1', type: 'mc', prompt: 'How many people ate at the table?', options: ['2', '3', '7', '10'], answer: 0, explain: '2 couverts: two diners. 7 is the table number.' },
      { id: 'r2', type: 'mc', prompt: 'Which line is wrong?', options: ['the coffees', 'the risottos', 'the water', 'the wine'], answer: 0, explain: 'Three coffees were charged; two were drunk.' },
      { id: 'r3', type: 'mc', prompt: 'What should the corrected total be?', options: ['46,00 €', '48,50 €', '43,50 €', '41,00 €'], answer: 0, explain: '48,50 € minus one coffee at 2,50 €.' },
      { id: 'r4', type: 'mc', prompt: 'What does <span class="fr">TTC</span> mean?', options: ['taxes included', 'tip included', 'table charge', 'take-away'], answer: 0, explain: 'toutes taxes comprises: all taxes included.' }
    ]
  },

  test: {
    count: 12,
    vocabQuestions: 3,
    items: [
      { id: 't1', type: 'gap', prompt: '<span class="fr">Il n’y a pas ___ gluten ?</span>', hint: ' (after a negative)', answers: ['de'], full: 'Il n’y a pas de gluten ?', explain: 'After pas: de.' },
      { id: 't2', type: 'gap', prompt: '<span class="fr">Il n’y a ___ de pain.</span>', hint: ' (no more)', answers: ['plus'], full: 'Il n’y a plus de pain.', explain: 'ne… plus: no more, no longer.' },
      { id: 't3', type: 'gap', prompt: '<span class="fr">J’ai ___ le saumon, pas le poulet.</span>', hint: ' (commander, past participle)', answers: ['commandé'], full: 'J’ai commandé le saumon, pas le poulet.', explain: '-er verbs: participle in -é.' },
      { id: 't4', type: 'gap', prompt: '<span class="fr">Qu’est-ce que vous ___ conseillez ?</span>', hint: ' (to me)', answers: ['me'], full: 'Qu’est-ce que vous me conseillez ?', explain: 'me before the verb.' },
      { id: 't5', type: 'mc', prompt: 'A strict vegetarian should ask about…', options: ['the stock and the sauce, as well as the main ingredient', 'only the main ingredient', 'the wine', 'nothing: végétarien always means the same'], answer: 0, explain: 'Some cooks use a meat stock or lardons in “vegetarian” dishes.' },
      { id: 't6', type: 'mc', prompt: '<span class="fr">Tout s’est bien passé ?</span> means…', options: ['Was everything all right?', 'Is everything included?', 'Have you finished?', 'Shall I bring the bill?'], answer: 0, explain: 'se passer bien: to go well.' },
      { id: 't7', type: 'mc', prompt: 'You need a document for your company’s expenses. You ask for…', options: ['une facture', 'un pourboire', 'une serviette', 'un couvert'], answer: 0, explain: 'une facture: an invoice. un reçu is a simple receipt.' },
      { id: 't8', type: 'translate', dir: 'en-fr', source: 'I don’t eat meat.', accepted: ['Je ne mange pas de viande.'], model: 'Je ne mange pas de viande.', explain: 'ne… pas round the verb; de after the negative.' },
      { id: 't9', type: 'translate', dir: 'en-fr', source: 'Could you bring us some water, please?', accepted: ['Vous pouvez nous apporter de l’eau, s’il vous plaît ?', 'Vous pourriez nous apporter de l’eau, s’il vous plaît ?', 'Pouvez-vous nous apporter de l’eau, s’il vous plaît ?', 'Vous pouvez nous apporter une carafe d’eau, s’il vous plaît ?'], model: 'Vous pouvez nous apporter de l’eau, s’il vous plaît ?', explain: 'nous before apporter; de l’eau for “some water”.' },
      { id: 't10', type: 'translate', dir: 'fr-en', source: 'Ce n’est pas ce que j’ai commandé.', accepted: ['This isn’t what I ordered.', 'That isn’t what I ordered', 'This is not what I ordered', 'That is not what I ordered', 'It isn’t what I ordered', 'It is not what I ordered', 'That’s not what I ordered', 'This is not what I have ordered'], model: 'This isn’t what I ordered.' },
      { id: 't11', type: 'translate', dir: 'fr-en', source: 'C’est moi qui invite.', accepted: ['It’s on me.', 'It is on me', 'This is on me', 'My treat', 'It’s my treat', 'I’m paying', 'I am paying', 'I’ll pay', 'I will pay'], model: 'It’s on me.' },
      { id: 't12', type: 'translate', dir: 'en-fr', source: 'Do you take cards?', accepted: ['Vous prenez la carte ?', 'Vous acceptez la carte ?', 'Vous prenez les cartes ?', 'Je peux payer par carte ?'], model: 'Vous prenez la carte ?', explain: 'prendre: to take; la carte (bancaire): the card.' },
      { id: 't13', type: 'listen', text: 'On attend depuis une demi-heure.', accepted: ['On attend depuis une demi-heure.', 'On attend depuis une demi heure.'], explain: 'On attend depuis une demi-heure: present tense with depuis.' },
      { id: 't14', type: 'listen', text: 'Ça fait soixante-quatre euros.', prompt: 'How much is it?', options: ['64 €', '44 €', '54 €', '14 €'], answer: 0, explain: 'soixante-quatre: 64. quatorze is 14.' },
      { id: 't15', type: 'order', prompt: 'Put the words in order.', source: 'We’re missing a fork.', tokens: ['Il', 'nous', 'manque', 'une', 'fourchette.'] },
      { id: 't16', type: 'match', prompt: 'Match the French and the English.', pairs: [['un peu', 'a bit'], ['trop', 'too (much)'], ['dedans', 'inside, in it'], ['ensemble', 'together'], ['le reste', 'the rest']] }
    ]
  }
});
