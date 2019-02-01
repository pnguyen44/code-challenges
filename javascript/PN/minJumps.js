// Given an array of integers where each element represents the max number of steps that can be made forward from that element.
// Write a program to find the minimum number of jumps to reach the end of the array (starting from the first element).
// If an element is 0, then cannot move through that element.


function minJumps(arr) {
  let numOfJumps = []
  if (arr[0] === 0) return Infinity

  numOfJumps[0] = 0
// Start at the first element, no jumps needed to get there.
  for (let i = 1; i < arr.length; i ++) {

    // Set the current element to a super high number so that any number of jumps would be less than this super high number
    numOfJumps[i] = Infinity

     // loop through the previous elements
    for (let j = 0; j < i; j++) {
      if (arr[j] + j >=  i && numOfJumps[j] !== Infinity) {

         // we choose the smaller number of either numOfJumps[i] (what the current min number of jumps to get to element [i]) or
         // numOfJumps[j]+1 (what the min number of jumps is to get to element [j] plus one more jump)
        numOfJumps[i] = Math.min(numOfJumps[i],numOfJumps[j] + 1)
      }
    }
  }
  return numOfJumps[numOfJumps.length - 1]
  // reach the number of jumps it took to get to the last element 
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
