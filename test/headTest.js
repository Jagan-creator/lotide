// EXPORT

const head = require('../head');
const assertEqual = require('../assertEqual');

// TEST CODE

console.log(assertEqual(head([]), 2));
console.log(assertEqual(head([5,6,7]), 5));
console.log(assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello"));