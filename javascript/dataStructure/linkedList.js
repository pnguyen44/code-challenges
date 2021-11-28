// implement a linked list with a insert, insertAt, removeFrom, removeData, reverseList, indexOf, toArray, and printList method

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  insert(data) {
    const node = new Node(data);

    if (!this.head) {
      this.head = node;
      return;
    }

    let curr = this.head;

    while (curr.next) {
      curr = curr.next;
    }

    curr.next = node;
    this.size++;
  }

  insertAt(data, index) {
    if (index < 0 || index > this.size) {
      console.log("invalid index");
      return;
    }

    let curr = this.head;
    let prev = null;
    const node = new Node(data);

    if (index === 0) {
      node.next = this.head;
      this.head = node;
      return;
    }

    let i = 0;
    while (i < index) {
      i++;
      prev = curr;
      curr = curr.next;
    }
    prev.next = node;
    node.next = curr;
    this.size++;
  }

  removeFrom(index) {
    if (index < 0 || index > this.size) {
      console.log("invalid index");
      return null;
    }
    let i = 0;
    let prev = null;
    let curr = this.head;

    if (index === 0) {
      this.head = curr.next;
    } else {
      while (i < index) {
        i++;
        prev = curr;
        curr = curr.next;
      }

      prev.next = curr.next;
    }

    this.size--;
    return curr.data;
  }

  removeData(data) {
    let curr = this.head;
    let prev = null;

    while (curr) {
      if (curr.data === data) {
        if (!prev) {
          this.head = curr.next;
        } else {
          prev.next = curr.next;
        }
        this.size--;
        return curr.data;
      }
      prev = curr;
      curr = curr.next;
    }
    return -1;
  }

  reverseList() {
    let curr = this.head;
    let prev = null;
    while (curr) {
      const next = curr.next;
      curr.next = prev;
      prev = curr;
      curr = next;
    }
    this.head = prev;
  }

  indexOf(data) {
    let curr = this.head;
    let index = 0;
    while (curr) {
      if (curr.data === data) {
        return index;
      }
      index++;
      curr = curr.next;
    }
    return -1;
  }

  toArray() {
    const nodes = [];
    let curr = this.head;
    while (curr) {
      nodes.push(curr.data);
      curr = curr.next;
    }
    return nodes;
  }

  printList() {
    const nodes = this.toArray();
    console.log(nodes.join(" "));
  }
}

const ll = new LinkedList();
ll.insert(10);
ll.insert(20);
ll.insert(30);
ll.insert(40);
ll.insert(50);
ll.printList(); // 10 20 30 40 50
console.log("data removed", ll.removeData(50)); // data removed 50
ll.printList(); // 10 20 30 40
console.log("data removed", ll.removeData(50)); // data removed -1
console.log(ll.indexOf(40)); // 3
console.log(ll.indexOf(50)); // -1
ll.insertAt(60, 2);
ll.printList(); // 10 20 60 30 40
ll.insertAt(60, -1); // invalid index
ll.insertAt(60, 10); // invalid index
console.log("data removed", ll.removeFrom(3));
ll.printList(); // 10 20 60 40
console.log(ll.removeFrom(99)); // invalid index
ll.reverseList();
ll.printList(); // 40 60 20 10
console.log(`size=${ll.size}`); // size=4
