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

// 9. Spread Operator- allows us to expand arrays and other expressions in places where multiple parameters or elements are expected
// ...arr returns an unpacked array [3,4] => 3,4. In other words, it spreads the array.
const arr1 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];
let arr2;
(function() {
  arr2 = [...arr1]; 
})();

// 10. Create Strings using Template Literals
const result = {
  failure: ["no-var", "var-on-top", "linebreak"],
};
function makeList(arr) {
  const resultDisplayArray = arr.map(item => `<li class="text-warning">${item}</li>`);
  return resultDisplayArray;
}
const resultDisplayArray = makeList(result.failure);

// 11. Write Concise Object Literal Declarations Using Simple Fields
const createPerson = (name, age, gender) => {
  "use strict";
  return { name,age,gender };};
console.log(createPerson("Zodiac Hasbro", 56, "male")); 

// 12. Write Concise Declarative Functions with ES6
const bicycle = {
  gear: 2,
  setGear(newGear) {
    "use strict";
    this.gear = newGear; } };
// 13. ES6: Use class Syntax to Define a Constructor Function
function makeClass() {
  class Vegetable {
    constructor(name) {
      this.name = name;
    }
  }
  return Vegetable;
}
const Vegetable = makeClass();
const carrot = new Vegetable('carrot');

// 14. ES6: Use getters and setters to Control Access to an Object
function makeClass() {
  class Thermostat {
    constructor(temp){
      this.temp= temp;
    }
      get temperature(){
        return 5/9 *(this.temp- 32);
    }
    set temperature(temp){
      this.temp = temp;
    }
  }
  return Thermostat;
}
const Thermostat = makeClass();
const thermos = new Thermostat(76); // setting in Fahrenheit scale
let temp = thermos.temperature; // 24.44 in C
thermos.temperature = 26;
temp = thermos.temperature; // 26 in C

// 15. Import, Export examples
import { capitalizeStrings } from "string_functions"
import * as capitalize_strings from "capitalize_strings";
export { capitalizeString, foo }

// 16. ES6: Use Destructuring Assignment to Assign Variables from Objects - obtain the average temp for
// tomorrow from the input object AVG_TEMPERATURES, and assign value with key tomorrow to tempOfTomorrow in line.
const AVG_TEMPERATURES = {
  today: 77.5,
  tomorrow: 79
};
function getTempOfTmrw(avgTemperatures) {
  const {tomorrow : tempOfTomorrow} = avgTemperatures;
  return tempOfTomorrow;
}
