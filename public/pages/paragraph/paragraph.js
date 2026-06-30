/* ── Paragraph Mistakes v3 — Editable Code + Real-time Mistake Counter ──
   - User ko clean (galat) code dikhta hai textarea mein
   - User directly andar type kar ke fix karta hai
   - Real-time: jaise type karo, "X mistakes abhi bhi hain" update hota hai
   - Sab sahi → textarea green, Next button aata hai
   - Skip → sahi code fill ho jaata hai
   - Hint → general hint milta hai
*/

/* ══════════════════════════════════════════
   Daily Limit Helpers (same as questions.js)
   ══════════════════════════════════════════ */
function paraGetLimitKey(user, btnType) {
  const email = (user && user.email) ? user.email.replace(/[^a-zA-Z0-9]/g, '_') : 'guest';
  return `cdp_limit_${email}_${btnType}`;
}

function paraGetLimitData(key) {
  try {
    const raw = localStorage.getItem(key);
    if (!raw) return { count: 0, resetAt: 0 };
    return JSON.parse(raw);
  } catch(e) { return { count: 0, resetAt: 0 }; }
}

function paraSaveLimitData(key, data) {
  localStorage.setItem(key, JSON.stringify(data));
}

function paraCheckAndUseLimit(user, btnType) {
  const key = paraGetLimitKey(user, btnType);
  let data = paraGetLimitData(key);
  const now = Date.now();
  if (now >= data.resetAt) {
    data = { count: 0, resetAt: now + 24 * 60 * 60 * 1000 };
  }
  if (data.count >= 5) {
    return { allowed: false, remaining: 0, resetMs: data.resetAt - now };
  }
  data.count += 1;
  paraSaveLimitData(key, data);
  return { allowed: true, remaining: 5 - data.count, resetMs: data.resetAt - now };
}

function paraGetRemainingUses(user, btnType) {
  const key = paraGetLimitKey(user, btnType);
  let data = paraGetLimitData(key);
  const now = Date.now();
  if (now >= data.resetAt) return { remaining: 5, resetMs: 0 };
  return { remaining: Math.max(0, 5 - data.count), resetMs: data.resetAt - now };
}

function paraFormatCountdown(ms) {
  const h = Math.floor(ms / 3600000);
  const m = Math.floor((ms % 3600000) / 60000);
  if (h > 0) return `${h}h ${m}m`;
  return `${m}m`;
}

/* ══════════════════════════════════════════
   Shuffle Helper
   ══════════════════════════════════════════ */
