// 7 kyu - Median fun fun
// The mean (or average) is the most popular measure of central tendency; however it does not behave very well when the data is skewed (i.e. wages distribution). In such cases, it's better to use the median.
//
// Your task for this kata is to find the median of an array consisting of n elements.
//
// You can assume that all inputs are arrays of numbers in integer format. For the empty array your code should return NaN (false in JavaScript/NULL in PHP).
//
// Examples:
//
// Input [1, 2, 3, 4] --> Median 2.5
//
// Input [3, 4, 1, 2, 5] --> Median 3

function median(n){
  n = n.sort((a,b) => a - b)
  if (n < 1 ) return false;
  return n.length % 2 ? n[Math.floor(n.length / 2)] : (n[n.length / 2 - 1]  + n[n.length / 2]) / 2
}

let answer =  median([ 26, 38, 71, 52, 61, 46, 28, 64, 94, 83, 38, 5, 28, 38, 45 ])
console.log(answer)
