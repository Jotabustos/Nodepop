'use strict';

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

//Import the Model
const Ad = require('../models/Ad');

//Use More Random Data
const randomData = require('../data/randomData');

//Import the connection
const connectionMongoose = require('../lib/connectMongoose');

async function startUp(){

    const deleteDB = await connectionMongoose.dropDatabase();
    console.log('Database erased');
    const createDB = await createAds(randomData);
    console.log('Success, new data inserted');
}

async function createAds(AdsDataBase) {
    for(const adNew of AdsDataBase){
        const newAd = new Ad(adNew);
        const newAdSaved = await newAd.save();
    }
    connectionMongoose.close()
}

startUp();