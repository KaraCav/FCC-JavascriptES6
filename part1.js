// 1. Let in place of Var
function checkScope() {
"use strict";
  let i = "function scope";
  if (true) {
    let i = "block scope";
    console.log("Block scope i is: ", i);
  }
  console.log("Function scope i is: ", i);
  return i;
}

// 2. Mutate an Array Declared with const
const s = [5, 7, 2];
function editInPlace() {
  "use strict";
   s[0] = 2;
   s[1] = 5;
   s[2] = 7;
}
editInPlace();

// 3. Prevent Object Mutation- const declaration alone doesn't really protect your data from mutation. 
// To ensure your data doesn't change, JavaScript provides a function Object.freeze(obj).
function freezeObj() {
  "use strict";
  const MATH_CONSTANTS = {
    PI: 3.14 };
  Object.freeze(MATH_CONSTANTS);
  try {
    MATH_CONSTANTS.PI = 99;
  } catch( ex ) {
    console.log(ex);
  }
  return MATH_CONSTANTS.PI;
}
const PI = freezeObj();

// 4. Use Arrow Functions to Write Concise Anonymous Functions
var magic = function() {
  "use strict";
  return new Date();  };
// Becomes:
const magic = () => new Date();

// 5. Write Arrow Functions with Parameters
var myConcat = function(arr1, arr2) {
  "use strict";
  return arr1.concat(arr2);  };
// Becomes:
const myConcat = (arr1, arr2) => arr1.concat(arr2);
