const assertEqual = require('./assertEqual');

const tail = function(arr) {
  return arr.slice(1);
};

// TEST CODE
// let result = tail(["Lighthouse", "Labs", "Hello", "Test"]);

// console.log(assertEqual(result[1], "Hello"));
// console.log(assertEqual(result[2], "Test"));
// console.log(assertEqual(result[0], "Labs"));
// console.log(assertEqual(result.length, 3));

module.exports = tail;