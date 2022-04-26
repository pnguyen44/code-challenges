// implement a linked list with a insert, insertAt, removeFrom, removeData, reverseList, indexOf, toArray, printList, and mergeTwoLists method

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  insert(val) {
    const newNode = new Node(val);
    let curr = this.head;

    if (curr === null) {
      this.head = newNode;
      this.size++;
      return;
    }

    while (curr.next !== null) {
      curr = curr.next;
    }

    curr.next = newNode;
    this.size++;
  }

  insertAt(val, index) {
    if (index < 0 || index > this.size - 1) {
      console.log("invalid index");
      return;
    }

    let curr = this.head;
    let prev = null;
    const newNode = new Node(val);

    if (index === 0) {
      newNode.next = this.head;
      this.head = newNode;
      this.size++;
      return;
    }

    let i = 0;
    while (i < index) {
      prev = curr;
      curr = curr.next;
      i++;
    }

    prev.next = newNode;
    newNode.next = curr;

    this.size++;
  }

  _remove(node) {
    if (node.next === null) {
      node.val = null;
      node.next = null;
      return;
    }

    node.val = node.next.val;
    node.next = node.next.next;
  }

  removeFrom(index) {
    if (index < 0 || index > this.size - 1) {
      return null;
    }

    let prev = null;
    let curr = this.head;
    let i = 0;

    while (i < index) {
      prev = curr;
      curr = curr.next;
      i++;
    }

    const removed = curr.val;

    if (i === this.size - 1) {
      // Is tail
      prev.next = curr.next;
    } else {
      this._remove(curr);
    }

    this.size--;
    return removed;
  }

  removeData(val) {
    let curr = this.head;
    let prev = null;

    while (curr) {
      if (curr.val !== val) {
        prev = curr;
        curr = curr.next;
        continue;
      }

      if (curr.next === null) {
        // Is the tail
        prev.next = null;
      } else {
        this._remove(curr);
      }

      this.size--;
      return val;
    }

    return null;
  }

  reverseList() {
    let curr = this.head;
    let prev = null;

    while (curr !== null) {
      const next = curr.next;
      curr.next = prev;
      prev = curr;
      curr = next;
    }

    this.head = prev;
  }

  indexOf(val) {
    let curr = this.head;
    let index = 0;

    while (curr !== null) {
      if (curr.val === val) {
        return index;
      }

      curr = curr.next;
      index++;
    }

    return -1;
  }

  _toArray() {
    const nodes = [];
    let curr = this.head;

    while (curr) {
      nodes.push(curr.val);
      curr = curr.next;
    }

    return nodes;
  }

  printList() {
    console.log(this._toArray());
  }
}

function mergeTwoSortedLists(l1, l2) {
  const mergedListHead = new Node(0);
  let curr = mergedListHead;

  while (l1 && l2) {
    if (l1.val < l2.val) {
      curr.next = l1;
      l1 = l1.next;
    } else {
      curr.next = l2;
      l2 = l2.next;
    }

    curr = curr.next;
  }

  curr.next = l1 || l2;

  const ll = new LinkedList();
  ll.head = mergedListHead.next;
  return ll;
}

const ll = new LinkedList();
console.log("data removed", ll.removeData(10)); // data removed null
ll.reverseList();
ll.insert(20);
ll.insert(30);
ll.insert(40);
ll.insert(50);
ll.insertAt(10, 0);
ll.printList(); // [10, 20, 30, 40, 50]

const ll2 = new LinkedList();
ll2.insert(1);
ll2.insert(2);

const mergedList = mergeTwoSortedLists(ll.head, ll2.head); // [1, 2, 10, 20, 30, 40, 50]
mergedList.printList();

console.log("data removed", ll.removeData(10)); // data removed 10
console.log("data removed", ll.removeData(50)); // data removed 50
ll.printList(); // 20, 30, 40
console.log("data removed", ll.removeData(50)); // data removed null
console.log(ll.indexOf(40)); // 2
console.log(ll.indexOf(50)); // -1
ll.insertAt(10, 0);
ll.insertAt(60, 2);
ll.printList(); // [10, 20, 60, 30, 40]
ll.insertAt(60, -1); // invalid index
ll.insertAt(60, 10); // invalid index
console.log("data removed", ll.removeFrom(3)); // data removed 30
console.log("data removed", ll.removeFrom(0)); // data removed 10
console.log("data removed", ll.removeFrom(-1)); // data removed null
console.log("data removed", ll.removeFrom(99)); // data removed null
ll.printList(); // 20 60 40
console.log("data removed", ll.removeFrom(2)); // data removed 40
ll.insertAt(10, 0);
ll.insert(40);
ll.printList(); // [10, 20, 60, 40]

ll.reverseList();
ll.printList(); // [40, 60, 20, 10]
console.log(`size=${ll.size}`); // size=4
