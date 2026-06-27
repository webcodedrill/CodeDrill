/* ── Rank Page JS ──
   Sab registered users ko dikhata hai — Final Test diya ho ya nahi.
   Blank screen fix: try/catch around every localStorage call,
   aur td ke andar flex div properly wrapped hai.
*/

let rankState = {
  filter: 'all',
  sort:   'total',
  search: ''
};

const GRADE_CFG = {
  'A+': { color: '#7CE38B', bg: '#7CE38B1A', border: '#7CE38B44' },
  'A':  { color: '#7CE38B', bg: '#7CE38B14', border: '#7CE38B33' },
  'B':  { color: '#6C9BF0', bg: '#6C9BF01A', border: '#6C9BF044' },
  'C':  { color: '#F2B544', bg: '#F2B5441A', border: '#F2B54444' },
  'D':  { color: '#F27B72', bg: '#F27B721A', border: '#F27B7244' },
  'F':  { color: '#8B92A5', bg: '#8B92A514', border: '#8B92A530' },
  'Fail': { color: '#8B92A5', bg: '#8B92A514', border: '#8B92A530' }, /* legacy */
  '—':  { color: '#4a5068', bg: '#1E2230',   border: '#2A2F3E' },
};

const AVATAR_COLORS = [
  '#7CE38B','#F2B544','#6C9BF0','#F27B72','#C77EE3',
  '#4ECDC4','#F8B195','#95E1D3','#A8D8EA','#FFD93D'
];

function avatarColor(str) {
  let h = 0;
  for (let i = 0; i < (str||'x').length; i++)
    h = (str||'x').charCodeAt(i) + ((h << 5) - h);
  return AVATAR_COLORS[Math.abs(h) % AVATAR_COLORS.length];
}

function getInitials(name) {
  return (name || '?').trim().split(/\s+/).map(w => w[0] || '').join('').toUpperCase().slice(0, 2) || '?';
}

/* ── Safe attempt reader — same key logic as state.js ftGetKey ── */
function safeGetAttempts(regUser) {
  try {
    const email = (regUser && regUser.email) ? regUser.email.replace(/[^a-zA-Z0-9]/g, '_') : '';
    if (!email) return [];
    const key = 'codedrill_finaltest_attempts_' + email;
    const raw = localStorage.getItem(key);
    return raw ? JSON.parse(raw) : [];
  } catch (e) {
    return [];
  }
}

/* ── Best score for a user (safe) ── */
function getBestScores(regUser) {
  try {
    const attempts = safeGetAttempts(regUser);
    if (!attempts || attempts.length === 0) return null;

    const langFilter = rankState.filter === 'all' ? null : rankState.filter.toUpperCase();
    const filtered = langFilter
      ? attempts.filter(a => a && a.lang && a.lang.toUpperCase() === langFilter)
      : attempts;
    if (filtered.length === 0) return null;

    const best = filtered.reduce((prev, cur) => {
      const ps = (prev && prev.grading && prev.grading.totalMarks) || 0;
      const cs = (cur  && cur.grading  && cur.grading.totalMarks)  || 0;
      return cs > ps ? cur : prev;
    });

    if (!best || !best.grading) return null;
    const g = best.grading;
    const rawGrade = g.grade || 'F';
    return {
      totalMarks: g.totalMarks  || 0,
      percent:    g.percent     || 0,
      grade:      rawGrade === 'Fail' ? 'F' : rawGrade,
      mcqMarks:   g.mcqMarks    || 0,
      shortMarks: g.shortMarks  || 0,
      paraMarks:  g.paraMarks   || 0,
      lang:       best.lang     || '—',
      level:      best.level    || '—',
      attempts:   filtered.length,
    };
  } catch (e) {
    return null;
  }
}

/* ── Build ranked rows ── */
function buildLeaderboard(currentUserId) {
  let allUsers = [];
  try { allUsers = getRegisteredUsers() || []; } catch(e) {}

  const rows = allUsers.map(u => {
    const scores = getBestScores(u);
    let sortVal = -1;
    if (scores) {
      if (rankState.sort === 'total')   sortVal = scores.totalMarks;
      else if (rankState.sort === 'percent') sortVal = scores.percent;
      else if (rankState.sort === 'mcq')    sortVal = scores.mcqMarks;
      else if (rankState.sort === 'short')  sortVal = scores.shortMarks;
      else if (rankState.sort === 'para')   sortVal = scores.paraMarks;
    }
    return {
      userId:   u.userId   || '',
      name:     u.name     || 'Unknown',
      username: u.username || '—',
      scores,
      isSelf:   u.userId === currentUserId,
      sortVal,
    };
  });

  // Search filter
  const q = rankState.search.toLowerCase().trim();
  const out = q
    ? rows.filter(r =>
        r.name.toLowerCase().includes(q) ||
        r.username.toLowerCase().includes(q))
    : rows;

  // Sort: scored users first (high→low), then unscored alphabetically
  out.sort((a, b) => {
    if (a.sortVal >= 0 && b.sortVal >= 0) return b.sortVal - a.sortVal;
    if (a.sortVal >= 0) return -1;
    if (b.sortVal >= 0) return  1;
    return a.name.localeCompare(b.name);
  });

  return out;
}

