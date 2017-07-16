// reduce the problem into organizing elements into buckets
// then sorting the buckets

// This sort is good for
// - uniformly distributed data
// - known range

const mergeSort = require('./mergesort');

const sampleArray = [0.5, 0.31, 0.24, 0.123, 0.234, 0.78,
0.92, 0.33, 0.11, 0.19, 0.82, 0.56, 0.63, 0.41, 0.1234,
0.2243, 0.6245, 0.123, 0.1234, 0.15];

const BUCKETS = {};
function bucketSort(input) {
  // put input into buckets of say 1~9
  for (let i = 0; i < input.length; i++) {
    const bucket = Math.floor(input[i] * 10);
    if (!BUCKETS[bucket]) {
      BUCKETS[bucket] = [];
    }
    BUCKETS[bucket].push(input[i]);
  }
  // then sort each bucket and merge the result
  return Object.keys(BUCKETS).reduce((finalArray, bucket) => {
    return finalArray.concat(mergeSort(BUCKETS[bucket]));
  }, []);
}

console.log(bucketSort(sampleArray));
