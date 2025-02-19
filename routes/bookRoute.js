const express = require("express");
const router = express.Router();
const bookController = require("../Controllers/bookController");


router.post("/submit-book", bookController.submitBook);
router.get("/display-book", bookController.displayBook);
router.put("/api/update-book/:id", bookController.updateBook);
router.put("/return-book", bookController.returndisplayBook);
// router.post("/issuesbook", bookController.issuesBook);

router.delete('/delete-book/:id',bookController.deleteBookById)
// 31e256eb0dd581435578aa40b250aad65ccc096f

module.exports = router;