function paraShuffleArray(arr) {
  const a = arr.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

/* ══════════════════════════════════════════
   Seen Paragraphs Store (per user, per level + lang)
   ══════════════════════════════════════════ */
function paraGetSeenKey(user, level, lang) {
  const email = (user && user.email) ? user.email.replace(/[^a-zA-Z0-9]/g, '_') : 'guest';
  return `cdp_seen_${email}_${level}_${lang}`;
}

function paraGetSeenIndices(user, level, lang) {
  try {
    const raw = localStorage.getItem(paraGetSeenKey(user, level, lang));
    return raw ? JSON.parse(raw) : [];
  } catch(e) { return []; }
}

function paraSaveSeenIndices(user, level, lang, indices) {
  try {
    localStorage.setItem(paraGetSeenKey(user, level, lang), JSON.stringify(indices));
  } catch(e) {}
}

function paraClearSeenIndices(user, level, lang) {
  try {
    localStorage.removeItem(paraGetSeenKey(user, level, lang));
  } catch(e) {}
}

function paraGetUnseen(allP, user, level, lang) {
  const seenIndices = new Set(paraGetSeenIndices(user, level, lang));
  let unseenIdx = allP.map((_, i) => i).filter(i => !seenIndices.has(i));
  if (unseenIdx.length === 0) {
    paraClearSeenIndices(user, level, lang);
    unseenIdx = allP.map((_, i) => i);
  }
  const shuffled = paraShuffleArray(unseenIdx);
  return shuffled.map(i => ({ ...allP[i], _origIdx: i }));
}

function paraMarkSeen(user, level, lang, origIdx) {
  const seen = paraGetSeenIndices(user, level, lang);
  if (!seen.includes(origIdx)) {
    seen.push(origIdx);
    paraSaveSeenIndices(user, level, lang, seen);
  }
}

/* ══════════════════════════════════════════
   Mistake Counter — Real-time diff
   ══════════════════════════════════════════ */

/**
 * Compare user's current code with the correct code line by line.
 * Returns number of lines that are still different.
 * Also checks total char-level differences for accuracy.
 */
function countMistakes(userCode, correctCode) {
  /* Normalize line endings */
  const userLines    = userCode.replace(/\r\n/g, '\n').split('\n');
  const correctLines = correctCode.replace(/\r\n/g, '\n').split('\n');

  let mistakes = 0;

  /* Line by line compare — compare trimmed to avoid trailing space issues */
  const maxLen = Math.max(userLines.length, correctLines.length);
  for (let i = 0; i < maxLen; i++) {
    const ul = (userLines[i]    || '').trimEnd();
    const cl = (correctLines[i] || '').trimEnd();
    if (ul !== cl) mistakes++;
  }

  return mistakes;
}

/* ══════════════════════════════════════════
   Quiz State
   ══════════════════════════════════════════ */
let pState = {
  screen:       'intro',
  paragraphs:   [],
  currentIdx:   0,
  hintShown:    false,
  wasSkipped:   false,
  score:        0,
  user:         null,
  solved:       false,   /* current code sahi ho gaya? */
};

/* ══════════════════════════════════════════
   Main Page Renderer
   ══════════════════════════════════════════ */
function renderParagraphPage() {
  window.scrollTo({ top: 0, behavior: 'instant' });
  const container = document.getElementById('page-content');

  if (practiceState.step < 3) {
    container.innerHTML = renderPractice('Paragraph Mistakes', '📄');
    updateBreadcrumb('Paragraph Mistakes', '📄',
      practiceState.step >= 2 ? practiceState.level : null, null, null);
    return;
  }

  const { level, lang } = practiceState;
  const allP = (PARAGRAPHS_DATA[level] && PARAGRAPHS_DATA[level][lang]) || [];

  if (allP.length === 0) {
    container.innerHTML = `<div style="text-align:center;padding:40px;color:var(--muted)">
      Is combination ke liye abhi paragraphs available nahi hain.
      <br><br><button class="para-start-btn" onclick="goBack()">← Wapas Jao</button>
    </div>`;
    updateBreadcrumb('Paragraph Mistakes', '📄', level, lang, null);
    return;
  }

  const lvClass       = level === 'Easy'   ? 'easy-badge'   : level === 'Medium' ? 'medium-badge' : 'hard-badge';
  const langBadgeClass = lang  === 'HTML'  ? 'html-badge'   : lang  === 'CSS'    ? 'css-badge'    : 'js-badge';

  const header = `
    <button class="back-btn" onclick="paraGoBack()">← Wapas Language Select</button>
    <div class="content-header">
      <span style="font-size:18px">📄</span>
      <span style="font-size:18px;font-weight:700;color:var(--text)">Paragraph Mistakes</span>
      <span class="badge-level ${lvClass}">${level}</span>
      <span class="lang-badge ${langBadgeClass}">${lang}</span>
    </div>`;

  if (pState.screen === 'intro') {
    container.innerHTML = header + renderParaIntro(allP.length, level, lang);
    updateBreadcrumb('Paragraph Mistakes', '📄', level, lang, null);
    return;
  }

  if (pState.screen === 'result') {
    container.innerHTML = header;
    updateBreadcrumb('Paragraph Mistakes', '📄', level, lang, 'Result');
    renderParaResult(container);
    return;
  }

  if (pState.currentIdx >= pState.paragraphs.length) {
    pState.screen = 'result';
    container.innerHTML = header;
    renderParaResult(container);
    if (typeof apiSyncStats === 'function') apiSyncStats({ type: 'paragraph', count: 1 });
    return;
  }

  container.innerHTML = header;
  updateBreadcrumb('Paragraph Mistakes', '📄', level, lang, 'Practice');
  renderParaCard(container);
}

/* ══════════════════════════════════════════
   Intro Screen
   ══════════════════════════════════════════ */
function renderParaIntro(total, level, lang) {
  const langIcon  = lang === 'HTML' ? '🌐' : lang === 'CSS' ? '🎨' : '⚡';
  const langColor = lang === 'HTML' ? '#e44d26' : lang === 'CSS' ? '#264de4' : '#f7df1e';
  const mistakeRange = level === 'Easy' ? '5–8' : level === 'Medium' ? '15–20' : '40–50';

  return `
  <div class="para-intro-box">
    <div class="para-intro-icon">${langIcon}</div>
    <div class="para-intro-title">${lang} ${level} — Code Fix</div>
    <div class="para-intro-count" style="color:${langColor}">${total} Codes</div>
    <div class="para-intro-desc">
      Har code mein <strong>${mistakeRange} galtiyan</strong> hain.<br>
      Code ko directly edit karke galtiyan fix karein.<br>
      Real-time dikhai dega kitni galtiyan bachi hain!
    </div>
    <button class="para-start-btn" onclick="paraStart()">▶ Start</button>
  </div>`;
}

/* ══════════════════════════════════════════
   Start Quiz
   ══════════════════════════════════════════ */
function paraStart() {
  const { level, lang } = practiceState;
  const allP = (PARAGRAPHS_DATA[level] && PARAGRAPHS_DATA[level][lang]) || [];
  const user = getUser();
  const unseenP = paraGetUnseen(allP, user, level, lang);
  pState = {
    screen:     'quiz',
    paragraphs: unseenP,
    currentIdx: 0,
    hintShown:  false,
    wasSkipped: false,
    score:      0,
    user,
    solved:     false,
  };
  renderParagraphPage();
}

/* ══════════════════════════════════════════
   Quiz Card
   ══════════════════════════════════════════ */
function renderParaCard(container) {
  const { paragraphs, currentIdx, hintShown, wasSkipped, score, user, solved } = pState;
  const total    = paragraphs.length;
  const para     = paragraphs[currentIdx];
  const progress = Math.round((currentIdx / total) * 100);
  const { lang } = practiceState;

  const skipInfo = paraGetRemainingUses(user, 'skip');
  const hintInfo = paraGetRemainingUses(user, 'hint');

  const skipDisabled = solved || skipInfo.remaining === 0;
  const hintDisabled = solved || hintInfo.remaining === 0 || hintShown;

  /* Hint box */
  let hintHtml = '';
  if (hintShown && para.hint) {
    hintHtml = `<div class="para-hint-box">💡 ${escapeParaHtml(para.hint)}</div>`;
  }

  /* Skip feedback */
  let skipHtml = '';
  if (wasSkipped) {
    skipHtml = `<div class="para-hint-box">⏭️ Skip kiya — sahi code fill ho gaya hai.</div>`;
  }

  /* Success message */
  let successHtml = '';
  if (solved && !wasSkipped) {
    successHtml = `<div class="para-success-box">✅ Shabash! Sab galtiyan fix ho gayin!</div>`;
  }

  /* Lock message */
  let lockMsgHtml = '';
  if (skipInfo.remaining === 0 || hintInfo.remaining === 0) {
    const minReset = Math.min(
      skipInfo.remaining === 0 ? skipInfo.resetMs : Infinity,
      hintInfo.remaining === 0 ? hintInfo.resetMs : Infinity
    );
    lockMsgHtml = `<div class="para-lock-msg">🔒 Aaj ke 5 chances use ho gaye — <strong>${paraFormatCountdown(minReset)}</strong> mein unlock honge</div>`;
  }

  /* Initial mistake count */
  const initMistakes = para.totalMistakes || countMistakes(para.wrong, para.correct);
  const langLabel = lang === 'HTML' ? '🌐 HTML Code' : lang === 'CSS' ? '🎨 CSS Code' : '⚡ JS Code';

  container.innerHTML += `
    <div class="para-box">
      <div class="para-progress">
        <div class="para-bar-bg"><div class="para-bar-fill" style="width:${progress}%"></div></div>
        <div class="para-counter">Code ${currentIdx + 1} / ${total} &nbsp;|&nbsp; Score: ${score}</div>
      </div>

      <div class="para-card">
        <div class="para-card-label">
          ${langLabel}
          <span style="font-weight:400;font-size:10px;color:var(--muted)">(directly andar edit karo)</span>
        </div>
        <textarea
          class="para-code-editor${solved ? ' all-correct' : ''}"
          id="para-editor"
          spellcheck="false"
          autocorrect="off"
          autocapitalize="off"
          autocomplete="off"
          ${solved ? 'readonly' : ''}
          oninput="paraOnInput()"
          onkeydown="paraHandleTab(event)"
        >${escapeParaHtml(wasSkipped ? para.correct : para.wrong)}</textarea>

        <div class="para-mistake-bar">
          <span class="para-mistake-count ${solved ? 'no-mistakes' : 'has-mistakes'}" id="para-mistake-count">
            ${solved ? '0 mistakes' : initMistakes + ' mistakes'}
          </span>
          <span class="para-mistake-label" id="para-mistake-label">
            ${solved ? '— sab theek hai! ✅' : '— abhi bhi galtiyan hain'}
          </span>
        </div>
      </div>

      ${hintHtml}
      ${skipHtml}
      ${successHtml}

      ${solved ? `<button class="para-next-btn" onclick="paraNext()">NEXT CODE →</button>` : ''}

      <div class="para-actions-row">
        <button class="para-action-btn skip" onclick="paraSkip()" ${skipDisabled ? 'disabled' : ''}>
          ⏭️ Skip
          <span class="para-chip">${skipInfo.remaining}/5</span>
        </button>
        <button class="para-action-btn hint" onclick="paraHint()" ${hintDisabled ? 'disabled' : ''}>
          💡 Hint
          <span class="para-chip">${hintInfo.remaining}/5</span>
        </button>
      </div>
      ${lockMsgHtml}
    </div>
  `;

  /* Focus textarea */
  if (!solved) {
    const ta = document.getElementById('para-editor');
    if (ta) setTimeout(() => ta.focus(), 50);
  }
}

/* ══════════════════════════════════════════
   Real-time Input Handler
   ══════════════════════════════════════════ */
function paraOnInput() {
  const ta = document.getElementById('para-editor');
  const countEl  = document.getElementById('para-mistake-count');
  const labelEl  = document.getElementById('para-mistake-label');
  if (!ta || !countEl) return;

  const para = pState.paragraphs[pState.currentIdx];
  const userCode = ta.value;
  const mistakes = countMistakes(userCode, para.correct);

  if (mistakes === 0) {
    /* All correct! */
    countEl.textContent = '0 mistakes';
    countEl.className   = 'para-mistake-count no-mistakes';
    if (labelEl) labelEl.textContent = '— sab theek hai! ✅';

    ta.classList.add('all-correct');
    ta.readOnly = true;

    pState.solved = true;
    if (!pState.wasSkipped) pState.score += 1;

    /* Re-render to show Next button + success message */
    renderParagraphPage();
  } else {
    countEl.textContent = `${mistakes} mistake${mistakes === 1 ? '' : 's'}`;
    countEl.className   = 'para-mistake-count has-mistakes';
    if (labelEl) labelEl.textContent = '— abhi bhi galtiyan hain';
    ta.classList.remove('all-correct');
  }
}

/* ══════════════════════════════════════════
   Tab Key Support in Textarea
   ══════════════════════════════════════════ */
function paraHandleTab(e) {
  if (e.key !== 'Tab') return;
  e.preventDefault();
  const ta = e.target;
  const start = ta.selectionStart;
  const end   = ta.selectionEnd;
  ta.value = ta.value.substring(0, start) + '  ' + ta.value.substring(end);
  ta.selectionStart = ta.selectionEnd = start + 2;
  paraOnInput(); /* update counter after tab */
}

/* ══════════════════════════════════════════
   Skip
   ══════════════════════════════════════════ */
function paraSkip() {
  if (pState.solved) return;
  const result = paraCheckAndUseLimit(pState.user, 'skip');
  if (!result.allowed) return;

  pState.wasSkipped = true;
  pState.solved     = true;

  renderParagraphPage();

  /* Fill correct code */
  const ta = document.getElementById('para-editor');
  if (ta) {
    ta.value    = pState.paragraphs[pState.currentIdx].correct;
    ta.readOnly = true;
    ta.classList.add('all-correct');
  }

  /* Update counter */
  const countEl = document.getElementById('para-mistake-count');
  const labelEl = document.getElementById('para-mistake-label');
  if (countEl) {
    countEl.textContent = '0 mistakes';
    countEl.className   = 'para-mistake-count no-mistakes';
  }
  if (labelEl) labelEl.textContent = '— skip kiya gaya';
}

/* ══════════════════════════════════════════
   Hint
   ══════════════════════════════════════════ */
function paraHint() {
  if (pState.solved || pState.hintShown) return;
  const result = paraCheckAndUseLimit(pState.user, 'hint');
  if (!result.allowed) return;

  pState.hintShown = true;

  /* Save current textarea value before re-render */
  const ta = document.getElementById('para-editor');
  const currentVal = ta ? ta.value : null;

  renderParagraphPage();

  /* Restore value after re-render */
  if (currentVal !== null) {
    const newTa = document.getElementById('para-editor');
    if (newTa) {
      newTa.value = currentVal;
      newTa.focus();
    }
  }
}

/* ══════════════════════════════════════════
   Next Code
   ══════════════════════════════════════════ */
function paraNext() {
  const p = pState.paragraphs[pState.currentIdx];
  if (p && p._origIdx !== undefined) {
    paraMarkSeen(pState.user, practiceState.level, practiceState.lang, p._origIdx);
  }
  pState.currentIdx += 1;
  pState.hintShown   = false;
  pState.wasSkipped  = false;
  pState.solved      = false;
  renderParagraphPage();
}

/* ══════════════════════════════════════════
   Back Button
   ══════════════════════════════════════════ */
function paraGoBack() {
  pState = { screen: 'intro', paragraphs: [], currentIdx: 0, hintShown: false, wasSkipped: false, score: 0, user: null, solved: false };
  goBack();
}

/* ══════════════════════════════════════════
   Result Screen
   ══════════════════════════════════════════ */
function renderParaResult(container) {
  const { score, paragraphs } = pState;
  const total = paragraphs.length;
  const pct   = Math.round((score / total) * 100);

  let emoji, badge, badgeClass, msg;
  if (pct >= 80)      { emoji = '🏆'; badge = 'Zabardast!';          badgeClass = 'badge-great';  msg = 'Aap ne bahut acha kiya!'; }
  else if (pct >= 50) { emoji = '👍'; badge = 'Acha!';               badgeClass = 'badge-good';   msg = 'Thodi aur practice karein!'; }
  else                { emoji = '💪'; badge = 'Koshish jari rakho!'; badgeClass = 'badge-normal'; msg = 'Dobara practice karein — aap kar sakte hain!'; }

  container.innerHTML += `
    <div class="result-box">
      <div class="result-emoji">${emoji}</div>
      <div class="result-title">Section Khatam!</div>
      <div class="result-score">${score}/${total}</div>
      <div class="result-sub">${pct}% codes fully fixed — ${msg}</div>
      <div class="result-badge ${badgeClass}">${badge}</div>
      <br>
      <button class="result-btn primary"   onclick="paraRestart()">🔄 Dobara Khelo</button>
      <button class="result-btn secondary" onclick="paraGoBack()">← Doosra Level Chuno</button>
    </div>
  `;
}

function paraRestart() {
  const { level, lang } = practiceState;
  const allP = (PARAGRAPHS_DATA[level] && PARAGRAPHS_DATA[level][lang]) || [];
  const user = getUser();
  const unseenP = paraGetUnseen(allP, user, level, lang);
  pState = { screen: 'quiz', paragraphs: unseenP, currentIdx: 0, hintShown: false, wasSkipped: false, score: 0, user, solved: false };
  renderParagraphPage();
}

/* ══════════════════════════════════════════
   HTML Escape Helper
   ══════════════════════════════════════════ */
function escapeParaHtml(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

/* ══════════════════════════════════════════
   Init
   ══════════════════════════════════════════ */
(function init() {
  const user = renderShell('paragraph');
  if (!user) return;
  pState.user = user;
  initPractice(renderParagraphPage);
})();
