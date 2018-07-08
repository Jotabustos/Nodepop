'use strict';

const mongoose = require('mongoose');

// Define the Schema

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
    query.sort(sort); // Sort executes first than the rest of the pagination

    // execute the query
    return query.exec();
}

// create the Model

const Ad = mongoose.model('Ad', adSchema);

module.exports = Ad;