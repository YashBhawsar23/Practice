const mongoose = require("mongoose");
require("dotenv").config();

async function connectMongoDb() {
  return mongoose.connect(process.env.MONGO_URI);
}

module.exports = { connectMongoDb };
