//implement a binary search tree

class Node {
  constructor(data) {
    this.data = data
    this.left = null
    this.right = null
  }
}

class BTS {
  constructor() {
    this.root = null
  }

  add(data) {
    const newNode = new Node(data)
    if (this.root === null) {
      this.root = newNode
    } else {
      this.addNode(this.root, newNode)
    }
  }

  addNode(node, newNode) {
    if (newNode.data < node.data) {
      if (node.left === null) {
        node.left = newNode
      } else {
        this.addNode(node.left, newNode)
      }
    } else {
      if (node.right === null) {
        node.right = newNode
      } else {
        this.addNode(node.right, newNode)
      }
    }
  }


}
