// 7 kyu - The real size of a multi-dimensional array
// Given a multi-dimensional integer array, return the total number of integers, stored inside this array. You should not rely on the number of dimensions to solve this kata. If n is the number of dimensions, then: 1 <= n < +Infinity.
//
// Example:
//
// Given [[[5], 3], 0, 2, [], [4, [5, 6]]], your function should return a result of 7. This is because the array contains 7 integers.
//
// Addendum:
//
// Think of it as dimension-agnostic value counting. We want to know the total number of integers inside the array and we don't care for the dimensions.


function realSize(arrays) {
  if(!Array.isArray(arrays)) {
    return 1
  }
  let count = 0
  arrays.forEach(elm => {
    count += realSize(elm)
  })
  return count
}

// Alternative Solution: 
// function realSize(arrays) {
//   if (!arrays.length) return 0;
//   var result = 0;
//   var first = arrays.shift();
//   result += Array.isArray(first) ? realSize(first) : 1;
//   return result + realSize(arrays);
// }

let answer =  realSize([[5], 3], 0, 2, [], [4, [5, 6]]])
console.log(answer)
