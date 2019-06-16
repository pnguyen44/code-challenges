'use strict'

class Queue {
  constructor() {
    this.items = []
  }

  isEmpty() {
    return this.items.lenght == 0
  }

  add(element) {
    this.items.push(element)
  }

  remove() {
    if (this.isEmpty()) {
      return 'Queue is empty'
    } else {
      return this.items.shift()
    }
  }

  // return the first element of a queue
  front() {
    if (this.isEmpty()) {
      return 'No element in queue'
    } else {
      return this.items[0]
    }
  }

  printQueue() {
    console.log(this.items)
  }
}

const queue = new Queue()

queue.add(10);
queue.add(20);
queue.add(30);
queue.add(40);
queue.add(50);
queue.add(60);

console.log(queue.isEmpty())
console.log(queue.front()) // returns 10
console.log(queue.remove())
console.log(queue.printQueue()) // [20, 30, 40, 50, 60] 
