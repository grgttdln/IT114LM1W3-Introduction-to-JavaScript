/*
    Resources:
    - MDN Docs: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators
*/

// TODO 1.1 Use the var keyword to define a variable. Log the variable to the console. Now try moving the variable declaration after you log the variable.
// Your code here
var greeting1 = "Hello :)";
console.log(greeting1);

// TODO 1.2 Use the let keyword to define a variable.
// Your code here
let greeting2 = "Hi!";

// TODO 1.3 Use the const keyword to define a variable. Try reassigning the value of the variable. What happens?
// Your code here
const greeting3 = "Welcome";
// reassigning the variable defined in const will result in an error
// greeting3 = "Bonjour";

// Checkpoint 1.1 What is the difference between var, let, and const?
// Answer: var variables can be updated and redeclared, let variables can be updated but can not be redeclared, and const variables can neither be updated nor redeclared


// TODO 1.4 Try out the different arithmetic operators
// See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#arithmetic_operators
// Your code here
let arithmetic1 = 1 + 2.32;
console.log(arithmetic1);

let arithmetic2 = 32 / 5;
console.log(arithmetic2)

let arithmetic3 = 1 - 2.32;
console.log(arithmetic3);

let arithmetic4 = 32 * 5;
console.log(arithmetic4);

// Checkpoint 1.2 What operators did you use?
// Answer: I used the standard arithmetic operators including addition (+), subtraction (-), multiplication (*), and division (/).



// TODO 1.5 Try out the different string operators
// See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#string_operators
// Your code here
console.log("Hello " + "World!");
let alphabetString = "alpha";
alphabetString += "bet";
console.log(alphabetString)

// Checkpoint 1.3 What operators did you use?
// Answer: I used concatenation operation (+) to concatenate strings.

// TODO 1.6 Try out the different logical operators
// See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#logical_operators
// Your code here
let logical1 = true && true;
console.log("logical1: " + logical1);
let logical2 = true && false;
console.log("logical2: " + logical2);

let logical3 = 3 === 4 || true;
console.log("logical3: " + logical3);
let logical4 = false || false;
console.log("logical4: " + logical4);

let logical5 = !true;
console.log("logical5: " + logical5);
let logical6 = !false;
console.log("logical6: " + logical6);

// Checkpoint 1.4 What operators did you use?
// Answer: I used logical AND (&&), logical OR (||), and logical NOT (!).


// TODO 1.7 Try out the different relational operators
// See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#relational_operators

const animals = ["dog", "cat", "bird", "worm", "frog"];
console.log("dog" in animals);
console.log(3 in animals);

const zoo = { fish: "goldfish", bird: "mockingjay" };
console.log("fish" in zoo);
console.log("dog" in zoo)

// Checkpoint 1.5 What does [] == false evaluate to? Why does that happen? Research why
// Answer: [] == false results to true because [] is eqivalent to 0 and false is quivalent to 0, so 0 == 0 results to true.
// Your code here
console.log("Evaluate [] == false:", [] == false);