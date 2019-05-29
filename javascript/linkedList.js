// implement a linked list


class Node {
  constructor (data) {
    this.data = data
    this.next = null
  }
}


class LinkedList {
  constructor() {
    this.head = null,
    this.size = 0
  }

  insert(data) {
    // create a new node
    let node = new Node(data)
    let current
    if (this.head == null) {
      this.head = node
    } else {
      current = this.head
      while(current.next) {
        current = current.next
      }
      // add node
      current.next = node
    }
    this.size++
  }

  prepend() {
    // create new head
    const newHead = new Node(datea)
    // new heads next value to link to old head
    newHead.next = this.head
    // change the head pointer
    this.head = newHead
  }

}
