require('dotenv').config();
const express   = require('express');
const mongoose  = require('mongoose');
const cors      = require('cors');
const path      = require('path');

const app = express();

/* ── Middleware ── */
app.use(cors());
app.use(express.json({ limit: '10mb' })); // 10mb for base64 photos
app.use(express.urlencoded({ extended: true }));

/* ── API Routes ── */
app.use('/api/auth',  require('./routes/auth'));
app.use('/api/user',  require('./routes/user'));
app.use('/api/admin', require('./routes/admin'));

/* ── Admin Panel (static HTML) ── */
app.use('/admin', express.static(path.join(__dirname, 'admin-panel')));
app.get('/admin/*', (req, res) => {
  res.sendFile(path.join(__dirname, 'admin-panel', 'index.html'));
});

/* ── Frontend Static Files ── */
app.use(express.static(path.join(__dirname, 'public')));
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

/* ── MongoDB + Server Start ── */
const PORT = process.env.PORT || 3000;
const MONGODB_URI = process.env.MONGODB_URI;

mongoose.connect(MONGODB_URI)
  .then(() => {
    console.log('✅ MongoDB connected');
    app.listen(PORT, () => console.log(`🚀 CodeDrill server running on port ${PORT}`));
  })
  .catch(err => {
    console.error('❌ MongoDB connection failed:', err.message);
    process.exit(1);
  });
