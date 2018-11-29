// Plus Minus
// Given an array of integers, calculate the fractions of its elements that are positive, negative, and are zeros. Print the decimal value of each fraction on a new line.
//
// For example, given the array arr[1,1,0,-1,-1]  there are 5 elements, two positive, two negative and one zero.
//
// Their ratios would be 2/5 = 0.400000 , 2/5  = 0.400000, and 1/5 = 0.200000. It should be printed as
//
// 0.400000
// 0.400000
// 0.200000

function plusMinus(arr) {
  // var n = parseInt(readLine());
  // arr = readLine().split(' ');
  // arr = arr.map(Number);
  let countPos = 0
  let count0 = 0
  let countNeg = 0
  arr.forEach(function (e) {
      if (e === 0) {
          count0 += 1
      } else if (e > 0) {
          countPos += 1
      } else {
          countNeg += 1
      }
  })

  console.log((countPos / arr.length).toFixed(6))
  console.log((countNeg / arr.length).toFixed(6))
  console.log((count0 / arr.length).toFixed(6))
}


// console.log(plusMinus([-4, 3, -9, 0, 4, 1]))

// 0.500000
// 0.333333
// 0.166667
