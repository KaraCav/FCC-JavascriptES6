// 18. ES6: Use Destructuring Assignment with the Rest Operator to Reassign Array Elements
const source = [1,2,3,4,5,6,7,8,9,10];
function removeFirstTwo(list) {
  const [a,b, ...arr] = list; 
  return arr;
}
const arr = removeFirstTwo(source);
console.log(arr); // should be [3,4,5,6,7,8,9,10]

// 19. ES6: Use Destructuring Assignment to Pass an Object as a Function's Parameters
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

// 20. Create a JavaScript Promise
const makeServerRequest = new Promise((resolve, reject) => {
  let responseFromServer;
  if(responseFromServer) {
    resolve("We got the data");
  } else {  
    reject("Data not received")
  }
});

// 21. Handle a Fulfilled Promise with 'then'
const makeServerRequest = new Promise((resolve, reject) => {
  let responseFromServer = true;
  if(responseFromServer) {
    resolve("We got the data").then((result) => {
      console.log(result);
    });
  } else {  
    reject("Data not received");
  }
});

// 22. Handle a Rejected Promise with catch
const makeServerRequest = new Promise((resolve, reject) => {
  let responseFromServer = false;
  if(responseFromServer) {
    resolve("We got the data");
  } else {  
    reject("Data not received").catch((error) => {
      console.log(error);
    });
  }
});

// 23. Use Destructuring Assignment to Extract Values from Objects
const HIGH_TEMPERATURES = {
  yesterday: 75,
  today: 77,
  tomorrow: 80
};
const {today, tomorrow} = HIGH_TEMPERATURES;

// 24. Create a Module Script
<html>
  <body>
    <script type="module" src="index.js"></script>
  </body>
</html>
