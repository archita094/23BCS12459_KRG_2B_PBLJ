const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true
  },
  password: {
    type: String,
    required: true
  },
  lastLoginDate: {
    type: Date,
    default: null
  },
  streak: {
    type: Number,
    default: 0
  },
  moodAvg: {
    type: Number,
    default: 0
  },
  lastMoodCheckDate: {
    type: Date,
    default: null
  },
  totalMoodSelected: {
    type: Number,
    default: 0
  },
  sessionCount: {
    type: Number,
    default: 0
  },
  totalActiveDays: {
    type: Number,
    default: 0
  }
}, { timestamps: true });

const User = mongoose.model("User", userSchema);

module.exports = User;
