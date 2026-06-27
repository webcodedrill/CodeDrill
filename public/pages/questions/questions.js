/* ── Coding Questions — Typing-Based Quiz System ──
   - User upar question dekhta hai, neeche type karta hai
   - Sahi answer → green, Next button aata hai
   - Galat answer → red shake, wahi rukta hai
   - Skip button → sahi answer fill ho jaata hai, Next milta hai
   - Hint button → half hint milti hai
   - Dono buttons: 5 uses per day, 24-hour reset (per user, per button)
*/

/* ── Daily Limit Helpers ── */
function getLimitKey(user, btnType) {
  const email = (user && user.email) ? user.email.replace(/[^a-zA-Z0-9]/g, '_') : 'guest';
  return `cdq_limit_${email}_${btnType}`;
}

function getLimitData(key) {
  try {
    const raw = localStorage.getItem(key);
    if (!raw) return { count: 0, resetAt: 0 };
    return JSON.parse(raw);
  } catch(e) { return { count: 0, resetAt: 0 }; }
}

function saveLimitData(key, data) {
  localStorage.setItem(key, JSON.stringify(data));
}

function checkAndUseLimit(user, btnType) {
  /* Returns { allowed: bool, remaining: number, resetMs: number } */
  const key = getLimitKey(user, btnType);
  let data = getLimitData(key);
  const now = Date.now();

  if (now >= data.resetAt) {
    /* 24 hours guzar gayi — reset */
    data = { count: 0, resetAt: now + 24 * 60 * 60 * 1000 };
  }

  if (data.count >= 5) {
    return { allowed: false, remaining: 0, resetMs: data.resetAt - now };
  }

  data.count += 1;
  saveLimitData(key, data);
  return { allowed: true, remaining: 5 - data.count, resetMs: data.resetAt - now };
}

function getRemainingUses(user, btnType) {
  const key = getLimitKey(user, btnType);
  let data = getLimitData(key);
  const now = Date.now();
  if (now >= data.resetAt) return { remaining: 5, resetMs: 0 };
  return { remaining: Math.max(0, 5 - data.count), resetMs: data.resetAt - now };
}

function formatCountdown(ms) {
  const h = Math.floor(ms / 3600000);
  const m = Math.floor((ms % 3600000) / 60000);
  if (h > 0) return `${h}h ${m}m`;
  return `${m}m`;
}

