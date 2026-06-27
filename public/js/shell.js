/* ── App Shell (Topbar + Sidebar) ──
   Har "inner" page (home/mcqs/questions/paragraph/profile/rank) apni
   index.html me <div class="app" id="app"><div class="main" id="page-content"></div></div>
   rakhti hai. Ye function login check karta hai, phir sidebar+topbar ko
   #app ke shuru me insert kar deta hai. */

/* ── Shared Avatar Renderer ──
   Agar user ne profile photo lagayi hai to wo dikhati hai, warna initials
   wala gradient circle fallback ke taur par dikhta hai. size px mein. */
function renderAvatarHtml(user, size) {
  const initials = user.name.split(' ').map(w => w[0]).join('').toUpperCase().slice(0, 2);
  // Check localStorage first (for freshly uploaded photos), then backend photo
  const photo = getProfilePhoto(user.email) || user.profilePhoto || null;
  if (photo) {
    return `<img src="${photo}" alt="${initials}" style="width:${size}px;height:${size}px;border-radius:50%;object-fit:cover;flex-shrink:0;display:block">`;
  }
  return `<div style="width:${size}px;height:${size}px;background:var(--green);border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:${Math.round(size*0.37)}px;font-weight:700;color:#0F1115;flex-shrink:0">${initials}</div>`;
}

function renderShell(activePage) {
  const user = requireAuth();
  if (!user) return null;

  const navHtml = NAV.map(n => `
    <a class="nav-item ${activePage === n.id ? 'active' : ''}" href="../${n.id}/index.html">
      <span class="nav-icon">${n.icon}</span>
      <span class="nav-label">${n.label}</span>
    </a>`).join('');

  const shellHtml = `
  <div class="sidebar-overlay" onclick="toggleSidebar(false)"></div>
  <div class="sidebar">
    <div class="sidebar-header">
      <div class="brand">&lt;/&gt; Code<span class="brand-code">Drill</span></div>
      <button class="sidebar-close" onclick="toggleSidebar(false)">✕</button>
    </div>
    <div class="nav-section">Menu</div>
    ${navHtml}
    <div style="border-top:1px solid var(--border);margin:12px 0 0"></div>
    <div class="nav-item" onclick="doLogout()" style="color:#F27B72;cursor:pointer;">
      <span class="nav-icon">🚪</span>
      <span class="nav-label">Logout</span>
    </div>
  </div>

  <div class="topbar">
    <button class="hamburger" onclick="toggleSidebar()" aria-label="Menu">
      <span></span><span></span><span></span>
    </button>
    <div class="brand">&lt;/&gt; Code<span class="brand-code">Drill</span></div>
    <div class="topbar-user-wrap" style="margin-left:auto;position:relative">
      <div class="topbar-user-trigger" onclick="toggleUserDropdown(event)">
        <span id="topbar-avatar-slot">${renderAvatarHtml(user, 32)}</span>
        <span style="font-size:13px;color:var(--muted)">${user.username}</span>
      </div>
      <div class="user-dropdown" id="user-dropdown">
        ${renderUserDropdownRows(user)}
      </div>
    </div>
  </div>

  <div class="breadcrumb-bar" id="breadcrumb-bar"></div>`;

  document.getElementById('app').insertAdjacentHTML('afterbegin', shellHtml);
  document.addEventListener('click', closeUserDropdownOnOutsideClick);
  return user;
}

/* Profile data ki rows banata hai jo dropdown ke andar dikhti hain */
function renderUserDropdownRows(user) {
  const full = (findUserByEmail && user.email) ? findUserByEmail(user.email) : null;
  const rows = [
    { label: 'Full Name', value: user.name || '—', icon: '👤' },
    { label: 'Username',  value: '@' + (user.username || '—'), icon: '🏷️' },
    { label: 'Email',     value: user.email || '—', icon: '📧' },
    { label: 'Phone',     value: (full && full.phone) ? full.phone : 'Not provided', icon: '📱' },
  ];
  return `
    <div class="user-dropdown-photo-row" id="dropdown-avatar-slot">
      ${renderAvatarHtml(user, 48)}
    </div>` +
    rows.map(r => `
    <div class="user-dropdown-row">
      <span class="udr-icon">${r.icon}</span>
      <span class="udr-label">${r.label}</span>
      <span class="udr-value">${r.value}</span>
    </div>`).join('') + `
    <div class="user-dropdown-row udr-logout" onclick="doLogout()">
      <span class="udr-icon">🚪</span>
      <span class="udr-label">Logout</span>
      <span class="udr-value"></span>
    </div>`;
}

function toggleUserDropdown(e) {
  e.stopPropagation();
  const dd = document.getElementById('user-dropdown');
  if (dd) dd.classList.toggle('open');
}

function closeUserDropdownOnOutsideClick(e) {
  const dd = document.getElementById('user-dropdown');
  const trigger = document.querySelector('.topbar-user-trigger');
  if (!dd || !dd.classList.contains('open')) return;
  if (trigger && trigger.contains(e.target)) return;
  if (dd.contains(e.target)) return;
  dd.classList.remove('open');
}

/* ── Breadcrumb updater ──
   pageLabel : e.g. 'MCQs', 'Coding Questions', 'Paragraph Mistakes', 'Final Test'
   pageIcon  : emoji
   level     : 'Easy' | 'Medium' | 'Hard' | null
   lang      : 'HTML' | 'CSS' | 'JS' | null
   subLabel  : optional extra crumb e.g. 'Quiz', 'Result' */
function updateBreadcrumb(pageLabel, pageIcon, level, lang, subLabel) {
  const bar = document.getElementById('breadcrumb-bar');
  if (!bar) return;

  if (!level && !lang && !subLabel) {
    bar.classList.remove('visible');
    bar.innerHTML = '';
    return;
  }

  const sep = '<span class="bc-sep">›</span>';
  const levelClass = level ? level.toLowerCase() : '';
  const langClass  = lang  ? lang.toLowerCase()  : '';

  let html = `<span class="bc-item bc-page">${pageIcon} ${pageLabel}</span>`;

  if (level) {
    html += sep;
    html += `<span class="bc-item"><span class="bc-pill ${levelClass}">${level}</span></span>`;
  }
  if (lang) {
    html += sep;
    html += `<span class="bc-item"><span class="bc-pill ${langClass}">${lang}</span></span>`;
  }
  if (subLabel) {
    html += sep;
    html += `<span class="bc-item" style="color:var(--muted);font-weight:500">${subLabel}</span>`;
  }

  bar.innerHTML = html;
  bar.classList.add('visible');
}

function doLogout() {
  clearUser();
  if (typeof apiSetToken === 'function') apiSetToken(null);
  window.location.href = '../auth/index.html';
}
