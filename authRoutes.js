// src/routes/authRoutes.js
const express = require('express');
const { registerUser, loginUser, validateUserInput } = require('../controllers/authController');
const router = express.Router();

// Register user route
router.post('/register', validateUserInput, registerUser);

// Login user route
router.post('/login', loginUser);

module.exports = router;
