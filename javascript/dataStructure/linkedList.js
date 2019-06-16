// implement a linked list with a insert, append, prepend, and printList method


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

  insertAt(data, index) {
    if (index > 0 && index > this.size) {
      return false
    } else {
      const newNode = new Node(data)
      let curr, prev
      curr = this.head
      if (index == 0) {
        newNode.next = this.head
        this.head = newNode
      } else {
        curr = this.head
        let i = 0
        while (i < index) {
          i++
          prev = curr
          curr = curr.next
        }
        // add element
        newNode.next = curr
        prev.next = newNode
      }
      this.size++
    }
   }
 }



  // prepend() {
  //   // create new head
  //   const newHead = new Node(data)
  //   // new heads next value to link to old head
  //   newHead.next = this.head
  //   // change the head pointer
  //   this.head = newHead
  // }

  deleteWithValue(data) {
    if (this.head === null) return

    // the data that you want to delete is the head
    if (this.head.data === data) {
      this.head = this.head.next
      return
    }

    let current = this.head
    while (current.next !== null) {
      if (current.next.data === data) {
        current.next = current.next.next
        return;
      }
      current = current.next
    }
  }

  reverseList(head = this.head) {
    let prev = null
    let curr = this.head
    while(curr != null) {
      let next = curr.next
      curr.next = prev
      prev = curr
      curr = next
    }
    this.head = prev
  }

  printList() {
    let current = this.head
    let str = ''
    while(current) {
      str += current.data + ' '
      current = current.next
    }
    console.log(str)
  }
}

let ll = new LinkedList()
ll.insert(20);
ll.insert(30);
ll.insert(40);
ll.insert(50);
ll.deleteWithValue(20)
ll.printList()

ll.reverseList()
ll.printList()