function medal(r) {
  return r === 1 ? '🥇' : r === 2 ? '🥈' : r === 3 ? '🥉' : r;
}

/* ── Render ── */
function renderRankPage(user) {
  try {
    const rows   = buildLeaderboard(user.userId);
    const total  = (() => { try { return (getRegisteredUsers()||[]).length; } catch(e){ return 0; } })();
    const tested = rows.filter(r => r.scores).length;

    const selfRow   = rows.find(r => r.isSelf);
    const selfIdx   = selfRow ? rows.indexOf(selfRow) : -1;
    const selfRank  = selfIdx >= 0 ? '#' + (selfIdx + 1) : '—';
    const selfScore = selfRow && selfRow.scores ? selfRow.scores.totalMarks : '—';

    // Filter buttons
    const filterBtns = [
      { k:'all',  lb:'🌐 All'  },
      { k:'html', lb:'🟠 HTML' },
      { k:'css',  lb:'🔵 CSS'  },
      { k:'js',   lb:'🟡 JS'   },
    ].map(f =>
      `<button class="rnk-filter ${rankState.filter===f.k?'active':''}"
        onclick="setRankFilter('${f.k}')">${f.lb}</button>`
    ).join('');

    // Sort buttons
    const sortBtns = [
      { k:'total',   lb:'Total'  },
      { k:'percent', lb:'%'      },
      { k:'mcq',     lb:'MCQ'   },
      { k:'short',   lb:'Coding' },
      { k:'para',    lb:'Para'   },
    ].map(s =>
      `<button class="rnk-sort ${rankState.sort===s.k?'active':''}"
        onclick="setRankSort('${s.k}')">${s.lb}</button>`
    ).join('');

    // Table body
    const tbody = rows.map((r, i) => {
      const pos  = i + 1;
      const sc   = r.scores;
      const gcKey = sc ? (sc.grade || 'F') : '—';
      const gc   = GRADE_CFG[gcKey] || GRADE_CFG['—'];
      const col  = avatarColor(r.username);
      const ini  = getInitials(r.name);
      const selfCls = r.isSelf ? ' rnk-self' : '';

      const scoreCell = sc
        ? `<span class="rnk-big">${sc.totalMarks}</span><span class="rnk-max">/100</span>`
        : `<span class="rnk-dash">—</span>`;

      const pctCell = sc
        ? `<span class="rnk-pct" style="color:${gc.color}">${sc.percent}%</span>`
        : `<span class="rnk-dash">—</span>`;

      const gradeCell = sc
        ? `<span class="rnk-grade" style="color:${gc.color};background:${gc.bg};border:1px solid ${gc.border}">${sc.grade}</span>`
        : `<span class="rnk-grade" style="color:#4a5068;background:#1E2230;border:1px solid #2A2F3E">—</span>`;

      const langCell = sc
        ? `<span class="rnk-lang rnk-lang-${(sc.lang||'').toLowerCase()}">${sc.lang}</span>`
        : `<span class="rnk-dash">—</span>`;

      return `
      <tr class="rnk-row${selfCls}" id="${r.isSelf?'rnk-self-row':''}">
        <td class="rnk-td rnk-pos-td">
          <span class="rnk-pos${pos<=3?' rnk-medal':''}">${medal(pos)}</span>
        </td>
        <td class="rnk-td rnk-user-td">
          <div class="rnk-user-inner">
            <div class="rnk-av" style="background:${col}">${ini}</div>
            <div>
              <div class="rnk-name">
                ${r.name}
                ${r.isSelf ? '<span class="rnk-you">You</span>' : ''}
              </div>
              <div class="rnk-uname">@${r.username}</div>
            </div>
          </div>
        </td>
        <td class="rnk-td">${scoreCell}</td>
        <td class="rnk-td">${pctCell}</td>
        <td class="rnk-td">${gradeCell}</td>
        <td class="rnk-td rnk-sub">${sc ? sc.mcqMarks   : '<span class="rnk-dash">—</span>'}</td>
        <td class="rnk-td rnk-sub">${sc ? sc.shortMarks  : '<span class="rnk-dash">—</span>'}</td>
        <td class="rnk-td rnk-sub">${sc ? sc.paraMarks   : '<span class="rnk-dash">—</span>'}</td>
        <td class="rnk-td rnk-sub">${sc ? sc.attempts+'x' : '<span class="rnk-dash">—</span>'}</td>
        <td class="rnk-td">${langCell}</td>
      </tr>`;
    }).join('');

    const tableHtml = rows.length === 0
      ? `<div class="rnk-empty"><div class="rnk-empty-icon">🔍</div><p>Koi user nahi mila</p></div>`
      : `<div class="rnk-table-wrap">
          <table class="rnk-table">
            <thead>
              <tr>
                <th class="rnk-th">#</th>
                <th class="rnk-th rnk-th-user">User</th>
                <th class="rnk-th">Score</th>
                <th class="rnk-th">%</th>
                <th class="rnk-th">Grade</th>
                <th class="rnk-th rnk-th-sub">MCQ</th>
                <th class="rnk-th rnk-th-sub">Coding</th>
                <th class="rnk-th rnk-th-sub">Para</th>
                <th class="rnk-th rnk-th-sub">Tests</th>
                <th class="rnk-th">Lang</th>
              </tr>
            </thead>
            <tbody>${tbody}</tbody>
          </table>
        </div>`;

    document.getElementById('page-content').innerHTML = `
    <div class="rnk-page">

      <div class="rnk-hero">
        <div>
          <div class="rnk-hero-title">🏆 Leaderboard</div>
          <div class="rnk-hero-sub">Sab users ki ranking — best Final Test score ke basis par</div>
        </div>
        <div class="rnk-stats">
          <div class="rnk-stat"><span class="rnk-stat-n">${total}</span><span class="rnk-stat-l">Total</span></div>
          <div class="rnk-stat"><span class="rnk-stat-n" style="color:var(--green)">${tested}</span><span class="rnk-stat-l">Tested</span></div>
          <div class="rnk-stat"><span class="rnk-stat-n" style="color:var(--amber)">${selfRank}</span><span class="rnk-stat-l">Aapki Rank</span></div>
          <div class="rnk-stat"><span class="rnk-stat-n" style="color:#6C9BF0">${selfScore}</span><span class="rnk-stat-l">Best Score</span></div>
        </div>
      </div>

      <div class="rnk-controls">
        <div class="rnk-filters">${filterBtns}</div>
        <input class="rnk-search" placeholder="🔍 Naam ya username..."
          value="${rankState.search.replace(/"/g,'')}"
          oninput="setRankSearch(this.value)">
      </div>

      <div class="rnk-sorts">
        <span class="rnk-sort-label">Sort by:</span>
        ${sortBtns}
      </div>

      ${tableHtml}

      <div class="rnk-legend">
        Score = best Final Test attempt &nbsp;·&nbsp;
        MCQ /20 &nbsp;·&nbsp; Coding /60 &nbsp;·&nbsp; Para /20 &nbsp;·&nbsp;
        — = abhi test nahi diya
      </div>

    </div>`;

    // Scroll to self
    setTimeout(() => {
      const el = document.getElementById('rnk-self-row');
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }, 150);

  } catch (err) {
    console.error('Rank render error:', err);
    document.getElementById('page-content').innerHTML =
      `<div style="padding:40px;color:#F27B72;text-align:center">
        <div style="font-size:36px;margin-bottom:12px">⚠️</div>
        <div style="font-size:16px;font-weight:700">Page load mein masla aaya</div>
        <div style="font-size:13px;color:#8B92A5;margin-top:8px">${err.message}</div>
        <button onclick="location.reload()" style="margin-top:20px;background:#7CE38B;color:#0F1115;border:none;border-radius:8px;padding:10px 24px;font-weight:700;cursor:pointer">Dobara Try Karein</button>
       </div>`;
  }
}

function setRankFilter(f) { rankState.filter = f; renderRankPage(rankCurrentUser); }
function setRankSort(s)   { rankState.sort   = s; renderRankPage(rankCurrentUser); }
function setRankSearch(v) { rankState.search = v; renderRankPage(rankCurrentUser); }

let rankCurrentUser = null;
(function init() {
  try {
    rankCurrentUser = renderShell('rank');
    if (!rankCurrentUser) return;
    renderRankPage(rankCurrentUser);
  } catch(e) {
    console.error('Rank init error:', e);
  }
})();
