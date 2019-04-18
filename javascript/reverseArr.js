// Reverse an array without using the built in reverse functionality.

function reverseArr(arr) {
  const result = []
  const len = arr.length
  for(let i = 0; i < len; i++) {
    const ele = arr.pop()
    result.push(ele)
  }
  return result
}


// console.log(reverseArr([3,4,10,1])) // [1,10,4,3]
// console.log(reverseArr([16, 13, 7, 2, 1, 12])) // [12, 1, 2, 7, 13, 16]
// console.log(reverseArr([3])) // [3]
// console.log(reverseArr([])) // []
// console.log(reverseArr([3,3, 4, 4, 3,0])) // [0, 3, 4,4, 3,3]
// console.log(reverseArr( [3, -3, -4, -7,34, 22, 0, -2])) // [-2, 0, 22, 4, -7, -4, -3, 3]
// console.log(reverseArr([6, 5, -6])) // [-6, 5, 6]


// Reverse an array in place without using the reverse functionality and without creating a new array.

function reverseArrWithOutNewArray(arr) {
  let left = 0
  let right = arr.length -1
  const end = Math.floor((arr.length - 1)/2)
  while (left < end) {
    [arr[left],arr[right]] = [arr[right],arr[left]]
    left ++
    right --
  }
  return arr
}


// alternative solutuion
// function reverseArrWithOutNewArray(arr) {
//   let index = 0
//   let len = arr.length
//    while(index < len) {
//      arr.splice(index,0,arr.pop())
//      console.log('..arr,,,', arr)
//      index++
//    }
//    return arr
// }

// console.log(reverseArrWithOutNewArray([3,4,10,1])) // [1,10,4,3]
// console.log(reverseArrWithOutNewArray([16, 13, 7, 2, 1, 12])) // [12, 1, 2, 7, 13, 16]
// console.log(reverseArrWithOutNewArray([3])) // [3]
// console.log(reverseArrWithOutNewArray([])) // []
// console.log(reverseArrWithOutNewArray([3,3, 4, 4, 3,0])) // [0, 3, 4,4, 3,3]
// console.log(reverseArrWithOutNewArray( [3, -3, -4, -7, 22, 0, -2])) // [-2, 0, 22, 4, -7, -4, -3, 3]
// console.log(reverseArrWithOutNewArray([6, 5, -6])) // [-6, 5, 6]
