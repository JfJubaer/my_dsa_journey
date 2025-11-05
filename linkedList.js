// =============================
// DSA Day 8: Linked List Data Structure in JavaScript (Plain Functional Version)
// =============================

// This file demonstrates a singly linked list using plain functions and objects
// (no classes).
// A linked list is a sequence of nodes, where each node stores data and a pointer
//  to the next node.
// Linked lists allow dynamic memory allocation and efficient insertions/deletions.

// Node factory function: creates a new node object with given data and next pointer
// set to null.
function createNode(data) {
  return { data, next: null };
}

// append(head, data): Adds a new node with 'data' to the end of the linked list.
// If the list is empty (head is null), returns the new node as the head.
// Otherwise, traverses to the last node and links the new node.
function append(head, data) {
  let newNode = createNode(data);
  if (!head) return newNode;
  let current = head;
  while (current.next) {
    current = current.next;
  }
  current.next = newNode;
  return head;
}

// printList(head): Traverses the linked list from head and prints all node data
// in order.
function printList(head) {
  let current = head;
  let result = [];
  while (current) {
    result.push(current.data);
    current = current.next;
  }
  console.log("Linked List:", result.join(" -> "));
}

// remove(head, data): Removes the first node with the specified 'data' value.
// If the head node matches, returns the next node as the new head.
// Otherwise, finds the node before the target and updates its next pointer to skip the removed node.
function remove(head, data) {
  if (!head) return null;
  if (head.data === data) return head.next;
  let current = head;
  while (current.next && current.next.data !== data) {
    current = current.next;
  }
  if (current.next) {
    current.next = current.next.next;
  }
  return head;
}

// Example usage:
// Creates a linked list: 10 -> 20 -> 30
let head = null;
head = append(head, 10);
head = append(head, 20);
head = append(head, 30);
printList(head); // Linked List: 10 -> 20 -> 30

// Removes the node with value 20: Resulting list is 10 -> 30
head = remove(head, 20);
printList(head); // Linked List: 10 -> 30

// Practice:
// - Try adding and removing nodes with different values.
// - Write a function to search for a value in the linked list.
