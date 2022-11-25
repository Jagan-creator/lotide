// EQUAL FUNCTION
const assertEqual = function(actual, expected) {
  if (actual !== expected) {
    return (`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
  if (actual === expected) {
    return (`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  }
};

// COUNT LETTERS FUNCTION
const countLetters = function(sentenceString) {

};

// TEST PARAMATERS
console.log();
console.log();