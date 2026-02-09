require("dotenv").config();

const mongoose = require("mongoose");

async function connectDB() {
  try {
    await mongoose.connect(process.env.MONGO_URI);

    console.log("Mongo connected");
  } catch (err) {
    console.error("DB connection failed");
    console.error(err);
    process.exit(1);
  }
}

module.exports = connectDB;
