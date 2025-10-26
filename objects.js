//Copilot, give me the next DSA topic in JavaScript with explanations and code examples.
//Continue from where we left off.
// =============================
// DSA Day 4: Objects in JavaScript
// =============================

// What is an Object?
// An object is a collection of key-value pairs. It's used to store related data and
// functionality together.

// How to Create an Object
let person = {
  name: "Alice",
  age: 25,
  isStudent: true,
};
console.log("Person object:", person);

// Accessing Object Properties
console.log("Name:", person.name); // Dot notation
console.log("Age:", person["age"]); // Bracket notation

// Adding or Updating Properties
person.city = "New York"; // Add new property
person.age = 26; // Update existing property
console.log("Updated person:", person);

// Removing Properties
delete person.isStudent;
console.log("After deleting isStudent:", person);

// Looping Through Object Properties
console.log("All properties in person:");
for (let key in person) {
  console.log(key + ":", person[key]);
}

// Example: Array of Objects
let users = [
  { name: "Bob", age: 22 },
  { name: "Carol", age: 28 },
  { name: "Dave", age: 24 },
];

// Find user by name
function findUserByName(users, targetName) {
  for (let i = 0; i < users.length; i++) {
    if (users[i].name === targetName) {
      return users[i];
    }
  }
  return null;
}
console.log("Find user Carol:", findUserByName(users, "Carol"));
// Output: { name: "Carol", age: 28 }

// Practice:
// - Create your own object and add/update/remove properties.
// - Loop through an object and print all keys and values.
// - Try working with an array of objects and write a function to search by a property.
