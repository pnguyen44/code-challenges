// 7 kyu - Return the closest number multiple of 10
// Given a number return the closest number to it that is divisible by 10.
//
// Example input:
//
// 22
// 25
// 37
// Expected output:
//
// 20
// 30
// 40

const closestMultiple10 = num => {
  let str = Math.floor(num).toString()
  return str[str.length -1] >= 5 ? (Math.floor(num/10) + 1) * 10 : Math.floor(num/10) * 10
};

// Alternative Solution:
// const closestMultiple10 = num => {
//   return Math.round(num/10)*10;
// };

let answer =  closestMultiple10(2015.8251288536699)
console.log(answer)
