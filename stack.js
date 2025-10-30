// =============================
// DSA Day 6: Stack Data Structure in JavaScript
// =============================

// What is a Stack?
// A stack is a linear data structure that follows the Last-In-First-Out (LIFO)
// principle.
// The last element added is the first one to be removed.

// Common stack operations:
// - push: Add an element to the top
// - pop: Remove the top element
// - peek: View the top element without removing it
// - isEmpty: Check if the stack is empty

// Implementing a Stack using an Array
class Stack {
  constructor() {
    this.items = [];
  }

  // Add element to the stack
  push(element) {
    this.items.push(element);
  }

  // Remove and return the top element
  pop() {
    if (this.isEmpty()) {
      return "Stack is empty";
    }
    return this.items.pop();
  }

  // View the top element
  peek() {
    if (this.isEmpty()) {
      return "Stack is empty";
    }
    return this.items[this.items.length - 1];
  }

  // Check if the stack is empty
  isEmpty() {
    return this.items.length === 0;
  }

  // Get the size of the stack
  size() {
    return this.items.length;
  }
}

// Example usage:
let stack = new Stack();
stack.push(10);
stack.push(20);
stack.push(30);
console.log("Stack after pushes:", stack.items); // [10, 20, 30]
console.log("Peek:", stack.peek()); // 30
console.log("Pop:", stack.pop()); // 30
console.log("Stack after pop:", stack.items); // [10, 20]
console.log("Is stack empty?", stack.isEmpty()); // false

// Practice:
// - Try implementing stack operations with your own examples.
// - Write a function to reverse a string using a stack.
