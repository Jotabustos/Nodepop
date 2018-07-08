'use strict';

const mongoose = require('mongoose');

// Define the Schema
const userSchema = mongoose.Schema({
  email: { type: String, unique: true },
  name: String,
  password: String
});

// create the Model
const User = mongoose.model('User', userSchema);

module.exports = User;
