const { breedFetcher } = require('../breedFetcher');
const { assert } = require('chai');

describe('breedFetcher', () => {
  it('returns a string description for a valid breed, via callback', (done) => {
    breedFetcher('Siberian', (err, desc) => {
      // we expect no error for this scenario
      assert.equal(err, null);

      const expectedDesc = "The Siberians dog like temperament and affection makes the ideal lap cat and will live quite happily indoors. Very agile and powerful, the Siberian cat can easily leap and reach high places, including the tops of refrigerators and even doors.";

      // compare returned description
      assert.equal(expectedDesc, desc.trim());

      done();
    });
  });
  it('returns an error if invalid/non-existent breed passed in', () => {
    breedFetcher('Golden Retriever', (err, desc) => {
      //expect error
      assert.equal(err, 'breed not found');

      //expect desc null
      assert.equal(desc, null);
    });
  });
});