// backend/models/User.js
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  password: { type: String, required: true },
  role: { type: String, enum: ['owner', 'driver', 'dealer'], required: true }
});

const User = mongoose.model('User', userSchema);

module.exports = User;