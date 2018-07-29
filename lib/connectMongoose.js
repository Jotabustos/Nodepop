'use strict';

const mongoose = require('mongoose');

const conn = mongoose.connection;

conn.on('error', err => {
    console.log('There was a problem with Mongo', err);
});

conn.once('open', () => {
    console.log('Connected to MongoDB in', conn.name);
});

const databaseUri = process.env.DATA_BASE_URI || 'mongodb://localhost:27017/nodepop';

mongoose.connect(databaseUri, { useNewUrlParser: true });


module.exports = conn;