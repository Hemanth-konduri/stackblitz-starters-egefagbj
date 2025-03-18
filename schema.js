const mongoose = require("mongoose");

// Define the user schema
const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  roles: {
    type: [String], 
    default: ["user"],
  },
  profile: {
    firstName: { type: String },
    lastName: { type: String },
    age: { type: Number },
  },
  lastLogin: {
    type: Date,
    default: Date.now, 
  },
});

// Create the User model
const User = mongoose.model("User", userSchema);

module.exports = User;
