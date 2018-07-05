'use strict';

const mongoose = require('mongoose');

// primero definimos un esquema

const adSchema = mongoose.Schema({
    name: String,
    isSelling: Boolean,
    price: Number,
    image: String,
    tag:[['work'],['lifestyle'],['motor'],['mobile']]
});


/**
 * TODO: método static para listar
 * 
 */


// creamos el modelo

const Ad = mongoose.model('Ad', adSchema);

module.exports = Ad;