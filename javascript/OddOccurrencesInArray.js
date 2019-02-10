// OddOccurrencesInArray


// A non-empty array A consisting of N integers is given. The array contains an odd number of elements,
// and each element of the array can be paired with another element that has the same value, except for one element that is left unpaired.
//
//
// Write a function:
//
// function solution(A);
//
// that, given an array A consisting of N integers fulfilling the above conditions, returns the value of the unpaired element.

// time complexity: O(N) or O(N*log(N))

function solution(A) {
  A.sort((a,b) => a - b)
  for(let i = 0; i < A.length; i+=2 ) {
    if (A[i] !== A[i + 1] || i +1 == A.length) return A[i]
  }
}



console.log(solution([9, 3, 9, 3, 9, 7, 9])) // 7
