/* ── Sidebar Navigation Config (shared by every inner page) ── */
const NAV = [
  { id: 'home',        icon: '🏠', label: 'Home' },
  { id: 'mcqs',        icon: '📝', label: 'MCQs' },
  { id: 'questions',   icon: '💻', label: 'Coding Questions' },
  { id: 'paragraph',   icon: '📄', label: 'Paragraph Mistakes' },
  { id: 'finaltest',   icon: '🧪', label: 'Final Test' },
  { id: 'testresult',  icon: '📊', label: 'Test Result' },
  { id: 'profile',     icon: '👤', label: 'Profile' },
  { id: 'rank',        icon: '🏆', label: 'Rank' },
  { id: 'invite',      icon: '🔗', label: 'Invite Friends' },
];

/* ── Logged-in user persistence (har page ab apni separate HTML file hai,
   isliye login session ko localStorage me rakhte hain taake ek page se
   doosre page jaane par user logout na ho jaye) ── */
const USER_KEY = 'codedrill_user';

function getUser() {
  try {
    const raw = localStorage.getItem(USER_KEY);
    return raw ? JSON.parse(raw) : null;
  } catch (e) {
    return null;
  }
}

function setUser(user) {
  localStorage.setItem(USER_KEY, JSON.stringify(user));
}

function clearUser() {
  localStorage.removeItem(USER_KEY);
}

/* ── Profile Photo ──
   User apni khud ki photo upload kar sakta hai. Photo ko base64 string ke
   roop mein localStorage mein save karte hain (email ke against), taake
   login/logout ya page reload pe bhi photo bani rahe. ── */
function photoKeyForEmail(email) {
  const key = (email || '').toLowerCase().trim().replace(/[^a-zA-Z0-9]/g, '_');
  return `codedrill_photo_${key}`;
}

function getProfilePhoto(email) {
  try {
    return localStorage.getItem(photoKeyForEmail(email));
  } catch (e) {
    return null;
  }
}

function setProfilePhoto(email, dataUrl) {
  try {
    localStorage.setItem(photoKeyForEmail(email), dataUrl);
    return true;
  } catch (e) {
    return false; // e.g. quota exceeded
  }
}

function removeProfilePhoto(email) {
  localStorage.removeItem(photoKeyForEmail(email));
}

/* ── Unique User ID (6-digit number) ──
   Har user ko ek 6 digit unique numeric ID milti hai jab wo register karta
   hai. Saari issue ki gayi IDs ki list localStorage me rakhte hain taake
   do users ko kabhi same ID na mile. Ye ID profile, topbar, aur home — har
   page par dikhti hai. ── */
const USED_IDS_KEY = 'codedrill_used_ids';

