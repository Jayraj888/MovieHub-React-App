const mongoose = require("mongoose");

//connection string
const mongoURI = "mongodb://localhost:27017/moviehub";

const connectToMongo = async () => {
  try {
    await mongoose.connect(mongoURI);
    console.log("Connected to Mongo Successfully na meri jaan");
  } catch (error) {
    console.error("Failed to connect to Mongo", error);
  }
};

module.exports = connectToMongo;
