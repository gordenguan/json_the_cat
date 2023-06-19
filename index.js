const { breedFetcher } = require('./breedFetcher');

const breedName = process.argv[2];

const callback = (error, description) => {
  if (error) {
    console.log('Error: ', error);
    return;
  }
  console.log('Description: ', description);
};

breedFetcher(breedName, callback);