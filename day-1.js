//Copilot, give me the next DSA topic in JavaScript with explanations and code examples. Continue from where we left off.
//Topic: Arrays in JavaScript
// =============================
// DSA Day 1: Arrays in JavaScript
// =============================

// What is an Array?
// An array is a list-like object used to store multiple values in a single variable.

// How to Create an Array
let fruits = ["apple", "banana", "orange"];
console.log("Initial array:", fruits); // Output: ["apple", "banana", "orange"]

// Accessing Elements
console.log("First fruit:", fruits[0]); // Output: apple
console.log("Second fruit:", fruits[1]); // Output: banana

// Adding Elements
fruits.push("grape"); // Adds 'grape' to the end
console.log("After push:", fruits); // Output: ["apple", "banana", "orange", "grape"]

// Removing Elements
fruits.pop(); // Removes the last element
console.log("After pop:", fruits); // Output: ["apple", "banana", "orange"]

// Adding to the start
fruits.unshift("mango"); // Adds 'mango' to the start
console.log("After unshift:", fruits); // Output: ["mango", "apple", "banana", "orange"]

// Removing from the start
fruits.shift(); // Removes the first element
console.log("After shift:", fruits); // Output: ["apple", "banana", "orange"]

// Looping Through an Array
console.log("Looping through array:");
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

// Common Array Methods
// - push()    : Add to end
// - pop()     : Remove from end
// - shift()   : Remove from start
// - unshift() : Add to start
// - length    : Number of elements

// Practice: Try creating your own array and use these methods!
