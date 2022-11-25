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
  let results = {};
  for (let letter of sentenceString) {
    if (letter !== " ") {       // avoids dealing with spaces in the strings we run
      if (results[letter]) {
        results[letter] += 1;   // this adds 1 to all letters of that type that already have been run
      } else {
        results[letter] = 1;    // this creates a 1 for letter that have not yet been discovered
      }
    }
  }
  return results;
};

// TEST PARAMATERS
console.log();
console.log();