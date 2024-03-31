

const express = require('express');
const mongoose = require('mongoose');
const userRoutes = require('./routes/userRoutes'); // Ensure you have this file in the correct directory
const app = express();
const PORT = process.env.PORT || 5000;

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/rsAPI')
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Error connecting to MongoDB:', err));

// Middleware
app.use(express.json());

// Root route
app.get('/', (req, res) => {
  res.send('Hello, World! Welcome to the User Management API.');
});

// User routes
app.use('/user', userRoutes);

// Start the server
app.listen(PORT, () => console.log('Server running on port ${PORT}'));