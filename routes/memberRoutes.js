//Defines the endpoints of our API

//Imports the Express library for building web APIs.
//it provides GET, POST, PUT, DELETE requests
const express = require("express");

//Creates a new router object for defining API endpoints.
const router = express.Router();

//Imports the Member model to interact with the Member collection
const Member = require("../models/Member"); 

// Endpoint to add a new member to the database
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

// Endpoint to get a single member by ID
//Finds a member by its unique MongoDB _id.
//Fetches specific member details for viewing or editing.
router.get("/:id", async (req, res) => {
    try {
        const member = await Member.findById(req.params.id);
        if (!member) return res.status(404).json({ message: "Member not found" });
        res.status(200).json(member);
    } catch (error) {
        console.error("Error fetching member:", error);
        res.status(500).json({ error: "Failed to fetch member" });
    }
});

// Endpoint to get all members
//Displays a list of all members.
router.get("/", async (req, res) => {
    try {
      const members = await Member.find(); // Fetch all members from the database
      res.status(200).json(members);
    } catch (error) {
      console.error("Error fetching members:", error);
      res.status(500).json({ error: "Failed to fetch members" });
    }
  });

// Endpoint to update a member by ID
router.put("/:id", async (req, res) => {
    try {
      const updatedMember = await Member.findByIdAndUpdate(
        req.params.id,
        req.body, // Updated data
        { new: true }
      );
      if (!updatedMember) return res.status(404).json({ message: "Member not found" });
      res.status(200).json({ message: "Member updated successfully", member: updatedMember });
    } catch (error) {
      console.error("Error updating member:", error);
      res.status(500).json({ error: "Failed to update member" });
    }
  });
  

// Endpoint to delete a member by ID
router.delete("/:id", async (req, res) => {
    try {
      const deletedMember = await Member.findByIdAndDelete(req.params.id);
      if (!deletedMember) return res.status(404).json({ message: "Member not found" });
      res.status(200).json({ message: "Member deleted successfully" });
    } catch (error) {
      console.error("Error deleting member:", error);
      res.status(500).json({ error: "Failed to delete member" });
    }
  });
  

module.exports = router;
