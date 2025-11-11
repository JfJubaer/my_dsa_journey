// =============================
// Object Operations in JavaScript
// =============================

// 1. Creating an object
let person = {
  name: "Alice",
  age: 25,
  city: "New York",
};
console.log("Initial object:", person);

// 2. Accessing properties
console.log("Name (dot notation):", person.name);
console.log("Age (bracket notation):", person["age"]);

// 3. Adding properties
person.country = "USA";
console.log("After adding country:", person);

// 4. Updating properties
person.age = 26;
console.log("After updating age:", person);

// 5. Deleting properties
delete person.city;
console.log("After deleting city:", person);

// 6. Checking property existence
console.log("Has 'name'?", "name" in person);
console.log("Has 'city'?", person.hasOwnProperty("city"));

// 7. Looping through properties
console.log("All properties:");
for (let key in person) {
  console.log(key + ":", person[key]);
}

// 8. Getting keys, values, and entries
console.log("Object keys:", Object.keys(person));
console.log("Object values:", Object.values(person));
console.log("Object entries:", Object.entries(person));

// 9. Merging objects
let job = { role: "Developer", company: "Tech Inc" };
let merged = { ...person, ...job };
console.log("Merged object:", merged);

// 10. Freezing and sealing objects
Object.freeze(person);
person.name = "Bob"; // This won't change the name
console.log("After freeze (name unchanged):", person);

let car = { brand: "Toyota" };
Object.seal(car);
car.brand = "Honda"; // Allowed
delete car.brand; // Not allowed
console.log("After seal (brand updated, not deleted):", car);

// 11. Destructuring objects
let { name, age } = person;
console.log("Destructured name:", name);
console.log("Destructured age:", age);

// 12. Nested objects
let student = {
  info: {
    id: 101,
    grade: "A",
  },
};
console.log("Nested object (grade):", student.info.grade);
