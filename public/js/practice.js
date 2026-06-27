/* ── Shared 3-Step Practice Flow (Easy/Medium/Hard → HTML/CSS/JS → Content) ──
   Mcqs, Questions aur Paragraph — teeno apni apni index.html me ye file
   include karte hain. Pehle ye global `state` object use karta tha (SPA
   tarz), ab har page khud ka local `practiceState` rakhta hai kyunke ab
   har page alag HTML file hai, na ke ek hi SPA ka hissa. */

let practiceState = { level: null, lang: null, step: 1 };
let practiceRender = null; // page khud apna render callback yahan register karega

/* Scroll page to top after every render (smooth for transitions, instant for quiz questions) */
function scrollToTop(instant) {
  window.scrollTo({ top: 0, behavior: instant ? 'instant' : 'smooth' });
  // Also scroll the main content area if it has its own scroll
  const main = document.getElementById('page-content');
  if (main) main.scrollTop = 0;
}

function initPractice(renderFn) {
  practiceRender = renderFn;
  practiceState = { level: null, lang: null, step: 1 };
  practiceRender();
  scrollToTop(true);
}

function pickLevel(lv) { practiceState.level = lv; practiceState.lang = null; practiceState.step = 2; practiceRender(); scrollToTop(); }
function pickLang(lg)  { practiceState.lang = lg; practiceState.step = 3; practiceRender(); scrollToTop(); }

function goBack() {
  if (practiceState.step === 3) { practiceState.step = 2; practiceState.lang = null; }
  else if (practiceState.step === 2) { practiceState.step = 1; practiceState.level = null; }
  practiceRender();
  scrollToTop();
}

function renderPractice(title, icon) {
  if (practiceState.step === 1) return renderLevelSelect(title, icon);
  if (practiceState.step === 2) return renderLangSelect(title, icon);
  return renderContent(title, icon);
}

function renderLevelSelect(title, icon) {
  return `
  <div class="section-title">${icon} ${title}</div>
  <div class="section-sub">Pehle difficulty level chunein</div>
  <div class="level-row">
    <div class="level-btn easy" onclick="pickLevel('Easy')">
      <div class="level-icon">🟢</div>
      <div class="level-name">Easy</div>
      <div class="level-desc">Shuruaat ke liye</div>
    </div>
    <div class="level-btn medium" onclick="pickLevel('Medium')">
      <div class="level-icon">🟡</div>
      <div class="level-name">Medium</div>
      <div class="level-desc">Thodi challenge</div>
    </div>
    <div class="level-btn hard" onclick="pickLevel('Hard')">
      <div class="level-icon">🔴</div>
      <div class="level-name">Hard</div>
      <div class="level-desc">Advanced level</div>
    </div>
  </div>`;
}

function renderLangSelect(title, icon) {
  const lvColor = practiceState.level === 'Easy' ? 'var(--green)' : practiceState.level === 'Medium' ? 'var(--amber)' : '#F27B72';
  return `
  <button class="back-btn" onclick="goBack()">← Wapas Level Select</button>
  <div class="section-title">${icon} ${title} — <span style="color:${lvColor}">${practiceState.level}</span></div>
  <div class="section-sub">Ab language chunein</div>
  <div class="lang-row">
    <div class="lang-btn html" onclick="pickLang('HTML')">
      <div><span class="lang-badge html-badge">HTML</span></div>
      <div class="lang-name">HTML</div>
      <div class="lang-hint">Structure &amp; markup</div>
    </div>
    <div class="lang-btn css" onclick="pickLang('CSS')">
      <div><span class="lang-badge css-badge">CSS</span></div>
      <div class="lang-name">CSS</div>
      <div class="lang-hint">Styling &amp; layout</div>
    </div>
    <div class="lang-btn js" onclick="pickLang('JS')">
      <div><span class="lang-badge js-badge">JS</span></div>
      <div class="lang-name">JavaScript</div>
      <div class="lang-hint">Logic &amp; interactivity</div>
    </div>
  </div>`;
}

function renderContent(title, icon) {
  const lvClass = practiceState.level === 'Easy' ? 'easy-badge' : practiceState.level === 'Medium' ? 'medium-badge' : 'hard-badge';
  const lgBadge = practiceState.lang === 'HTML' ? 'html-badge' : practiceState.lang === 'CSS' ? 'css-badge' : 'js-badge';
  return `
  <button class="back-btn" onclick="goBack()">← Wapas Language Select</button>
  <div class="content-header">
    <span style="font-size:18px">${icon}</span>
    <span style="font-size:18px;font-weight:700;color:var(--text)">${title}</span>
    <span class="badge-level ${lvClass}">${practiceState.level}</span>
    <span class="lang-badge ${lgBadge}">${practiceState.lang}</span>
  </div>
  <div class="placeholder-box">
    <div class="placeholder-icon">🚧</div>
    <div class="placeholder-title">${title} — ${practiceState.level} / ${practiceState.lang}</div>
    <div class="placeholder-sub">Yahan content aayega — Questions, MCQs, ya Paragraphs backend se load honge</div>
  </div>`;
}
