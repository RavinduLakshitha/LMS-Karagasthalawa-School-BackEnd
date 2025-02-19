const express = require("express");
const issueBookController = require("../Controllers/issueBookController");

const router = express.Router();

// Issue a book
router.post("/", issueBookController.issueBook);

// Retrieve all issued books
router.get("/", issueBookController.displayIssuedBook);

// Delete an issued book record
router.delete("/:id", issueBookController.deleteIssuedBook);

// Check if a book is issued
router.get("/check-book-status/:bookID", issueBookController.checkBookStatus);

module.exports = router;
