/* ══════════════════════════════════════════════════════════════
   Test Result — history of Final Test attempts
   List → click attempt → [Result] marksheet  /  [Check Test] full review
   ══════════════════════════════════════════════════════════════ */

let trState = {
  screen: 'list',   /* 'list' | 'detail-menu' | 'result' | 'check' */
  attempts: [],
  activeId: null,
  user: null,
};

function trEscHtml(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function trFormatDate(ms) {
  const d = new Date(ms);
  return d.toLocaleDateString(undefined, { day: '2-digit', month: 'short', year: 'numeric' }) +
    ' · ' + d.toLocaleTimeString(undefined, { hour: '2-digit', minute: '2-digit' });
}

function trGradeClass(grade) {
  if (grade === 'F') return 'tr-grade-fail';
  if (grade === 'A+' || grade === 'A') return 'tr-grade-great';
  if (grade === 'B' || grade === 'C') return 'tr-grade-good';
  return 'tr-grade-normal';
}

function trGetAttempt(id) {
  return trState.attempts.find(a => a.id === id);
}

/* ── PDF Download — captures the currently visible result/check-test
   content area and saves it as a PDF using html2pdf.js (CDN). Buttons
   themselves are excluded from the capture via .no-pdf class. ── */
function trDownloadPdf(filename, elementId) {
  const el = document.getElementById(elementId);
  if (!el || typeof html2pdf === 'undefined') {
    alert('PDF download abhi load ho raha hai, thori dair mein dobara koshish karein.');
    return;
  }
  const btn = document.getElementById('tr-pdf-btn');
  const originalText = btn ? btn.textContent : '';
  if (btn) { btn.textContent = '⏳ PDF Bana Rahe Hain...'; btn.disabled = true; }

  /* Textareas (read-only code blocks) clip/scroll their content — html2canvas
     only captures the visible box. Temporarily expand each to its full
     scrollHeight (and disable internal scrolling) so every line is
     captured, then restore the original inline styles afterwards. */
  const textareas = el.querySelectorAll('textarea');
  const savedStyles = [];
  textareas.forEach(ta => {
    savedStyles.push({ el: ta, height: ta.style.height, overflow: ta.style.overflow });
    ta.style.height = ta.scrollHeight + 'px';
    ta.style.overflow = 'hidden';
  });

  const restore = () => {
    savedStyles.forEach(s => { s.el.style.height = s.height; s.el.style.overflow = s.overflow; });
    if (btn) { btn.textContent = originalText; btn.disabled = false; }
  };

  /* White-paper export — the marksheet is meant to look like a printable
     document, so we temporarily flag the body as "exporting" (CSS below
     switches the captured element to light/paper colors), capture with a
     WHITE canvas background, then revert back to the normal dark app UI. */
  document.body.classList.add('tr-exporting');

  /* Force the SAME fixed, phone-width layout for every capture of the
     MARKSHEET only (not Check Test, which needs its natural wider layout
     for code blocks) — no matter how wide the actual browser window is.
     Without this, a desktop browser would lay the marksheet out at
     desktop width before html2canvas snapshots it, even though
     .ms-compact-layout sets the same font-sizes/paddings everywhere —
     the *box* itself would still stretch wider on desktop. Pinning width
     here guarantees an identical "mobile / board-result" capture from
     any device. */
  const isMarksheet = elementId === 'tr-pdf-result';
  const savedWidth = el.style.width;
  const savedMaxWidth = el.style.maxWidth;
  const savedMargin = el.style.margin;
  if (isMarksheet) {
    el.style.width = '760px';
    el.style.maxWidth = '760px';
    el.style.margin = '0';
  }

  const restoreAll = () => {
    document.body.classList.remove('tr-exporting');
    if (isMarksheet) {
      el.style.width = savedWidth;
      el.style.maxWidth = savedMaxWidth;
      el.style.margin = savedMargin;
    }
    restore();
  };

  html2pdf()
    .set({
      margin: [6, 6, 6, 6],
      filename: filename,
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: isMarksheet
        ? { scale: 2, backgroundColor: '#FFFFFF', useCORS: true, windowWidth: 780 }
        : { scale: 2, backgroundColor: '#FFFFFF', useCORS: true },
      jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' },
      pagebreak: { mode: ['avoid-all', 'css', 'legacy'] },
    })
    .from(el)
    .save()
    .then(restoreAll)
    .catch(() => {
      restoreAll();
      alert('PDF download mein masla aaya, dobara koshish karein.');
    });
}

/* ══════════════════════════════════════════════════════════════
   Main Renderer
   ══════════════════════════════════════════════════════════════ */
function renderTestResultPage() {
  const container = document.getElementById('page-content');
  if (trState.screen === 'list')        return void (container.innerHTML = renderTrList());
  if (trState.screen === 'detail-menu') return void (container.innerHTML = renderTrDetailMenu());
  if (trState.screen === 'result')      return void (container.innerHTML = renderTrResult());
  if (trState.screen === 'check')       return void (container.innerHTML = renderTrCheck());
}

/* ── List Screen ── */
function renderTrList() {
  if (trState.attempts.length === 0) {
    return `
    <div class="section-title">📊 Test Result</div>
    <div class="section-sub">Aap ke Final Test attempts yahan dikhenge</div>
    <div class="placeholder-box">
      <div class="placeholder-icon">📭</div>
      <div class="placeholder-title">Abhi koi Final Test attempt nahi hai</div>
      <div class="placeholder-sub">Final Test section se ek test mukammal karein, result yahan aa jayega</div>
      <div style="margin-top:18px">
        <a class="result-btn primary" href="../finaltest/index.html" style="display:inline-block;text-decoration:none">🧪 Start Final Test</a>
      </div>
    </div>`;
  }

  const rows = trState.attempts.map(a => `
    <div class="tr-row" onclick="trOpenAttempt('${a.id}')">
      <div class="tr-row-main">
        <span class="lang-badge ${a.lang === 'HTML' ? 'html-badge' : a.lang === 'CSS' ? 'css-badge' : 'js-badge'}">${a.lang}</span>
        <span class="badge-level ${a.level === 'Easy' ? 'easy-badge' : a.level === 'Medium' ? 'medium-badge' : 'hard-badge'}">${a.level}</span>
        <span class="tr-row-date">${trFormatDate(a.completedAt)}</span>
      </div>
      <div class="tr-row-score">
        <span class="tr-score-num">${a.grading.totalMarks}/100</span>
        <span class="tr-score-pct">${a.grading.percent}%</span>
        <span class="tr-grade-chip ${trGradeClass(a.grading.grade)}">${a.grading.grade === 'Fail' ? 'F' : a.grading.grade}</span>
      </div>
    </div>`).join('');

  return `
    <div class="section-title">📊 Test Result</div>
    <div class="section-sub">Aap ke Final Test attempts — kisi bhi attempt par click karein</div>
    <div class="tr-list">${rows}</div>`;
}

function trOpenAttempt(id) {
  trState.activeId = id;
  trState.screen = 'detail-menu';
  renderTestResultPage();
}

/* ── Detail Menu — choose Result or Check Test ── */
function renderTrDetailMenu() {
  const a = trGetAttempt(trState.activeId);
  if (!a) { trState.screen = 'list'; return renderTrList(); }
  const g = a.grading;

  return `
  <button class="back-btn" onclick="trBackToList()">← Wapas List</button>
  <div class="mcq-intro-box">
    <div class="mcq-intro-icon">🧪</div>
    <div class="mcq-intro-title">${a.lang} ${a.level} — Final Test</div>
    <div class="section-sub" style="margin-bottom:18px">${trFormatDate(a.completedAt)}</div>
    <div class="mcq-intro-count" style="color:var(--accent)">${g.totalMarks}/100</div>
    <div class="mcq-intro-desc">${g.percent}% — Grade: <strong>${g.grade}</strong></div>
    <div style="display:flex;gap:12px;justify-content:center;flex-wrap:wrap;margin-top:10px">
      <button class="result-btn primary" onclick="trShowResult()">📋 Result</button>
      <button class="result-btn secondary" onclick="trShowCheck()">🔍 Check Test</button>
    </div>
  </div>`;
}

function trBackToList() {
  trState.screen = 'list';
  trState.activeId = null;
  renderTestResultPage();
}

function trShowResult() { trState.screen = 'result'; renderTestResultPage(); }
function trShowCheck()  { trState.screen = 'check';  renderTestResultPage(); }

/* ── Build a stable pseudo roll-number / serial from the attempt id,
   so the same attempt always shows the same roll no. (board-marksheet
   touch — not a real registration number, just cosmetic). ── */
function trRollNo(user, attempt) {
  const base = (attempt.id || '').replace(/\D/g, '').slice(-6).padStart(6, '0');
  const langCode = attempt.lang === 'HTML' ? 'HT' : attempt.lang === 'CSS' ? 'CS' : 'JS';
  return base;
}

function trCertNo(attempt) {
  const d = new Date(attempt.completedAt);
  const y = d.getFullYear();
  const serial = Math.abs(
    Array.from(String(attempt.id)).reduce((h, c) => ((h << 5) - h + c.charCodeAt(0)) | 0, 0)
  ) % 900000 + 100000;
  return `${y}/${serial}`;
}

/* Helper: per-section grade letter from percentage */
function trSecGrade(pct) {
  if (pct >= 90) return 'A+';
  if (pct >= 80) return 'A';
  if (pct >= 70) return 'B';
  if (pct >= 60) return 'C';
  if (pct >= 50) return 'D';
  return 'F';
}


function renderTrResult() {
  const a = trGetAttempt(trState.activeId);
  const g = a.grading;
  const pct = g.percent;
  const u = trState.user || {};
  const status = pct >= 50 ? 'PASS' : 'FAIL';
  const rollNo = trRollNo(u, a);
  const certNo = trCertNo(a);

  const sections = [
    { num:'01', name:'MCQs',                 detail:'Multiple Choice (1 mark each)',   marks: g.mcqMarks,                              max:20 },
    { num:'02', name:'Short Answer — Set A', detail:'Best 10 of 12 (2 marks each)',    marks: g.q2Results.reduce((s,r)=>s+r.marks,0),  max:20 },
    { num:'03', name:'Short Answer — Set B', detail:'Best 10 of 12 (2 marks each)',    marks: g.q3Results.reduce((s,r)=>s+r.marks,0),  max:20 },
    { num:'04', name:'Short Answer — Set C', detail:'Best 10 of 12 (2 marks each)',    marks: g.q4Results.reduce((s,r)=>s+r.marks,0),  max:20 },
  ];

  function biseSectionRow(s) {
    const sp  = parseFloat(((s.marks / s.max) * 100).toFixed(2));
    const sg  = trSecGrade(sp);
    const sst = sp >= 40 ? 'PASS' : 'FAIL';
    const dim = s.notCounted ? 'opacity:0.55;' : '';
    return `
    <tr style="${dim}">
      <td class="ms-td-center bise-td">${s.num}</td>
      <td class="bise-td">
        <div class="ms-subj-name">${s.name}${s.notCounted ? ' <span style="font-size:9px;color:#F27B72">(not counted)</span>' : ''}</div>
        <div class="ms-subj-detail">${s.detail}</div>
      </td>
      <td class="ms-td-center bise-td bise-marks">${s.marks}</td>
      <td class="ms-td-center bise-td">${sp.toFixed(2)}</td>
      <td class="ms-td-center bise-td">${sg}</td>
      <td class="ms-td-center bise-td bise-status ${sst === 'PASS' ? 'bise-pass' : 'bise-fail'}">${sst}</td>
    </tr>`;
  }

  /* Q5 = Code Fix — sirf 1 row, best 2 of 3 ka total (max 20) */
  const paraTotal = g.paraResults
    .filter(r => r.counted)
    .reduce((s, r) => s + (r.rawMarks !== undefined ? r.rawMarks : r.marks), 0);
  const subjectRows = sections.map(s => biseSectionRow(s)).join('')
    + biseSectionRow({
        num: '05',
        name: 'Code Fix \u2014 Paragraph Mistakes',
        detail: 'Best 2 of 3 paragraphs (10 marks each)',
        marks: paraTotal,
        max: 20,
      });

  const totalPct   = pct.toFixed ? pct.toFixed(2) : pct;
  const overallGrade = trSecGrade(parseFloat(totalPct));

  /* Registration info — user ne pehle Final Test se pehle bhara tha */
  const reg = ftGetRegInfo(u) || {};
  const displayName   = reg.fullName   ? reg.fullName.toUpperCase()   : trEscHtml((u.name || u.username || 'Student').toUpperCase());
  const displayFather = reg.fatherName ? reg.fatherName.toUpperCase() : 'N/A';
  const displayDob    = reg.dob        ? reg.dob                      : 'N/A';
  const displayRegNo  = reg.regNo      ? reg.regNo                    : certNo;

  return `
  <button class="back-btn no-pdf" onclick="trBackToMenu()">← Back</button>

  <div id="tr-pdf-result" class="marksheet ms-compact-layout">
    <div class="ms-border bise-paper">

      <div class="ms-watermark">CODEDRILL</div>

      <div class="bise-letterhead">
        <div class="bise-logo">&lt;/&gt;</div>
        <div class="bise-letterhead-center">
          <div class="bise-org-name">TEST RESULT</div>
          <div class="bise-org-sub">CodeDrill Board of Online Assessment</div>
        </div>
        <div class="bise-logo bise-logo-right">${status === 'PASS' ? '🏅' : '📋'}</div>
      </div>

      <div class="bise-double-rule"></div>

      <div class="bise-exam-title">${a.lang} Programming — ${a.level} Level &nbsp;·&nbsp; ANNUAL EXAMINATION ${new Date(a.completedAt).getFullYear()}</div>

      <div class="bise-info-photo-row">
        <table class="bise-info-table bise-info-table-slim">
          <tr><td class="bise-info-key">ROLL NO:</td><td class="bise-info-val">${rollNo}</td></tr>
          <tr><td class="bise-info-key">FULL NAME:</td><td class="bise-info-val">${displayName}</td></tr>
          <tr><td class="bise-info-key">FATHER NAME:</td><td class="bise-info-val">${displayFather}</td></tr>
          <tr><td class="bise-info-key">DATE OF BIRTH:</td><td class="bise-info-val">${displayDob}</td></tr>
          <tr><td class="bise-info-key">REGISTRATION NO:</td><td class="bise-info-val">${displayRegNo}</td></tr>
        </table>
        <div class="bise-photo-box">
          ${(() => {
            const ph = (trState.user && trState.user.email) ? getProfilePhoto(trState.user.email) : null;
            return ph
              ? `<img src="${ph}" class="bise-photo-img" alt="Photo">`
              : `<div class="bise-photo-placeholder">📷<br>PHOTO</div>`;
          })()}
        </div>
      </div>
      ${!reg.fatherName ? `
      <div class="tr-reg-edit-bar no-pdf">
        <span>⚠️ Father Name aur DOB missing hai — result card mein N/A dikh raha hai</span>
        <button class="tr-reg-edit-btn" onclick="trOpenRegEdit()">✏️ Info Add Karo</button>
      </div>` : ''}

      <div class="ms-marks-table-wrap">
        <table class="ms-marks-table bise-marks-table">
          <thead>
            <tr>
              <th class="ms-td-center bise-th">Q.NO</th>
              <th class="bise-th">NAME OF SUBJECTS</th>
              <th class="ms-td-center bise-th">MARKS OBTAIN</th>
              <th class="ms-td-center bise-th">PERCENTILE SCORE</th>
              <th class="ms-td-center bise-th">RELATIVE GRADE</th>
              <th class="ms-td-center bise-th">RESULT STATUS</th>
            </tr>
          </thead>
          <tbody>${subjectRows}</tbody>
          <tfoot>
            <tr class="ms-total-tr bise-total-tr">
              <td colspan="2" class="ms-total-label bise-td">MARKS OBTAINED:</td>
              <td class="ms-td-center bise-td bise-total-marks">${g.totalMarks} / 100</td>
              <td class="ms-td-center bise-td bise-total-marks">${totalPct}%</td>
              <td class="ms-td-center bise-td bise-total-marks">${overallGrade}</td>
              <td class="ms-td-center bise-td bise-status bise-total-status ${status === 'PASS' ? 'bise-pass' : 'bise-fail'}">${status}</td>
            </tr>
          </tfoot>
        </table>
      </div>

      <table class="ms-summary-table">
        <tr>
          <td><div class="ms-summary-label">MARKS OBTAINED</div><div class="ms-summary-value">${g.totalMarks} / 100</div></td>
          <td><div class="ms-summary-label">PERCENTILE SCORE</div><div class="ms-summary-value">${totalPct}%</div></td>
          <td><div class="ms-summary-label">RELATIVE GRADE</div><div class="ms-summary-value ms-grade-letter">${overallGrade}</div></td>
          <td><div class="ms-summary-label">RESULT STATUS</div><div class="ms-summary-value ms-result-${status.toLowerCase()}">${status}</div></td>
        </tr>
      </table>

      <table class="ms-sign-table">
        <tr>
          <td><div class="ms-sign-line"></div><div class="ms-sign-label">Examination Controller</div></td>
          <td><div class="ms-sign-line"></div><div class="ms-sign-label">Chief Invigilator</div></td>
          <td>
            <div class="ms-sign-stamp"><div class="ms-stamp-circle">VERIFIED</div></div>
            <div class="ms-sign-label">Official Seal</div>
          </td>
        </tr>
      </table>

      <div class="ms-footnote">
        This is a computer-generated marks certificate issued by CodeDrill. Errors and Omissions Excepted.
      </div>

    </div>
  </div>

  <button id="tr-pdf-btn" class="result-btn-new primary no-pdf ms-download-btn"
    onclick="trDownloadPdf('${a.lang}_${a.level}_Result.pdf','tr-pdf-result')">
    ⬇ Download / Print Result
  </button>`;
}

function trBackToMenu() { trState.screen = 'detail-menu'; renderTestResultPage(); }

/* ── Inline reg-edit modal on result screen ── */
function trOpenRegEdit() {
  const u = trState.user || {};
  const existing = ftGetRegInfo(u) || {};
  const rollNo = u.userId ? String(u.userId).padStart(6,'0') : '------';
  const regNo  = u.userId ? u.userId + '/2026' : '------';
  const overlay = document.createElement('div');
  overlay.id = 'tr-reg-overlay';
  overlay.innerHTML = `
    <div class="tr-reg-modal">
      <div class="tr-reg-modal-title">✏️ Student Info</div>
      <div class="ft-reg-field">
        <label class="ft-reg-label">ROLL NUMBER</label>
        <input class="ft-reg-input ft-reg-readonly" type="text" value="${rollNo}" readonly>
      </div>
      <div class="ft-reg-field">
        <label class="ft-reg-label">FULL NAME <span class="ft-reg-req">*</span></label>
        <input class="ft-reg-input" id="tr-edit-fullname" type="text" placeholder="Apna poora naam" maxlength="60" value="${existing.fullName || ''}">
      </div>
      <div class="ft-reg-field">
        <label class="ft-reg-label">FATHER NAME <span class="ft-reg-req">*</span></label>
        <input class="ft-reg-input" id="tr-edit-fathername" type="text" placeholder="Walid ka naam" maxlength="60" value="${existing.fatherName || ''}">
      </div>
      <div class="ft-reg-field">
        <label class="ft-reg-label">DATE OF BIRTH <span class="ft-reg-req">*</span></label>
        <input class="ft-reg-input" id="tr-edit-dob" type="date" value="${existing.dob || ''}" max="${new Date().toISOString().split('T')[0]}">
      </div>
      <div class="ft-reg-field">
        <label class="ft-reg-label">REGISTRATION NO</label>
        <input class="ft-reg-input ft-reg-readonly" type="text" value="${regNo}" readonly>
      </div>
      <div id="tr-edit-error" class="ft-reg-error" style="display:none">Baraye meherbani sab fields bharo</div>
      <div style="display:flex;gap:10px;margin-top:18px">
        <button class="result-btn primary" style="flex:1" onclick="trSaveRegEdit('${regNo}')">✅ Save Karein</button>
        <button class="result-btn secondary" style="flex:1" onclick="document.getElementById('tr-reg-overlay').remove()">Cancel</button>
      </div>
    </div>`;
  document.body.appendChild(overlay);
}

function trSaveRegEdit(regNo) {
  const fullName   = (document.getElementById('tr-edit-fullname')   || {}).value || '';
  const fatherName = (document.getElementById('tr-edit-fathername') || {}).value || '';
  const dob        = (document.getElementById('tr-edit-dob')        || {}).value || '';
  const errEl = document.getElementById('tr-edit-error');
  if (!fullName.trim() || !fatherName.trim() || !dob) {
    if (errEl) errEl.style.display = 'block';
    return;
  }
  const u = trState.user || {};
  ftSaveRegInfo(u, { fullName: fullName.trim(), fatherName: fatherName.trim(), dob, regNo });
  const ov = document.getElementById('tr-reg-overlay');
  if (ov) ov.remove();
  renderTestResultPage();
}

/* ══════════════════════════════════════════════════════════════
   CHECK TEST Screen — full read-only review
   ══════════════════════════════════════════════════════════════ */
function renderTrCheck() {
  const a = trGetAttempt(trState.activeId);
  const g = a.grading;
  const optLetters = ['A', 'B', 'C', 'D'];

  const mcqHtml = g.mcqResults.map((r, i) => `
    <div class="ft-q-card">
      <div class="ft-q-num">Q1.${i + 1}
        <span class="ft-review-tag ${r.attempted ? (r.correct ? 'correct' : 'wrong') : 'skip'}">
          ${r.attempted ? (r.correct ? '✓ Sahi' : '✗ Galat') : '— Not Attempted'}
        </span>
      </div>
      <div class="ft-q-text">${trEscHtml(r.q)}</div>
      <div class="mcq-options">
        ${r.options.map((opt, oi) => {
          let cls = 'mcq-opt';
          if (oi === r.correctIdx) cls += ' show-correct';
          else if (oi === r.pickedIdx) cls += ' wrong';
          return `<button class="${cls}" disabled><span class="mcq-opt-letter">${optLetters[oi]}</span> ${trEscHtml(opt)}</button>`;
        }).join('')}
      </div>
    </div>`).join('');

  function renderSetReview(results, qNum) {
    return results.map((r, i) => {
      const tag = !r.attempted ? 'skip' : (r.correct ? 'correct' : 'wrong');
      const tagText = !r.attempted ? '— Not Attempted' : (r.correct ? '✓ Sahi' : '✗ Galat');
      const countedNote = r.attempted && !r.counted ? ' <span style="color:var(--muted);font-weight:400">(extra — count nahi hua)</span>' : '';
      return `
      <div class="ft-q-card">
        <div class="ft-q-num">${qNum}.${i + 1} <span class="ft-q-marks">(${r.marks}/2)</span>
          <span class="ft-review-tag ${tag}">${tagText}</span>${countedNote}
        </div>
        <div class="ft-q-text">${trEscHtml(r.q)}</div>
        <div class="ft-review-answer-line ${r.attempted ? (r.correct ? 'correct' : 'wrong') : ''}">
          Aap ka jawab: <strong>${r.attempted ? trEscHtml(r.userAns) : '(khali)'}</strong>
        </div>
        ${(!r.correct) ? `<div class="ft-review-answer-line correct">Sahi jawab: <strong>${trEscHtml(r.correctAns)}</strong></div>` : ''}
      </div>`;
    }).join('');
  }

  const qLabels = [5, 6, 7];
  const paraHtml = g.paraResults.map((r, i) => `
    <div class="ft-q-card">
      <div class="ft-q-num">Q${qLabels[i]} <span class="ft-q-marks">(${r.marks}/10)</span>
        <span class="ft-review-tag ${r.remaining === 0 ? 'correct' : 'wrong'}">${r.fixed}/${r.totalMistakes} mistakes fixed</span>
        <span class="ft-review-tag ${r.counted ? 'correct' : 'skip'}">${r.counted ? '✓ Counted' : '— Not counted (best 2 of 3 me se chhoot gaya)'}</span>
      </div>
      <div class="para-card" style="margin-top:10px">
        <div class="para-card-label">Aap ka submitted code</div>
        <textarea class="para-code-editor ${r.remaining === 0 ? 'all-correct' : ''}" readonly>${trEscHtml(r.userCode)}</textarea>
      </div>
      <div class="para-card">
        <div class="para-card-label">✅ Sahi code</div>
        <textarea class="para-code-editor all-correct" readonly>${trEscHtml(r.correct)}</textarea>
      </div>
    </div>`).join('');

  return `
  <button class="back-btn no-pdf" onclick="trBackToMenu()">← Wapas</button>
  <div id="tr-pdf-check">
    <div class="section-title">🔍 Check Test</div>
    <div class="section-sub">${a.lang} · ${a.level} · ${trFormatDate(a.completedAt)} — read-only review</div>

    <div class="ft-set-header">Q1 — MCQs</div>
    ${mcqHtml}

    <div class="ft-set-header" style="margin-top:24px">Q2 — Short Answer</div>
    ${renderSetReview(g.q2Results, 'Q2')}
    <div class="ft-set-header" style="margin-top:24px">Q3 — Short Answer</div>
    ${renderSetReview(g.q3Results, 'Q3')}
    <div class="ft-set-header" style="margin-top:24px">Q4 — Short Answer</div>
    ${renderSetReview(g.q4Results, 'Q4')}

    <div class="ft-set-header" style="margin-top:24px">Q5 / Q6 / Q7 — Code Fix <span class="ft-set-note">(best 2 of 3 count)</span></div>
    ${paraHtml}
  </div>
  <button id="tr-pdf-btn" class="result-btn primary no-pdf" style="margin-top:18px;width:100%" onclick="trDownloadPdf('${a.lang}_${a.level}_CheckTest.pdf','tr-pdf-check')">⬇ Download PDF</button>`;
}

/* ══════════════════════════════════════════════════════════════
   Init
   ══════════════════════════════════════════════════════════════ */
(function init() {
  const user = renderShell('testresult');
  if (!user) return;
  trState.user = user;
  trState.attempts = ftGetAttempts(user);
  renderTestResultPage();
})();
