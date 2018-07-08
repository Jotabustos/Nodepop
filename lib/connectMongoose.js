'use strict';

const mongoose = require('mongoose');

const conn = mongoose.connection;

conn.on('error', err => {
    console.log('There was a problem with Mongo', err);
});

conn.once('open', () => {
    console.log('Connected to MongoDB in', conn.name);
});

mongoose.connect('mongodb://localhost:27017/nodepop', { useNewUrlParser: true });


module.exports = conn;