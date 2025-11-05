// =============================
// DSA Day 7: Queue Data Structure in JavaScript
// =============================

// What is a Queue?
// A queue is a linear data structure that follows the First-In-First-Out
// (FIFO) principle.
// The first element added is the first one to be removed.

// Common queue operations:
// - enqueue: Add an element to the end (rear)
// - dequeue: Remove the element from the front
// - front: View the front element without removing it
// - isEmpty: Check if the queue is empty
// - size: Get the number of elements in the queue

// Implementing a Queue using an Array
class Queue {
  constructor() {
    this.items = [];
  }

  // Add element to the end of the queue
  enqueue(element) {
    this.items.push(element);
  }

  // Remove and return the front element
  dequeue() {
    if (this.isEmpty()) {
      return "Queue is empty";
    }
    return this.items.shift();
  }

  // View the front element
  front() {
    if (this.isEmpty()) {
      return "Queue is empty";
    }
    return this.items[0];
  }

  // Check if the queue is empty
  isEmpty() {
    return this.items.length === 0;
  }

  // Get the size of the queue
  size() {
    return this.items.length;
  }
}

// Example usage:
let queue1 = new Queue();
queue1.enqueue(1);
queue1.enqueue(2);
queue1.enqueue(3);
console.log("Queue after enqueues:", queue1.items); // [1, 2, 3]
console.log("Front:", queue1.front()); // 1
console.log("Dequeue:", queue1.dequeue()); // 1
console.log("Queue after dequeue:", queue1.items); // [2, 3]
console.log("Is queue empty?", queue1.isEmpty()); // false

// Simple Queue using functions and array
let queue2 = [];

function enqueue(element) {
  queue2.push(element);
}

function dequeue() {
  return queue2.length === 0 ? "Queue is empty" : queue2.shift();
}

function front() {
  return queue2.length === 0 ? "Queue is empty" : queue2[0];
}

enqueue(1);
enqueue(2);
enqueue(3);
console.log(queue2); // [1, 2, 3]
console.log(dequeue()); // 1
console.log(queue2); // [2, 3]
console.log(front()); // 2

// Practice:
// - Try implementing queue operations with your own examples.
// - Write a function to simulate a queue at a ticket counter.
