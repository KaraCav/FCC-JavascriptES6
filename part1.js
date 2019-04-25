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


// 6. Use '=>' syntax to compute the square of only the positive integers in realNumberArray and store new array in squaredIntegers.
const realNumberArray = [4, 5.6, -9.8, 3.14, 42, 6, 8.34, -2];
const squareList = (arr) => {
  const squaredIntegers = arr.filter((item) => (item === Math.floor(item) && item > 0)).map((item)=> item * item);
  return squaredIntegers;
};
const squaredIntegers = squareList(realNumberArray);

// 7. Default Parameters- give the second parameter a value in the case that one isn't passed in 
const increment = (function() {
  return function increment(number = number, value = 1) {
    return number + value;
  };
})();

// 8. Use the Rest Operator- eliminates the need to check the args array and allows map(), filter() and reduce() on the params array.
const sum = (function() {
  return function sum(...args) {
    return args.reduce((a, b) => a + b, 0); 
  };
})();
console.log(sum(1, 2, 3)); // 6
