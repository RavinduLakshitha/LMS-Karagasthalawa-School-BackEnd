require('dotenv').config(); // Load environment variables
const mongoose = require('mongoose'); // Import Mongoose

const DB = process.env.URL; // MongoDB URL from environment variables

if (!DB) {
    console.error('MongoDB URL is not defined. Set the URL environment variable.');
    process.exit(1); // Exit if DB URL is not defined
}

console.log('Connecting to MongoDB...');

// Connect to MongoDB
mongoose.connect(DB)
    .then(() => {
        console.log('DB connected!');
    })
    .catch((error) => {
        console.error('Error connecting to MongoDB:', error);
        process.exit(1); // Exit if connection fails
    });
