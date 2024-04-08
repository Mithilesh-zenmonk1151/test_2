const mongoose = require("mongoose");
require("dotenv").config();
const MONGODB_URL = process.env.MONGODB_URL;

exports.connect = async () => {
  try {
    await mongoose.connect(MONGODB_URL, {
      useUnifiedTopology: true,
    });
    console.log("DB Connection Success");
  } catch (err) {
    console.log("DB Connection Failed");
    console.error(err);
    process.exit(1);
  }
};
