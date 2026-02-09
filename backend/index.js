// Load env first
require("dotenv").config();

const express = require("express");

// db.js
const connectDB = require("./db");

const app = express();

// Middleware
app.use(express.json());


connectDB();

// Routes
app.get("/", (req, res) => {
  res.send("API Running");
})

// Start server
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
})
