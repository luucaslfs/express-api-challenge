const mongoose = require("mongoose");

async function main() {
  try {
    const MONGODB_URI = process.env.MONGODB_URI;

    if (!MONGODB_URI) {
      throw new Error("MONGODB_URI not defined in environment");
    }

    await mongoose.connect(MONGODB_URI);
    console.log("Connected to Database!");
  } catch (error) {
    console.log(`ERROR: ${error}`);
  }
}

module.exports = main;
