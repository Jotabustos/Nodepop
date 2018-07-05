'use strict';

const mongoose = require('mongoose');

const conn = mongoose.connection;

conn.on('error', err => {
    console.log('Ha habido un error de mongo', err);
});

conn.once('open', () => {
    console.log('Conectado a MongoDB en', conn.name);
});

mongoose.connect('mongodb://localhost:27017/ads', { useNewUrlParser: true });


module.exports = conn;