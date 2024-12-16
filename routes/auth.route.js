import express from "express";
import {login, signup} from "../Controllers/auth.controller.js";

const router = express.Router();

router.get("/signup", signup);
router.get("/login", login);

export default router;