'use strict';


const mongoose = require('mongoose');

const AdsDataBase = [
    {
        "name": "Honda CB125F",
        "isSelling": true,
        "price": 2000,
        "image": "urlImage",
        "tag": "motor"
    },
    {
        "name": "Yamaha ybr",
        "isSelling": true,
        "price": 2500,
        "image": "urlImage",
        "tag": "motor"
    },
    {
        "name": "Kawasaki ninja",
        "isSelling": true,
        "price": 3500,
        "image": "urlImage",
        "tag": "motor"
    }
];



const Ad = require('../models/Ad');

/* Connect to the DB */
mongoose.connect('mongodb://localhost:27017/nodepop', {useNewUrlParser: true},async function () {
    /* Drop the DB */
   const deleteDB = await mongoose.connection.db.dropDatabase();
   console.log('Database erased');
   createAds(AdsDataBase);
   
}
    
);


async function createAds(AdsDataBase) {
    for(const adNew of AdsDataBase){
        const newAd = new Ad(adNew);
        const newAdSaved = await newAd.save();
        console.log(newAd, 'inserted');
    }
    mongoose.connection.close();
}

