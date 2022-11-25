// EQUAL FUNCTION
const assertEqual = function(actual, expected) {
  if (actual !== expected) {
    return (`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
  if (actual === expected) {
    return (`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  }
};

// function below is supposed to take in two objects and return a true value if they match and a false value if they do not

const eqObjects = function(object1, object2) {

};

// running test conditions to make sure that the objects when ran through assertEqual do not function as intended

const shirtObject = { color: "red", size: "medium" };
const anotherShirtObject= { size: "medium", color: "red" };
console.log(assertEqual(shirtObject , anotherShirtObject));

const longSleeveShirtObject= { size: "medium", color: "red", sleeveLength: "long" };
console.log(assertEqual(shirtObject , longSleeveShirtObject));