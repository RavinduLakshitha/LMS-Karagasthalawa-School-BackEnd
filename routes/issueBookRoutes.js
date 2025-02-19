const express = require("express");
const issueBookController = require('../Controllers/issueBookController');


const router = express.Router();

// POST /api/issue-book
router.post('/', issueBookController.issueBook);

module.exports = router;
