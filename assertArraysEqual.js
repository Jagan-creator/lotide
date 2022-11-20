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

const assertEqual = function(actual, expected) {
  if (actual !== expected) {
    return (`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
  if (actual === expected) {
    return (`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  }
};

const assertArraysEqual = function(firstArray, secondArray) {
  if (eqArrays(firstArray, secondArray)) {
    return (`✅✅✅ Assertion Passed: ${firstArray} === ${secondArray}`);
  } else {
    return (`🛑🛑🛑 Assertion Failed: ${firstArray} !== ${secondArray}`);
  }
};

console.log(assertArraysEqual([1, 2, 3], [1, 2, 3])); //running arguments through the asserArrayEqual function
console.log(assertArraysEqual([1, 4, 3], [2, 2, 3])); //running arguments through the asserArrayEqual function

// arguments below are for running through eqArrays then through assertEqual

// console.log(assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true));
// console.log(assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), false));
// console.log(assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true));
// console.log(assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false));