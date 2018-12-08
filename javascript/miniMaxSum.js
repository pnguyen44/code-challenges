'use strict';

// Mini-Max Sum

// Given five positive integers, find the minimum and maximum values that can be calculated by summing exactly four of the five integers.
// Then print the respective minimum and maximum values as a single line of two space-separated long integers.

function miniMaxSum(arr) {
    arr = arr.sort((a,b) => a - b);
    let maxSum = arr.slice(1).reduce((acc,curr) => {
      return acc + curr;
    });
    let minSum = arr.slice(0,arr.length - 1).reduce((acc,curr) => {
      return acc + curr;
    });
    // console.log(maxSum)
    console.log(minSum + ' ' + maxSum)
}

console.log(miniMaxSum([1, 2, 3, 4, 5])) // 10 14
// console.log(miniMaxSum([7, 69, 2, 221, 8974])) // 299 9271
