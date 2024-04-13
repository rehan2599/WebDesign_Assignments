const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const multer = require('multer');
const userController = require('../controllers/userController');
const jobController = require('../controllers/jobController');


const router = express.Router();

// Bind routes to controller functions
router.post('/login', userController.login);
router.post('/create', userController.createUser);
router.delete('/delete', userController.deleteUser);
router.put('/edit', userController.editUser);
router.get('/getAll', userController.getAllUser);
router.post('/uploadImage', userController.upload.single('image'), userController.uploadImage);
router.post('/create/job', jobController.addJob);
router.get('/get/jobs', jobController.getJobs);


module.exports = router;