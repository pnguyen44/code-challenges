// 53. Maximum Subarray
// Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.

// A subarray is a contiguous part of an array.



// Example 1:

// Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
// Output: 6
// Explanation: [4,-1,2,1] has the largest sum = 6.
// Example 2:

// Input: nums = [1]
// Output: 1
// Example 3:

// Input: nums = [5,4,-1,7,8]
// Output: 23


// Constraints:

// 1 <= nums.length <= 105
// -104 <= nums[i] <= 104

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let prev = 0
    let max = -Number.MAX_VALUE
    for (let i = 0; i < nums.length; i++) {
        prev = Math.max(prev + nums[i], nums[i])
        max = Math.max(prev, max)
    }
    return max
};

const testCases = [
    {
        input: [-2,1,-3,4,-1,2,1,-5,4],
        expected: 6
    },
    {
        input: [1],
        expected: 1
    },
    {
        input: [5,4,-1,7,8],
        expected: 23
    },
]

for (const [i, test] of testCases.entries()) {
    const {input, expected} = test
    const result = maxSubArray(input)
    if (result !== expected) {
        console.log(`case ${i} failed, expected: ${expected}, actual: ${result}`)
    }
}
