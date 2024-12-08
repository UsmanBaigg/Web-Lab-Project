// src/routes/exploreRoutes.js
const express = require('express');
const { getDestinations } = require('../controllers/exploreController');
const router = express.Router();

// Get destinations route
router.get('/', getDestinations);

module.exports = router;
