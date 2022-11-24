const { fetchBreedDescription } = require('./breedFetcher');
const breedName = process.argv[2];
const myCallback = (error, description) => {

};


fetchBreedDescription(breedName, myCallback);