/* ══════════════════════════════════════════════════════
   CodeDrill API Bridge
   Ye file backend se baat karti hai.
   Agar backend nahi mila to localStorage fallback use hota hai.
   ══════════════════════════════════════════════════════ */

const API_BASE = ''; // same origin (Railway pe auto-resolve hoga)
const TOKEN_KEY = 'codedrill_token';

function apiGetToken() {
  return localStorage.getItem(TOKEN_KEY) || '';
}
function apiSetToken(t) {
  if (t) localStorage.setItem(TOKEN_KEY, t);
  else   localStorage.removeItem(TOKEN_KEY);
}
function apiHeaders() {
  return {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer ' + apiGetToken()
  };
}

/* ── POST wrapper ── */
async function apiPost(path, body) {
  const r = await fetch(API_BASE + path, {
    method: 'POST',
    headers: apiHeaders(),
    body: JSON.stringify(body)
  });
  const data = await r.json();
  if (!r.ok && !data.error) data.error = `Server error (${r.status})`;
  return data;
}

/* ── GET wrapper ── */
async function apiGet(path) {
  const r = await fetch(API_BASE + path, { headers: apiHeaders() });
  const data = await r.json();
  if (!r.ok && !data.error) data.error = `Server error (${r.status})`;
  return data;
}

/* ── PUT wrapper ── */
async function apiPut(path, body) {
  const r = await fetch(API_BASE + path, {
    method: 'PUT',
    headers: apiHeaders(),
    body: JSON.stringify(body)
  });
  const data = await r.json();
  if (!r.ok && !data.error) data.error = `Server error (${r.status})`;
  return data;
}

/* ══════════════════════════════════════════════════════
   AUTH API FUNCTIONS
   (state.js ke existing functions ke upar ye baithe hain)
   ══════════════════════════════════════════════════════ */

/* Register — backend pe naya user banata hai */
async function apiRegister({ name, username, email, phone, password, inviteCode }) {
  const d = await apiPost('/api/auth/register', { name, username, email, phone, password, inviteCode });
  if (d.token) {
    apiSetToken(d.token);
    setUser(d.user); // state.js function — localStorage mein bhi save
    // Backend se jo user aaya wo referral info bhi rakhta hai
    if (d.user.invitedByUserId) {
      saveInvitedBy(d.user.userId, d.user.invitedByUserId);
    }
  }
  return d; // { token, user } ya { error }
}

/* Login ── */
async function apiLogin(email, password) {
  const d = await apiPost('/api/auth/login', { email, password });
  if (d.token) {
    apiSetToken(d.token);
    setUser(d.user);
  }
  return d;
}

/* Logout ── */
function apiLogout() {
  apiSetToken(null);
  clearUser();
  window.location.href = '/pages/auth/index.html';
}

/* Forgot password ── */
async function apiForgotPassword(email, newPassword) {
  return apiPost('/api/auth/forgot-password', { email, newPassword });
}

/* Check email exists ── */
async function apiCheckEmail(email) {
  const d = await apiGet('/api/auth/check-email/' + encodeURIComponent(email));
  return d.exists;
}

/* ══════════════════════════════════════════════════════
   USER API FUNCTIONS
   ══════════════════════════════════════════════════════ */

/* Save final test attempt to backend ── */
async function apiSaveFinalTestAttempt(attempt) {
  try {
    await apiPost('/api/user/final-test-attempt', attempt);
  } catch(e) {
    console.warn('Backend sync fail, attempt localStorage mein hai:', e);
  }
}

/* Load all final test attempts from backend ── */
async function apiGetFinalTestAttempts() {
  try {
    return await apiGet('/api/user/final-test-attempts');
  } catch(e) {
    const user = getUser();
    return user ? ftGetAttempts(user) : [];
  }
}

/* Save profile photo ── */
async function apiSaveProfilePhoto(dataUrl) {
  try {
    await apiPut('/api/user/profile-photo', { photo: dataUrl });
  } catch(e) {}
}

/* Get all users (for rank page) ── */
async function apiGetAllUsers() {
  try {
    return await apiGet('/api/user/all-users');
  } catch(e) {
    return getRegisteredUsers();
  }
}

/* Get team info ── */
async function apiGetTeamData() {
  try {
    return await apiGet('/api/user/team');
  } catch(e) {
    return null;
  }
}

/* Sync stats to backend ── */
async function apiSyncStats(stats) {
  try {
    await apiPost('/api/user/sync', stats);
  } catch(e) {}
}
