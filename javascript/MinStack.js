// Min Stack
//
// Design a stack that supports push, pop, top, and retrieving the minimum element in constant time.
//
// push(x) -- Push element x onto stack.
// pop() -- Removes the element on top of the stack.
// top() -- Get the top element.
// getMin() -- Retrieve the minimum element in the stack.

/**
 * initialize your data structure here.
 */
var MinStack = function() {
    this.stack = [];
};

/*
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function(x) {
  this.stack[this.stack.length] = x
};

/*
 * @return {void}
 */
MinStack.prototype.pop = function() {
  this.stack.splice(this.stack.length - 1)
};

/*
 * @return {number}
 */
MinStack.prototype.top = function() {
  return this.stack[this.stack.length - 1]
};

/*
 * @return {number}
 */
MinStack.prototype.getMin = function() {
  return Math.min.apply(null, this.stack )
};

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */


let minStack = new MinStack();
minStack.push(-2);
minStack.push(0);
minStack.push(-3);
console.log(minStack.getMin());  //  -3
minStack.pop();
console.log(minStack.top());      // 0
console.log(minStack.getMin());   // -2
