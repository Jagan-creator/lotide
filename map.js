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
const words = ["this", "test", "is", "for", "implementing", "maps"];

const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};

const results1 = map(words, word => word[0]);

//TESTING CONDITIONS
console.log(assertArraysEqual(results1, ([ 't', 't', 'i', 'f', 'i', 'm' ])));