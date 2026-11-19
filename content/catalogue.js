/*
 * Course catalogue. To add a unit: write content/<course>/unit-NN.js, add its file name to `lectures` below and to
 * CORE in sw.js. To add a language (Italian next): add a course object and a content folder. The engine (app.js)
 * needs no change.
 */
Hospes.setCatalogue([
  {
    id: 'french',
    name: 'French',
    native: 'Français',
    langTag: 'fr',
    tts: 'fr-FR',                       // the phone's French (France) voice; recorded files take precedence (see README)
    sample: 'Bonjour ! Un café et un croissant, s’il vous plaît.',
    keyboard: ['é', 'è', 'ê', 'à', 'â', 'ç', 'ô', 'î', 'ù', 'û', 'ë', 'ï', 'œ'],
    macrons: true,                      // accents are checked (a missing one is accepted with a reminder unless required)
    lengthMark: 'accents', lengthMarkName: 'accents', lengthMarkExample: 'é è ê à ç',
    lectureWord: 'Unit',
    cardDir: 'both',
    // treated as equal when checking answers
    spelling: [['œ', 'oe']],
    lectures: ['french/unit-01.js', 'french/unit-02.js'],
    planned: [
      'Au restaurant (II): the bill, problems, dietary needs',
      'Le vin (I): colours, styles, sweetness, by the glass',
      'Le vin (II): regions, appellations, tasting words',
      'À l’hôtel',
      'Au marché et dans les magasins',
      'Se déplacer: transport and directions',
      'À la pharmacie: health and emergencies'
    ]
  }
  // Italian will go here: { id: 'italian', name: 'Italian', native: 'Italiano', langTag: 'it', tts: 'it-IT', … }
]);
Hospes.setShared(['french/pages.js']);
