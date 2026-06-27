/* ── Coding Questions — Main Data Combiner ──
   HTML, CSS, JS questions alag alag files mein hain:
   - questions-data-html.js  → HTML_QUESTIONS
   - questions-data-css.js   → CSS_QUESTIONS
   - questions-data-js.js    → JS_QUESTIONS

   Yeh file teeno ko milake QUESTIONS_DATA banati hai
   jo questions.js use karta hai.
*/

const QUESTIONS_DATA = {
  Easy: {
    HTML: HTML_QUESTIONS.Easy,
    CSS:  CSS_QUESTIONS.Easy,
    JS:   JS_QUESTIONS.Easy,
  },
  Medium: {
    HTML: HTML_QUESTIONS.Medium,
    CSS:  CSS_QUESTIONS.Medium,
    JS:   JS_QUESTIONS.Medium,
  },
  Hard: {
    HTML: HTML_QUESTIONS.Hard,
    CSS:  CSS_QUESTIONS.Hard,
    JS:   JS_QUESTIONS.Hard,
  },
};
