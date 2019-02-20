// sort array using bubble sort

function bubbleSort(A) {
  for(let i = 0; i < A.length; i++) {
    for (let j = 1; j < A.length; j++) {
      if (A[j-1] > A[j]) {
        let temp = A[j -1]
        A[j -1] = A[j]
        A[j] = temp
      }
    }
  }
  return A
}

console.log(bubbleSort([9, 2, 5, 6, 4, 3, 7, 10, 1, 8])) // [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]
