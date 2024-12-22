const express = require('express');
const router = express.Router();
const bookController = require('../Controllers/bookController');

router.post('/submit-book', bookController.submitBook);

module.exports = router;