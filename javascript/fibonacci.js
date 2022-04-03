import arrayEquals from "../utils.js";

// 6 kyu - Complete Fibonacci Series
//
// The function 'fibonacci' should return an array of fibonacci numbers. The function takes a number as an argument to decide how many no. of elements to produce. If the argument is less than or equal to 0 then return empty array
//
// Example:
//
// fibonacci(4); // should return [0,1,1,2]
// fibonacci(-1); // should return []

// function fibonacci(n) {
//   let res = [0,1]
//   for(let i = 0; i < n - 2; i++) {
//     res.push(res.slice(i).reduce((acc, curr) => acc + curr))
//   }
//   return n <=0 ? [] : res
// }


// Recursive Solution:
function fibonacci(n) {
  if (n <= 0) return []
  if (n === 1) return [0]
  if (n === 2) return [0,1]
  let res = fibonacci(n -1)
  res.push(res[res.length - 1] + res[res.length - 2])
  return res
}

const testCases = [
  {
    n: 4,
    expected: [0,1,1,2]
  },
  {
    n: -1,
    expected: []
  }
]

for (const [i, test] of testCases.entries()) {
  const {n, expected} = test
  const result = fibonacci(n)
  if (!arrayEquals(result, expected)) {
    console.log(`case ${i} failed, expected: ${expected}, actual: ${result}`);
  }
}
