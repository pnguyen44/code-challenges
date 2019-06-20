 // Merge Two Sorted Lists

 // Merge two sorted linked lists and return it as a new list.
 // The new list should be made by splicing together the nodes of the first two lists.

// Example:

// Input: 1->2->4, 1->3->4
// Output: 1->1->2->3->4->4

 class Node {
   constructor(data) {
     this.data = data
     this.next = null
   }
 }

 class linkedlist {
   constructor() {
     this.head = null
     this.size = 0
   }
   add(data) {
     const newNode = new Node(data)
     let curr
     if (this.head === null) {
       this.head = newNode
     } else {
       curr = this.head
       while(curr.next != null) {
         curr = curr.next
       }
       curr.next = newNode
     }
   }
 }

 const l1 = new LinkedList()
 const l2 = new LinkedList()

 l1.add(1)
 l1.add(2)
 l1.add(4)

 l2.add(1)
 l2.add(3)
 l2.add(4)
