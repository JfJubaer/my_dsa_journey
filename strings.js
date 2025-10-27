//Copilot, give me the next DSA topic in JavaScript with explanations and code examples.
//Continue from where we left off.
// =============================
// DSA Day 5: Strings in JavaScript
// =============================

// What is a String?
// A string is a sequence of characters used to represent text in JavaScript.

let greeting = "Hello, World!";
console.log("Greeting:", greeting);

// Accessing Characters
console.log("First character:", greeting[0]); // Output: H

// String Length
console.log("Length of greeting:", greeting.length); // Output: 13

// Common String Methods

// toUpperCase() and toLowerCase()
console.log("Uppercase:", greeting.toUpperCase()); // Output: HELLO, WORLD!
console.log("Lowercase:", greeting.toLowerCase()); // Output: hello, world!

// indexOf() - Find position of a substring
console.log("Index of 'World':", greeting.indexOf("World")); // Output: 7

// slice() - Extract part of a string
console.log("Slice (7, 12):", greeting.slice(7, 12)); // Output: World

// replace() - Replace part of a string
let newGreeting = greeting.replace("World", "JavaScript");
console.log("After replace:", newGreeting); // Output: Hello, JavaScript!

// split() - Convert string to array
let words = greeting.split(", ");
console.log("Split into words:", words); // Output: ["Hello", "World!"]

// trim() - Remove whitespace from both ends
let messy = "   spaced text   ";
console.log("Trimmed:", messy.trim()); // Output: "spaced text"

// Practice:
// - Try creating your own strings and use these methods.
// - Write a function to count vowels in a string.
// - Experiment with combining strings using + or template literals.
