const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const multer = require('multer');


const login = async (req, res) => {
    // ... login logic here
    const { email, password } = req.body;
  try {
    const user = await User.findOne({ email: { $regex: new RegExp('^' + email.toLowerCase(), 'i') } });
    console.log('Retrieved User:', user);
    if (!user) {
      return res.status(401).send('Invalid credentials');
    }
    
    // Compare hashed password
    console.log('Password:', password);
    console.log('Stored Password:', user.password);


    const isPasswordValid = await bcrypt.compare(password, user.password);
    console.log('Is Password Valid:', isPasswordValid);
    if (!isPasswordValid) {
   
      return res.status(401).send('Invalid credentials');
    }

   
    const token = generateAuthToken(user);
    res.json({ token });
  } catch (error) {
    console.error(error);
    res.status(500).send('Server error');
  }
};

const createUser = async (req, res) => {
    try {
        const { fullName, email, password } = req.body;
        const existingUser = await User.findOne({ email });
        if (existingUser) {
          return res.status(400).json({ error: 'Email already exists' });
        }
        // Hash password before saving
        const hashedPassword = await bcrypt.hash(password, 10);
        console.log(hashedPassword);
        const user = new User({ fullName, email, password: hashedPassword }); // Make sure to use hashedPassword here
        await user.save();
        res.status(201).json({ message: 'User created successfully' });
      } catch (error) {
        res.status(500).json({ error: error.message });
      }
};

const editUser = async (req, res) => {
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
}

const deleteUser = async (req, res) => {
    const { email } = req.query; // Assume email is passed in the body
    try {
      const result = await User.findOneAndDelete({ email });
      if (!result) {
        return res.status(404).json({ message: 'User not found' });
      }
      res.json({ message: 'User deleted successfully' });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
}

const getAllUser = async (req, res) => {
    try {
        const users = await User.find().select('-password'); // Exclude password from the result
        res.json(users);
      } catch (error) {
        res.status(500).json({ error: error.message });
      }
}


const uploadImage = async (req, res) => {
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
}

function generateAuthToken(user) {
    const secretKey = process.env.JWT_SECRET || 'mySecretKey123!@#$'; 
    const token = jwt.sign(
      {
        _id: user._id,
        email: user.email,
      },
      secretKey,
      {
        expiresIn: '24h', 
      }
    );
  
    return token;
  }

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

module.exports = {
    login,
    createUser,
    editUser,
    deleteUser,
    getAllUser,
    uploadImage,
    upload
};