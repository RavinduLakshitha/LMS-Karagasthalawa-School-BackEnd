require("dotenv").config(); // Load environment variables
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

// Database Connection
require("./DB/connection");

// Initialize App
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware

app.use(bodyParser.json());
app.use(cors());



// Define Routes
app.use("/api/members", require("./routes/memberRoutes"));



// Start Server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
