// 6 kyu - Find the divisors!
// Create a function named divisors/Divisors that takes an integer and returns an array with all of the integer's divisors(except for 1 and the number itself). If the number is prime return the string '(integer) is prime' (null in C#) (use Either String a in Haskell and Result<Vec<u32>, String> in Rust).
//
// Example:
// divisors(12); // should return [2,3,4,6]
// divisors(25); // should return [5]
// divisors(13); // should return "13 is prime"
// You can assume that you will only get positive integers as inputs.

function divisors(integer) {
  let arr = []
  for (let i = 2; i < integer + 1; i++) if (integer % i === 0) arr.push(i)
  return arr.length === 1 ? integer + ' is prime' : arr.slice(0, -1)
}
