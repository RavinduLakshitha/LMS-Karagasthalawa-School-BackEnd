//Defines the schema for your MongoDB collections using Mongoose.

//Imports the Mongoose library to interact with MongoDB.
const mongoose = require("mongoose");

// Defines the structure (schema) of the Member collection
const memberSchema = new mongoose.Schema({
    cardNumber: { type: String, required: true },
    name: { type: String, required: true },
    grade: { type: String, required: true },
    indexNumber: { type: String, required: true },
    phoneNumber: { type: String, required: true },
    address: { type: String, required: true }
});

// Export Model
module.exports = mongoose.model("Member", memberSchema);

//Member model represents the Member collection in MongoDB.