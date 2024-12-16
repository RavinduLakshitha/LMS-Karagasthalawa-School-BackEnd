const express = require("express");
const router = express.Router();
const Member = require("../models/Member"); // Import the Member model

// Endpoint to add a new member
router.post("/add", async (req, res) => {
    try {
        const { cardNumber, name, grade, indexNumber, phoneNumber, address } = req.body;
        const newMember = new Member({
            cardNumber,
            name,
            grade,
            indexNumber,
            phoneNumber,
            address,
        });

        await newMember.save();
        res.status(201).json({ message: "Member added successfully", member: newMember });
    } catch (error) {
        console.error("Error adding member:", error);
        res.status(500).json({ error: "Failed to add member" });
    }
});

// Endpoint to get all members
router.get("/", async (req, res) => {
  
    try {
    const members = await Member.find();
       res.status(200).json(members);
   } catch (error) {
        console.error("Error fetching members:", error);
        res.status(500).json({ error: "Failed to fetch members" });
    }

});


module.exports = router;
