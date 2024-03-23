const express = require('express');
const mongoose = require('mongoose');
const userRoutes = require('./routes/userRoutes');
const app = express();
const PORT = process.env.PORT || 3000;

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/WebD_assignment8')
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Error connecting to MongoDB:', err));

// Middleware
app.use(express.json());

// Define root route
app.get('/', (req, res) => {
  res.send('Welcome to the user API!');
});

// Routes
app.use('/user', userRoutes);

// Start the server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
