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
