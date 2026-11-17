/*
 * Reference pages for French (Reference tab). Kind 'notes': a page of text.
 */
Hospes.addPage(['french'], {
  id: 'fr-sounds', kind: 'notes', title: 'Sounds',
  html: `
    <p>French spelling looks irregular but is mostly predictable from letters to sounds (the other way round is harder). The comparisons are with standard German first and English second, because German has most of the French vowels and English misleads.</p>
    <div class="tablewrap"><table><thead><tr><th>spelling</th><th>sound</th><th>examples</th><th>compare</th></tr></thead><tbody>
      <tr><th>u</th><td>[y]</td><td class="fr">jus, sucre, du</td><td>German <em>ü</em></td></tr>
      <tr><th>ou</th><td>[u]</td><td class="fr">vous, bonjour</td><td>German <em>u</em></td></tr>
      <tr><th>eu, œu</th><td>[ø] / [œ]</td><td class="fr">deux / beurre, sœur</td><td>German <em>schön</em> / <em>Köln</em></td></tr>
      <tr><th>é</th><td>[e]</td><td class="fr">café, thé</td><td>German <em>See</em>, short</td></tr>
      <tr><th>è, ê, ai</th><td>[ɛ]</td><td class="fr">bière, fête, lait</td><td>German <em>Bett</em></td></tr>
      <tr><th>oi</th><td>[wa]</td><td class="fr">trois, croissant</td><td></td></tr>
      <tr><th>au, eau</th><td>[o]</td><td class="fr">chaud, eau</td><td>German <em>so</em>, no glide</td></tr>
      <tr><th>an, en</th><td>[ɑ̃]</td><td class="fr">sans, France</td><td>nasal, no [ŋ]</td></tr>
      <tr><th>on</th><td>[ɔ̃]</td><td class="fr">bonjour, pression</td><td>nasal, no [ŋ]</td></tr>
      <tr><th>in, ain, ein, un</th><td>[ɛ̃]</td><td class="fr">vin, pain, plein, un</td><td>nasal, no [ŋ]</td></tr>
      <tr><th>ch</th><td>[ʃ]</td><td class="fr">chocolat</td><td>German <em>sch</em></td></tr>
      <tr><th>j, g + e/i</th><td>[ʒ]</td><td class="fr">jus, orange</td><td>English <em>pleasure</em></td></tr>
      <tr><th>gn</th><td>[ɲ]</td><td class="fr">champagne</td><td>Italian <em>gn</em>, Spanish <em>ñ</em></td></tr>
      <tr><th>r</th><td>[ʁ]</td><td class="fr">rouge, verre</td><td>German <em>rot</em></td></tr>
      <tr><th>qu</th><td>[k]</td><td class="fr">quinze</td><td></td></tr>
      <tr><th>ç</th><td>[s]</td><td class="fr">ça</td><td></td></tr>
      <tr><th>h</th><td>silent</td><td class="fr">hôtel</td><td></td></tr>
      <tr><th>ill (after a vowel)</th><td>[j]</td><td class="fr">bouteille, travail</td><td>German <em>j</em></td></tr>
    </tbody></table></div>
    <h3>Rules of thumb</h3>
    <ul>
      <li><strong>Final consonants</strong> are usually silent; final <span class="fr">c, r, f, l</span> often sound (<em>careful</em>). Verbs in <span class="fr">-er</span> end in [e].</li>
      <li><strong>Final -e</strong> is silent, but makes the consonant before it sound: <span class="fr">chaud</span> [ʃo] but <span class="fr">chaude</span> [ʃod].</li>
      <li><strong>Stress</strong> falls lightly on the last syllable of a word group, never strongly on the first.</li>
      <li><strong>Liaison</strong>: a silent final consonant is pronounced before a vowel in a close group (<span class="fr">deux euros</span> [døzøʁo], <span class="fr">vous avez</span> [vuzave]); <span class="fr">s</span> and <span class="fr">x</span> become [z].</li>
      <li><strong>Elision</strong>: <span class="fr">le, la, de, je, ne, que</span> lose their vowel before a vowel: <span class="fr">l’eau, d’orange, j’ai</span>.</li>
    </ul>`
});
