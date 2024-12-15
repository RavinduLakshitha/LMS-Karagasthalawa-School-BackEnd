import dotenv from 'dotenv';
import './DB/connection.js'; // Keep this as is for importing the DB connection

dotenv.config(); // Load environment variables

import express from 'express';
import authRoutes from './routes/auth.route.js'; // Import your routes correctly

const app = express();
const port = process.env.PORT;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.use("/api/auth", authRoutes);

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
