// EQUAL ARRAYS
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

// EQUAL ARRAYS ASSERTION
const assertArraysEqual = function(firstArray, secondArray) {
  if (eqArrays(firstArray, secondArray)) {
    return (`✅✅✅ Assertion Passed: ${firstArray} === ${secondArray}`);
  } else {
    return (`🛑🛑🛑 Assertion Failed: ${firstArray} !== ${secondArray}`);
  }
};

// TAKE UNTIL FUNCTION
const takeUntil = function(arr, callback) {
  const results = [];
  for (let item of arr) {
    if (!callback(item)) {
      results.push(item);                             // callback is implemented here
    } else {
      break;                                          // break required to stop the loop
    }
  }
  return results;
};

// TESTING PARAMETERS
const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);

console.log(results1);
console.log(assertArraysEqual(results1, [1, 2, 5, 7, 2]));
console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');

console.log(results2);
console.log(assertArraysEqual(results2, ["I've", "been", "to", "Hollywood"]));