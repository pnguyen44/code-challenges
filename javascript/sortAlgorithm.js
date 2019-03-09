// write a recursive function that preform a binary search
function binarySearchRecursive(arr, x, left = 0, right = arr.length - 1) {
  if (left > right) return false
  const mid = Math.floor((left + right) / 2)
  if (arr[mid] === x) {
    return true
  } else if (x < arr[mid]){
      return binarySearchRecursive(arr, x,  0, mid - 1 )
  } else {
      return binarySearchRecursive(arr, x,  mid +1, right)
  }
}


let A = [2, 5, 1, 3, 7, 2, 3, 8, 6, 3]
console.log(binarySearchRecursive(A, 7)) // true
console.log(binarySearchRecursive(A, 0)) // false

// write a function that performs a binary search

function binarySearch(arr, x) {
  let left = 0
  let right = arr.length - 1
  while (left <= right) {
    const mid = Math.floor((left + right) / 2)
    if (arr[mid] === x) {
      return true
    } else if (arr[mid] < x) {
      right = mid - 1
    } else {
      left = mid + 1
    }
  }
  return false
}

// let A = [2, 5, 1, 3, 7, 2, 3, 8, 6, 3]
// console.log(binarySearch(A, 7)) // true
// console.log(binarySearch(A, 0)) // false


// write a function that performs a quick sort
