'use strict';

// Import the Model
const Ad = require('../models/Ad');

// Use Random Data
const randomData = require('../data/randomData');

// Import the connection
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