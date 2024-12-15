const mongoose = require("mongoose");

// Define Schema
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
