// src/routes/dashboardRoutes.js
const express = require('express');
const { getDashboardData } = require('../controllers/dashboardController');
const router = express.Router();

// Get dashboard data route (no authentication middleware)
router.get('/', getDashboardData);

module.exports = router;
