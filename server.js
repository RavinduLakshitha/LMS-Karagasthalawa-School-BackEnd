import dotenv from "dotenv"; // Load environment variables
dotenv.config();
import express from "express";
import cors from "cors";
import bodyParser from "body-parser";

// Database Connection
import "./DB/connection";

// Initialize App
const app = express();
const PORT = process.env.PORT || 5000;

//import routes
import bookRoute from './routes/bookRoute';
import issueBookRoute from './routes/issueBookRoutes';

// Middleware

app.use(bodyParser.json());
app.use(cors());


// Define Routes
import memberRoutes from "./routes/memberRoutes";
app.use("/api/members", memberRoutes);
app.use("/api",bookRoute);
app.use("/api/issue-book", issueBookRoute);

// Start Server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
