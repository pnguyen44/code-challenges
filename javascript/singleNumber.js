// 136. Single Number

// Given a non-empty array of integers, every element appears twice except for one. Find that single one.
//
// Note:
//
// Your algorithm should have a linear runtime complexity. Could you implement it without using extra memory?
//
// Example 1:

// Input: nums = [2,2,1]
// Output: 1
// Example 2:

// Input: nums = [4,1,2,1,2]
// Output: 4
// Example 3:

// Input: nums = [1]
// Output: 1

// Constraints:

// 1 <= nums.length <= 3 * 104
// -3 * 104 <= nums[i] <= 3 * 104
// Each element in the array appears twice except for one element which appears only once.

/**
 * @param {number[]} nums
 * @return {number}
 */
// function singleNumber(nums) {
//   for (let i = 0; i < nums.length; i++) {
//       const first = nums.indexOf(nums[i])
//       const last = nums.lastIndexOf(nums[i])
//       if (first !== -1 && first === last) {
//           return nums[i]
//       }
//   }
// }

// Alternative solution
// function singleNumber(nums) {
//   const numbers = {};
//   for (let i = 0; i < nums.length; i++) {
//     if (!numbers[nums[i]]) {
//       numbers[nums[i]] = true;
//     } else {
//       delete numbers[nums[i]];
//     }
//   }
//   return Number(Object.keys(numbers)[0]);
// }

// function singleNumber(nums) {
//   const hash = nums.reduce((acc, num) => {
//     if (acc[num]) {
//       acc[num]++;
//     } else {
//       acc[num] = 1;
//     }
//     return acc;
//   }, {});

//   for (const num of Object.keys(hash)) {
//     if (hash[num] === 1) return Number(num);
//   }
// }

// space complexity O(1)
function singleNumber(nums) {
  let xor = 0;

  for (const num of nums) {
    xor ^= num;
  }
  return xor;
}

const testCases = [
  {
    input: [2, 2, 1],
    expected: 1,
  },
  {
    input: [4, 1, 2, 1, 2],
    expected: 4,
  },
  {
    input: [1],
    expected: 1,
  },
];

for (const [i, test] of testCases.entries()) {
  const { input, expected } = test;
  const result = singleNumber(input);
  if (result !== expected) {
    console.log(`case ${i} failed, expected: ${expected}, actual: ${result}`);
  }
}
