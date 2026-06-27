function renderProfile(u) {
  return `
  <div class="section-title" style="margin-bottom:20px">👤 Profile</div>
  <div class="profile-card">
    <div class="avatar-upload-wrap">
      <div class="avatar-photo-slot" id="avatar-photo-slot">${renderAvatarHtml(u, 70)}</div>
      <button class="avatar-cam-btn" onclick="document.getElementById('avatar-file-input').click()" title="Change profile photo">📷</button>
      <input type="file" id="avatar-file-input" accept="image/*" style="display:none" onchange="handleAvatarUpload(event)">
    </div>
    <div class="profile-info">
      <h2>${u.name}</h2>
      <p>@${u.username} · ${u.email}</p>
      <p class="avatar-hint" id="avatar-hint">Click the 📷 icon to upload a profile photo</p>
    </div>
  </div>
  <div class="stats-row" id="stats-row">
    <div class="stat-card"><div class="stat-num" id="stat-mcqs">…</div><div class="stat-label">MCQs Solved</div></div>
    <div class="stat-card"><div class="stat-num" id="stat-questions">…</div><div class="stat-label">Questions Done</div></div>
    <div class="stat-card"><div class="stat-num" id="stat-para">…</div><div class="stat-label">Paragraphs Fixed</div></div>
    <div class="stat-card"><div class="stat-num" id="stat-rank">—</div><div class="stat-label">Current Rank</div></div>
  </div>`;
}

/* ── Avatar upload handler ──
   User jab file choose karta hai to use base64 (data URL) mein convert
   karte hain (FileReader se) aur localStorage mein save kar dete hain.
   Phir avatar preview turant update ho jata hai — page reload ki zarurat
   nahi. Validation: sirf image files, max ~3MB (localStorage limits ka
   khayal rakhte hue). ── */
function handleAvatarUpload(event) {
  const file = event.target.files && event.target.files[0];
  if (!file) return;
  const hintEl = document.getElementById('avatar-hint');

  if (!file.type.startsWith('image/')) {
    if (hintEl) { hintEl.textContent = 'Please select a valid image file!'; hintEl.classList.add('avatar-hint-error'); }
    return;
  }
  if (file.size > 3 * 1024 * 1024) {
    if (hintEl) { hintEl.textContent = 'Image is too large — please pick one under 3MB.'; hintEl.classList.add('avatar-hint-error'); }
    return;
  }

  const reader = new FileReader();
  reader.onload = function () {
    const dataUrl = reader.result;
    const user = getUser();
    if (!user) return;
    const saved = setProfilePhoto(user.email, dataUrl);
    /* Also sync to backend */
    if (typeof apiSaveProfilePhoto === 'function') apiSaveProfilePhoto(dataUrl);

    /* Photo save ho gayi — ab directly dataUrl se img tag banao,
       renderAvatarHtml localStorage se dubara read karta hai jo abhi
       update hua hai isliye fresh call theek kaam kare gi */
    const slot = document.getElementById('avatar-photo-slot');
    if (slot) slot.innerHTML = `<img src="${dataUrl}" alt="" style="width:70px;height:70px;border-radius:50%;object-fit:cover;flex-shrink:0;display:block">`;

    /* Topbar avatar aur dropdown preview bhi turant update ho jayein */
    const topbarSlot = document.getElementById('topbar-avatar-slot');
    if (topbarSlot) topbarSlot.innerHTML = `<img src="${dataUrl}" alt="" style="width:32px;height:32px;border-radius:50%;object-fit:cover;flex-shrink:0;display:block">`;
    const dropdownSlot = document.getElementById('dropdown-avatar-slot');
    if (dropdownSlot) dropdownSlot.innerHTML = `<img src="${dataUrl}" alt="" style="width:48px;height:48px;border-radius:50%;object-fit:cover;flex-shrink:0;display:block">`;

    if (hintEl) {
      hintEl.classList.remove('avatar-hint-error');
      hintEl.textContent = saved ? 'Profile photo updated ✓' : 'Could not save photo — storage might be full.';
    }
  };
  reader.onerror = function () {
    if (hintEl) { hintEl.textContent = 'Could not read that image, please try another.'; hintEl.classList.add('avatar-hint-error'); }
  };
  reader.readAsDataURL(file);
}

(function init() {
  const user = renderShell('profile');
  if (!user) return;
  document.getElementById('page-content').innerHTML = renderProfile(user);

  /* Load real stats from backend */
  if (typeof apiGet === 'function') {
    apiGet('/api/user/me').then(data => {
      if (data && !data.error) {
        const mcqEl = document.getElementById('stat-mcqs');
        const qEl   = document.getElementById('stat-questions');
        const pEl   = document.getElementById('stat-para');
        if (mcqEl) mcqEl.textContent = data.mcqsSolved || 0;
        if (qEl)   qEl.textContent   = data.questionsDone || 0;
        if (pEl)   pEl.textContent   = data.paragraphsFixed || 0;
      }
    }).catch(() => {
      /* fallback: show 0 */
      ['stat-mcqs','stat-questions','stat-para'].forEach(id => {
        const el = document.getElementById(id);
        if (el) el.textContent = 0;
      });
    });
  }
})();
