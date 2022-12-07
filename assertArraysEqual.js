const assertEqual = require('./assertEqual');
const eqArrays = require('./eqArrays');

const assertArraysEqual = function(firstArray, secondArray) {
  if (eqArrays(firstArray, secondArray)) {
    return (`✅✅✅ Assertion Passed: ${firstArray} === ${secondArray}`);
  } else {
    return (`🛑🛑🛑 Assertion Failed: ${firstArray} !== ${secondArray}`);
  }
};

// console.log(assertArraysEqual([1, 2, 3], [1, 2, 3])); //running arguments through the asserArrayEqual function
// console.log(assertArraysEqual([1, 4, 3], [2, 2, 3])); //running arguments through the asserArrayEqual function

// arguments below are for running through eqArrays then through assertEqual

// console.log(assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true));
// console.log(assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), false));
// console.log(assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true));
// console.log(assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false));

module.exports = assertArraysEqual;