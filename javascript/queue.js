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
}
