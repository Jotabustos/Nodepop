'use strict';

const mongoose = require('mongoose');

// primero definimos un esquema
const userSchema = mongoose.Schema({
  email: { type: String, unique: true },
  name: String,
  password: String
});

// creamos el modelo
const User = mongoose.model('User', userSchema);

module.exports = User;
