// CREATE USER-NOTES SCHEMA

// DEPENDENCY FUNCTIONS:
const mongoose = require("mongoose");

// DEFINE SCHEMA
const chartSchema = new mongoose.Schema({
    userID: String,
    tickerSymbol: String
});

module.exports = mongoose.model("chart", chartSchema);