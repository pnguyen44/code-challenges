// 35. Search Insert Position
// Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.

// You must write an algorithm with O(log n) runtime complexity.



// Example 1:

// Input: nums = [1,3,5,6], target = 5
// Output: 2
// Example 2:

// Input: nums = [1,3,5,6], target = 2
// Output: 1
// Example 3:

// Input: nums = [1,3,5,6], target = 7
// Output: 4
// Example 4:

// Input: nums = [1,3,5,6], target = 0
// Output: 0
// Example 5:

// Input: nums = [1], target = 0
// Output: 0


// Constraints:

// 1 <= nums.length <= 104
// -104 <= nums[i] <= 104
// nums contains distinct values sorted in ascending order.
// -104 <= target <= 104

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

// Recursive Binary search
// const searchInsert = function(nums, target) {
//     return bs(nums, target, 0, nums.length - 1)
// };

// const bs = function(nums, target, start, end) {
//     if (start > end) return start
//     const mid = Math.floor((start + end) / 2)

//     if (nums[mid] > target) return bs(nums, target, start, mid - 1)
//     if (nums[mid] < target) return bs(nums, target, mid + 1, end)
//     return mid
// }

// Alternative binary search solution without recursion
var searchInsert = function(nums, target) {
    let left = 0
    let right = nums.length - 1
    while (left <= right) {
        const mid = Math.floor((left + right) / 2)

        if (nums[mid] === target) {
            return mid
        }

        if (nums[mid] > target) {
            right = mid - 1
            continue;
        }

        if (nums[mid] < target) {
            left = mid + 1
            continue;
        }
    }
    return left
};


const testCases = [
    {
        nums: [1,3,5,6],
        target: 5,
        expected: 2
    },
    {
        nums: [1,3,5,6],
        target: 2,
        expected: 1
    },
    {
        nums: [1,3,5,6],
        target: 7,
        expected: 4
    },
    {
        nums: [1,3,5,6],
        target: 0,
        expected: 0
    },
    {
        nums: [1],
        target: 0,
        expected: 0
    },
]

for (const [i, test] of testCases.entries()) {
    const {nums, target , expected} = test
    const result = searchInsert(nums, target)
    if (result !== expected) {
        console.log(`case ${i} failed, expected: ${expected}, actual: ${result}`)
    }
}