/* ── Shuffle Helper ── */
function shuffleArray(arr) {
  const a = arr.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

/* ── Seen Questions Store (per user, per level+lang combo) ── */
function getSeenKey(user, level, lang) {
  const email = (user && user.email) ? user.email.replace(/[^a-zA-Z0-9]/g, '_') : 'guest';
  return `cdq_seen_${email}_${level}_${lang}`;
}

function getSeenIndices(user, level, lang) {
  try {
    const raw = localStorage.getItem(getSeenKey(user, level, lang));
    return raw ? JSON.parse(raw) : [];
  } catch(e) { return []; }
}

function saveSeenIndices(user, level, lang, indices) {
  try {
    localStorage.setItem(getSeenKey(user, level, lang), JSON.stringify(indices));
  } catch(e) {}
}

function clearSeenIndices(user, level, lang) {
  try {
    localStorage.removeItem(getSeenKey(user, level, lang));
  } catch(e) {}
}

/* ── Get Fresh Unseen Questions (shuffle, exclude seen; reset if all seen) ── */
function getUnseenQuestions(allQ, user, level, lang) {
  const seenIndices = new Set(getSeenIndices(user, level, lang));
  let unseenIndices = allQ.map((_, i) => i).filter(i => !seenIndices.has(i));

  /* Agar sab dekh liye — reset karein */
  if (unseenIndices.length === 0) {
    clearSeenIndices(user, level, lang);
    unseenIndices = allQ.map((_, i) => i);
  }

  const shuffled = shuffleArray(unseenIndices);
  return shuffled.map(i => ({ ...allQ[i], _origIdx: i }));
}

/* ── Mark Questions as Seen ── */
function markQuestionSeen(user, level, lang, origIdx) {
  const seen = getSeenIndices(user, level, lang);
  if (!seen.includes(origIdx)) {
    seen.push(origIdx);
    saveSeenIndices(user, level, lang, seen);
  }
}

/* ── Quiz State ── */
let qState = {
  screen: 'intro',
  questions: [],
  currentIdx: 0,
  answered: false,
  correct: false,
  hintShown: false,
  score: 0,
  user: null,
};

/* ── Main Page Renderer ── */
function renderQuestionsPage() {
  window.scrollTo({ top: 0, behavior: 'instant' });
  const container = document.getElementById('page-content');

  if (practiceState.step < 3) {
    container.innerHTML = renderPractice('Coding Questions', '💻');
    // Breadcrumb for step 1 & 2
    updateBreadcrumb('Coding Questions', '💻',
      practiceState.step >= 2 ? practiceState.level : null, null, null);
    return;
  }

  /* Step 3 — Quiz */
  const { level, lang } = practiceState;
  const allQ = (QUESTIONS_DATA[level] && QUESTIONS_DATA[level][lang]) || [];

  if (allQ.length === 0) {
    container.innerHTML = `<div style="text-align:center;padding:40px;color:var(--muted)">
      Is combination ke liye abhi questions available nahi hain.
      <br><br><button class="mcq-start-btn" onclick="goBack()">← Wapas Jao</button>
    </div>`;
    return;
  }

  const lvClass = level === 'Easy' ? 'easy-badge' : level === 'Medium' ? 'medium-badge' : 'hard-badge';
  const langBadgeClass = lang === 'HTML' ? 'html-badge' : lang === 'CSS' ? 'css-badge' : 'js-badge';

  const header = `
    <button class="back-btn" onclick="qGoBack()">← Wapas Language Select</button>
    <div class="content-header">
      <span style="font-size:18px">💻</span>
      <span style="font-size:18px;font-weight:700;color:var(--text)">Coding Questions</span>
      <span class="badge-level ${lvClass}">${level}</span>
      <span class="lang-badge ${langBadgeClass}">${lang}</span>
    </div>`;

  if (qState.screen === 'intro') {
    container.innerHTML = header + renderQIntro(allQ.length, level, lang);
    updateBreadcrumb('Coding Questions', '💻', level, lang, null);
    return;
  }

  if (qState.screen === 'result') {
    container.innerHTML = header;
    updateBreadcrumb('Coding Questions', '💻', level, lang, 'Result');
    renderResult(container, true);
    return;
  }

  /* quiz screen */
  if (qState.currentIdx >= qState.questions.length) {
    qState.screen = 'result';
    container.innerHTML = header;
    updateBreadcrumb('Coding Questions', '💻', level, lang, 'Result');
    renderResult(container, true);
    if (typeof apiSyncStats === 'function') apiSyncStats({ type: 'question', count: 1 });
    return;
  }

  container.innerHTML = header;
  updateBreadcrumb('Coding Questions', '💻', level, lang, 'Quiz');
  renderQuizCard(container);
}

/* ── Intro Screen ── */
function renderQIntro(total, level, lang) {
  const langIcon = lang === 'HTML' ? '🌐' : lang === 'CSS' ? '🎨' : '⚡';
  const langColor = lang === 'HTML' ? '#e44d26' : lang === 'CSS' ? '#264de4' : '#f7df1e';
  return `
  <div class="mcq-intro-box">
    <div class="mcq-intro-icon">${langIcon}</div>
    <div class="mcq-intro-title">${lang} ${level} Questions</div>
    <div class="mcq-intro-count" style="color:${langColor}">${total} Questions</div>
    <div class="mcq-intro-desc">Apna jawab type karein aur Enter dabayein.<br>Har baar questions ki tartib alag hogi!</div>
    <button class="mcq-start-btn" onclick="qStart()">▶ Start Quiz</button>
  </div>`;
}

/* ── Start Quiz ── */
function qStart() {
  const { level, lang } = practiceState;
  const allQ = (QUESTIONS_DATA[level] && QUESTIONS_DATA[level][lang]) || [];
  const user = getUser();
  const unseenQ = getUnseenQuestions(allQ, user, level, lang);
  qState = { screen: 'quiz', questions: unseenQ, currentIdx: 0, answered: false, correct: false, hintShown: false, score: 0, user };
  renderQuestionsPage();
}

/* ── Quiz Card ── */
function renderQuizCard(container) {
  const { questions, currentIdx, answered, correct, hintShown, score, user } = qState;
  const total = questions.length;
  const q = questions[currentIdx];
  const progress = Math.round((currentIdx / total) * 100);

  const skipInfo = getRemainingUses(user, 'skip');
  const hintInfo = getRemainingUses(user, 'hint');

  const skipDisabled  = answered || skipInfo.remaining === 0;
  const hintDisabled  = answered || hintInfo.remaining === 0 || hintShown;

  let inputClass = '';
  if (answered && correct)  inputClass = 'correct';
  if (answered && !correct) inputClass = 'correct'; /* skip pe bhi green show hoga */

  let feedbackHtml = '';
  if (answered && correct && !qState._wasSkipped) {
    feedbackHtml = `<div class="mcq-feedback ok">✅ Bilkul sahi! Shabash!</div>`;
  } else if (answered && qState._wasSkipped) {
    feedbackHtml = `<div class="mcq-feedback bad">⏭️ Skip kiya — sahi jawab fill ho gaya</div>`;
  }

  let hintHtml = '';
  if (hintShown && q.hint) {
    hintHtml = `<div class="q-hint-box">💡 <span class="q-hint-text">${escapeHtml(q.hint)}</span></div>`;
  }

  let lockMsgHtml = '';
  if (skipInfo.remaining === 0 || hintInfo.remaining === 0) {
    const minReset = Math.min(
      skipInfo.remaining === 0 ? skipInfo.resetMs : Infinity,
      hintInfo.remaining === 0 ? hintInfo.resetMs : Infinity
    );
    lockMsgHtml = `<div class="q-lock-msg">🔒 Aaj ke 5 chances use ho gaye — <strong>${formatCountdown(minReset)}</strong> mein unlock honge</div>`;
  }

  container.innerHTML += `
    <div class="mcq-box">
      <div class="mcq-progress">
        <div class="mcq-bar-bg"><div class="mcq-bar-fill" style="width:${progress}%"></div></div>
        <div class="mcq-counter">Question ${currentIdx + 1} / ${total} &nbsp;|&nbsp; Score: ${score}</div>
      </div>

      <div class="mcq-question">${escapeHtml(q.q)}</div>

      ${hintHtml}

      <div class="q-input-row">
        <input
          class="q-answer-input ${inputClass}"
          id="q-input"
          type="text"
          placeholder="Yahan apna jawab type karein..."
          autocomplete="off"
          autocorrect="off"
          spellcheck="false"
          ${answered ? 'readonly' : ''}
          onkeydown="if(event.key==='Enter' && !this.closest('.mcq-box').querySelector('.q-submit-btn').disabled) qSubmit()"
        >
        <button class="q-submit-btn" onclick="qSubmit()" ${answered ? 'disabled' : ''}>✓ Check</button>
      </div>

      ${feedbackHtml}

      ${answered ? `<button class="mcq-next-btn" onclick="qNext()">NEXT QUESTION →</button>` : ''}

      <div class="q-actions-row">
        <button class="q-action-btn skip" onclick="qSkip()" ${skipDisabled ? 'disabled' : ''}>
          ⏭️ Skip
          <span class="q-chip">${skipInfo.remaining}/5</span>
        </button>
        <button class="q-action-btn hint" onclick="qHint()" ${hintDisabled ? 'disabled' : ''}>
          💡 Hint
          <span class="q-chip">${hintInfo.remaining}/5</span>
        </button>
      </div>
      ${lockMsgHtml}
    </div>
  `;

  /* Auto-focus input */
  if (!answered) {
    const inp = document.getElementById('q-input');
    if (inp) setTimeout(() => inp.focus(), 50);
  }
}

/* ── Submit Answer ── */
function qSubmit() {
  if (qState.answered) return;
  const inp = document.getElementById('q-input');
  if (!inp) return;
  const userAns = inp.value.trim();
  const correct = normalizeAns(userAns) === normalizeAns(qState.questions[qState.currentIdx].ans);

  if (correct) {
    qState.answered = true;
    qState.correct = true;
    qState._wasSkipped = false;
    qState.score += 1;
    inp.classList.add('correct');
    renderQuizCard(document.getElementById('page-content'));
  } else {
    /* Wrong — shake, stay */
    inp.classList.remove('wrong-shake');
    void inp.offsetWidth; /* reflow for animation reset */
    inp.classList.add('wrong-shake');
    setTimeout(() => inp.classList.remove('wrong-shake'), 450);
    inp.value = '';
    inp.focus();
  }
}

/* ── Skip ── */
function qSkip() {
  if (qState.answered) return;
  const result = checkAndUseLimit(qState.user, 'skip');
  if (!result.allowed) return;

  qState.answered = true;
  qState.correct = false;
  qState._wasSkipped = true;

  renderQuizCard(document.getElementById('page-content'));

  /* Fill correct answer in input */
  const inp = document.getElementById('q-input');
  if (inp) {
    inp.value = qState.questions[qState.currentIdx].ans;
    inp.classList.add('correct');
  }
}

/* ── Hint ── */
function qHint() {
  if (qState.answered || qState.hintShown) return;
  const result = checkAndUseLimit(qState.user, 'hint');
  if (!result.allowed) return;

  qState.hintShown = true;
  renderQuizCard(document.getElementById('page-content'));

  /* Refocus input after re-render */
  const inp = document.getElementById('q-input');
  if (inp) setTimeout(() => inp.focus(), 50);
}

/* ── Next Question ── */
function qNext() {
  /* Mark current question as seen */
  const q = qState.questions[qState.currentIdx];
  if (q && q._origIdx !== undefined) {
    markQuestionSeen(qState.user, practiceState.level, practiceState.lang, q._origIdx);
  }
  qState.currentIdx += 1;
  qState.answered = false;
  qState.correct = false;
  qState.hintShown = false;
  qState._wasSkipped = false;
  renderQuestionsPage();
}

/* ── Back button ── */
function qGoBack() {
  /* Reset quiz state so next visit intro se start karega */
  qState = { screen: 'intro', questions: [], currentIdx: 0, answered: false, correct: false, hintShown: false, score: 0, user: null };
  goBack();
}

/* ── Result Screen ── */
function renderResult(container) {
  const { score, questions } = qState;
  const total = questions.length;
  const pct = Math.round((score / total) * 100);

  let emoji, badge, badgeClass, msg;
  if (pct >= 80)      { emoji = '🏆'; badge = 'Zabardast!'; badgeClass = 'badge-great'; msg = 'Aap ne bahut acha kiya!'; }
  else if (pct >= 50) { emoji = '👍'; badge = 'Acha!';      badgeClass = 'badge-good';  msg = 'Thodi aur practice karein!'; }
  else                { emoji = '💪'; badge = 'Koshish jari rakho!'; badgeClass = 'badge-normal'; msg = 'Dobara practice karein — aap kar sakte hain!'; }

  container.innerHTML += `
    <div class="result-box">
      <div class="result-emoji">${emoji}</div>
      <div class="result-title">Quiz Khatam!</div>
      <div class="result-score">${score}/${total}</div>
      <div class="result-sub">${pct}% sahi — ${msg}</div>
      <div class="result-badge ${badgeClass}">${badge}</div>
      <br>
      <button class="result-btn primary" onclick="qRestart()">🔄 Dobara Khelo</button>
      <button class="result-btn secondary" onclick="qGoBack()">← Doosra Set Chuno</button>
    </div>
  `;
}

function qRestart() {
  const allQ = (QUESTIONS_DATA[practiceState.level] && QUESTIONS_DATA[practiceState.level][practiceState.lang]) || [];
  const user = getUser();
  const unseenQ = getUnseenQuestions(allQ, user, practiceState.level, practiceState.lang);
  qState = { screen: 'quiz', questions: unseenQ, currentIdx: 0, answered: false, correct: false, hintShown: false, score: 0, user };
  renderQuestionsPage();
}

/* ── Helpers ── */
function normalizeAns(str) {
  return str.toLowerCase().replace(/\s+/g, ' ').trim();
}

function escapeHtml(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

/* ── Init ── */
(function init() {
  const user = renderShell('questions');
  if (!user) return;
  qState.user = user;
  initPractice(renderQuestionsPage);
})();
