const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
  fullName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  imagePath: { type: String, default: '' },
  // Add the 'type' field with validation for 'employee' or 'admin' values
  type: { 
    type: String, 
    required: true, 
    enum: ['employee', 'admin'], // Ensures the value is either 'employee' or 'admin'
  },
});

module.exports = mongoose.model('User', userSchema);