// MissingInteger
// Write a function:
//
// function solution(A);
//
// that, given an array A of N integers, returns the smallest positive integer (greater than 0) that does not occur in A.
//
// For example, given A = [1, 3, 6, 4, 1, 2], the function should return 5.
//
// Given A = [1, 2, 3], the function should return 4.
//
// Given A = [−1, −3], the function should return 1.
//
// Write an efficient algorithm for the following assumptions:
//
// N is an integer within the range [1..100,000];
// each element of array A is an integer within the range [−1,000,000..1,000,000].


function solution(A) {
    A = Array.from(new Set(A))
    A = A.filter(x => x > 0)
    A.sort((a,b) => a - b)
    if (A.length === 0) return 1
    let currMissing
    // find missing number in sequence
    for (let i = 0; i < A.length - 1; i++) {
        if (A[i] - A[i + 1] !== -1){
            currMissing = A[i] + 1
            break;
        }
    }

    if (A[0] === 1) {
      return currMissing || A[A.length - 1] + 1
    } else {
      // first element is greater than 1
      if (currMissing) {
        return Math.min(currMissing,1)
      } else {
        return 1
      }

    }

}


console.log(solution( [1, 3, 6, 4, 1, 2])) // 5
console.log(solution(  [1, 2, 3])) // 4
console.log(solution( [-1, -3])) // 1
console.log(solution( [2])) // 1
console.log(solution( [-1])) // 1
console.log(solution( [0])) // 1
console.log(solution( [4, 5, 6, 2])) // 1
console.log(solution( [90, 91, 92, 93] )) // 1
