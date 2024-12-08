// src/routes/notificationRoutes.js
const express = require('express');
const { getNotifications } = require('../controllers/notificationController');
const router = express.Router();

// Get notifications route
router.get('/', getNotifications);

module.exports = router;
