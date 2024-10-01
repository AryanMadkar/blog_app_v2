const mongoose = require("mongoose");

const dbConnect = async () => {
  try {
    const connect = await mongoose.connect("mongodb://localhost:27017/blog2");
    console.log(`MongoDB Connected: ${connect.connection.host}`);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

module.exports = dbConnect;
