// 21. Merge Two Sorted Lists

// You are given the heads of two sorted linked lists list1 and list2.

// Merge the two lists in a one sorted list. The list should be made by splicing together the nodes of the first two lists.

// Return the head of the merged linked list.

// Example 1:

// Input: list1 = [1,2,4], list2 = [1,3,4]
// Output: [1,1,2,3,4,4]

// Example 2:

// Input: list1 = [], list2 = []
// Output: []
// Example 3:

// Input: list1 = [], list2 = [0]
// Output: [0]

// Constraints:

// The number of nodes in both lists is in the range [0, 50].
// -100 <= Node.val <= 100
// Both list1 and list2 are sorted in non-decreasing order.

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  add(val) {
    const newNode = new Node(val);

    if (!this.head) {
      this.head = newNode;
      return;
    }

    let curr = this.head;
    while (curr.next) {
      curr = curr.next;
    }

    curr.next = newNode;
  }
}

function toArray(linkedList) {
  let curr = linkedList.head;
  let nodes = [];

  while (curr) {
    nodes.push(curr.val);
    curr = curr.next;
  }

  return nodes;
}

const l1 = new LinkedList();
const l2 = new LinkedList();
l1.add(1);
l1.add(2);
l1.add(4);
l2.add(1);
l2.add(3);
l2.add(4);

console.log("l1 =", toArray(l1)); // l1 = [ 1, 2, 4 ]
console.log("l2 =", toArray(l2)); // l2 = [ 1, 3, 4 ]

var mergeTwoLists = function (list1, list2) {
  const mergedLinkedListHead = { val: -1, next: null }; // create dummy node to get started
  let curr = mergedLinkedListHead;
  while (list1 && list2) {
    if (list1.val < list2.val) {
      curr.next = list1;
      list1 = list1.next;
    } else {
      curr.next = list2;
      list2 = list2.next;
    }
    curr = curr.next;
  }
  curr.next = list1 || list2;
  return mergedLinkedListHead.next;
};
