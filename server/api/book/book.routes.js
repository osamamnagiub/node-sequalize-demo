const controller = require('./book.controller');
const express = require('express');
const router = express.Router();

router.get('/', controller.allbooks);
router.post('/saveUserBook', controller.saveUserBook)

module.exports = router;