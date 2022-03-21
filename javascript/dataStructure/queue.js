"use strict";

class Queue {
  constructor() {
    this.items = [];
  }

  isEmpty() {
    return this.items.length === 0;
  }

  // Add element to queue
  add(element) {
    this.items.push(element);
  }

  // Remove an element from queue and return is value. If queue is empty return "Queue is empty"
  remove() {
    if (this.isEmpty()) {
      return "Queue is empty";
    }
    return this.items.shift();
  }

  // Return the first element of a queue. If no element in queue return "No element in queue"
  front() {
    if (this.isEmpty()) {
      return "No element in queue";
    }

    return this.items[0];
  }

  printQueue() {
    console.log(this.items);
  }
}

class PriorityQueue extends Queue {
  add(element) {
    if (this.isEmpty()) {
      this.items.push(element);
      return;
    }

    for (const [index, item] of this.items.entries()) {
      const [name, priority] = item;

      if (element[1] < priority) {
        this.items.splice(index, 0, element);
        return;
      }
    }
    this.items.push(element);
  }
}

const queue = new Queue();

console.log(queue.front()); // No element in queue
console.log(queue.remove()); // Queue is empty

for (let i = 1; i <= 6; i++) {
  queue.add(i * 10);
}

console.log(queue.isEmpty()); // false
console.log(queue.front()); //  10
console.log(queue.remove()); // 10
queue.printQueue(); // [20, 30, 40, 50, 60]

const pq = new PriorityQueue();
pq.add(["Beau Carnes", 2]);
pq.add(["Quincy Larson", 3]);
pq.add(["Ewa Mitulska-Wójcik", 1]);
pq.add(["Briana Swift", 2]);
pq.printQueue();
// [ [ 'Ewa Mitulska-Wójcik', 1 ],
// [ 'Beau Carnes', 2 ],
// [ 'Briana Swift', 2 ],
// [ 'Quincy Larson', 3 ] ]

console.log(pq.remove()); // [ 'Ewa Mitulska-Wójcik', 1 ]
pq.printQueue();
// [ [ 'Beau Carnes', 2 ],
// [ 'Briana Swift', 2 ],
// [ 'Quincy Larson', 3 ] ]

console.log(pq.front()); // [ 'Beau Carnes', 2 ]

// Implement queue using object

class MyQueue {
  constructor() {
    this.items = {};
    this.head = 0
    this.tail = 0
  }
  // Get the length queue
  get length() {
    return this.tail - this.head
  }

  // Determine if queue is empty
  get isEmpty() {
    return this.length === 0;
  }

  // Add element to queue
  enqueue(element) {
    this.items[this.tail] = element
    this.tail++
  }

  // Remove element from queue. If queue is empty return "Queue is empty".
  dequeue() {
    if (this.isEmpty) {
      return "Queue is empty"
    }
    const item = this.items[this.head]
    delete this.items[this.head]
    this.head++
    return item
  }

  // Return the first element in queue. If queue is empty return "No element in queue".
  peek() {
    if (this.isEmpty) {
      return "No element in queue"
    }

    return this.items[this.head]
  }

  // Print queue
  printQueueAsArray() {
    return Object.values(this.items)
  }
}

const myQueue = new MyQueue();

console.log(myQueue.peek()); // No element in queue
console.log(myQueue.dequeue()) // Queue is empty

for (let i = 1; i <= 6; i++) {
  myQueue.enqueue(i * 10)
}

console.log(myQueue.isEmpty) // false
console.log(myQueue.peek()) //  10
console.log(myQueue.dequeue()) // 10
console.log(myQueue.printQueueAsArray()) // [20, 30, 40, 50, 60]
console.log(myQueue.length) // 5
