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

  removeFrom(index) {
     if (index > 0 && index > this.size) {
       return -1
     } else {
       let curr, prev, i = 0
       curr = this.head
       prev = curr
       if (index == 0) {
         this.head = curr.next
       } else {
         while(i < index) {
           i++
           prev = curr
           curr = curr.next
         }
         // remove element
         prev.next = curr.next
       }
      this.size--
      return curr.data
   }
 }

 removeData(data) {
   let curr = this.head
   let prev = null
   while (curr != null) {
     if(curr.data === data) {
       if(prev == null) {
         this.head = curr.next
       } else {
         prev.next = curr.next
       }
       this.size--
       return curr.data
     }
     prev = curr
     curr = curr.next
   }
   return -1
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

  indexOf(data) {
    let count = 0
    let curr = this.head
    while(curr != null) {
      if(curr.data === data) {
        return count
      } else {
        count++
        curr = curr.next
      }
    }
    // not found
    return -1
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
ll.insert(10);
ll.insert(20);
ll.insert(30);
ll.insert(40);
ll.insert(50);
console.log('data removed', ll.removeData(50))
ll.printList() // 10 20 30 40

// console.log(ll.indexOf(40)) // 3
ll.insertAt(60,2)
ll.printList() // 10 20 60 30 40
console.log(ll.removeFrom(3))
ll.printList(); // 10 20 60 40
