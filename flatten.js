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

const assertArraysEqual = function(firstArray, secondArray) {
  if (eqArrays(firstArray, secondArray)) {
    return (`✅✅✅ Assertion Passed: ${firstArray} === ${secondArray}`);
  } else {
    return (`🛑🛑🛑 Assertion Failed: ${firstArray} !== ${secondArray}`);
  }
};

const flatten = function(arr) {
  let flattenArray = [];
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      for (let j = 0; j < arr[i].length; j++) {
        flattenArray.push(arr[i][j]);
      }
    } else {
      flattenArray.push(arr[i]);
    }
  }
  return flattenArray;
}

console.log(flatten([5, 8, 6, [3, 1], 2]));
console.log(flatten([5, [9], 6, [7, 1], 1]));

module.exports = flatten;