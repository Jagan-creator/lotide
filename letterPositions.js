// ARRAY PASS EQUAL FUNCTION
const assertArraysEqual = function(firstArray, secondArray) {
  if (eqArrays(firstArray, secondArray)) {
    return (`✅✅✅ Assertion Passed: ${firstArray} === ${secondArray}`);
  } else {
    return (`🛑🛑🛑 Assertion Failed: ${firstArray} !== ${secondArray}`);
  }
};

// ARRAY EQUAL FUNCTION
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

// LETTER POSITION FUNCTION
const letterPositions = function(sentence) {
  const results = {};                           // defined an empty array
  for (let i = 0; i < sentence.length; i++) {
    if (sentence[i] !== " ") {                  // making sure to exclude spaces
      if (results[sentence[i]]) {
        results[sentence[i]].push(i);           // pushing the index of sentence[i] to the new object in results
      } else {
        results[sentence[i]] = [i];             // all else results in comparison to previous if statement
      }
    }
  }
  return results;
}

// TESTING PARAMATERS
console.log(letterPositions("hello"));

console.log(assertArraysEqual((letterPositions("hello")).e, [1]));

module.exports = letterPositions;