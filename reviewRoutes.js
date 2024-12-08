// src/routes/reviewRoutes.js
const express = require('express');
const { getReviews, addReview } = require('../controllers/reviewController');
const router = express.Router();

// Get reviews route
router.get('/', getReviews);

// Add review route
router.post('/', addReview);

module.exports = router;
