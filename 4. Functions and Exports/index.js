/*
    Resources:
    - MDN on Functions: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions
    - JavaScript Tutorial on Functions: https://javascript.info/function-basics
    - freeCodeCamp on Functions: https://www.freecodecamp.org/news/what-is-a-function-javascript-function-examples/
*/

// Todo 4.1 Declare a function named 'greet' that takes one parameter 'name' and displays a greeting
// Then, Call the 'greet' function with your name as the argument
// Your code here
console.log("\nTODO: 1");
function greet(name) {
    console.log(`Hello ${name}!`);
}

greet("John");


// Checkpoint 4.1 What is the difference between a function declaration and a function expression?
// ANSWER: 
// A function declaration in JavaScript is hoisted, allowing it to be called before its declaration, while a function expression, including named function expressions, is not fully hoisted, preventing calls before the actual assignment.
// EXAMPLE (function declaration): 
// myFunction(); -> This works even before the function declaration
// function myFunction() {
//   console.log("Hello, world!");
// }
// EXAMPLE (function expression): 
// This would throw an error: Uncaught TypeError: myFunction is not a function
// myFunction();
// const myFunction = function() {
//   console.log("Hello, world!");
// };
// Functions expression can be named. This is where the function itself has a name, but the variable can also be used to reference the function.
// const myFunction = function namedFunction() {
//     console.log("Hello, world!");
// };


// Todo 4.2 Declare a function expression named 'calculateArea' that takes the length and width of a rectangle and returns its area
// Then, Call the 'calculateArea' function with any length and width as arguments
// Your code here
console.log("\nTODO: 2");
let calculateArea = function(length, width) {
    return length * width;
}

console.log(calculateArea(5, 5));


// Checkpoint 4.2 What is a callback function? Provide an example.
// ANSWER: 
// A callback is a function passed as an argument to another function and is executed after the completion of a specific task or event.
// EXAMPLE (function with a callback): 
function greetCallback(name, callback) {
    console.log("Hello, " + name + "!");
    callback(); // Execute the callback function
}

// Callback function
function sayGoodbye() {
console.log("Goodbye!");
}

// Calling the main function with the callback
greetCallback("Alice", sayGoodbye);
  

// Todo 4.3 Declare a higher-order function named 'modifyArray' that takes an array and a function as parameters. The function should modify each element in the array using the provided function and return the modified array.
// Then, Call the 'modifyArray' function with the 'numbers' array and a function that increments each number by 1
// Useful Tutorial: https://youtu.be/H4awPsyugS0?si=7wC1B7whXVkG8X5l
// Your code here
console.log("\nTODO: 3");
let numbers = [0, 1, 2, 3, 4, 5];

function modifyArray(arr, func) {
    for (let i = 0; i < arr.length; i++) {
        arr[i] = func(arr[i]);
    }

    return arr
}

function plusOne(number) {
    return number + 1;
}

let newArr = modifyArray(numbers, plusOne);
console.log(newArr);


// Todo 4.4 See mathUtils.js for the instructions to create the add method and PI constant.
// Then, import and call the add method here and display the value of the PI constant
// Useful Tutorial: https://youtu.be/qgRUr-YUk1Q?si=ceAaeHJfCYCmeNWx
// Your code here
console.log("\nTODO: 4");
import { add, PI } from './mathUtils.js'
let addNums = add(43, 1);
console.log("add method:", addNums); 
console.log("value of PI:", PI)


// Todo 4.5 See isPalindrome.js for the instructions to create the isPalindrome method.
// Then, import and call the isPalindrome method here
// Useful Tutorial: https://youtu.be/qgRUr-YUk1Q?si=ceAaeHJfCYCmeNWx
// Your code here
import isPalindrome from './isPalindrome.js';
console.log(isPalindrome("racecar"));
console.log(isPalindrome("hotdog"));


// Checkpoint 4.3 What does the require function and module.exports variable do?
// Should we use it over the import and export keywords? Why? Research your answer.
// ANSWER:
// The require function is used to include external modules or files in your Node.js application.
// const module = require('path/to/module');
// The module.exports variable is used to define what a module exports, making its functionalities accessible to other parts of the application.
// module.exports = { value1, function1 }
// The decision of whether to utilize require and module.exports (CommonJS) or import and export (ECMAScript modules - ESM) in Node.js is contingent on considerations like the support of Node.js versions, interoperability, adherence to standardization, and the requirement for contemporary JavaScript practices.
