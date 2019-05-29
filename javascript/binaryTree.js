// implement a binary tree


class Node {
  constructor(data) {
    this.data = data
    this.left = null
    this.right = null
  }

  insert(value) {
    // if value is less than the actuall data of our node, then insert it on the left
    // else insert it to the right
    if (value <= this.data) {
      if (this.left == null) {
        this.left = new Node(value)
      } else {
        this.left.insert(value)
      }
    } else {
      if (this.right == null) {
        this.rigth = new Node(value)
      } else {
        this.right.insert(value)
      }
    }
  }
  contains(value) {
      if (value == this.data) {
        return true
      } else if (value < this.data) {
        if (this.left == null) {
          return false
        } else {
          return this.left.contains(value)
        }
      } else {
          if (this.right == null) {
            return false
          } else {
            return this.right.contains(value)
          }
      }
  }

  printInOrder() {
    if (this.left != null) {
      this.left.printInOrder()
    }
    console.log(this.data)
    if (this.right != null) {
      this.right.printInOrder()
    }
  }
}
