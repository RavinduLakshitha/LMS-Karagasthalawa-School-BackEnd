const express = require('express');
const router = express.Router();
const bookController = require('../Controllers/bookController');

router.post('/submit-book', bookController.submitBook);
router.get('/display-book', bookController.displayBook );
router.put('/api/update-book/:id', bookController.updateBook);


module.exports = router;