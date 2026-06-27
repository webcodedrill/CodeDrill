const router = require('express').Router();
const bcrypt = require('bcryptjs');
const jwt    = require('jsonwebtoken');
const User   = require('../models/User');

const JWT_SECRET = process.env.JWT_SECRET || 'codedrill_secret';

/* ── Generate unique 6-digit userId ── */
async function generateUniqueId() {
  while (true) {
    const id = String(Math.floor(100000 + Math.random() * 900000));
    const exists = await User.findOne({ userId: id });
    if (!exists) return id;
  }
}

/* ── POST /api/auth/register ── */
router.post('/register', async (req, res) => {
  try {
    const { name, username, email, phone, password, inviteCode } = req.body;

    if (!name || !username || !email || !password)
      return res.status(400).json({ error: 'Naam, username, email aur password zaroori hain.' });

    // Duplicate checks
    if (await User.findOne({ email: email.toLowerCase() }))
      return res.status(409).json({ error: 'Yeh email pehle se registered hai.' });
    if (await User.findOne({ username: username.toLowerCase() }))
      return res.status(409).json({ error: 'Yeh username pehle se liya ja chuka hai.' });
    if (await User.findOne({ name: { $regex: new RegExp(`^${name}$`, 'i') } }))
      return res.status(409).json({ error: 'Is naam ka user pehle se exist karta hai.' });
    if (phone && await User.findOne({ phone }))
      return res.status(409).json({ error: 'Yeh phone number pehle se registered hai.' });

    const hashed  = await bcrypt.hash(password, 10);
    const userId  = await generateUniqueId();

    let invitedByUserId = '';
    if (inviteCode) {
      const referrer = await User.findOne({ username: inviteCode.toLowerCase() });
      if (referrer) {
        invitedByUserId = referrer.userId;
        // Add to referrer's team
        referrer.teamMembers.push({
          userId, username: username.toLowerCase(), name,
          joinedAt: new Date().toISOString(), active: true
        });
        await referrer.save();
      }
    }

    const user = await User.create({
      name, username: username.toLowerCase(),
      email: email.toLowerCase(), phone: phone || '',
      password: hashed, userId, invitedByUserId
    });

    const token = jwt.sign({ userId: user.userId, email: user.email }, JWT_SECRET, { expiresIn: '30d' });

    res.json({
      token,
      user: {
        name: user.name, username: user.username,
        email: user.email, phone: user.phone,
        userId: user.userId, invitedByUserId: user.invitedByUserId
      }
    });
  } catch (err) {
    console.error('Register error:', err);
    res.status(500).json({ error: 'Server error. Dobara koshish karein.' });
  }
});

/* ── POST /api/auth/login ── */
router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password)
      return res.status(400).json({ error: 'Email aur password darain.' });

    const user = await User.findOne({ email: email.toLowerCase() });
    if (!user) return res.status(401).json({ error: 'Email ya password galat hai.' });

    const match = await bcrypt.compare(password, user.password);
    if (!match) return res.status(401).json({ error: 'Email ya password galat hai.' });

    if (!user.isActive) return res.status(403).json({ error: 'Aapka account deactivate kar diya gaya hai. Admin se rabta karein.' });

    user.lastLoginAt = new Date();
    await user.save();

    const token = jwt.sign({ userId: user.userId, email: user.email }, JWT_SECRET, { expiresIn: '30d' });

    res.json({
      token,
      user: {
        name: user.name, username: user.username,
        email: user.email, phone: user.phone,
        userId: user.userId, invitedByUserId: user.invitedByUserId
      }
    });
  } catch (err) {
    console.error('Login error:', err);
    res.status(500).json({ error: 'Server error.' });
  }
});

/* ── POST /api/auth/forgot-password ── */
router.post('/forgot-password', async (req, res) => {
  try {
    const { email, newPassword } = req.body;
    if (!email || !newPassword)
      return res.status(400).json({ error: 'Email aur naya password zaroori hain.' });
    if (newPassword.length < 6)
      return res.status(400).json({ error: 'Password kam az kam 6 characters ka hona chahiye.' });
    const user = await User.findOne({ email: email.toLowerCase() });
    if (!user) return res.status(404).json({ error: 'Yeh email registered nahi hai.' });

    user.password = await bcrypt.hash(newPassword, 10);
    await user.save();
    res.json({ success: true });
  } catch (err) {
    res.status(500).json({ error: 'Server error.' });
  }
});

/* ── GET /api/auth/check-email/:email ── */
router.get('/check-email/:email', async (req, res) => {
  const exists = await User.findOne({ email: req.params.email.toLowerCase() });
  res.json({ exists: !!exists });
});

module.exports = router;