function getUsedIds() {
  try {
    const raw = localStorage.getItem(USED_IDS_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch (e) {
    return [];
  }
}

function saveUsedId(id) {
  const ids = getUsedIds();
  ids.push(id);
  localStorage.setItem(USED_IDS_KEY, JSON.stringify(ids));
}

/* 6-digit random number (100000–999999) jo pehle kisi ko na di gayi ho */
function generateUniqueId() {
  const used = new Set(getUsedIds());
  let id;
  do {
    id = String(Math.floor(100000 + Math.random() * 900000));
  } while (used.has(id));
  saveUsedId(id);
  return id;
}

/* email ke against ID save karte hain taake same email dobara login kare to
   usko nayi ID na milay, purani wapas mil jaye */
const EMAIL_ID_MAP_KEY = 'codedrill_email_id_map';

function getEmailIdMap() {
  try {
    const raw = localStorage.getItem(EMAIL_ID_MAP_KEY);
    return raw ? JSON.parse(raw) : {};
  } catch (e) {
    return {};
  }
}

function getOrCreateIdForEmail(email) {
  const map = getEmailIdMap();
  const key = (email || '').toLowerCase().trim();
  if (map[key]) return map[key];
  const id = generateUniqueId();
  map[key] = id;
  localStorage.setItem(EMAIL_ID_MAP_KEY, JSON.stringify(map));
  return id;
}

/* ── Registered Users Store ──
   Har register hone wale user ka record (name, username, email, phone,
   password, userId) yahan save hota hai. Isse hum:
   1) Duplicate email/username/phone/name check kar sakte hain register pe.
   2) Login pe asli email+password match kar sakte hain.
   3) Forget-password flow mein password update kar sakte hain. ── */
const REGISTERED_USERS_KEY = 'codedrill_registered_users';

function getRegisteredUsers() {
  try {
    const raw = localStorage.getItem(REGISTERED_USERS_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch (e) {
    return [];
  }
}

function saveRegisteredUsers(list) {
  localStorage.setItem(REGISTERED_USERS_KEY, JSON.stringify(list));
}

function findUserByEmail(email) {
  const key = (email || '').toLowerCase().trim();
  return getRegisteredUsers().find(u => u.email.toLowerCase() === key) || null;
}

function findUserByUsername(username) {
  const key = (username || '').toLowerCase().trim();
  return getRegisteredUsers().find(u => u.username.toLowerCase() === key) || null;
}

function findUserByPhone(phone) {
  const key = (phone || '').trim();
  if (!key) return null;
  return getRegisteredUsers().find(u => (u.phone || '').trim() === key) || null;
}

function findUserByName(name) {
  const key = (name || '').toLowerCase().trim();
  return getRegisteredUsers().find(u => u.name.toLowerCase() === key) || null;
}

/* Naya user register karke list me add karta hai */
function registerUser({ name, username, email, phone, password }) {
  const userId = getOrCreateIdForEmail(email);
  const record = { name, username, email, phone: phone || '', password, userId };
  const list = getRegisteredUsers();
  list.push(record);
  saveRegisteredUsers(list);
  return record;
}

/* Email+password se sahi user record match karta hai (login ke liye) */
function verifyLogin(email, password) {
  const user = findUserByEmail(email);
  if (!user) return null;
  if (user.password !== password) return null;
  return user;
}

/* Forget-password: email ke against password update karta hai */
function updatePasswordByEmail(email, newPassword) {
  const list = getRegisteredUsers();
  const key = (email || '').toLowerCase().trim();
  const idx = list.findIndex(u => u.email.toLowerCase() === key);
  if (idx === -1) return false;
  list[idx].password = newPassword;
  saveRegisteredUsers(list);
  return true;
}

/* ── Har "protected" page (home/mcqs/questions/paragraph/profile/rank) ke
   shuru me call hoga. Agar koi user login nahi hai to auth page pe bhej dega. ── */
function requireAuth() {
  const user = getUser();
  if (!user) {
    window.location.href = '../auth/index.html';
    return null;
  }
  return user;
}

/* ── Final Test Attempts — shared storage (finaltest page save karta hai,
   testresult page read karta hai). Har user ke apne attempts alag rehte hain. ── */
function ftGetKey(user) {
  const email = (user && user.email) ? user.email.replace(/[^a-zA-Z0-9]/g, '_') : 'guest';
  return `codedrill_finaltest_attempts_${email}`;
}

function ftGetAttempts(user) {
  try {
    const raw = localStorage.getItem(ftGetKey(user));
    return raw ? JSON.parse(raw) : [];
  } catch (e) {
    return [];
  }
}

function ftSaveAttempt(user, attempt) {
  try {
    const attempts = ftGetAttempts(user);
    attempts.unshift(attempt); // newest first
    localStorage.setItem(ftGetKey(user), JSON.stringify(attempts));
  } catch (e) {}
}

/* ── Referral / Team System ──────────────────────────────────────────────────
   Har user ka ek referral link hota hai:
     https://domain.com/pages/auth/index.html?ref=USERNAME
   Jab koi us link se signup kare, wo user ki team mein add ho jata hai.
   
   Team data: { referrerId: userId, members: [{userId, username, name, joinedAt, active}] }
   ── */
const TEAM_KEY_PREFIX = 'codedrill_team_';

function teamKey(userId) {
  return TEAM_KEY_PREFIX + userId;
}

function getTeamData(userId) {
  try {
    const raw = localStorage.getItem(teamKey(userId));
    return raw ? JSON.parse(raw) : { referrerId: userId, members: [] };
  } catch (e) {
    return { referrerId: userId, members: [] };
  }
}

function saveTeamData(userId, data) {
  localStorage.setItem(teamKey(userId), JSON.stringify(data));
}

/* Kisi user ko referrer ki team mein add karna */
function addToTeam(referrerUserId, newMember) {
  const team = getTeamData(referrerUserId);
  const alreadyIn = team.members.find(m => m.userId === newMember.userId);
  if (alreadyIn) return;
  team.members.push({
    userId: newMember.userId,
    username: newMember.username,
    name: newMember.name,
    joinedAt: new Date().toISOString(),
    active: true
  });
  saveTeamData(referrerUserId, team);
}

/* Kis user ne mujhe refer kiya? — invitedByUserId save/get */
const INVITED_BY_KEY_PREFIX = 'codedrill_invitedby_';
function saveInvitedBy(myUserId, referrerUserId) {
  localStorage.setItem(INVITED_BY_KEY_PREFIX + myUserId, referrerUserId);
}
function getInvitedBy(myUserId) {
  return localStorage.getItem(INVITED_BY_KEY_PREFIX + myUserId) || null;
}

/* Referral link banana */
function getReferralLink(username) {
  const base = window.location.origin + window.location.pathname.replace(/\/pages\/.*/, '');
  return base + '/pages/auth/index.html?ref=' + encodeURIComponent(username);
}

/* URL se ?ref= param nikalna */
function getRefParamFromUrl() {
  try {
    return new URLSearchParams(window.location.search).get('ref') || '';
  } catch (e) {
    return '';
  }
}

/* Team mein active/inactive count */
function getTeamStats(userId) {
  const team = getTeamData(userId);
  const active = team.members.filter(m => m.active).length;
  const inactive = team.members.filter(m => !m.active).length;
  return { total: team.members.length, active, inactive, members: team.members };
}

/* ── Student Registration Info — result card ke liye ──
   Pehli baar Final Test kholne par form bhara jata hai.
   Data: fullName, fatherName, dob. rollNo aur regNo auto hain. */
function ftRegKey(user) {
  const email = (user && user.email) ? user.email.replace(/[^a-zA-Z0-9]/g, '_') : 'guest';
  return `codedrill_reg_info_${email}`;
}

function ftGetRegInfo(user) {
  try {
    const raw = localStorage.getItem(ftRegKey(user));
    return raw ? JSON.parse(raw) : null;
  } catch (e) { return null; }
}

function ftSaveRegInfo(user, info) {
  try {
    localStorage.setItem(ftRegKey(user), JSON.stringify(info));
    return true;
  } catch (e) { return false; }
}
