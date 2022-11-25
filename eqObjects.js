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
  
  let equalObjects = false;                   // this will help us compare outputs later in the function
  let insert1 = Object.keys(object1);         // easier to write out the Object.keys method here
  let insert2 = Object.keys(object2);         // same as above but just for object2 now

  // set an if parameter that indicates if the key length on both objects does not match it will return a false value
  
  if (insert1.length !== insert2.length) {
    return false;
  }

  // now setup a for if scenario that involves using isArray so we can compare them to return an appropriate value

  
};

// running test conditions to make sure that the objects when ran through assertEqual do not function as intended

const shirtObject = { color: "red", size: "medium" };
const anotherShirtObject= { size: "medium", color: "red" };
console.log(assertEqual(shirtObject , anotherShirtObject));

const longSleeveShirtObject= { size: "medium", color: "red", sleeveLength: "long" };
console.log(assertEqual(shirtObject , longSleeveShirtObject));