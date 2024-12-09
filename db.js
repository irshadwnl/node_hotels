
const mongoose = require('mongoose');
require('dotenv').config();
// Define MongoDB connection URL (correct format)
// const mongoUrl=process.env.MONGODB_URL_LOCAL;
const mongoUrl = process.env.MONGODB_URL;

// Setup MongoDB connection
mongoose.connect(mongoUrl)
  .then(() => console.log("Connected to MongoDB server"))
  .catch(err => console.error("MongoDB connection error!!", err));

// Get the default connection
const db = mongoose.connection;

// Event listeners for debugging
db.on('disconnected', () => {
  console.log("Disconnected from MongoDB server");
});

// Export the database connection
module.exports = db;
