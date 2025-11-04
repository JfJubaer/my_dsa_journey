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
let queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
console.log("Queue after enqueues:", queue.items); // [1, 2, 3]
console.log("Front:", queue.front()); // 1
console.log("Dequeue:", queue.dequeue()); // 1
console.log("Queue after dequeue:", queue.items); // [2, 3]
console.log("Is queue empty?", queue.isEmpty()); // false

// Practice:
// - Try implementing queue operations with your own examples.
// - Write a function to simulate a queue at a ticket counter.
