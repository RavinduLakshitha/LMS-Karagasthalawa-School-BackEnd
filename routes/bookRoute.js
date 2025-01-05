const express = require('express');
const router = express.Router();
const bookController = require('../Controllers/bookController');

router.post('/submit-book', bookController.submitBook);
router.get('/display-book', bookController.displayBook );
router.put('/update-book/:id', bookController.updateBook);
router.delete('/delete-book/:id',bookController.deleteBookById)

module.exports = router;