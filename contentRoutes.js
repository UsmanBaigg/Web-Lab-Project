const express = require('express');
const { addContent, getContents } = require('../controllers/contentController');
const router = express.Router();

router.post('/', addContent);
router.get('/', getContents);

module.exports = router;
