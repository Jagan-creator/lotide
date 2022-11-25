// EQUAL FUNCTION
const assertEqual = function(actual, expected) {
  if (actual !== expected) {
    return (`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
  if (actual === expected) {
    return (`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  }
};

const bestTVShowsByGenre = { 
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

const findKeyByValue = function(object1, category) {
  // set a const in a loop for object1
  // set parameters for if object1 is === to category
  // return the object that matches category
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");