require('dotenv').config(); // Loads environment variables from a .env file 
const mongoose = require('mongoose'); // Import Mongoose

const DB = process.env.URL; // MongoDB URL from .env file

//Checks if the DB variable is undefined. If it is, logs an error and stops the application.
if (!DB) {
    console.error('MongoDB URL is not defined. Set the URL environment variable.');
    process.exit(1); // Exit if DB URL is not defined
}
console.log('Connecting to MongoDB...');

// Connect to MongoDB
//Establishes a connection between Node.js application and the MongoDB database.
mongoose.connect(DB)
    .then(() => {
        console.log('DB connected!');
    })
    .catch((error) => {
        console.error('Error connecting to MongoDB:', error);
        process.exit(1); // Exit if connection fails
    });
