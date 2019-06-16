'use strict'

class Queue {
  constructor() {
    this.items = []
  }

  isEmpty() {
    return this.items.length == 0
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

class PriorityQueue extends Queue {
  add(element) {
    if (this.isEmpty()) {
      this.items.push(element)
    } else {
      let added = false
      for(let i = 0; i < this.items.length; i++) {
        if (element[1] < this.items[i][1]) {
          this.items.splice(i, 0, element)
          added = true
          break
        }
      }
      if (!added) {
        this.items.push(element)
      }
    }
  }
}


const queue = new Queue()

// queue.add(10);
// queue.add(20);
// queue.add(30);
// queue.add(40);
// queue.add(50);
// queue.add(60);
//
// console.log(queue.isEmpty())
// console.log(queue.front()) // returns 10
// console.log(queue.remove())
// console.log(queue.printQueue()) // [20, 30, 40, 50, 60]


const pq = new PriorityQueue();
pq.add(['Beau Carnes', 2]);
pq.add(['Quincy Larson', 3]);
pq.add(['Ewa Mitulska-Wójcik', 1])
pq.add(['Briana Swift', 2])
pq.printQueue();
      // [ [ 'Ewa Mitulska-Wójcik', 1 ],
      // [ 'Beau Carnes', 2 ],
      // [ 'Briana Swift', 2 ],
      // [ 'Quincy Larson', 3 ] ]

pq.remove();
// console.log(pq.front());
pq.printQueue();
  // [ [ 'Beau Carnes', 2 ],
  // [ 'Briana Swift', 2 ],
  // [ 'Quincy Larson', 3 ] ]
