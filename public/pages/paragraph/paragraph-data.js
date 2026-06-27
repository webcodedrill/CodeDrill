/* ── Paragraph Mistakes — Main Data Combiner ──
   PARAGRAPHS_DATA[level][lang] = array of paragraph objects

   Data files mein keys:
   - HTML_PARAGRAPH: { Easy, MEDIUM, HARD }
   - CSS_PARAGRAPH:  { Easy }              (Medium/Hard abhi nahi hain)
   - JS_PARAGRAPH:   { Easy, MEDIUM }      (Hard abhi nahi)

   Helper: kisi bhi case mein key milne pe use karo
*/

function _get(obj, key) {
  if (!obj) return [];
  /* Exact match → Medium/MEDIUM/medium sab try karo */
  return obj[key] || obj[key.toUpperCase()] || obj[key.toLowerCase()] || [];
}

const PARAGRAPHS_DATA = {
  Easy: {
    HTML: typeof HTML_PARAGRAPH !== 'undefined' ? _get(HTML_PARAGRAPH, 'Easy') : [],
    CSS:  typeof CSS_PARAGRAPH  !== 'undefined' ? _get(CSS_PARAGRAPH,  'Easy') : [],
    JS:   typeof JS_PARAGRAPH   !== 'undefined' ? _get(JS_PARAGRAPH,   'Easy') : [],
  },
  Medium: {
    HTML: typeof HTML_PARAGRAPH !== 'undefined' ? _get(HTML_PARAGRAPH, 'Medium') : [],
    CSS:  typeof CSS_PARAGRAPH  !== 'undefined' ? _get(CSS_PARAGRAPH,  'Medium') : [],
    JS:   typeof JS_PARAGRAPH   !== 'undefined' ? _get(JS_PARAGRAPH,   'Medium') : [],
  },
  Hard: {
    HTML: typeof HTML_PARAGRAPH !== 'undefined' ? _get(HTML_PARAGRAPH, 'Hard') : [],
    CSS:  typeof CSS_PARAGRAPH  !== 'undefined' ? _get(CSS_PARAGRAPH,  'Hard') : [],
    JS:   typeof JS_PARAGRAPH   !== 'undefined' ? _get(JS_PARAGRAPH,   'Hard') : [],
  },
};
