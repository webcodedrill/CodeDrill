const router = require('express').Router();
const jwt    = require('jsonwebtoken');
const User   = require('../models/User');

const ADMIN_USER = process.env.ADMIN_USERNAME || 'CodeDrill';
const ADMIN_PASS = process.env.ADMIN_PASSWORD || 'AdminCodeDrill1345';
const JWT_SECRET = process.env.JWT_SECRET || 'codedrill_secret';

/* ── Admin auth middleware ── */
function adminAuth(req, res, next) {
  const header = req.headers['authorization'];
  if (!header) return res.status(401).json({ error: 'Admin token required.' });
  const token = header.split(' ')[1];
  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    if (decoded.role !== 'admin') return res.status(403).json({ error: 'Admin access required.' });
    next();
  } catch {
    res.status(401).json({ error: 'Token invalid.' });
  }
}

/* ── POST /api/admin/login ── */
router.post('/login', (req, res) => {
  const { username, password } = req.body;
  if (username !== ADMIN_USER || password !== ADMIN_PASS)
    return res.status(401).json({ error: 'Admin credentials galat hain.' });
  const token = jwt.sign({ role: 'admin', username }, JWT_SECRET, { expiresIn: '8h' });
  res.json({ token });
});

/* ── GET /api/admin/users ── All users list (with profilePhoto) ── */
router.get('/users', adminAuth, async (req, res) => {
  try {
    const { search, page = 1, limit = 50, sort = '-createdAt' } = req.query;
    const filter = {};
    if (search) {
      filter.$or = [
        { name:     { $regex: search, $options: 'i' } },
        { username: { $regex: search, $options: 'i' } },
        { email:    { $regex: search, $options: 'i' } },
        { userId:   { $regex: search, $options: 'i' } },
        { phone:    { $regex: search, $options: 'i' } }
      ];
    }
    const total = await User.countDocuments(filter);
    const users = await User.find(filter)
      .select('-password -seenPools')
      .sort(sort)
      .skip((page - 1) * limit)
      .limit(Number(limit));

    res.json({ total, page: Number(page), users });
  } catch (err) {
    res.status(500).json({ error: 'Server error.' });
  }
});

/* ── GET /api/admin/users/:userId ── Single user FULL A-Z detail ── */
router.get('/users/:userId', adminAuth, async (req, res) => {
  try {
    // Include password hash for admin visibility
    const user = await User.findOne({ userId: req.params.userId });
    if (!user) return res.status(404).json({ error: 'User nahi mila.' });

    // Referrer info
    let referrerInfo = null;
    if (user.invitedByUserId) {
      referrerInfo = await User.findOne({ userId: user.invitedByUserId })
        .select('name username userId email');
    }

    // Team members full detail
    let teamMembersDetail = [];
    if (user.teamMembers && user.teamMembers.length) {
      const ids = user.teamMembers.map(m => m.userId);
      const members = await User.find({ userId: { $in: ids } })
        .select('name username userId email createdAt lastLoginAt finalTestAttempts isActive profilePhoto');
      // merge joinedAt from teamMembers array
      teamMembersDetail = user.teamMembers.map(m => {
        const mObj = m.toObject ? m.toObject() : { ...m };
        const full = members.find(x => x.userId === m.userId);
        const fullObj = full ? (full.toObject ? full.toObject() : { ...full }) : {};
        return { ...mObj, ...fullObj };
      });
    }

    const obj = user.toObject();
    // Remove seenPools from response (too large, not needed in admin)
    delete obj.seenPools;

    res.json({ user: obj, referrerInfo, teamMembersDetail });
  } catch (err) {
    res.status(500).json({ error: 'Server error.' });
  }
});

/* ── PUT /api/admin/users/:userId/status ── Activate/Deactivate ── */
router.put('/users/:userId/status', adminAuth, async (req, res) => {
  try {
    const { isActive } = req.body;
    await User.findOneAndUpdate({ userId: req.params.userId }, { isActive });
    res.json({ success: true });
  } catch (err) {
    res.status(500).json({ error: 'Server error.' });
  }
});

/* ── PUT /api/admin/users/:userId/reset-password ── Admin reset password ── */
router.put('/users/:userId/reset-password', adminAuth, async (req, res) => {
  try {
    const bcrypt = require('bcryptjs');
    const { newPassword } = req.body;
    if (!newPassword || newPassword.length < 4)
      return res.status(400).json({ error: 'Password kam az kam 4 characters ka hona chahiye.' });
    const hashed = await bcrypt.hash(newPassword, 10);
    await User.findOneAndUpdate({ userId: req.params.userId }, { password: hashed });
    res.json({ success: true });
  } catch (err) {
    res.status(500).json({ error: 'Server error.' });
  }
});

/* ── DELETE /api/admin/users/:userId ── Delete user ── */
router.delete('/users/:userId', adminAuth, async (req, res) => {
  try {
    await User.findOneAndDelete({ userId: req.params.userId });
    res.json({ success: true });
  } catch (err) {
    res.status(500).json({ error: 'Server error.' });
  }
});

/* ── GET /api/admin/stats ── Dashboard stats ── */
router.get('/stats', adminAuth, async (req, res) => {
  try {
    const totalUsers   = await User.countDocuments();
    const activeUsers  = await User.countDocuments({ isActive: true });
    const today        = new Date(); today.setHours(0,0,0,0);
    const newToday     = await User.countDocuments({ createdAt: { $gte: today } });
    const thisWeek     = new Date(today); thisWeek.setDate(thisWeek.getDate() - 7);
    const newThisWeek  = await User.countDocuments({ createdAt: { $gte: thisWeek } });
    const testedUsers  = await User.countDocuments({ 'finalTestAttempts.0': { $exists: true } });
    const withReferral = await User.countDocuments({ invitedByUserId: { $ne: '' } });

    // Users with profile photos
    const withPhoto = await User.countDocuments({ profilePhoto: { $ne: '' } });

    // Top scorers
    const topScorers = await User.aggregate([
      { $match: { 'finalTestAttempts.0': { $exists: true } } },
      { $project: {
          name: 1, username: 1, userId: 1, profilePhoto: 1,
          bestScore: { $max: '$finalTestAttempts.total' }
      }},
      { $sort: { bestScore: -1 } },
      { $limit: 5 }
    ]);

    // Most active recruiters
    const topRecruiters = await User.aggregate([
      { $project: { name: 1, username: 1, userId: 1, teamCount: { $size: '$teamMembers' } } },
      { $match: { teamCount: { $gt: 0 } } },
      { $sort: { teamCount: -1 } },
      { $limit: 5 }
    ]);

    res.json({ totalUsers, activeUsers, newToday, newThisWeek, testedUsers, withReferral, withPhoto, topScorers, topRecruiters });
  } catch (err) {
    res.status(500).json({ error: 'Server error.' });
  }
});

/* ── GET /api/admin/attempts ── All test attempts ── */
router.get('/attempts', adminAuth, async (req, res) => {
  try {
    const users = await User.find({ 'finalTestAttempts.0': { $exists: true } })
      .select('name username userId finalTestAttempts profilePhoto');
    const allAttempts = [];
    users.forEach(u => {
      u.finalTestAttempts.forEach(a => {
        allAttempts.push({
          userName: u.name, userUsername: u.username, userId: u.userId,
          profilePhoto: u.profilePhoto,
          ...a.toObject()
        });
      });
    });
    allAttempts.sort((a, b) => new Date(b.date) - new Date(a.date));
    res.json(allAttempts);
  } catch (err) {
    res.status(500).json({ error: 'Server error.' });
  }
});

module.exports = router;
