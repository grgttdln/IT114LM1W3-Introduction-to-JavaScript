/*
    Resources:
    - freeCodeCamp on Map, Reduce and Filter: https://www.freecodecamp.org/news/javascript-map-reduce-and-filter-explained-with-examples/
*/
// TODO 5.1 Use the map method to create a new array that contains the squares of all numbers in the array
const numbers = [1, 2, 4, 4, 5];
// Your code here
let squaredNumbers = numbers.map(number => number * number);
console.log(squaredNumbers);

// TODO 5.2 Use the filter method to create a new array that contains only the even numbers in the array
// Your code here
let evenNumbers = numbers.filter(number => number % 2 === 0);
console.log(evenNumbers);

// TODO 5.3 Use the reduce method to find the sum of all numbers in the array
// Your code here
let sumNumbers = numbers.reduce((accumulator, currVal) => accumulator + currVal, 0)
console.log(sumNumbers);

// TODO 5.4 Use the map method to convert all elements in the array to uppercase
const words = ['hello', 'world'];
// Your code here
let wordsToUpper = words.map(item => item.toUpperCase());
console.log(wordsToUpper);

// TODO 5.5 Use the filter method to create a new array that contains only the words with more than four letters in the array
// Your code here
let newWords = words.filter(item => item.length > 4);
console.log(newWords);

// TODO 5.6 Use the reduce method to concatenate all words in the array into a single string
// Your code here
let wordsReduced = newWords.reduce((accumulator, currWord) => accumulator + currWord, "")
console.log(wordsReduced);

// Checkpoint 5.1 Summarize what map, filter, and reduce do
// ANSWER:
// map transforms each element of an array based on a provided callback function, filter selects elements based on a condition, and reduce aggregates the elements into a single value or any accumulation.  