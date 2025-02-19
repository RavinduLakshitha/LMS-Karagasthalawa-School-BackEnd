import express from 'express';
import issueBookController from '../Controllers/issueBookController.js';

const router = express.Router();

// POST /api/issue-book
router.post('/', issueBookController.issueBook);

export default router;
