// 540. Single Element in a Sorted Array
// You are given a sorted array consisting of only integers where every element appears exactly twice, except for one element which appears exactly once.

// Return the single element that appears only once.

// Your solution must run in O(log n) time and O(1) space.



// Example 1:

// Input: nums = [1,1,2,3,3,4,4,8,8]
// Output: 2
// Example 2:

// Input: nums = [3,3,7,7,10,11,11]
// Output: 10


// Constraints:

// 1 <= nums.length <= 105
// 0 <= nums[i] <= 105

/**
 * @param {number[]} nums
 * @return {number}
 */
// var singleNonDuplicate = function(nums) {
//     const unique = Array.from(new Set(nums))
//     for (const num of unique) {
//         if (nums.indexOf(num) === nums.lastIndexOf(num)) {
//             return num
//         }
//     }
// };

// Less memory usage solution
// var singleNonDuplicate = function(nums) {
//     return nums.filter(num => nums.indexOf(num) === nums.lastIndexOf(num))[0]
// };

// Best solution for less memory usage and faster runtime

// const bs = function({arr, start = 0, end = arr.length}) {
//     const mid = Math.ceil(start + end)

//     if (arr[mid] === arr[mid + 1]) return mid % 2 ? bs(start, mid - 1) : bs(start, mid)
//     if (arr[mid] === arr[mid - 1]) return mid % 2 ? bs(mid, mid + 1 ) : bs(mid, end)

//     return arr[mid]
// }

// Better solution
const singleNonDuplicate = function(nums) {
    if (nums.length === 0) return nums[0]
    const bs = function(start, end) {
        const mid = Math.floor((start + end) / 2)

        if (nums[mid] === nums[mid - 1]) return mid % 2 ? bs(mid + 1, end) : bs(start, mid)
        if (nums[mid] === nums[mid + 1]) return mid % 2 ? bs ( start, mid - 1) : bs(mid, end)

        return nums[mid]
    }
    return bs(0, nums.length - 1)
};

const testCases = [
    {
        input: [1,1,2,3,3,4,4,8,8],
        expected: 2
    },
    {
        input: [3,3,7,7,10,11,11],
        expected: 10
    },
]

for (const [i, test] of testCases.entries()) {
    const {input, expected} = test
    const result = singleNonDuplicate(input)
    if (result !== expected) {
        console.log(`case ${i} failed, expected: ${expected}, actual: ${result}`)
    }
}
