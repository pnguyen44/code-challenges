 // Merge Two Sorted Lists

 // Merge two sorted linked lists and return it as a new list.
 // The new list should be made by splicing together the nodes of the first two lists.

// Example:

// Input: 1->2->4, 1->3->4
// Output: 1->1->2->3->4->4

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

 class Node {
   constructor(val) {
     this.val = val
     this.next = null
   }
 }

 class LinkedList {
   constructor() {
     this.head = null
     this.size = 0
   }
   add(val) {
     const newNode = new Node(val)
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
   printList()
 }

 const l1 = new LinkedList()
 const l2 = new LinkedList()
 l1.add(1)
 l1.add(2)
 l1.add(4)
 l2.add(1)
 l2.add(3)
 l2.add(4)


 var mergeTwoLists = function(l1, l2) {
   let mergedLinkedListHead = { val : -1, next : null }; // create dummy node to get started
   let curr = mergedLinkedListHead;
   while(l1 && l2) {
     if(l1.val < l2.val) {
       curr.next = l1
       l1 = l1.next
     } else {
       curr.next = l2
       l2 = l2.next
     }
     curr = runner.next;
   }
   curr.next = l1 || l2;
   return mergedLinkedListHead.next
 };
