// 1. ES6: Use Destructuring Assignment with the Rest Operator to Reassign Array Elements
const source = [1,2,3,4,5,6,7,8,9,10];
function removeFirstTwo(list) {
  const [a,b, ...arr] = list; 
  return arr;
}
const arr = removeFirstTwo(source);
console.log(arr); // should be [3,4,5,6,7,8,9,10]

// 2. ES6: Use Destructuring Assignment to Pass an Object as a Function's Parameters
const stats = {
  max: 56.78,
  standard_deviation: 4.34,
  min: -0.75,
  average: 35.85
};
const half = (function() {
    return function half({max, min}) {
    return (stats.max + stats.min) / 2.0;
  };
})();
console.log(stats); // should be object
console.log(half(stats)); // should be 28.015
