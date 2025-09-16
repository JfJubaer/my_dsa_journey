//Copilot, give me the next DSA topic in JavaScript with explanations and code examples.
//Continue from where we left off.
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

// =============================
// DSA Day 2 (Continued): Array Algorithms
// =============================

// Topic 2: Linear Search
// Linear search checks each element one by one to find a target value in the array.
function linearSearch(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return i; // Found at index i
    }
  }
  return -1; // Not found
}

let numbers = [5, 3, 8, 4, 2];
console.log("Linear Search for 4:", linearSearch(numbers, 4)); // Output: 3
console.log("Linear Search for 10:", linearSearch(numbers, 10)); // Output: -1

// Topic 2: Bubble Sort
// Bubble sort repeatedly steps through the list, compares adjacent elements, and swaps them
// if they are in the wrong order.
function bubbleSort(arr) {
  let n = arr.length;
  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        // Swap
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}

let unsorted = [5, 3, 8, 4, 2];
console.log("Bubble Sort result:", bubbleSort(unsorted)); // Output: [2, 3, 4, 5, 8]

// Practice:
// - Try searching for different numbers in the array using linearSearch.
// - Sort arrays with different values using bubbleSort.
// - Experiment by changing the code and observing the results.
