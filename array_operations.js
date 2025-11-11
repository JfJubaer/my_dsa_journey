// =============================
// Array Operations in JavaScript
// =============================

// 1. Creating an array
let arr = [10, 20, 30, 40];
console.log("Initial array:", arr);

// 2. Accessing elements
console.log("First element:", arr[0]);
console.log("Last element:", arr[arr.length - 1]);

// 3. Adding elements
arr.push(50); // Add to end
console.log("After push:", arr);

arr.unshift(0); // Add to start
console.log("After unshift:", arr);

// 4. Removing elements
arr.pop(); // Remove from end
console.log("After pop:", arr);

arr.shift(); // Remove from start
console.log("After shift:", arr);

// 5. Finding elements
console.log("Index of 30:", arr.indexOf(30));
console.log("Includes 20?", arr.includes(20));

// 6. Splicing (add/remove at specific index)
arr.splice(2, 1, 25); // Remove 1 element at index 2, insert 25
console.log("After splice (replace index 2):", arr);

arr.splice(1, 0, 15); // Insert 15 at index 1
console.log("After splice (insert at index 1):", arr);

arr.splice(3, 2); // Remove 2 elements starting at index 3
console.log("After splice (remove from index 3):", arr);

// 7. Slicing (get a subarray)
let subArr = arr.slice(1, 3); // Elements from index 1 to 2
console.log("Sliced array (index 1 to 2):", subArr);

// 8. Concatenation
let arr2 = [60, 70];
let combined = arr.concat(arr2);
console.log("Concatenated array:", combined);

// 9. Reversing
let reversed = [...arr].reverse();
console.log("Reversed array:", reversed);

// 10. Sorting
let unsorted = [3, 1, 4, 2];
unsorted.sort();
console.log("Sorted array:", unsorted);

// 11. Iterating (forEach)
console.log("Iterating with forEach:");
arr.forEach((item, idx) => {
  console.log(`Index ${idx}:`, item);
});

// 12. Mapping (map)
let doubled = arr.map((x) => x * 2);
console.log("Doubled array (map):", doubled);

// 13. Filtering (filter)
let filtered = arr.filter((x) => x > 20);
console.log("Filtered array (>20):", filtered);

// 14. Reducing (reduce)
let sum = arr.reduce((acc, curr) => acc + curr, 0);
console.log("Sum of array (reduce):", sum);

// 15. Joining (join)
console.log("Joined array (string):", arr.join(" - "));
