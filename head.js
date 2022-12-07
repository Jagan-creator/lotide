const assertEqual = require('./assertEqual');

const head = function(array) {
  if (array === []) {
    return undefined;
  } else {
    return array[0];
  }
};


// TEST CODE
// console.log(assertEqual(head([]), 2));
// console.log(assertEqual(head([5,6,7]), 5));
// console.log(assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello"));

module.exports = head;