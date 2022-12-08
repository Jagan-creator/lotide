// ASSERTION EQUAL FUNCTION
const assertEqual = function(actual, expected) {
  if (actual !== expected) {
    return (`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
  if (actual === expected) {
    return (`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  }
};

// FIND KEY FUNCTION
const findKey = function(object, callback) {
  for (let item in object) {
    if (callback(object[item])) {
      return item;
    }
  }
};

// TEST CONDITIONS
console.log(assertEqual(findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2), "noma"));

console.log(assertEqual(findKey({
  movie1: { rating: 1 },
  movie2:   { rating: 4 },
  movie3:      { rating: 4 },
  movie4:   { rating: 7 },
  movie5:       { rating: 2 },
  movie6:  { rating: 9 }
}, x => x.rating >= 8), "movie6"));

module.exports = findKey;