// const mongoose = require('mongoose');
// const bcrypt = require('bcrypt');

// const userSchema = new mongoose.Schema({
//   fullName: { type: String, required: true },
//   email: { type: String, required: true, unique: true },
//   password: { type: String, required: true },
//   imagePath: { type: String }
// });

// userSchema.pre('save', async function(next) {
//   const user = this;
//   if (!user.isModified('password')) return next();
//   const hash = await bcrypt.hash(user.password, 10);
//   user.password = hash;
//   next();
// });

// const User = mongoose.model('User', userSchema);

// module.exports = User;
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
  fullName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  imagePath: { type: String }
});

userSchema.pre('save', async function(next) {
  if (this.isModified('password')) {
    this.password = await bcrypt.hash(this.password, 10);
  }
  next();
});

const User = mongoose.model('User', userSchema);
module.exports = User;