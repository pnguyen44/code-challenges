// A non-empty array A consisting of N integers is given. The array contains an odd number of elements,
// and each element of the array can be paired with another element that has the same value, except for one element that is left unpaired.
//
//
// Write a function:
//
// function solution(A);
//
// that, given an array A consisting of N integers fulfilling the above conditions, returns the value of the unpaired element.


function solution(A) {
  // write your code in JavaScript (Node.js 8.9.4)
  let unique = Array.from(new Set(A))
  let result
  unique.forEach(num=> {
      let numOfInstance = A.filter(x => x === num).length
      if (numOfInstance ===1) {
          result = num
      }
  })
  return result
}

// Alternative Solution:
// function solution(A) {
//     // write your code in JavaScript (Node.js 8.9.4)
//     let unique = Array.from(new Set(A))
//     return unique.filter(num => {
//       let numOfInstance = A.filter(x => x === num).length
//       if (numOfInstance ===1) return num
//     })[0]
// }



console.log(solution([9, 3, 9, 3, 9, 7, 9])) // 7
