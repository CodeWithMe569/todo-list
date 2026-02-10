require("dotenv").config();

const express = require("express");
const cors = require("cors");

// routes
const todoRoutes = require("./routes/todos");

const app = express();

app.use(express.json());
app.use(cors());

app.use("/todos", todoRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
})
