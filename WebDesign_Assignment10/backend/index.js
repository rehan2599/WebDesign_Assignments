

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const userRoutes = require('./routes/userRoutes'); 


// Ensure you have this file in the correct directory
const app = express();
const PORT = process.env.PORT || 4000;

const corsOptions = {
  origin: 'http://localhost:3000', // Adjust this to match the URL of your front-end app
  optionsSuccessStatus: 200,
};

app.use(cors(corsOptions)); 

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/Assignment10')
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Error connecting to MongoDB:', err));

// Middleware
app.use(express.json());

app.use('/uploads', express.static('uploads'));

// Root route
app.get('/', (req, res) => {
  res.send('Hello, World! Welcome to the User Management API.');
});

// User routes
app.use('/user', userRoutes);





// Start the server
app.listen(PORT, () => console.log('Server running on port 4000'));