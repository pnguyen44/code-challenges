// PermMissingElem
// An array A consisting of N different integers is given. The array contains integers in the range [1..(N + 1)], which means that exactly one element is missing.
//
// Your goal is to find that missing element.
//
// Write a function:
//
// function solution(A);
//
// that, given an array A, returns the value of the missing element.
//
// For example, given array A such that:
//
//   A[0] = 2
//   A[1] = 3
//   A[2] = 1
//   A[3] = 5
// the function should return 4, as it is the missing element.
//
// Write an efficient algorithm for the following assumptions:
//
// N is an integer within the range [0..100,000];
// the elements of A are all distinct;
// each element of array A is an integer within the range [1..(N + 1)].



// time complexity: O(N) or O(N * log(N)) 

function solution(A) {
  // write your code in JavaScript (Node.js 8.9.4)
  if (A.length === 0) return 1
  A.sort((a,b) => a - b)
  let missing
  for(let i = 0; i < A.length -1; i++){
      if (A[i] - A[i + 1] !== -1){
          missing = A[i] + 1
          break;
      }
  }
  if (missing) {
      return missing
  } else {
      if (A[0] === 1) {
          return A[A.length - 1] + 1
      } else {
          return A[0] - 1
      }
  }
}



console.log(solution([])) //1
console.log(solution([2])) //1
console.log(solution([2,3,1,5])) //4
