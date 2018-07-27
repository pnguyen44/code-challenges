// Given an array of integers where each element represents the max number of steps that can be made forward from that element.
// Write a program to find the minimum number of jumps to reach the end of the array (starting from the first element).
// If an element is 0, then cannot move through that element.


function minJumps(arr) {
  let numJumps = [0]
  let actualJumps = []
  if (arr[0] === 0) return 0
  for (let i = 1; i < arr.length; i ++) {
    for (let j = 0; j < i; j++) {
      if (arr[j] + j >=  i) {
        numJumps.push(numJumps[j] + 1)
        actualJumps.push(j)
        break
      }
    }
  }
  return numJumps[numJumps.length - 2]
}

//test
// console.log(minJumps([1, 3, 5, 8, 9, 2, 6, 7, 6, 8, 9])) // 3 (1-> 3 -> 8 ->9)
// console.log(minJumps([2,3,1,1,2,4,2,0,1,1])) // 4 (2-> 3 -> 2 -> 4 -> 1)
console.log(minJumps([0,8,3,6,9,3,0,0,1,3])) // 2 (2-> 8 -> 3)
