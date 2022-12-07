const eqArrays = require('./eqArrays');
const assertArraysEqual = require('./assertArraysEqual');

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

// console.log(middle([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
// console.log(middle([6]));
// console.log(middle([10, 9, 8, 7, 6, 5, 4, 3, 2, 1]));

module.exports = middle;