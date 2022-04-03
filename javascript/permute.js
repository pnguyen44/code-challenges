import arrayEquals from "../utils.js";

// 46. Permutations
// Given an array nums of distinct integers, return all the possible permutations. You can return the answer in any order.

// Example 1:

// Input: nums = [1,2,3]
// Output: [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]
// Example 2:

// Input: nums = [0,1]
// Output: [[0,1],[1,0]]
// Example 3:

// Input: nums = [1]
// Output: [[1]]

// Constraints:

// 1 <= nums.length <= 6
// -10 <= nums[i] <= 10
// All the integers of nums are unique.

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const permute = function (nums) {
  const permuteRecursion = (nums, set = [], results = []) => {
    if (nums.length === 0) results.push(set);

    for (let i = 0; i < nums.length; i++) {
      const newNums = [...nums];
      const removed = newNums.splice(i, 1);
      permuteRecursion(newNums, set.concat(removed), results);
    }
    return results;
  };
  return permuteRecursion(nums);
};

const testCases = [
  {
    input: [1, 2, 3],
    expected: [
      [1, 2, 3],
      [1, 3, 2],
      [2, 1, 3],
      [2, 3, 1],
      [3, 1, 2],
      [3, 2, 1],
    ],
  },
  {
    input: [0, 1],
    expected: [
      [0, 1],
      [1, 0],
    ],
  },
  {
    input: [1],
    expected: [[1]],
  },
];

for (const [i, test] of testCases.entries()) {
  const { input, expected } = test;
  const result = permute(input);

  if (!arrayEquals(result, expected)) {
    console.log(`case ${i} failed`);
  }
}
