const jwt = require('jsonwebtoken');
const JWT_SECRET = process.env.JWT_SECRET || 'codedrill_secret';

function authMiddleware(req, res, next) {
  const header = req.headers['authorization'];
  if (!header) return res.status(401).json({ error: 'Token nahi diya.' });
  const token = header.split(' ')[1];
  if (!token) return res.status(401).json({ error: 'Token format galat hai.' });
  try {
    req.user = jwt.verify(token, JWT_SECRET);
    next();
  } catch {
    res.status(401).json({ error: 'Token invalid ya expire ho gaya.' });
  }
}

module.exports = authMiddleware;
