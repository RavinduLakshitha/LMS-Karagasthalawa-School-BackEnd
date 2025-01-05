//Starts the Express server, connects middleware, and registers routes.

require("dotenv").config(); // Load environment variables
const express = require("express");
const cors = require("cors"); //Enables the server to accept requests from frontend
//Allows server to understand and handle JSON data sent in the body of POST, PUT, or DELETE requests.
const bodyParser = require("body-parser");

// Database Connection to connect to the MongoDB database.
require("./DB/connection");

// Initialize App
const app = express();

//Defines the port the server will listen on.
const PORT = process.env.PORT || 5000;

//import routes
const bookRoute = require('./routes/bookRoute');

// Middleware

app.use(bodyParser.json());
app.use(cors());


 
// Define Routes
app.use("/api/members", require("./routes/memberRoutes"));
app.use("/api",bookRoute);

// Start Server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
