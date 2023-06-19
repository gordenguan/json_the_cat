const request = require('request');

const breedFetcher = (breedName, callback) => {
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, (error, response, body) => {
    if (error) {
      callback(error, null);
      return;
    }
    const data = JSON.parse(body);
    const breed = data[0];
    if (breed === undefined) {
      callback('breed not found', null);
      return;
    }
    callback(null, breed.description);
  });
};

module.exports = { breedFetcher };