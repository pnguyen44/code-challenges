// Given an array of integers where each element represents the max number of steps that can be made forward from that element.
// Write a program to find the minimum number of jumps to reach the end of the array (starting from the first element).
// If an element is 0, then cannot move through that element.


function minJumps(arr) {
  let numOfJumps = []
  if (arr[0] === 0) return Infinity

  numOfJumps[0] = 0

  for (let i = 1; i < arr.length; i ++) {
    numOfJumps[i] = Infinity
    for (let j = 0; j < i; j++) {
      if (arr[j] + j >=  i && numOfJumps[j] !== Infinity) {
        numOfJumps[i] = Math.min(numOfJumps[i],numOfJumps[j] + 1)
        break
      }
    }
  }
  return numOfJumps[numOfJumps.length - 1]
}

// Given an array of integers where each element represents the max number of steps that can be made forward from that element.
// Write a program that returns an array with the minimum number of jumps to reach the end of the array (starting from the first element).

// function minJumps(arr) {
//   let numOfJumps = []
//   let actualJumps = [0]
//
//   if (arr[0] === 0) return Infinity
//   numOfJumps[0] = 0
//
//   for (let i = 1; i < arr.length; i++) {
//     numOfJumps[i] = Infinity
//     for (let j = 0; j < i; j++) {
//       if (arr[j] + j >= i && arr[i] !== Infinity) {
//         // numOfJumps[i] = Math.min(numOfJumps[i],numOfJumps[j] + 1)
//         actualJumps[i] = j
//         break
//       }
//     }
//   }
//   // return numOfJumps[numOfJumps.length -1]
//   actualJumps = Array.from(new Set(actualJumps))
//   actualJumps = actualJumps.map(x => arr[x])
//   actualJumps.push(arr[arr.length - 1])
//   return actualJumps
// }




//test
console.log(minJumps([2,3,1,1,2,4,2,0,1,1])) // 4 (2-> 3 -> 2 -> 4 -> 1)
// console.log(minJumps([2,8,3,6,9,3,0,0,1,3])) // 2 (2-> 8 -> 3)
