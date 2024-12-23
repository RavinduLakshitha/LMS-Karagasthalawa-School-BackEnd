import mongoose from "mongoose";
import dotenv from 'dotenv';

// const mongoose = require("mongoose");
dotenv.config();

const DB = process.env.URL;

if (!DB) {
    console.error('MongoDB URL is not defined. Set the URL environment variable.');
    process.exit(1);
}

console.log(`Connecting to MongoDB...`);


mongoose.connect(DB)
    .then(() => {
        console.log("DB connected!");
    })
    .catch((error) => {
        console.error("Error connecting to MongoDB:", error); 
        process.exit(1); 
    });
