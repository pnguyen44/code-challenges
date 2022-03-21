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

// console.log(queue.front()); // No element in queue
// console.log(queue.remove()) // Queue is empty

// queue.add(10);
// queue.add(20);
// queue.add(30);
// queue.add(40);
// queue.add(50);
// queue.add(60);

// console.log(queue.isEmpty()) // false
// console.log(queue.front()) //  10
// console.log(queue.remove()) // 10
// console.log(queue.printQueue()) // [20, 30, 40, 50, 60]


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
