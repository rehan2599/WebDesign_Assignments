const express = require('express');
const bcrypt = require('bcrypt');
const multer = require('multer');
const User = require('../models/user');

const router = express.Router();

// Multer storage configuration
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/images/'); // Ensure this directory exists or is created on server start
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname);
  }
});

const upload = multer({ storage: storage });

// Create a new user
router.post('/create', async (req, res) => {
  try {
    const { fullName, email, password } = req.body;
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ error: 'Email already exists' });
    }
    const hashedPassword = await bcrypt.hash(password, 10); // Hash password before saving
    const user = new User({ fullName, email, password: hashedPassword });
    await user.save();
    res.status(201).json({ message: 'User created successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Update user details
router.put('/edit', async (req, res) => {
  const { email, fullName, password } = req.body; // Assume email is passed in the body
  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }
    user.fullName = fullName || user.fullName;
    if (password) {
      user.password = await bcrypt.hash(password, 10); // Hash new password
    }
    await user.save();
    res.json({ message: 'User updated successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Delete user
router.delete('/delete', async (req, res) => {
  const { email } = req.body; // Assume email is passed in the body
  try {
    const result = await User.findOneAndDelete({ email });
    if (!result) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.json({ message: 'User deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Retrieve all users
router.get('/getAll', async (req, res) => {
  try {
    const users = await User.find().select('-password'); // Exclude password from the result
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Upload image
router.post('/uploadImage', upload.single('image'), async (req, res) => {
  const { email } = req.body; // Assume email is passed along with the form-data
  try {
    if (!req.file) {
      return res.status(400).send({ message: "No image file provided." });
    }
    const imagePath = req.file.path;
    const user = await User.findOneAndUpdate({ email }, { imagePath }, { new: true });
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.json({ message: 'Image uploaded successfully', imagePath });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;