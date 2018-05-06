// 7 kyu - Flatten and sort an array
// Challenge:
//
// Given a two-dimensional array of integers, return the flattened version of the array with all the integers in the sorted (ascending) order.
//
// Example:
//
// Given [[3, 2, 1], [4, 6, 5], [], [9, 7, 8]], your function should return [1, 2, 3, 4, 5, 6, 7, 8, 9].
//
// Addendum:
//
// Please, keep in mind, that JavaScript is by default sorting objects alphabetically. For more information, please consult:

function flattenAndSort(array) {
  let flatten = array.reduce((a,b) => a.concat(b))
  return flatten.sort((a,b) => a - b);
}

// Alternative Solution:
// function flattenAndSort(array) {
//   return [].concat(...array).sort((a,b) => a - b);
// }

let answer =  flattenAndSort([[1, 3, 5], [100], [2, 4, 6]])
console.log(answer)
