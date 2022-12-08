// EQUAL FUNCTION
const assertEqual = function(actual, expected) {
  if (actual !== expected) {
    return (`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
  if (actual === expected) {
    return (`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  }
};

// EQUAL ARRAYS FUNCTION
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

// EQUAL OBJECTS FUNCTION
const eqObjects = function(object1, object2) {

  // set out some variables at the start of function to help simplify the code and make things easier to read/write
  
  let insert1 = Object.keys(object1);         // easier to write out the Object.keys method here
  let insert2 = Object.keys(object2);         // same as above but just for object2 now

  // set an if parameter that indicates if the key length on both objects does not match it will return a false value
  
  if (insert1.length !== insert2.length) {
    return false;
  } else {
    for (const key in object1) {
      if (Array.isArray(object1[key])) {
        if ((!eqArrays(object1[key], object2[key])) === false) {
          return false;
        }
      } else if (typeof object1[key] === "object") {
        if ((!eqObjects(object1[key], object2[key])) === false) {
          return false;
        }
      } else if (object1[key] !== object2[key]) {
        return false;
      }
    }
    return true;
  }
};

// TEST CONDITIONS
const test1 = { number: 1, number: 2 };
const test2 = { number: 1, number: 2 };
console.log(assertEqual((eqObjects(test1, test2)), true));

const test3 = { word: "hello", word: "working", word: "lighthouse" };
const test4 = { word: "hello", word: "working", word: "lighthouse" };
console.log(assertEqual((eqObjects(test3, test4)), true));

module.exports = eqObjects;