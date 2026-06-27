/* ── Invite Friends Page JS ── */

const pageContent = document.getElementById('page-content');

/* Avatar color palette */
const AVATAR_COLORS = [
  '#7CE38B','#F2B544','#6C9BF0','#F27B72','#C77EE3',
  '#4ECDC4','#FF6B6B','#95E1D3','#F8B195','#A8D8EA'
];

function avatarColor(str) {
  let hash = 0;
  for (let i = 0; i < str.length; i++) hash = str.charCodeAt(i) + ((hash << 5) - hash);
  return AVATAR_COLORS[Math.abs(hash) % AVATAR_COLORS.length];
}

function getInitials(name) {
  return (name || '?').split(' ').map(w => w[0]).join('').toUpperCase().slice(0, 2);
}

function formatDate(iso) {
  if (!iso) return '';
  const d = new Date(iso);
  return d.toLocaleDateString('en-PK', { day: '2-digit', month: 'short', year: 'numeric' });
}

/* ── Render full invite page ── */
function renderInvitePage(user) {
  const stats   = getTeamStats(user.userId);
  const refLink = getReferralLink(user.username);
  const invitedByUserId = getInvitedBy(user.userId);

  /* Who invited me? */
  let invitedByBanner = '';
  if (invitedByUserId) {
    const allUsers   = getRegisteredUsers();
    const referrer   = allUsers.find(u => u.userId === invitedByUserId);
    const refName    = referrer ? referrer.username : 'Unknown';
    invitedByBanner  = `
      <div class="invited-by-banner">
        <span>🤝</span>
        <span>Aapko <b>@${refName}</b> ne invite kiya tha</span>
      </div>`;
  }

  /* Team members HTML */
  const membersHtml = stats.members.length === 0
    ? `<div class="team-empty">
        <span class="team-empty-icon">🌱</span>
        <div class="team-empty-text">
          Abhi koi member nahi hai.<br>
          Niche diya gaya link share karein aur apni team banayein!
        </div>
       </div>`
    : stats.members.map((m, i) => {
        const color    = avatarColor(m.username || '');
        const initials = getInitials(m.name);
        const dateStr  = formatDate(m.joinedAt);
        const active   = m.active !== false;
        return `
        <div class="team-member-row">
          <span class="member-num">#${i + 1}</span>
          <div class="team-avatar" style="background:${color};">${initials}</div>
          <div class="team-member-info">
            <div class="team-member-name">${m.name}</div>
            <div class="team-member-username">@${m.username}</div>
          </div>
          <div class="team-member-meta">
            <div class="team-joined-date">${dateStr}</div>
            <span class="status-badge ${active ? 'active' : 'inactive'}">${active ? '● Active' : '○ Inactive'}</span>
          </div>
        </div>`;
      }).join('');

  pageContent.innerHTML = `
  <div class="invite-page">

    <!-- Hero -->
    <div class="invite-hero">
      <span class="invite-hero-icon">🔗</span>
      <h1>Share Link & Invite Your Friends</h1>
      <p>Share your referral link — when someone signs up using this link,<br>they will automatically be added to your team.</p>
    </div>

    <!-- Stats -->
    <div class="invite-stats-row">
      <div class="invite-stat-card">
        <span class="invite-stat-num">${stats.total}</span>
        <span class="invite-stat-label">Total Members</span>
      </div>
      <div class="invite-stat-card">
        <span class="invite-stat-num amber">${stats.active}</span>
        <span class="invite-stat-label">Active</span>
      </div>
      <div class="invite-stat-card">
        <span class="invite-stat-num red">${stats.inactive}</span>
        <span class="invite-stat-label">Inactive</span>
      </div>
    </div>

    ${invitedByBanner}

    <!-- Referral Link Card -->
    <div class="invite-card">
      <div class="invite-card-title">📎 Referral Link</div>
      <div class="invite-link-box">
        <span class="invite-link-text" id="referral-link-text">${refLink}</span>
        <button class="invite-copy-btn" id="copy-btn" onclick="copyReferralLink()">📋 Copy Link</button>
      </div>
      <div style="display:flex;align-items:center;gap:10px;flex-wrap:wrap;">
        <span class="invite-code-chip">Invite Code: <span>${user.username}</span></span>
        <span style="font-size:12px;color:var(--muted);"></span>
      </div>
    </div>

    <!-- Team Members -->
    <div class="invite-card">
      <div class="team-section-header">
        <div class="team-section-title">👥 Meri Team</div>
        ${stats.total > 0 ? `<span class="team-count-badge">${stats.total} Members</span>` : ''}
      </div>
      ${membersHtml}
    </div>

  </div>

  <!-- Toast -->
  <div class="invite-toast" id="invite-toast">✅ Link Copy Ho Gaya!</div>`;
}

/* ── Copy link function ── */
function copyReferralLink() {
  const linkText = document.getElementById('referral-link-text')?.textContent || '';
  const copyBtn  = document.getElementById('copy-btn');
  const toast    = document.getElementById('invite-toast');

  navigator.clipboard.writeText(linkText).then(() => {
    if (copyBtn) {
      copyBtn.textContent = '✅ Copied!';
      copyBtn.classList.add('copied');
      setTimeout(() => {
        copyBtn.textContent = '📋 Copy Link';
        copyBtn.classList.remove('copied');
      }, 2000);
    }
    if (toast) {
      toast.classList.add('show');
      setTimeout(() => toast.classList.remove('show'), 2500);
    }
  }).catch(() => {
    /* Fallback for older browsers */
    const el = document.createElement('textarea');
    el.value = linkText;
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
    if (toast) {
      toast.classList.add('show');
      setTimeout(() => toast.classList.remove('show'), 2500);
    }
  });
}

/* ── Init ── */
(function init() {
  const user = renderShell('invite');
  if (!user) return;
  renderInvitePage(user);
})();
