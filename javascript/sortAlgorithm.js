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

// quick sort
// time complexity O(n^2)

function quickSort(arr, left = 0, right = arr.length - 1) {
  let len = arr.length,
      index

  if(len > 1) {
    index = partition(arr, left, right)
    if(left < index - 1) {
      quickSort(arr, left, index - 1)
    }
    if(index < right) {
      quickSort(arr, index, right)
    }

    return arr
  }
}

function partition(arr,left, right) {
  const middle = Math.floor((left + right) / 2)
  const pivot = arr[middle]
  while(left <= right) {
    while (arr[left] < pivot) {
      left++
    }
    while(arr[right] > pivot) {
      right--
    }
    if (left <= right) {
      [arr[left], arr[right]] = [arr[right], arr[left]]
      left++
      right--
    }
  }
  return left
}

// let A = [2, 5, 1, 3, 7, 2, 3, 8, 6, 3]
// console.log(quickSort(A)) // [ 1, 2, 2, 3, 3, 3, 5, 6, 7, 8 ]


// create a function that performs a merge sort
// merge sort O(n log(n) ) time, O(n) speace
function mergeSort(A) {
  if (A.length === 1) return A
  const mid = Math.floor(A.length /2 )
  const left = A.slice(0, mid)
  const right = A.slice(mid)
  return mergeHavles(
    mergeSort(left),
    mergeSort(right)
  )
}

function mergeHavles(left, right) {
  let result = []
  let leftIndex = 0
  let rightIndex = 0
  while(leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      result.push(left[leftIndex])
      leftIndex++
    } else {
      result.push(right[rightIndex])
      rightIndex++
    }
  }
  return result.concat(left.slice(leftIndex), right.slice(rightIndex))
}

// console.log(mergeSort([2, 5, 1, 3, 7, 2, 3, 8, 6, 3])) // [ 1, 2, 2, 3, 3, 3, 5, 6, 7, 8 ]
