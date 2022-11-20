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

const middle = function(arr) {
  if (arr.length <= 2) {
    return [];
  } else if (arr.length % 2 === 0) {
    return arr.slice((arr.length / 2) - 1, (arr.length / 2) + 1)
  } else {
    let insertArray = [];
    let middleNum = Number.round(arr.length / 2)
    insertArray.push(arr[middleNum - 1]);
    return insertArray;
  }
};

console.log(middle([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
console.log(middle([6]));
console.log(middle([2, 4]));