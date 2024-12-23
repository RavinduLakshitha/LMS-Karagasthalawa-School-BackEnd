require("dotenv").config(); // Load environment variables
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

// Database Connection
require("./DB/connection");

// Initialize App
const app = express();
const PORT = process.env.PORT || 5000;

//import routes
const bookRoute = require('./routes/bookRoute');

// Middleware

app.use(bodyParser.json());
app.use(cors());



// Define Routes
app.use("/api/members", require("./routes/memberRoutes"));
app.get('/api/members/add', (req, res) => { res.json({ message: 'Add member page' }); });
app.use("/api/submit-book",bookRoute);

// Start Server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
