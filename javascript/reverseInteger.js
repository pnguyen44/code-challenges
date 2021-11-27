// 7. Reverse Integer
// Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0.

// Assume the environment does not allow you to store 64-bit integers (signed or unsigned).

// Example 1:

// Input: x = 123
// Output: 321
// Example 2:

// Input: x = -123
// Output: -321
// Example 3:

// Input: x = 120
// Output: 21
// Example 4:

// Input: x = 0
// Output: 0

// Constraints:

// -231 <= x <= 231 - 1

/**
 * @param {number} x
 * @return {number}
 */
// const reverse = function (x) {
//   let reverseNum = Number(Math.abs(x).toString().split("").reverse().join(""));

//   reverseNum = x < 0 ? -reverseNum : reverseNum;

//   return reverseNum < -Math.pow(2, 31) || reverseNum > Math.pow(2, 31) - 1
//     ? 0
//     : reverseNum;
// };

// Faster solution
const reverse = function (x) {
  let absNum = Math.abs(x);
  let reverse = 0;

  while (absNum > 0) {
    const num = absNum % 10;
    absNum = Math.floor(absNum / 10);
    reverse *= 10;
    reverse += num;
  }

  if (reverse > Math.pow(2, 31)) return 0;

  return reverse * Math.sign(x);
};

const testCases = [
  {
    input: 123,
    expected: 321,
  },
  {
    input: -123,
    expected: -321,
  },
  {
    input: 120,
    expected: 21,
  },
  {
    input: 0,
    expected: 0,
  },
  {
    input: 1534236469,
    expected: 0,
  },
  {
    input: -2147483648,
    expected: 0,
  },
];

for (const [i, test] of testCases.entries()) {
  const { input, expected } = test;
  const result = reverse(input);
  if (result !== expected) {
    console.log(`case ${i} failed, expected: ${expected}, actual: ${result}`);
  }
}
