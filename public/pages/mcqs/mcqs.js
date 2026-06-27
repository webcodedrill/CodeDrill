/* ── MCQ Screen State (intro/quiz/result) — page-specific, level/lang/step
   ab shared practiceState (js/practice.js) se aate hain ── */
let mcqState = {
  screen: 'intro',
  questions: [],
  idx: 0,
  selected: null,
  score: 0
};

/* ── HTML Escape ── */
function escHtml(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

/* ── Fisher-Yates Shuffle (proper random) ── */
function shuffleArray(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

/* ── Shuffle options of each question (options + ans dono saath badlein) ── */
function shuffleQuestionOptions(q) {
  const correctText = q.options[q.ans];         // correct answer text save karo
  const shuffledOpts = shuffleArray(q.options); // options shuffle karo
  const newAns = shuffledOpts.indexOf(correctText); // naya index dhundho
  return { ...q, options: shuffledOpts, ans: newAns };
}

/* ── Seen MCQs Store (per user, per level+lang combo) ── */
function getMcqSeenKey(user, level, lang) {
  const email = (user && user.email) ? user.email.replace(/[^a-zA-Z0-9]/g, '_') : 'guest';
  return `mcq_seen_${email}_${level}_${lang}`;
}

function getMcqSeenIndices(user, level, lang) {
  try {
    const raw = localStorage.getItem(getMcqSeenKey(user, level, lang));
    return raw ? JSON.parse(raw) : [];
  } catch(e) { return []; }
}

function saveMcqSeenIndices(user, level, lang, indices) {
  try {
    localStorage.setItem(getMcqSeenKey(user, level, lang), JSON.stringify(indices));
  } catch(e) {}
}

function clearMcqSeenIndices(user, level, lang) {
  try {
    localStorage.removeItem(getMcqSeenKey(user, level, lang));
  } catch(e) {}
}

function markMcqSeen(user, level, lang, origIdx) {
  const seen = getMcqSeenIndices(user, level, lang);
  if (!seen.includes(origIdx)) {
    seen.push(origIdx);
    saveMcqSeenIndices(user, level, lang, seen);
  }
}

/* ── Get current user (safe) ── */
function getMcqUser() {
  try { return getUser(); } catch(e) { return null; }
}

/* ── Get data source ── */
function getDataSource() {
  if (practiceState.level === 'Hard'   && practiceState.lang === 'HTML') return HTML_HARD_MCQS;
  if (practiceState.level === 'Medium' && practiceState.lang === 'HTML') return HTML_MEDIUM_MCQS;
  if (practiceState.level === 'Medium' && practiceState.lang === 'CSS')  return CSS_MEDIUM_MCQS;
  if (practiceState.level === 'Hard'   && practiceState.lang === 'CSS')  return CSS_HARD_MCQS;
  if (practiceState.level === 'Medium' && practiceState.lang === 'JS')   return JS_MEDIUM_MCQS;
  if (practiceState.level === 'Hard'   && practiceState.lang === 'JS')   return JS_HARD_MCQS;
  if (practiceState.lang === 'CSS') return CSS_EASY_MCQS;
  if (practiceState.lang === 'JS')  return JS_EASY_MCQS;
  return HTML_EASY_MCQS;
}

/* ── Prepare unseen shuffled questions ── */
function prepareQuestions() {
  const src = getDataSource();
  const user = getMcqUser();
  const level = practiceState.level;
  const lang = practiceState.lang;

  const seenSet = new Set(getMcqSeenIndices(user, level, lang));
  let unseenIndices = src.map((_, i) => i).filter(i => !seenSet.has(i));

  // Agar sab dekh liye — reset
  if (unseenIndices.length === 0) {
    clearMcqSeenIndices(user, level, lang);
    unseenIndices = src.map((_, i) => i);
  }

  const shuffledIndices = shuffleArray(unseenIndices);
  return shuffledIndices.map(i => ({
    ...shuffleQuestionOptions(src[i]),
    _origIdx: i
  }));
}

/* ── Main MCQs renderer (called on step changes via practiceRender) ── */
function renderMcqs() {
  if (practiceState.step === 1) return renderLevelSelect('MCQs', '📝');
  if (practiceState.step === 2) return renderLangSelect('MCQs', '📝');
  return renderMcqSection();
}

function renderMcqSection() {
  const lvClass = practiceState.level === 'Easy' ? 'easy-badge' : practiceState.level === 'Medium' ? 'medium-badge' : 'hard-badge';
  const header = `
    <button class="back-btn" onclick="mcqGoBack()">← Wapas Language Select</button>
    <div class="content-header">
      <span style="font-size:18px">📝</span>
      <span style="font-size:18px;font-weight:700;color:var(--text)">MCQs</span>
      <span class="badge-level ${lvClass}">${practiceState.level}</span>
      <span class="lang-badge ${practiceState.lang === 'HTML' ? 'html-badge' : practiceState.lang === 'CSS' ? 'css-badge' : 'js-badge'}">${practiceState.lang}</span>
    </div>`;

  const hasContent = (practiceState.level === 'Easy' && practiceState.lang === 'HTML') ||
                     (practiceState.level === 'Easy' && practiceState.lang === 'CSS') ||
                     (practiceState.level === 'Easy' && practiceState.lang === 'JS') ||
                     (practiceState.level === 'Medium' && practiceState.lang === 'HTML') ||
                     (practiceState.level === 'Medium' && practiceState.lang === 'CSS') ||
                     (practiceState.level === 'Medium' && practiceState.lang === 'JS') ||
                     (practiceState.level === 'Hard'   && practiceState.lang === 'HTML') ||
                     (practiceState.level === 'Hard'   && practiceState.lang === 'CSS') ||
                     (practiceState.level === 'Hard'   && practiceState.lang === 'JS');

  if (hasContent) {
    if (mcqState.screen === 'intro')  return header + renderMcqIntro();
    if (mcqState.screen === 'quiz')   return header + renderMcqQuiz();
    if (mcqState.screen === 'result') return header + renderMcqResult();
  }

  return header + `
  <div class="placeholder-box">
    <div class="placeholder-icon">🚧</div>
    <div class="placeholder-title">MCQs — ${practiceState.level} / ${practiceState.lang}</div>
    <div class="placeholder-sub">Yahan content aayega — jald aa raha hai!</div>
  </div>`;
}

function mcqGoBack() {
  mcqState = { screen: 'intro', questions: [], idx: 0, selected: null, score: 0 };
  goBack();
}

/* ── Intro Screen ── */
function renderMcqIntro() {
  const total = getDataSource().length;
  const langColor = practiceState.lang === 'HTML' ? '#e44d26' : practiceState.lang === 'CSS' ? '#264de4' : '#f7df1e';
  const langIcon = practiceState.lang === 'HTML' ? '🌐' : practiceState.lang === 'CSS' ? '🎨' : '⚡';
  const levelLabel = practiceState.level;

  return `
  <div class="mcq-intro-box">
    <div class="mcq-intro-icon">${langIcon}</div>
    <div class="mcq-intro-title">${practiceState.lang} ${levelLabel} MCQs</div>
    <div class="mcq-intro-count" style="color:${langColor}">${total} MCQs</div>
    <div class="mcq-intro-desc">Har sawaal ek ek kar ke aayega.<br>Har baar MCQs aur options ki tartib alag hogi!</div>
    <button class="mcq-start-btn" onclick="mcqStart()">▶ Start Quiz</button>
  </div>`;
}

/* ── Start Quiz ── */
function mcqStart() {
  mcqState.questions = prepareQuestions(); // shuffled order + shuffled options
  mcqState.idx = 0;
  mcqState.selected = null;
  mcqState.score = 0;
  mcqState.screen = 'quiz';
  practiceRender();
}

/* ── Quiz Screen — one by one ── */
function renderMcqQuiz() {
  const { questions, idx, selected } = mcqState;
  const q = questions[idx];
  const answered = selected !== null;
  const pct = (idx / questions.length) * 100;
  const optLetters = ['A', 'B', 'C', 'D'];

  return `
  <div class="mcq-box">
    <div class="mcq-progress">
      <div class="mcq-bar-bg">
        <div class="mcq-bar-fill" style="width:${pct}%"></div>
      </div>
      <div class="mcq-counter">Sawaal ${idx + 1} / ${questions.length}</div>
    </div>

    <div class="mcq-question">${escHtml(q.q)}</div>

    <div class="mcq-options">
      ${q.options.map((opt, i) => {
        let cls = 'mcq-opt';
        if (answered) {
          if (i === q.ans) cls += ' show-correct';
          else if (i === selected) cls += ' wrong';
        }
        return `<button class="${cls}" ${answered ? 'disabled' : ''} onclick="mcqPick(${i})">
          <span class="mcq-opt-letter">${optLetters[i]}</span> ${escHtml(opt)}
        </button>`;
      }).join('')}
    </div>

    ${answered ? `
      <div class="mcq-feedback ${selected === q.ans ? 'ok' : 'bad'}">
        ${selected === q.ans ? '✅ Bilkul sahi!' : `❌ Galat — Sahi jawab: <strong>${escHtml(q.options[q.ans])}</strong>`}
      </div>
      <button class="mcq-next-btn" onclick="mcqNext()">
        ${idx + 1 >= questions.length ? 'Nateeja Dekhein →' : 'NEXT MCQ →'}
      </button>
    ` : ''}
  </div>`;
}

function mcqPick(i) {
  if (mcqState.selected !== null) return;
  if (i === mcqState.questions[mcqState.idx].ans) mcqState.score++;
  mcqState.selected = i;
  practiceRender();
}

function mcqNext() {
  // Mark current MCQ as seen
  const q = mcqState.questions[mcqState.idx];
  if (q && q._origIdx !== undefined) {
    markMcqSeen(getMcqUser(), practiceState.level, practiceState.lang, q._origIdx);
  }

  if (mcqState.idx + 1 >= mcqState.questions.length) {
    mcqState.screen = 'result';
    practiceRender();
    scrollToTop(true);
    /* Sync MCQ stat to backend */
    if (typeof apiSyncStats === 'function') {
      apiSyncStats({ type: 'mcq', count: 1 });
    }
    return;
  }
  mcqState.idx++;
  mcqState.selected = null;
  practiceRender();
  scrollToTop(true);
}

/* ── Result Screen ── */
function renderMcqResult() {
  const { score, questions } = mcqState;
  const pct = Math.round((score / questions.length) * 100);

  const grade = pct >= 80 ? { emoji: '🏆', label: 'Shaandar!', color: 'var(--green)', bg: 'rgba(124,227,139,0.08)', border: 'rgba(124,227,139,0.2)', msg: 'Aap nے is quiz mein kamaal kar diya!' }
              : pct >= 60 ? { emoji: '👍', label: 'Acha!', color: 'var(--amber)', bg: 'rgba(242,181,68,0.08)', border: 'rgba(242,181,68,0.2)', msg: 'Kafi acha kiya — thodi aur practice se aur behetar ho jaoge.' }
              :             { emoji: '📚', label: 'Mazeed Koshish!', color: '#F27B72', bg: 'rgba(242,123,114,0.08)', border: 'rgba(242,123,114,0.2)', msg: 'Koi baat nahi — practice se sab theek ho jaata hai!' };

  const correctCount   = score;
  const incorrectCount = questions.length - score;
  const circumference  = 2 * Math.PI * 38; // radius 38
  const dashOffset     = circumference - (pct / 100) * circumference;

  return `
  <div class="stylish-result">
    <!-- Top badge -->
    <div class="result-grade-badge" style="background:${grade.bg};border:1px solid ${grade.border};color:${grade.color}">
      ${grade.emoji} ${grade.label}
    </div>

    <!-- Title -->
    <div class="result-main-title">Quiz Mukammal! 🎉</div>

    <!-- Circular progress -->
    <div class="result-circle-wrap">
      <svg width="100" height="100" viewBox="0 0 100 100">
        <!-- Track -->
        <circle cx="50" cy="50" r="38" fill="none" stroke="var(--border)" stroke-width="7"/>
        <!-- Progress -->
        <circle cx="50" cy="50" r="38" fill="none"
          stroke="${grade.color}" stroke-width="7"
          stroke-linecap="round"
          stroke-dasharray="${circumference}"
          stroke-dashoffset="${dashOffset}"
          transform="rotate(-90 50 50)"
          style="transition:stroke-dashoffset 1s ease"/>
      </svg>
      <div class="result-circle-text">
        <div class="result-pct" style="color:${grade.color}">${pct}%</div>
      </div>
    </div>

    <!-- Score fraction -->
    <div class="result-fraction">
      <span class="result-fraction-num" style="color:${grade.color}">${score}</span>
      <span class="result-fraction-div">/</span>
      <span class="result-fraction-den">${questions.length}</span>
    </div>
    <div class="result-fraction-label">Sahi Jawabaat</div>

    <!-- Stats row -->
    <div class="result-stats-row">
      <div class="result-stat correct">
        <div class="result-stat-icon">✅</div>
        <div class="result-stat-num">${correctCount}</div>
        <div class="result-stat-lbl">Sahi</div>
      </div>
      <div class="result-stat-divider"></div>
      <div class="result-stat wrong">
        <div class="result-stat-icon">❌</div>
        <div class="result-stat-num">${incorrectCount}</div>
        <div class="result-stat-lbl">Galat</div>
      </div>
      <div class="result-stat-divider"></div>
      <div class="result-stat total">
        <div class="result-stat-icon">📝</div>
        <div class="result-stat-num">${questions.length}</div>
        <div class="result-stat-lbl">Kul</div>
      </div>
    </div>

    <!-- Message -->
    <div class="result-message" style="border-left:3px solid ${grade.color}">${grade.msg}</div>

    <!-- Buttons -->
    <div class="result-btns">
      <button class="result-btn-new primary" onclick="mcqRetry()" style="background:${grade.color}">
        🔄 Dobara Karein
      </button>
      <button class="result-btn-new secondary" onclick="mcqGoBack()">
        ← Wapas Jayein
      </button>
    </div>
  </div>`;
}

function mcqRetry() {
  mcqState.questions = prepareQuestions(); // naye shuffle ke saath dobara
  mcqState.idx = 0;
  mcqState.selected = null;
  mcqState.score = 0;
  mcqState.screen = 'quiz';
  practiceRender();
}

/* ── Page mount ── */
function renderMcqsPage() {
  document.getElementById('page-content').innerHTML = renderMcqs();
  // Breadcrumb update
  const sub = mcqState.screen === 'quiz' ? 'Quiz' : mcqState.screen === 'result' ? 'Result' : null;
  updateBreadcrumb('MCQs', '📝',
    practiceState.step >= 2 ? practiceState.level : null,
    practiceState.step >= 3 ? practiceState.lang  : null,
    practiceState.step >= 3 ? sub : null
  );
}

(function init() {
  const user = renderShell('mcqs');
  if (!user) return;
  initPractice(renderMcqsPage);
})();
