const mongoose = require('mongoose');

const attemptSchema = new mongoose.Schema({
  date:       { type: String },
  lang:       { type: String },
  level:      { type: String },
  mcqScore:   { type: Number, default: 0 },
  shortScore: { type: Number, default: 0 },
  paraScore:  { type: Number, default: 0 },
  total:      { type: Number, default: 0 },
  grade:      { type: String },
  timeTaken:  { type: Number },
  regInfo:    { type: Object }
}, { _id: false });

const teamMemberSchema = new mongoose.Schema({
  userId:   String,
  username: String,
  name:     String,
  joinedAt: String,
  active:   { type: Boolean, default: true }
}, { _id: false });

const userSchema = new mongoose.Schema({
  name:        { type: String, required: true, trim: true },
  username:    { type: String, required: true, unique: true, lowercase: true, trim: true },
  email:       { type: String, required: true, unique: true, lowercase: true, trim: true },
  phone:       { type: String, default: '' },
  password:    { type: String, required: true },
  userId:      { type: String, unique: true },   // 6-digit unique ID

  profilePhoto:  { type: String, default: '' },  // base64 or URL
  invitedByUserId: { type: String, default: '' },
  teamMembers:   { type: [teamMemberSchema], default: [] },

  // Practice stats
  mcqsSolved:       { type: Number, default: 0 },
  questionsDone:    { type: Number, default: 0 },
  paragraphsFixed:  { type: Number, default: 0 },

  // Final test attempts
  finalTestAttempts: { type: [attemptSchema], default: [] },

  // Seen pools (stored as JSON strings keyed by "kind_level_lang")
  seenPools: { type: Map, of: [Number], default: {} },

  isActive:    { type: Boolean, default: true },
  createdAt:   { type: Date, default: Date.now },
  lastLoginAt: { type: Date }
});

module.exports = mongoose.model('User', userSchema);
