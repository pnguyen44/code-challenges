// 88. Merge Sorted Array
// You are given two integer arrays nums1 and nums2, sorted in non-decreasing order, and two integers m and n, representing the number of elements in nums1 and nums2 respectively.

// Merge nums1 and nums2 into a single array sorted in non-decreasing order.

// The final sorted array should not be returned by the function, but instead be stored inside the array nums1. To accommodate this, nums1 has a length of m + n, where the first m elements denote the elements that should be merged, and the last n elements are set to 0 and should be ignored. nums2 has a length of n.



// Example 1:

// Input: nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
// Output: [1,2,2,3,5,6]
// Explanation: The arrays we are merging are [1,2,3] and [2,5,6].
// The result of the merge is [1,2,2,3,5,6] with the underlined elements coming from nums1.
// Example 2:

// Input: nums1 = [1], m = 1, nums2 = [], n = 0
// Output: [1]
// Explanation: The arrays we are merging are [1] and [].
// The result of the merge is [1].
// Example 3:

// Input: nums1 = [0], m = 0, nums2 = [1], n = 1
// Output: [1]
// Explanation: The arrays we are merging are [] and [1].
// The result of the merge is [1].
// Note that because m = 0, there are no elements in nums1. The 0 is only there to ensure the merge result can fit in nums1.


// Constraints:

// nums1.length == m + n
// nums2.length == n
// 0 <= m, n <= 200
// 1 <= m + n <= 200
// -109 <= nums1[i], nums2[j] <= 109

/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
// var merge = function(nums1, m, nums2, n) {
//     let counter1 = 0
//     let counter2 = 0
//     const nums1Copy = nums1.slice(0, m)

//     if (nums2.length === 0) return

//     for (let i = 0; i < m + n; i++) {
//         if (counter2 >= n || nums1Copy[counter1] < nums2[counter2]) {
//             nums1[i] = nums1Copy[counter1]
//             counter1++
//         } else {
//             nums1[i] = nums2[counter2]
//             counter2++
//         }
//     }
// };

// Faster runtime solution
var merge = function(nums1, m, nums2, n) {
    let insertIndex = m + n - 1
    m--
    n--
    while(n >= 0) {
        nums1[insertIndex--] = nums1[m] > nums2[n] ? nums1[m--] : nums2[n--]
    }
};

const testCases = [
    {
        nums1: [1,2,3,0,0,0],
        m: 3,
        nums2: [2,5,6],
        n: 3,
        expected: [1,2,2,3,5,6]
    },
    {
        nums1: [1],
        m: 1,
        nums2: [],
        n: 0,
        expected: [1]
    },
    {
        nums1: [0],
        m: 0,
        nums2: [1],
        n: 1,
        expected: [1]
    },
    {
        nums1: [2,0],
        m: 1,
        nums2: [1],
        n: 1,
        expected: [1,2]
    },
]

for (const [i, test] of testCases.entries()) {
    const {nums1, m, nums2, n, expected} = test
    merge(nums1, m, nums2, n)
    const equalExpected = nums1.every((val, i)=> val === expected[i])

    if (!equalExpected) {
        console.log(`case ${i} failed, expected: ${expected}, actual: ${nums1}`)
    }
}


