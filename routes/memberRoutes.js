const express = require("express");
const router = express.Router();
const Member = require("../models/Member");

// Add a Member
router.post("/", async (req, res) => {
    try {
        const newMember = new Member(req.body);
        const savedMember = await newMember.save();
        res.status(201).json({ message: "Member added successfully!", member: savedMember });
    } catch (error) {
        res.status(500).json({ error: "Failed to add member." });
    }
});

// Get All Members
router.get("/", async (req, res) => {
    try {
        const members = await Member.find();
        res.status(200).json(members);
    } catch (error) {
        res.status(500).json({ error: "Failed to fetch members." });
    }
});

module.exports = router;
