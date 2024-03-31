const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const multer = require('multer');
const userController = require('../controllers/userController');


const router = express.Router();

// Bind routes to controller functions
router.post('/login', userController.login);
router.post('/create', userController.createUser);
router.delete('/delete', userController.deleteUser);
router.put('/edit', userController.editUser);
router.get('/getAll', userController.getAllUser);
// router.post('/uploadImage', userController.uploadImage);
router.post('/uploadImage', userController.upload.single('image'), userController.uploadImage);


// function generateAuthToken(user) {
//   const secretKey = process.env.JWT_SECRET || 'mySecretKey123!@#$'; 
//   const token = jwt.sign(
//     {
//       _id: user._id,
//       email: user.email,
//     },
//     secretKey,
//     {
//       expiresIn: '24h', 
//     }
//   );

//   return token;
// }


// const upload = multer({ storage: userController.storage });

// router.post('/login', async (req, res) => {
//   const { email, password } = req.body;
//   try {
//     const user = await User.findOne({ email: { $regex: new RegExp('^' + email.toLowerCase(), 'i') } });
//     console.log('Retrieved User:', user);
//     if (!user) {
//       return res.status(401).send('Invalid credentials');
//     }
    
//     // Compare hashed password
//     console.log('Password:', password);
//     console.log('Stored Password:', user.password);


//     const isPasswordValid = await bcrypt.compare(password, user.password);
//     console.log('Is Password Valid:', isPasswordValid);
//     if (!isPasswordValid) {
   
//       return res.status(401).send('Invalid credentials');
//     }

   
//     const token = generateAuthToken(user);
//     res.json({ token });
//   } catch (error) {
//     console.error(error);
//     res.status(500).send('Server error');
//   }
// });

// // Create a new user route
// router.post('/create', async (req, res) => {
//   try {
//     const { fullName, email, password } = req.body;
//     const existingUser = await User.findOne({ email });
//     if (existingUser) {
//       return res.status(400).json({ error: 'Email already exists' });
//     }
//     // Hash password before saving
//     const hashedPassword = await bcrypt.hash(password, 10);
//     console.log(hashedPassword);
//     const user = new User({ fullName, email, password: hashedPassword }); // Make sure to use hashedPassword here
//     await user.save();
//     res.status(201).json({ message: 'User created successfully' });
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// });

// // Update user details
// router.put('/edit', async (req, res) => {
//   const { email, fullName, password } = req.body; // Assume email is passed in the body
//   try {
//     const user = await User.findOne({ email });
//     if (!user) {
//       return res.status(404).json({ error: 'User not found' });
//     }
//     user.fullName = fullName || user.fullName;
//     if (password) {
//       user.password = await bcrypt.hash(password, 10); // Hash new password
//     }
//     await user.save();
//     res.json({ message: 'User updated successfully' });
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// });

// // Delete user
// router.delete('/delete', async (req, res) => {
//   const { email } = req.query; // Assume email is passed in the body
//   try {
//     const result = await User.findOneAndDelete({ email });
//     if (!result) {
//       return res.status(404).json({ message: 'User not found' });
//     }
//     res.json({ message: 'User deleted successfully' });
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// });

// // Retrieve all users
// router.get('/getAll', async (req, res) => {
//   try {
//     const users = await User.find().select('-password'); // Exclude password from the result
//     res.json(users);
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// });

// // Upload image
// router.post('/uploadImage', upload.single('image'), async (req, res) => {
//   const { email } = req.body; // Assume email is passed along with the form-data
//   try {
//     if (!req.file) {
//       return res.status(400).send({ message: "No image file provided." });
//     }
//     const imagePath = req.file.path;
//     const user = await User.findOneAndUpdate({ email }, { imagePath }, { new: true });
//     if (!user) {
//       return res.status(404).json({ message: 'User not found' });
//     }
//     res.json({ message: 'Image uploaded successfully', imagePath });
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// });

module.exports = router;