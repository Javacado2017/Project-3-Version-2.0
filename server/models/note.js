// CREATE USER-NOTES SCHEMA

// DEPENDENCY FUNCTIONS:
const mongoose = require("mongoose");

// DEFINE SCHEMA
const noteSchema = new mongoose.Schema({
    userID: String,
    note: String
});

module.exports = mongoose.model("note", chartSchema);