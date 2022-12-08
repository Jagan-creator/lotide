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

module.exports = middle;