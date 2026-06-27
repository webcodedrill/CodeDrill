/* ══════════════════════════════════════════════════════════════
   Final Test — 100-mark combined exam (MCQs + Short Qs + Paragraphs)
   ══════════════════════════════════════════════════════════════
   Structure:
     Page 1 (25 min)  → Q1: 20 MCQs                      = 20 marks
     Page 2 (60 min)  → Q2,Q3,Q4: 12 each, best 10 count  = 60 marks
     Page 3 (35 min)  → Q5,Q6: 1 paragraph each           = 20 marks
   Total = 100 marks. Random every attempt, no repeats until
   the pool for that level+lang is exhausted (reuses the same
   "seen" pattern as mcqs/questions/paragraph pages).
   ══════════════════════════════════════════════════════════════ */

/* ── Shuffle (Fisher-Yates) ── */
function ftShuffle(arr) {
  const a = arr.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function ftEscHtml(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

/* ── Seen-pool tracking (separate namespace from practice pages,
   so doing a Final Test doesn't consume/duplicate the practice
   "seen" pools, and vice versa) ── */
function ftSeenKey(user, kind, level, lang) {
  const email = (user && user.email) ? user.email.replace(/[^a-zA-Z0-9]/g, '_') : 'guest';
  return `ft_seen_${kind}_${email}_${level}_${lang}`;
}
function ftGetSeen(user, kind, level, lang) {
  try {
    const raw = localStorage.getItem(ftSeenKey(user, kind, level, lang));
    return raw ? JSON.parse(raw) : [];
  } catch (e) { return []; }
}
function ftSaveSeen(user, kind, level, lang, indices) {
  try { localStorage.setItem(ftSeenKey(user, kind, level, lang), JSON.stringify(indices)); } catch (e) {}
}
function ftClearSeen(user, kind, level, lang) {
  try { localStorage.removeItem(ftSeenKey(user, kind, level, lang)); } catch (e) {}
}

/* Pick `count` fresh (unseen-first) random indices out of allLen items.
   If the unseen pool can't cover `count`, it wraps around (resets seen
   pool) rather than ever failing — the test must always be fully sized. */
function ftPickIndices(user, kind, level, lang, allLen, count) {
  let seen = new Set(ftGetSeen(user, kind, level, lang));
  let unseen = [];
  for (let i = 0; i < allLen; i++) if (!seen.has(i)) unseen.push(i);

  let chosen = ftShuffle(unseen).slice(0, count);

  if (chosen.length < count) {
    /* not enough unseen left — reset pool, top up with fresh shuffle
       of everything (excluding what we already chose, to avoid dupes) */
    ftClearSeen(user, kind, level, lang);
    const already = new Set(chosen);
    const rest = [];
    for (let i = 0; i < allLen; i++) if (!already.has(i)) rest.push(i);
    const topUp = ftShuffle(rest).slice(0, count - chosen.length);
    chosen = chosen.concat(topUp);
  }
  return ftShuffle(chosen); /* final order randomized too */
}

function ftMarkSeen(user, kind, level, lang, indices) {
  const seen = new Set(ftGetSeen(user, kind, level, lang));
  indices.forEach(i => seen.add(i));
  ftSaveSeen(user, kind, level, lang, Array.from(seen));
}

/* ── Data source getters (reuse existing global arrays from the
   mcqs / questions / paragraph data files already loaded on this page) ── */
function ftGetMcqSource(level, lang) {
  if (level === 'Hard'   && lang === 'HTML') return HTML_HARD_MCQS;
  if (level === 'Medium' && lang === 'HTML') return HTML_MEDIUM_MCQS;
  if (level === 'Easy'   && lang === 'HTML') return HTML_EASY_MCQS;
  if (level === 'Hard'   && lang === 'CSS')  return CSS_HARD_MCQS;
  if (level === 'Medium' && lang === 'CSS')  return CSS_MEDIUM_MCQS;
  if (level === 'Easy'   && lang === 'CSS')  return CSS_EASY_MCQS;
  if (level === 'Hard'   && lang === 'JS')   return JS_HARD_MCQS;
  if (level === 'Medium' && lang === 'JS')   return JS_MEDIUM_MCQS;
  return JS_EASY_MCQS;
}
function ftGetQSource(level, lang) {
  return (QUESTIONS_DATA[level] && QUESTIONS_DATA[level][lang]) || [];
}
function ftGetParaSource(level, lang) {
  return (PARAGRAPHS_DATA[level] && PARAGRAPHS_DATA[level][lang]) || [];
}

/* ── Shuffle MCQ options while keeping track of the correct index ── */
function ftShuffleMcqOptions(q) {
  const correctText = q.options[q.ans];
  const shuffledOpts = ftShuffle(q.options);
  const newAns = shuffledOpts.indexOf(correctText);
  return { ...q, options: shuffledOpts, ans: newAns };
}

/* ── Build a brand-new randomized test for the chosen level+lang ── */
function ftBuildTest(user, level, lang) {
  /* Q1 — 20 MCQs */
  const mcqSrc = ftGetMcqSource(level, lang);
  const mcqIdx = ftPickIndices(user, 'mcq', level, lang, mcqSrc.length, 20);
  const mcqQuestions = mcqIdx.map(i => ({ ...ftShuffleMcqOptions(mcqSrc[i]), _origIdx: i }));

  /* Q2/Q3/Q4 — 12 each, 36 total short-answer questions, all from the
     same level+lang pool but split into three distinct sets of 12
     (no overlap between sets within one test) */
  const qSrc = ftGetQSource(level, lang);
  const qIdx = ftPickIndices(user, 'q', level, lang, qSrc.length, 36);
  const q2 = qIdx.slice(0, 12).map(i => ({ ...qSrc[i], _origIdx: i }));
  const q3 = qIdx.slice(12, 24).map(i => ({ ...qSrc[i], _origIdx: i }));
  const q4 = qIdx.slice(24, 36).map(i => ({ ...qSrc[i], _origIdx: i }));

  /* Q5/Q6/Q7 — 3 paragraphs, user must do any 2 of the 3 */
  const pSrc = ftGetParaSource(level, lang);
  const pIdx = ftPickIndices(user, 'para', level, lang, pSrc.length, 3);
  const paras = pIdx.map(i => ({ ...pSrc[i], _origIdx: i }));

  return {
    id: 'ft_' + Date.now() + '_' + Math.random().toString(36).slice(2, 8),
    level, lang,
    startedAt: Date.now(),
    completedAt: null,
    page: 1, /* 1 = MCQs, 2 = Q2/3/4, 3 = Q5/6 */
    page1DeadlineAt: Date.now() + 25 * 60 * 1000,
    page2DeadlineAt: null,
    page3DeadlineAt: null,
    mcq: { questions: mcqQuestions, answers: new Array(mcqQuestions.length).fill(null) },
    sets: {
      q2: { questions: q2, answers: new Array(q2.length).fill(null) },
      q3: { questions: q3, answers: new Array(q3.length).fill(null) },
      q4: { questions: q4, answers: new Array(q4.length).fill(null) },
    },
    paras: { items: paras, answers: new Array(paras.length).fill(null) },
  };
}

/* ── Mark all chosen indices as seen (called once, right when test is
   generated — so even an abandoned test doesn't repeat instantly) ── */
function ftMarkTestSeen(user, level, lang, test) {
  ftMarkSeen(user, 'mcq', level, lang, test.mcq.questions.map(q => q._origIdx));
  const allQIdx = [...test.sets.q2.questions, ...test.sets.q3.questions, ...test.sets.q4.questions].map(q => q._origIdx);
  ftMarkSeen(user, 'q', level, lang, allQIdx);
  ftMarkSeen(user, 'para', level, lang, test.paras.items.map(p => p._origIdx));
}

/* ══════════════════════════════════════════════════════════════
   Page-level state
   ══════════════════════════════════════════════════════════════ */
let ftState = {
  screen: 'select',  /* 'select' | 'reg' | 'test' | 'submitting' | 'done' */
  test: null,
  user: null,
  timerHandle: null,
};

function ftGetUser() {
  try { return getUser(); } catch (e) { return null; }
}

/* ══════════════════════════════════════════════════════════════
   Main render dispatcher (called by practice.js step flow)
   ══════════════════════════════════════════════════════════════ */
function renderFinalTest() {
  if (practiceState.step === 1) return renderLevelSelect('Final Test', '🧪');
  if (practiceState.step === 2) return renderLangSelect('Final Test', '🧪');
  return renderFtSection();
}

function renderFtSection() {
  const lvClass = practiceState.level === 'Easy' ? 'easy-badge' : practiceState.level === 'Medium' ? 'medium-badge' : 'hard-badge';
  const header = `
    <div class="content-header">
      <span style="font-size:18px">🧪</span>
      <span style="font-size:18px;font-weight:700;color:var(--text)">Final Test</span>
      <span class="badge-level ${lvClass}">${practiceState.level}</span>
      <span class="lang-badge ${practiceState.lang === 'HTML' ? 'html-badge' : practiceState.lang === 'CSS' ? 'css-badge' : 'js-badge'}">${practiceState.lang}</span>
    </div>`;

  if (ftState.screen === 'reg')    return header + renderFtRegForm();
  if (ftState.screen === 'select') return header + renderFtIntro();
  if (ftState.screen === 'done')   return header + renderFtDone();
  return renderFtTest(); /* full takeover, no header (timer bar replaces it) */
}

/* ── Intro screen — shown after level+lang chosen ── */
function renderFtIntro() {
  const langIcon  = practiceState.lang === 'HTML' ? '🌐' : practiceState.lang === 'CSS' ? '🎨' : '⚡';
  const langColor = practiceState.lang === 'HTML' ? '#e44d26' : practiceState.lang === 'CSS' ? '#264de4' : '#f7df1e';
  return `
  <button class="back-btn" onclick="ftGoBackToLang()">← Wapas Language Select</button>
  <div class="mcq-intro-box">
    <div class="mcq-intro-icon">${langIcon}</div>
    <div class="mcq-intro-title">${practiceState.lang} ${practiceState.level} — Final Test</div>
    <div class="mcq-intro-count" style="color:${langColor}">100 Marks</div>
    <div class="mcq-intro-desc" style="text-align:left">
      <strong>Page 1</strong> — 20 MCQs &nbsp;(25 min)&nbsp; — 20 marks<br>
      <strong>Page 2</strong> — Q2, Q3, Q4: 12 each, kisi 10 ke jawab do &nbsp;(60 min)&nbsp; — 60 marks<br>
      <strong>Page 3</strong> — Q5, Q6, Q7: code fix paragraphs, koi 2 karein &nbsp;(35 min)&nbsp; — 20 marks<br><br>
      Har page ka apna timer hai. Waqt khatam hone par agla page khud aa jayega.
      Test chhod ke wapas aane par naya random test milega.
    </div>
    <button class="mcq-start-btn" onclick="ftCheckRegThenStart()">▶ Start Test</button>
  </div>`;
}

function ftGoBackToLang() {
  ftState = { screen: 'select', test: null, user: ftState.user, timerHandle: null };
  goBack();
}

/* ── Check if registration info exists, else show form ── */
function ftCheckRegThenStart() {
  const user = ftGetUser();
  const info = ftGetRegInfo(user);
  if (info && info.fullName) {
    ftStartTest();
  } else {
    ftState.screen = 'reg';
    renderFinalTestPage();
  }
}

/* ── Registration Form — pehli baar test se pehle ── */
function renderFtRegForm() {
  const user = ftGetUser() || {};
  const rollNo  = user.userId ? String(user.userId).padStart(6, '0') : '------';
  const regNo   = user.userId ? `${user.userId}/2026` : '------';
  const existingPhoto = user.email ? getProfilePhoto(user.email) : null;

  return `
  <div class="mcq-intro-box" style="max-width:520px;margin:0 auto;text-align:left">
    <div style="text-align:center;margin-bottom:20px">
      <div style="font-size:18px;font-weight:800;color:var(--text)">📋 Registration Form</div>
      <div style="font-size:13px;color:var(--muted);margin-top:4px">Yeh info aap ke result card par show hogi — ek baar bharo</div>
    </div>

    <!-- Profile Photo Upload -->
    <div class="ft-reg-field">
      <label class="ft-reg-label">PROFILE PHOTO <span class="ft-reg-req">*</span></label>
      <div class="ft-reg-photo-wrap">
        <div class="ft-reg-photo-preview" id="ft-reg-photo-preview">
          ${existingPhoto
            ? `<img src="${existingPhoto}" class="ft-reg-photo-img" id="ft-reg-photo-img" alt="Photo">`
            : `<div class="ft-reg-photo-placeholder" id="ft-reg-photo-img">📷</div>`}
        </div>
        <div class="ft-reg-photo-right">
          <button class="ft-reg-photo-btn" onclick="document.getElementById('ft-reg-photo-input').click()">
            ${existingPhoto ? '🔄 Change Photo' : '📷 Upload Photo'}
          </button>
          <input type="file" id="ft-reg-photo-input" accept="image/*" style="display:none" onchange="ftRegPhotoChange(event)">
          <div class="ft-reg-hint" style="margin-top:8px">
            ${existingPhoto
              ? 'Profile wali photo auto-load ho gayi ✓<br>Badalna chahein to upar click karein'
              : 'Result card mein dikhegi • Max size: 3MB<br>Yahan lagane se profile photo bhi update ho gi'}
          </div>
        </div>
      </div>
    </div>

    <div class="ft-reg-field">
      <label class="ft-reg-label">ROLL NUMBER</label>
      <input class="ft-reg-input ft-reg-readonly" type="text" value="${rollNo}" readonly>
      <div class="ft-reg-hint">Yeh aap ki unique ID hai — change nahi ho sakti</div>
    </div>

    <div class="ft-reg-field">
      <label class="ft-reg-label">FULL NAME <span class="ft-reg-req">*</span></label>
      <input class="ft-reg-input ft-reg-readonly" id="ft-reg-fullname" type="text" value="${user.name || ''}" readonly>
      <div class="ft-reg-hint">Signup wala naam — change nahi ho sakta</div>
    </div>

    <div class="ft-reg-field">
      <label class="ft-reg-label">FATHER NAME <span class="ft-reg-req">*</span></label>
      <input class="ft-reg-input" id="ft-reg-fathername" type="text" placeholder="Walid ka naam likhein" maxlength="60">
    </div>

    <div class="ft-reg-field">
      <label class="ft-reg-label">DATE OF BIRTH <span class="ft-reg-req">*</span></label>
      <div style="display:flex;gap:8px;align-items:center">
        <select class="ft-reg-input" id="ft-dob-day" style="flex:1" onchange="ftDobDayChange()">
          <option value="">Day</option>
          ${(()=>{
            const today = new Date();
            const a=[];
            for(let d=1;d<=today.getDate();d++)
              a.push(`<option value="${String(d).padStart(2,'0')}"${d===today.getDate()?' selected':''}>${d}</option>`);
            return a.join('');
          })()}
        </select>
        <select class="ft-reg-input" id="ft-dob-month" style="flex:1.2" onchange="ftDobMonthChange()">
          <option value="">Month</option>
          ${(()=>{
            const today = new Date();
            const names=['January','February','March','April','May','June','July','August','September','October','November','December'];
            return names.map((m,i)=>`<option value="${String(i+1).padStart(2,'0')}"${i===today.getMonth()?' selected':''}>${m}</option>`).join('');
          })()}
        </select>
        <select class="ft-reg-input" id="ft-dob-year" style="flex:1.2" onchange="ftDobYearChange()">
          <option value="">Year</option>
          ${(()=>{
            const today = new Date();
            const a=[];
            for(let yr=today.getFullYear();yr>=1900;yr--)
              a.push(`<option value="${yr}"${yr===today.getFullYear()?' selected':''}>${yr}</option>`);
            return a.join('');
          })()}
        </select>
      </div>
      <div class="ft-reg-hint">Day / Month / Year — aaj tak ki date lag sakti hai</div>
    </div>

    <div class="ft-reg-field">
      <label class="ft-reg-label">REGISTRATION NO</label>
      <input class="ft-reg-input ft-reg-readonly" type="text" value="${regNo}" readonly>
      <div class="ft-reg-hint">Auto-generated — userId / saal</div>
    </div>

    <div id="ft-reg-error" class="ft-reg-error" style="display:none">Baraye meherbani sab zarori fields bharo</div>

    <button class="mcq-start-btn" style="width:100%;margin-top:18px" onclick="ftSubmitRegForm('${regNo}')">
      ✅ Save & Start Test
    </button>
  </div>`;
}

/* ── DOB Dropdown helpers ── */
function ftDobRebuildDays() {
  const dayEl   = document.getElementById('ft-dob-day');
  const monthEl = document.getElementById('ft-dob-month');
  const yearEl  = document.getElementById('ft-dob-year');
  if (!dayEl || !monthEl || !yearEl) return;

  const today = new Date();
  const selMonth = parseInt(monthEl.value) || (today.getMonth() + 1);
  const selYear  = parseInt(yearEl.value)  || today.getFullYear();
  const curDay   = parseInt(dayEl.value)   || 0;

  /* Is month ka max day */
  const maxDayInMonth = new Date(selYear, selMonth, 0).getDate();

  /* Agar selected year+month aaj ka hai to future days nahi dikhane */
  const isCurrentYearMonth = (selYear === today.getFullYear() && selMonth === (today.getMonth() + 1));
  const maxAllowed = isCurrentYearMonth ? today.getDate() : maxDayInMonth;

  dayEl.innerHTML = '<option value="">Day</option>';
  for (let d = 1; d <= maxAllowed; d++) {
    const opt = document.createElement('option');
    opt.value = String(d).padStart(2, '0');
    opt.textContent = d;
    if (d === curDay) opt.selected = true;
    dayEl.appendChild(opt);
  }
  /* Agar curDay ab valid nahi to last valid day select karo */
  if (curDay > maxAllowed) {
    dayEl.value = String(maxAllowed).padStart(2, '0');
  }
}

function ftDobYearChange() {
  const yearEl  = document.getElementById('ft-dob-year');
  const monthEl = document.getElementById('ft-dob-month');
  if (!yearEl || !monthEl) return;

  const today   = new Date();
  const selYear = parseInt(yearEl.value) || today.getFullYear();

  /* Agar future year select ho jaye to aaj ka saal force karo (safety) */
  if (selYear > today.getFullYear()) {
    yearEl.value = today.getFullYear();
    return ftDobYearChange();
  }

  /* Agar selected year aaj ka hai to future months hide karo */
  const isCurrentYear = selYear === today.getFullYear();
  const curMonth = parseInt(monthEl.value) || 0;
  const months = ['January','February','March','April','May','June','July','August','September','October','November','December'];

  monthEl.innerHTML = '<option value="">Month</option>';
  const maxMonth = isCurrentYear ? (today.getMonth() + 1) : 12;
  for (let i = 0; i < maxMonth; i++) {
    const opt = document.createElement('option');
    opt.value = String(i + 1).padStart(2, '0');
    opt.textContent = months[i];
    if ((i + 1) === curMonth) opt.selected = true;
    monthEl.appendChild(opt);
  }
  /* Agar curMonth ab valid nahi to last valid month select karo */
  if (curMonth > maxMonth) {
    monthEl.value = String(maxMonth).padStart(2, '0');
  }

  ftDobRebuildDays();
}

function ftDobMonthChange() {
  ftDobRebuildDays();
}

function ftDobDayChange() {
  /* Nothing extra needed — just validation on submit */
}

/* Photo preview on file select */
function ftRegPhotoChange(event) {
  const file = event.target.files && event.target.files[0];
  if (!file) return;
  if (!file.type.startsWith('image/')) {
    alert('Sirf image file select karein');
    return;
  }
  if (file.size > 3 * 1024 * 1024) {
    alert('Image 3MB se choti honi chahiye');
    return;
  }
  const reader = new FileReader();
  reader.onload = function() {
    const preview = document.getElementById('ft-reg-photo-preview');
    if (preview) {
      preview.innerHTML = `<img src="${reader.result}" class="ft-reg-photo-img" id="ft-reg-photo-img" alt="Photo">`;
    }
    /* Store temporarily on window for submit */
    window._ftRegPhotoData = reader.result;
  };
  reader.readAsDataURL(file);
}

function ftSubmitRegForm(regNo) {
  const fullName   = (document.getElementById('ft-reg-fullname')   || {}).value  || '';
  const fatherName = (document.getElementById('ft-reg-fathername') || {}).value  || '';
  const errEl = document.getElementById('ft-reg-error');

  /* ── Photo required check ── */
  const user = ftGetUser();
  const hasExistingPhoto = user && user.email ? getProfilePhoto(user.email) : null;
  const hasNewPhoto = !!window._ftRegPhotoData;
  if (!hasExistingPhoto && !hasNewPhoto) {
    if (errEl) { errEl.textContent = '📷 Profile photo lazmi hai — pehle photo upload karein!'; errEl.style.display = 'block'; }
    return;
  }

  /* ── DOB from 3 dropdowns ── */
  const dobDay   = (document.getElementById('ft-dob-day')   || {}).value || '';
  const dobMonth = (document.getElementById('ft-dob-month') || {}).value || '';
  const dobYear  = (document.getElementById('ft-dob-year')  || {}).value || '';

  if (!dobDay || !dobMonth || !dobYear) {
    if (errEl) { errEl.textContent = 'Baraye meherbani Date of Birth mukammal bharo (Day, Month, Year)'; errEl.style.display = 'block'; }
    return;
  }

  /* Max date validation — aaj se aage nahi */
  const today = new Date();
  const selected = new Date(parseInt(dobYear), parseInt(dobMonth)-1, parseInt(dobDay));
  if (selected > today) {
    if (errEl) { errEl.textContent = 'Date of Birth aaj se aage nahi ho sakti!'; errEl.style.display = 'block'; }
    return;
  }

  /* Days in month check */
  const maxDay = new Date(parseInt(dobYear), parseInt(dobMonth), 0).getDate();
  if (parseInt(dobDay) > maxDay) {
    if (errEl) { errEl.textContent = `Is mahine mein sirf ${maxDay} din hain!`; errEl.style.display = 'block'; }
    return;
  }

  const dob = `${dobYear}-${dobMonth}-${dobDay}`;

  if (!fullName.trim() || !fatherName.trim()) {
    if (errEl) { errEl.textContent = 'Baraye meherbani sab zarori fields bharo'; errEl.style.display = 'block'; }
    return;
  }
  if (errEl) errEl.style.display = 'none';


  /* Save profile photo if newly uploaded here */
  if (window._ftRegPhotoData && user && user.email) {
    setProfilePhoto(user.email, window._ftRegPhotoData);
    /* Update topbar + dropdown avatar turant */
    const topbarSlot = document.getElementById('topbar-avatar-slot');
    if (topbarSlot) topbarSlot.innerHTML = `<img src="${window._ftRegPhotoData}" alt="" style="width:32px;height:32px;border-radius:50%;object-fit:cover;flex-shrink:0;display:block">`;
    const dropdownSlot = document.getElementById('dropdown-avatar-slot');
    if (dropdownSlot) dropdownSlot.innerHTML = `<img src="${window._ftRegPhotoData}" alt="" style="width:48px;height:48px;border-radius:50%;object-fit:cover;flex-shrink:0;display:block">`;
    window._ftRegPhotoData = null;
  }

  ftSaveRegInfo(user, {
    fullName:   fullName.trim(),
    fatherName: fatherName.trim(),
    dob:        dob,
    regNo:      regNo,
  });
  ftStartTest();
}

/* ── Start a fresh randomized test ── */
function ftStartTest() {
  const user = ftGetUser();
  const test = ftBuildTest(user, practiceState.level, practiceState.lang);
  ftMarkTestSeen(user, practiceState.level, practiceState.lang, test);
  ftState = { screen: 'test', test, user, timerHandle: null };
  ftMountPage();
}

/* ── Mount/remount whichever page (1/2/3) is active + (re)start its ticking timer ── */
function ftMountPage() {
  document.getElementById('page-content').innerHTML = renderFtTest();
  window.scrollTo({ top: 0, behavior: 'instant' });
  ftStartTicker();
}

function ftStartTicker() {
  if (ftState.timerHandle) clearInterval(ftState.timerHandle);
  ftState.timerHandle = setInterval(ftTick, 1000);
}
function ftStopTicker() {
  if (ftState.timerHandle) { clearInterval(ftState.timerHandle); ftState.timerHandle = null; }
}

function ftCurrentDeadline() {
  const t = ftState.test;
  if (t.page === 1) return t.page1DeadlineAt;
  if (t.page === 2) return t.page2DeadlineAt;
  return t.page3DeadlineAt;
}

function ftTick() {
  if (!ftState.test || ftState.screen !== 'test') { ftStopTicker(); return; }
  const remainMs = ftCurrentDeadline() - Date.now();
  const el = document.getElementById('ft-timer-val');
  if (el) {
    el.textContent = ftFormatTime(Math.max(0, remainMs));
    el.classList.toggle('ft-timer-low', remainMs <= 60000);
  }
  if (remainMs <= 0) {
    ftStopTicker();
    ftAdvancePage(true /* timedOut */);
  }
}

function ftFormatTime(ms) {
  const totalSec = Math.ceil(ms / 1000);
  const m = Math.floor(totalSec / 60);
  const s = totalSec % 60;
  return `${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
}

/* ══════════════════════════════════════════════════════════════
   Page Renderer Dispatcher
   ══════════════════════════════════════════════════════════════ */
function renderFtTest() {
  const t = ftState.test;
  if (t.page === 1) return ftRenderPage1();
  if (t.page === 2) return ftRenderPage2();
  return ftRenderPage3();
}

function ftTimerBar(label, total) {
  return `
  <div class="ft-timer-bar">
    <div class="ft-timer-label">${label}</div>
    <div class="ft-timer-val" id="ft-timer-val">${ftFormatTime(ftCurrentDeadline() - Date.now())}</div>
  </div>`;
}

/* ══════════════════════════════════════════════════════════════
   PAGE 1 — Q1: 20 MCQs (20 marks, 1 each)
   ══════════════════════════════════════════════════════════════ */
function ftRenderPage1() {
  const t = ftState.test;
  const optLetters = ['A', 'B', 'C', 'D'];
  const answeredCount = t.mcq.answers.filter(a => a !== null).length;

  const itemsHtml = t.mcq.questions.map((q, qi) => `
    <div class="ft-q-card" id="ft-mcq-${qi}">
      <div class="ft-q-num">Q1.${qi + 1}</div>
      <div class="ft-q-text">${ftEscHtml(q.q)}</div>
      <div class="mcq-options">
        ${q.options.map((opt, oi) => {
          const picked = t.mcq.answers[qi] === oi;
          return `<button class="mcq-opt${picked ? ' ft-picked' : ''}" onclick="ftPickMcq(${qi},${oi})">
            <span class="mcq-opt-letter">${optLetters[oi]}</span> ${ftEscHtml(opt)}
          </button>`;
        }).join('')}
      </div>
    </div>`).join('');

  return `
    <div class="ft-page">
      ${ftTimerBar('📝 Q1 — 20 MCQs (20 marks)')}
      <div class="ft-set-header" style="margin-bottom:14px">
        <div class="ft-set-header-q-num">Q1</div>
        <div class="ft-set-header-inner">
          <div class="ft-set-header-q">MCQs — Multiple Choice Questions <span class="ft-set-header-marks">🎯 20 marks</span></div>
          <div class="ft-set-note">📌 20 sawaal — har sahi jawab ke liye 1 mark. Galat jawab pe koi minus nahi!</div>
        </div>
      </div>
      <div class="ft-progress-note">${answeredCount} / ${t.mcq.questions.length} answered</div>
      ${itemsHtml}
      <button class="mcq-next-btn" onclick="ftSubmitPage1()">Submit &amp; Continue →</button>
    </div>`;
}

function ftPickMcq(qi, oi) {
  ftState.test.mcq.answers[qi] = oi;
  const card = document.getElementById('ft-mcq-' + qi);
  if (card) {
    const buttons = card.querySelectorAll('.mcq-opt');
    buttons.forEach((b, i) => b.classList.toggle('ft-picked', i === oi));
  }
}

function ftSubmitPage1() {
  ftAdvancePage(false);
}

/* ══════════════════════════════════════════════════════════════
   PAGE 2 — Q2, Q3, Q4: 12 each, best 10 count (60 marks, 2 each)
   ══════════════════════════════════════════════════════════════ */
function ftRenderSet(setKey, setLabel, qNum) {
  const t = ftState.test;
  const set = t.sets[setKey];
  const answeredCount = set.answers.filter(a => a !== null && a.trim() !== '').length;

  const itemsHtml = set.questions.map((q, qi) => `
    <div class="ft-q-card">
      <div class="ft-q-num">${qNum}.${qi + 1} <span class="ft-q-marks">(2 marks)</span></div>
      <div class="ft-q-text">${ftEscHtml(q.q)}</div>
      <input
        class="q-answer-input ft-short-input"
        type="text"
        placeholder="Apna jawab type karein..."
        value="${ftEscHtml(set.answers[qi] || '')}"
        oninput="ftSetAnswer('${setKey}',${qi},this.value)"
        autocomplete="off" autocorrect="off" spellcheck="false"
      >
    </div>`).join('');

  return `
    <div class="ft-set-block">
      <div class="ft-set-header">
        <div class="ft-set-header-q-num">${qNum}</div>
        <div class="ft-set-header-inner">
          <div class="ft-set-header-q">
            Short Answer Questions
            <span class="ft-set-header-marks">🎯 20 marks</span>
          </div>
          <div class="ft-set-note">📌 12 mein se koi bhi 10 jawab — sirf pehle 10 answered count honge (2 marks each)</div>
        </div>
      </div>
      <div class="ft-progress-note">${answeredCount} / 12 answered</div>
      ${itemsHtml}
    </div>`;
}

function ftRenderPage2() {
  return `
    <div class="ft-page">
      ${ftTimerBar('💻 Q2, Q3, Q4 — Short Answer (60 marks)')}
      ${ftRenderSet('q2', 'Q2', 'Q2')}
      ${ftRenderSet('q3', 'Q3', 'Q3')}
      ${ftRenderSet('q4', 'Q4', 'Q4')}
      <button class="mcq-next-btn" onclick="ftSubmitPage2()">Submit &amp; Continue →</button>
    </div>`;
}

function ftSetAnswer(setKey, qi, val) {
  ftState.test.sets[setKey].answers[qi] = val;
}

function ftSubmitPage2() {
  ftAdvancePage(false);
}

/* ══════════════════════════════════════════════════════════════
   PAGE 3 — Q5, Q6: Paragraph code-fix (20 marks, 10 each, partial credit)
   ══════════════════════════════════════════════════════════════ */
function ftCountMistakes(userCode, correctCode) {
  const userLines = String(userCode).replace(/\r\n/g, '\n').split('\n');
  const correctLines = String(correctCode).replace(/\r\n/g, '\n').split('\n');
  let mistakes = 0;
  const maxLen = Math.max(userLines.length, correctLines.length);
  for (let i = 0; i < maxLen; i++) {
    const ul = (userLines[i] || '').trimEnd();
    const cl = (correctLines[i] || '').trimEnd();
    if (ul !== cl) mistakes++;
  }
  return mistakes;
}

function ftRenderPage3() {
  const t = ftState.test;
  const qLabels = [5, 6, 7];

  const itemsHtml = t.paras.items.map((p, pi) => {
    const current = t.paras.answers[pi] !== null ? t.paras.answers[pi] : p.wrong;
    const initMistakes = ftCountMistakes(current, p.correct);
    return `
    <div class="ft-q-card">
      <div class="ft-q-num">Q${qLabels[pi]} <span class="ft-q-marks">(10 marks)</span></div>
      <div class="para-card" style="margin-top:10px">
        <div class="para-card-label">${practiceState.lang} code — galtiyan fix karein <span style="font-weight:400;font-size:10px;color:var(--muted)">(directly andar edit karo)</span></div>
        <textarea
          class="para-code-editor"
          id="ft-para-${pi}"
          spellcheck="false" autocorrect="off" autocapitalize="off" autocomplete="off"
          oninput="ftParaInput(${pi})"
          onkeydown="ftParaTab(event,${pi})"
        >${ftEscHtml(current)}</textarea>
        <div class="para-mistake-bar">
          <span class="para-mistake-count ${initMistakes === 0 ? 'no-mistakes' : 'has-mistakes'}" id="ft-para-count-${pi}">
            ${initMistakes} mistake${initMistakes === 1 ? '' : 's'}
          </span>
        </div>
      </div>
    </div>`;
  }).join('');

  return `
    <div class="ft-page">
      ${ftTimerBar('📄 Q5, Q6, Q7 — Code Fix (20 marks)')}
      <div class="ft-set-header" style="margin-bottom:14px">
        <div class="ft-set-header-q-num" style="background:var(--amber);color:#0F1115">Q5</div>
        <div class="ft-set-header-inner">
          <div class="ft-set-header-q">Code Fix — Paragraph Mistakes <span class="ft-set-header-marks" style="color:#F27B72">🔧 20 marks</span></div>
          <div class="ft-set-note" style="border-color:rgba(242,181,68,0.25);background:rgba(242,181,68,0.05);color:var(--amber)">⚡ Teen mein se koi bhi 2 karein — behtareen 2 attempts count hongi (10 marks each). 1 chhod sakte hain!</div>
        </div>
      </div>
      ${itemsHtml}
      <button class="mcq-next-btn" onclick="ftSubmitPage3()">✅ Final Submit</button>
    </div>`;
}

function ftParaInput(pi) {
  const ta = document.getElementById('ft-para-' + pi);
  if (!ta) return;
  ftState.test.paras.answers[pi] = ta.value;
  const p = ftState.test.paras.items[pi];
  const mistakes = ftCountMistakes(ta.value, p.correct);
  const countEl = document.getElementById('ft-para-count-' + pi);
  if (countEl) {
    countEl.textContent = `${mistakes} mistake${mistakes === 1 ? '' : 's'}`;
    countEl.className = 'para-mistake-count ' + (mistakes === 0 ? 'no-mistakes' : 'has-mistakes');
  }
}

function ftParaTab(e, pi) {
  if (e.key !== 'Tab') return;
  e.preventDefault();
  const ta = e.target;
  const start = ta.selectionStart, end = ta.selectionEnd;
  ta.value = ta.value.substring(0, start) + '  ' + ta.value.substring(end);
  ta.selectionStart = ta.selectionEnd = start + 2;
  ftParaInput(pi);
}

function ftSubmitPage3() {
  ftAdvancePage(false); /* page goes to 4 → triggers grading */
}

/* ══════════════════════════════════════════════════════════════
   Page advance controller — handles both manual Submit and
   timer-timeout transitions identically (whatever is filled in
   counts, whatever isn't stays unanswered/wrong).
   ══════════════════════════════════════════════════════════════ */
function ftAdvancePage(timedOut) {
  ftStopTicker();
  const t = ftState.test;

  if (t.page === 1) {
    t.page = 2;
    t.page2DeadlineAt = Date.now() + 60 * 60 * 1000;
    ftMountPage();
    return;
  }
  if (t.page === 2) {
    t.page = 3;
    t.page3DeadlineAt = Date.now() + 35 * 60 * 1000;
    ftMountPage();
    return;
  }
  /* page 3 done → grade & finish */
  ftFinishTest();
}

/* ══════════════════════════════════════════════════════════════
   Grading
   ══════════════════════════════════════════════════════════════ */
function ftNormalize(str) {
  return String(str || '').toLowerCase().replace(/\s+/g, ' ').trim();
}

function ftGradeTest() {
  const t = ftState.test;

  /* Q1 — MCQs: 1 mark each, 20 total */
  const mcqResults = t.mcq.questions.map((q, qi) => {
    const picked = t.mcq.answers[qi];
    const attempted = picked !== null;
    const correct = attempted && picked === q.ans;
    return { q: q.q, options: q.options, correctIdx: q.ans, pickedIdx: picked, attempted, correct, marks: correct ? 1 : 0 };
  });
  const mcqMarks = mcqResults.reduce((s, r) => s + r.marks, 0);

  /* Q2/Q3/Q4 — short answer: 2 marks each, only first 10 *answered*
     (non-empty) per set count toward the score. All 12 are shown in
     review either way. */
  function gradeSet(set) {
    let countedSoFar = 0;
    return set.questions.map((q, qi) => {
      const raw = set.answers[qi];
      const attempted = raw !== null && String(raw).trim() !== '';
      let counted = false, correct = false, marks = 0;
      if (attempted && countedSoFar < 10) {
        counted = true;
        countedSoFar++;
        correct = ftNormalize(raw) === ftNormalize(q.ans);
        marks = correct ? 2 : 0;
      }
      return { q: q.q, correctAns: q.ans, userAns: raw, attempted, counted, correct, marks };
    });
  }
  const q2Results = gradeSet(t.sets.q2);
  const q3Results = gradeSet(t.sets.q3);
  const q4Results = gradeSet(t.sets.q4);
  const shortMarks = [...q2Results, ...q3Results, ...q4Results].reduce((s, r) => s + r.marks, 0);

  /* Q5/Q6/Q7 — paragraphs: 10 marks each, partial credit by mistakes fixed.
     3 shown, but only the BEST 2 scores count toward the total (user is
     allowed to skip/leave one weak) — so a poor/untouched 3rd attempt
     never hurts the score. */
  const paraRawResults = t.paras.items.map((p, pi) => {
    const raw = t.paras.answers[pi];
    const attempted = raw !== null && String(raw).trim() !== '';
    const userCode = attempted ? raw : p.wrong;
    const totalMistakes = ftCountMistakes(p.wrong, p.correct) || (p.totalMistakes || 1);
    const remaining = ftCountMistakes(userCode, p.correct);
    const fixed = Math.max(0, totalMistakes - remaining);
    const rawMarks = Math.round((fixed / totalMistakes) * 10 * 10) / 10; /* 1 decimal */
    return { wrong: p.wrong, correct: p.correct, userCode, totalMistakes, fixed, remaining, attempted, rawMarks };
  });
  /* pick the indices of the best 2 raw scores to count */
  const bestTwoIdx = paraRawResults
    .map((r, i) => ({ i, score: r.rawMarks }))
    .sort((a, b) => b.score - a.score)
    .slice(0, 2)
    .map(x => x.i);
  const paraResults = paraRawResults.map((r, i) => {
    const counted = bestTwoIdx.includes(i);
    return { ...r, counted, marks: counted ? r.rawMarks : 0 };
  });
  const paraMarks = paraResults.reduce((s, r) => s + r.marks, 0);

  const totalMarks = Math.round((mcqMarks + shortMarks + paraMarks) * 10) / 10;
  const percent = Math.round((totalMarks / 100) * 1000) / 10;

  let grade;
  if (percent >= 90) grade = 'A+';
  else if (percent >= 80) grade = 'A';
  else if (percent >= 70) grade = 'B';
  else if (percent >= 60) grade = 'C';
  else if (percent >= 50) grade = 'D';
  else grade = 'F';

  return {
    mcqResults, q2Results, q3Results, q4Results, paraResults,
    mcqMarks, shortMarks, paraMarks, totalMarks, percent, grade,
  };
}

function ftFinishTest() {
  const t = ftState.test;
  const grading = ftGradeTest();
  t.completedAt = Date.now();

  const attempt = {
    id: t.id,
    level: t.level,
    lang: t.lang,
    startedAt: t.startedAt,
    completedAt: t.completedAt,
    test: t,        /* full raw test incl. every question + answer, for "Check Test" review */
    grading: grading,
  };
  ftSaveAttempt(ftState.user, attempt);
  /* Also sync to backend */
  if (typeof apiSaveFinalTestAttempt === 'function') {
    const g = attempt.grading || {};
    apiSaveFinalTestAttempt({
      date:       attempt.completedAt || new Date().toISOString(),
      lang:       attempt.lang,
      level:      attempt.level,
      mcqScore:   g.mcqScore   || 0,
      shortScore: g.shortScore || 0,
      paraScore:  g.paraScore  || 0,
      total:      g.total      || 0,
      grade:      g.grade      || '—',
      timeTaken:  attempt.test?.timeTaken || 0
    });
  }

  ftState.screen = 'done';
  ftState.lastGrading = grading;
  document.getElementById('page-content').innerHTML = renderFtSection();
  window.scrollTo({ top: 0, behavior: 'instant' });
}

/* ── Done screen — quick summary + links to full Test Result history ── */
function renderFtDone() {
  const g = ftState.lastGrading;
  const pct = g.percent;
  const u = ftState.user || {};
  const reg = ftGetRegInfo(u) || {};
  const photo = (u.email) ? getProfilePhoto(u.email) : null;
  const rollNo = u.userId ? String(u.userId).padStart(6,'0') : '------';
  const displayName   = reg.fullName   ? reg.fullName.toUpperCase()   : (u.name || u.username || 'Student').toUpperCase();
  const displayFather = reg.fatherName ? reg.fatherName.toUpperCase() : 'N/A';
  const displayDob    = reg.dob        ? reg.dob                      : 'N/A';
  const displayRegNo  = reg.regNo      ? reg.regNo                    : (u.userId ? u.userId + '/2026' : 'N/A');

  const grade = g.grade === 'A+' || pct >= 90
    ? { emoji:'🏆', label:'Shaandar!', color:'var(--green)', bg:'rgba(124,227,139,0.08)', border:'rgba(124,227,139,0.2)', msg:'Masha Allah — bohot aala performance!' }
    : pct >= 70
    ? { emoji:'👍', label:'Acha Kiya!', color:'var(--amber)', bg:'rgba(242,181,68,0.08)', border:'rgba(242,181,68,0.2)', msg:'Acha result — thodi aur mehnat se aur upar jao!' }
    : { emoji:'💪', label:'Mazeed Koshish!', color:'#F27B72', bg:'rgba(242,123,114,0.08)', border:'rgba(242,123,114,0.2)', msg:'Koi baat nahi! Practice karo aur dobara koshish karo.' };

  const circumference = 2 * Math.PI * 38;
  const dashOffset = circumference - (pct / 100) * circumference;

  const markBreakdown = [
    { label: 'MCQs (Q1)', marks: g.mcqMarks,   max: 20, icon: '📝' },
    { label: 'Short Qs', marks: g.shortMarks,   max: 60, icon: '💻' },
    { label: 'Paragraph', marks: g.paraMarks,   max: 20, icon: '📄' },
  ];

  return `
  <div class="stylish-result">
    <div class="result-grade-badge" style="background:${grade.bg};border:1px solid ${grade.border};color:${grade.color}">
      ${grade.emoji} ${grade.label}
    </div>

    <div class="result-main-title">Complete Final Test! 🎓</div>

    <!-- Student Info Card -->
    <div class="ft-done-info-card">
      <div class="ft-done-photo-wrap">
        ${photo
          ? `<img src="${photo}" class="ft-done-photo-img" alt="Photo">`
          : `<div class="ft-done-photo-placeholder">📷</div>`}
      </div>
      <div class="ft-done-info-rows">
        <div class="ft-done-info-row"><span class="ft-done-info-key">ROLL NO</span><span class="ft-done-info-val">${rollNo}</span></div>
        <div class="ft-done-info-row"><span class="ft-done-info-key">FULL NAME</span><span class="ft-done-info-val">${displayName}</span></div>
        <div class="ft-done-info-row"><span class="ft-done-info-key">FATHER NAME</span><span class="ft-done-info-val">${displayFather}</span></div>
        <div class="ft-done-info-row"><span class="ft-done-info-key">DATE OF BIRTH</span><span class="ft-done-info-val">${displayDob}</span></div>
        <div class="ft-done-info-row"><span class="ft-done-info-key">REG NO</span><span class="ft-done-info-val">${displayRegNo}</span></div>
      </div>
    </div>

    <!-- Circle -->
    <div class="result-circle-wrap">
      <svg width="100" height="100" viewBox="0 0 100 100">
        <circle cx="50" cy="50" r="38" fill="none" stroke="var(--border)" stroke-width="7"/>
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

    <div class="result-fraction">
      <span class="result-fraction-num" style="color:${grade.color}">${g.totalMarks}</span>
      <span class="result-fraction-div">/</span>
      <span class="result-fraction-den">100</span>
    </div>
    <div class="result-fraction-label">Grade: <strong style="color:${grade.color}">${g.grade}</strong></div>

    <!-- Breakdown -->
    <div class="result-breakdown-box">
      ${markBreakdown.map(b => `
      <div class="result-breakdown-row">
        <span class="result-breakdown-icon">${b.icon}</span>
        <span class="result-breakdown-label">${b.label}</span>
        <div class="result-breakdown-bar-wrap">
          <div class="result-breakdown-bar" style="width:${Math.round((b.marks/b.max)*100)}%;background:${grade.color}"></div>
        </div>
        <span class="result-breakdown-score" style="color:${grade.color}">${b.marks}/${b.max}</span>
      </div>`).join('')}
    </div>

    <div class="result-message" style="border-left:3px solid ${grade.color}">${grade.msg}</div>

    <div class="result-btns">
      <a class="result-btn-new primary" href="../testresult/index.html"
        style="background:${grade.color};color:#0F1115;text-decoration:none;display:flex;align-items:center;justify-content:center;gap:6px">
        📊 Poora Result
      </a>
      <button class="result-btn-new secondary" onclick="ftRestartFlow()">🔄 Naya Test</button>
    </div>
  </div>`;
}

function ftRestartFlow() {
  ftState = { screen: 'select', test: null, user: ftState.user, timerHandle: null };
  practiceState = { level: null, lang: null, step: 1 };
  practiceRender();
}

/* ══════════════════════════════════════════════════════════════
   Page mount + init
   ══════════════════════════════════════════════════════════════ */
function renderFinalTestPage() {
  document.getElementById('page-content').innerHTML = renderFinalTest();
  window.scrollTo({ top: 0, behavior: 'instant' });
  // Breadcrumb
  const subMap = { select: null, test: 'In Progress', submitting: 'Submitting...', done: 'Result' };
  const sub = practiceState.step >= 3 ? (subMap[ftState.screen] || null) : null;
  updateBreadcrumb('Final Test', '🧪',
    practiceState.step >= 2 ? practiceState.level : null,
    practiceState.step >= 3 ? practiceState.lang  : null,
    sub
  );
}

(function init() {
  const user = renderShell('finaltest');
  if (!user) return;
  ftState.user = user;
  initPractice(renderFinalTestPage);
})();
