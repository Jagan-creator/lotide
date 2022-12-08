// ARRAY EQUALS
const eqArrays = function(array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  }
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i])
      return false;
  }
  return true;
};

// ASSERTION FOR ARRAY EQUALS
const assertArraysEqual = function(firstArray, secondArray) {
  if (eqArrays(firstArray, secondArray)) {
    return (`✅✅✅ Assertion Passed: ${firstArray} === ${secondArray}`);
  } else {
    return (`🛑🛑🛑 Assertion Failed: ${firstArray} !== ${secondArray}`);
  }
};


// NEW MAP FUNCTION FOR ARRAYS
const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};

// TEST CONDITIONS
const words1 = ["this", "test", "is", "for", "implementing", "maps"];
const words2 = ["another", "test"];
const words3 = ["third", "and", "final", "test"];

const results1 = map(words1, word => word[0]);
const results2 = map(words2, word => word[0]);
const results3 = map(words3, word => word[0]);

console.log(assertArraysEqual(results1, ([ 't', 't', 'i', 'f', 'i', 'm' ])));
console.log(assertArraysEqual(results2, ([ 'a', 't' ])));
console.log(assertArraysEqual(results3, ([ 't', 'a', 'f', 't' ])));

module.exports = map;