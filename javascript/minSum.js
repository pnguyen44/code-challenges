// 7 kyu - Minimize _sum_Of_array_(Array_Series_#1)
// We are given an array of even size.
//
// Our task is to find the minimum sum which is obtained from summing each Two integers product .
// Input :: Output Examples ::
//
// minSum({5,4,2,3}) // return 22
//
// Explanation ::
// 5*2 +3*4 = 22
//
// minSum({12,6,10,26,3,24}) // return 342
//
// Explanation ::
// 26*3 + 24*6 + 12*10 = 342
//
// minSum({9,2,8,7,5,4,0,6}) // return 74
//
// Explanation ::
// 9*0 + 8*2 +7*4 +6*5 = 74

function minSum(arr) {
  return arr.sort((a,b) => a - b).reduce((a,v,i) => a + ( v * arr[arr.length - 1 - i]), 0)/2
}

// alternative solution:
// function minSum(arr) {
//   arr.sort((a,b) => a - b)
//   let arr1 = arr.slice(0, arr.length/2)
//   let arr2 = arr.slice(arr.length/2, arr.length).sort((a,b) => b - a)
//   let sum = 0
//   for (let x = 0; x < arr1.length; x++) {
//     sum += arr1[x] * arr2[x]
//   }
//   return sum
// }
