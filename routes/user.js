const router  = require('express').Router();
const auth    = require('../middleware/auth');
const User    = require('../models/User');

/* ── GET /api/user/me ── */
router.get('/me', auth, async (req, res) => {
  try {
    const user = await User.findOne({ userId: req.user.userId }).select('-password');
    if (!user) return res.status(404).json({ error: 'User nahi mila.' });
    res.json(user);
  } catch (err) {
    res.status(500).json({ error: 'Server error.' });
  }
});

/* ── PUT /api/user/profile-photo ── */
router.put('/profile-photo', auth, async (req, res) => {
  try {
    const { photo } = req.body; // base64 dataURL
    await User.findOneAndUpdate({ userId: req.user.userId }, { profilePhoto: photo });
    res.json({ success: true });
  } catch (err) {
    res.status(500).json({ error: 'Photo save nahi ho saki.' });
  }
});

/* ── POST /api/user/sync ── */
// Frontend apna localStorage data sync karta hai (absolute values)
router.post('/sync', auth, async (req, res) => {
  try {
    const { mcqsSolved, questionsDone, paragraphsFixed, seenPools } = req.body;
    const update = {};
    if (mcqsSolved      !== undefined) update.mcqsSolved      = mcqsSolved;
    if (questionsDone   !== undefined) update.questionsDone   = questionsDone;
    if (paragraphsFixed !== undefined) update.paragraphsFixed = paragraphsFixed;
    if (seenPools) update.seenPools = new Map(Object.entries(seenPools));
    await User.findOneAndUpdate({ userId: req.user.userId }, update);
    res.json({ success: true });
  } catch (err) {
    res.status(500).json({ error: 'Sync fail.' });
  }
});

/* ── POST /api/user/sync-stats ── */
// Har MCQ/Question/Paragraph complete hone par +1 increment
router.post('/sync-stats', auth, async (req, res) => {
  try {
    const { mcqsSolved, questionsDone, paragraphsFixed } = req.body;
    const inc = {};
    if (mcqsSolved      > 0) inc.mcqsSolved      = mcqsSolved;
    if (questionsDone   > 0) inc.questionsDone   = questionsDone;
    if (paragraphsFixed > 0) inc.paragraphsFixed = paragraphsFixed;
    if (Object.keys(inc).length > 0) {
      await User.findOneAndUpdate({ userId: req.user.userId }, { $inc: inc });
    }
    res.json({ success: true });
  } catch (err) {
    res.status(500).json({ error: 'Stats sync fail.' });
  }
});

/* ── POST /api/user/final-test-attempt ── */
router.post('/final-test-attempt', auth, async (req, res) => {
  try {
    const attempt = req.body; // { date, lang, level, mcqScore, shortScore, paraScore, total, grade, timeTaken, regInfo }
    await User.findOneAndUpdate(
      { userId: req.user.userId },
      { $push: { finalTestAttempts: { $each: [attempt], $position: 0 } } }
    );
    res.json({ success: true });
  } catch (err) {
    res.status(500).json({ error: 'Attempt save nahi hua.' });
  }
});

/* ── GET /api/user/final-test-attempts ── */
router.get('/final-test-attempts', auth, async (req, res) => {
  try {
    const user = await User.findOne({ userId: req.user.userId }).select('finalTestAttempts');
    res.json({ attempts: user ? user.finalTestAttempts : [] });
  } catch (err) {
    res.status(500).json({ error: 'Server error.' });
  }
});

/* ── GET /api/user/all-users ── (for rank page — public info only) ── */
router.get('/all-users', auth, async (req, res) => {
  try {
    const users = await User.find({}).select(
      'name username userId finalTestAttempts createdAt isActive'
    );
    // Rank page ke liye attempts map karo grading format mein
    const mapped = users.map(u => ({
      _id:      u._id,
      userId:   u.userId,
      name:     u.name,
      username: u.username,
      isActive: u.isActive,
      attempts: (u.finalTestAttempts || []).map(a => ({
        lang:  a.lang,
        level: a.level,
        date:  a.date,
        grading: {
          totalMarks: a.total      || 0,
          percent:    a.total      || 0,
          grade:      a.grade      || 'F',
          mcqMarks:   a.mcqScore   || 0,
          shortMarks: a.shortScore || 0,
          paraMarks:  a.paraScore  || 0,
        }
      }))
    }));
    res.json({ users: mapped });
  } catch (err) {
    res.status(500).json({ error: 'Server error.' });
  }
});

/* ── GET /api/user/team ── */
router.get('/team', auth, async (req, res) => {
  try {
    const user = await User.findOne({ userId: req.user.userId }).select('teamMembers invitedByUserId userId');
    if (!user) return res.status(404).json({ error: 'User nahi mila.' });

    let invitedByUser = null;
    if (user.invitedByUserId) {
      invitedByUser = await User.findOne({ userId: user.invitedByUserId }).select('username name');
    }
    res.json({
      teamMembers:      user.teamMembers,
      invitedByUserId:  user.invitedByUserId,
      invitedByUsername: invitedByUser ? invitedByUser.username : null,
      invitedByName:    invitedByUser ? invitedByUser.name : null
    });
  } catch (err) {
    res.status(500).json({ error: 'Server error.' });
  }
});

module.exports = router;
