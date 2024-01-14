/*
    Resources:
    - MDN Docs: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Control_flow_and_error_handling
*/

const randomNumber = Math.floor((Math.random() * 100) + 1); // feel free to mock this value for testing

// TODO 2.1 Display "more than fifty" if randomNumber is more than fify
// Your code here
console.log("\nTODO: 1");
if (randomNumber > 50) {
    console.log(randomNumber);
}

// TODO 2.2 Display whether the random number is odd or even
// Your code here
if (randomNumber % 2 === 0) {
    console.log("The random number is even.")
} else {
    console.log("The random number is odd.");
}

// TODO 2.3 If the number if a multiple of 3, write "fizz".
// if the number is a multiple of 5 display "buzz".
// if the number is divisible by both 3 and 5, display "fizzbuzz". otherwise, display the number
// Your code here
if (randomNumber % 3 === 0 && randomNumber % 5 === 0) {
    console.log("fizzbuzz");
} else if (randomNumber % 3 === 0) {
    console.log("fizz");
} else if (randomNumber % 5 === 0) {
    console.log("buzz");
}

let toDisplay = randomNumber % 2 === 0 ? "Even" : "Odd";
// TODO 2.4 Use the ternary conditional operator to set toDisplay to "Even" if randomNumber is even and "Odd" if randomNumber is odd
// Your code here
console.log("toDisplay:", toDisplay);


// Checkpoint 2.1 How do you use switch statements and when would you use them? Try researching the answer
// ANSWER: 
// A switch statement is used for efficient multi-way branching, providing a cleaner and more readable alternative to a series of if-else statements when checking a variable equality checks against multiple possible values.


// TODO 2.5 Use a for loop to print the numbers 1 to N
console.log("\nTODO: 2");
const n = 10
// Your code here
for (let i = 1; i <= 10; i++) {
    console.log(i);
}

const list = ["apple", "banana", "cherry", "date", "elderberry"];
// TODO 2.6 Use a while loop to display all the values in the list
// Your code here
let i = 0;
while (i < list.length) {
    console.log(list[i]);
    i++;
}


// Checkpoint 2.3 What is the difference between do while and while loop?
// ANSWER: 
// do while loop ensures that the code will execute atleast one time, then checks the condition whether the do while should continue or not.
// On the other hand, while loop first checks the condition, if the condition evaluates to true, the code will run and if not, the code will not run.


// TODO 2.7 Use a for of loop to display all the values in the list
// Your code here
console.log("\nTODO: 3");
console.log("\nfor of loop");
for (const element of list) {
    console.log(element);
}
  
// TODO 2.8 Use a for in loop to display all the values in the list
// Your code here
console.log("\nfor in loop");
for (const element in list) {
    console.log(element);
}

// TODO 2.9 Use the for each method of the list to display all its values 
// Your code here
console.log("\nfor each loop");
list.forEach(displayItems);

function displayItems(item) {
    console.log(item);
}


// Checkpoint 2.2 When should you use for of, for in, or .forEach loops? Try researching the answer
// ANSWER: 
// for of loop can be used when iterating over values in iterable objects, such as arrays, strings, maps, sets, etc.
// for in loops can be used when iterating over the keys (property names) of an object.
// .forEach loop provides a callback function for each element. The loop can be used to provide a more functional and expressive way of iterating over array elements. 


// TODO 2.10 Use the try and catch block to catch division by zero errors in the code below.
// In the finally block, simulate cleaning up resources by displaying "cleaning up resources"
console.log("\nTODO: 4");
const numerator = Math.floor((Math.random() * 100) + 1);
const denominator = Math.floor((Math.random() * 5)); // feel free to mock this value for testing

try {
    if (denominator === 0) {
        throw new Error("Division by zero error");
    } else {
        console.log(numerator / denominator);
    }
} catch (error) {
    console.log("Denominator cannot be zero.");
} finally {
    console.log("cleaning up resources");
}