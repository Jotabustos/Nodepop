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


adSchema.statics.list = function (filter, skip, limit, fields, sort) {
    // crear la query sin ejecutarla
    const query = Ad.find(filter);
    query.skip(skip);
    query.limit(limit);
    query.select(fields);
    query.sort(sort); // la ordenación se ejecuta antes que el paginado

    // ejecutamos la query y devolvemos una promesa
    return query.exec();
}


// creamos el modelo

const Ad = mongoose.model('Ad', adSchema);

module.exports = Ad;