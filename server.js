const dotenv = require("dotenv");
dotenv.config();
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

// Database Connection
require('./DB/connection.js');

// Initialize App
const app = express();
const PORT = process.env.PORT || 5000;

//import routes
const bookRoute = require('./routes/bookRoute');
const issueBookRoute = require('./routes/issueBookRoutes');

// Middleware

app.use(bodyParser.json());
app.use(cors());


// Define Routes
const memberRoutes = require("./routes/memberRoutes");
app.use("/api/members", memberRoutes);
app.use("/api",bookRoute);
app.use("/api/issue-book", issueBookRoute);

// Start Server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
