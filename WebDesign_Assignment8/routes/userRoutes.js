
//new code
const express = require('express');
const bcrypt = require('bcrypt');
const multer = require('multer');
const User = require('../models/User');

const router = express.Router();

// Multer storage configuration
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/images/');
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
    
    // Validate input fields
    if (!fullName || !email || !password) {
      return res.status(400).json({ error: 'All fields are required' });
    }
    
    // Check if email already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ error: 'Email already exists' });
    }

    // Validate password strength (add more rules if needed)
    if (password.length < 6) {
      return res.status(400).json({ error: 'Password must be at least 6 characters long' });
    }

    // Create new user
    const user = new User({ fullName, email, password });
    await user.save();
    res.status(201).json({ message: 'User created successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Update user details
router.put('/edit', async (req, res) => {
  try {
    const { fullName, password } = req.body;

    // Validate input fields
    if (!fullName || !password) {
      return res.status(400).json({ error: 'Full name and password are required' });
    }

    // Check if user is authenticated and email is available
    if (!req.user || !req.user.email) {
      return res.status(401).json({ error: 'User is not authenticated or email is missing' });
    }

    // Find the user by email
    const user = await User.findOne({ email: req.user.email });
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    // Update user details
    user.fullName = fullName;
    user.password = password; // Note: Consider hashing the new password
    await user.save();

    res.json({ message: 'User updated successfully' });
  } catch (error) {
    console.error('Error updating user:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});


// Delete user
router.delete('/delete', async (req, res) => {
  try {
    // Find and delete the user by email
    await User.findOneAndDelete({ email: req.user.email });
    res.json({ message: 'User deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Retrieve all users
router.get('/getAll', async (req, res) => {
  try {
    // Exclude password field from the response
    const users = await User.find({}, { password: 0 });
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Upload image
router.post('/uploadImage', upload.single('image'), async (req, res) => {
  try {
    // Check if user is authenticated and email is available
    if (!req.user || !req.user.email) {
      return res.status(401).json({ error: 'User is not authenticated or email is missing' });
    }

    // Get the path of the uploaded image
    const imagePath = req.file.path;

    // Update user with image path
    const user = await User.findOneAndUpdate({ email: req.user.email }, { imagePath }, { new: true });

    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    res.json({ message: 'Image uploaded successfully', imagePath });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});


module.exports = router;
