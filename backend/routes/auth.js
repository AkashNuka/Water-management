// backend/routes/auth.js
const express = require('express');
const User = require('../models/User');
const router = express.Router();

router.post('/login', async (req, res) => {
  const { name, password } = req.body;

  try {
    const user = await User.findOne({ name, password });
    if (!user) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    res.json({ role: user.role });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;