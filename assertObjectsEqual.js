// EQUAL OBJECTS FUNCTION
const eqObjects = function(object1, object2) {
  
  let insert1 = Object.keys(object1);
  let insert2 = Object.keys(object2);
  
  if (insert1.length !== insert2.length) {
    return false;
  } else {
    for (const key in object1) {
      if (Array.isArray(object1[key])) {
        if ((!eqArrays(object1[key], object2[key])) === false) {
          return false;
        }
      } else if (typeof object1[key] === "object") {
        if ((!eqObjects(object1[key], object2[key])) === false) {
          return false;
        }
      } else if (object1[key] !== object2[key]) {
        return false;
      }
    }
    return true;
  }
};

// ASSERTION FOR OBJECTS FUNCTION
const assertObjectsEqual = function(actual, expected) {
  // empty for now
};

// const assertArraysEqual = function(firstArray, secondArray) {
//   if (eqArrays(firstArray, secondArray)) {
//     return (`✅✅✅ Assertion Passed: ${firstArray} === ${secondArray}`);
//   } else {
//     return (`🛑🛑🛑 Assertion Failed: ${firstArray} !== ${secondArray}`);
//   }
// };

// TEST CONDITIONS
console.log(`Example label: ${inspect(actual)}`);