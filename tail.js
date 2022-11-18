const tail = function(arr) {
  return arr.slice(1);
};

const assertEqual = function(actual, expected) {
  if (actual !== expected) {
    return (`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
  if (actual === expected) {
    return (`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  }
};

let result = tail(["Lighthouse", "Labs", "Hello", "Test"]);

console.log(assertEqual(result[1], "Hello"));
console.log(assertEqual(result[2], "Test"));
console.log(assertEqual(result[0], "Labs"));
console.log(assertEqual(result.length, 3));