// Given a 6 X 6 2D Array, arr:
//
// 1 1 1 0 0 0
// 0 1 0 0 0 0
// 1 1 1 0 0 0
// 0 0 0 0 0 0
// 0 0 0 0 0 0
// 0 0 0 0 0 0
//
// We define an hourglass in A to be a subset of values with indices falling in this pattern in arr's graphical representation:
//
// a b c
//   d
// e f g
//
//
// There are 16  hourglasses in arr , and an hourglass sum is the sum of an hourglass' values.
// Calculate the hourglass sum for every hourglass in arr , then print the maximum hourglass sum.
//
// For example, given the 2D array:
//
// -9 -9 -9  1 1 1
//  0 -9  0  4 3 2
// -9 -9 -9  1 2 3
//  0  0  8  6 6 0
//  0  0  0 -2 0 0
//  0  0  1  2 4 0
//
//  We calculate the following 16 hourglass values:
//
//  -63, -34, -9, 12,
//  -10, 0, 28, 23,
//  -27, -11, -2, 10,
//  9, 17, 25, 18
//
//
//  Our highest hourglass value is 28  from the hourglass:
//
// 0 4 3
//   1
// 8 6 6
//
// Complete the function hourglassSum. It should return an integer, the maximum hourglass sum in the array.
//
// hourglassSum has the following parameter(s):
//
// arr: an array of integers
//
// Print the largest (maximum) hourglass sum found in arr.




function hourglassSum(arr) {
  let hourglass
  let topOfHourGlass
  let results = []
    for(let r = 0; r < arr[0].length - 2; r++ ) {
      // console.log('.....')
      for(let s = 0; s < arr[0].length - 2; s++ ) {
        topOfHourGlass = arr[r].slice(s,s + 3)
        let middleOfHourGlass = arr[r+1][s+1]
        let bottomofHourGlass = arr[r+2].slice(s,s + 3)
        hourglass = topOfHourGlass.concat(middleOfHourGlass,bottomofHourGlass)
        // console.log('hourglass', hourglass)
        let sum = hourglass.reduce((acc,curr) => acc+curr)
        // result = sum
        // console.log('sum', sum)
        results.push(sum)
      }
    }
    return Math.max.apply(null, results)

}


// console.log(hourglassSum(
// [[1, 1, 1, 0, 0, 0],
// [0, 1, 0, 0, 0, 0],
// [1, 1, 1, 0, 0, 0],
// [0, 0, 2, 4, 4, 0],
// [0, 0, 0, 2, 0, 0],
// [0, 0, 1, 2, 4, 0 ]])) // 19

console.log(hourglassSum(
  [[-1, -1, 0 ,-9 ,-2 , -2],
  [-2, -1, -6, -8, -2, -5],
  [-1, -1, -1, -2, -3, -4],
  [-1, -9, -2, -4, -4, -5],
  [-7, -3, -3, -2, -9, -9],
  [-1, -3, -1, -2, -4, -5]])) // -6
