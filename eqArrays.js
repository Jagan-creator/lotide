const assertEqual = require('./assertEqual');

const eqArrays = function(array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  }
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i])
      return false;
  }
  return true
};

// TEST CODE
// console.log(assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true));
// console.log(assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), false));
// console.log(assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true));
// console.log(assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false));

module.exports = eqArrays;