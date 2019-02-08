// Let's call any (contiguous) subarray B (of A) a mountain if the following properties hold:
//
// B.length >= 3
// There exists some 0 < i < B.length - 1 such that B[0] < B[1] < ... B[i-1] < B[i] > B[i+1] > ... > B[B.length - 1]
// (Note that B could be any subarray of A, including the entire array A.)
//
// Given an array A of integers, return the length of the longest mountain.
//
// Return 0 if there is no mountain.
//
// Example 1:
//
// Input: [2,1,4,7,3,2,5]
// Output: 5
// Explanation: The largest mountain is [1,4,7,3,2] which has length 5.
// Example 2:
//
// Input: [2,2,2]
// Output: 0
// Explanation: There is no mountain.
// Note:
//
// 0 <= A.length <= 10000



function longestMountain(A) {
  let start = 0
  let X = A.length
  let result = 0

  while(start < X) {
    let end = start
    if (end <= X && A[end] < A[end + 1]) {
      while ( end <= X && A[end] < A[end +1]) {
        end +=1
      }
      if(end <= X  && A[end] > A[end +1]) {
        while(end <= X  && A[end] > A[end +1]) {
          end +=1
        }
        result = Math.max(result, end - start + 1)
      }
    }

    start = Math.max(end, start + 1)
  }
  return result
}

console.log(longestMountain([2,1,4,7,3,2,5]) ) // 5
console.log(longestMountain([2,2,2])) // 0
