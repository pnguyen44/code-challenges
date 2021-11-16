// 66. Plus One
// You are given a large integer represented as an integer array digits, where each digits[i] is the ith digit of the integer. The digits are ordered from most significant to least significant in left-to-right order. The large integer does not contain any leading 0's.

// Increment the large integer by one and return the resulting array of digits.



// Example 1:

// Input: digits = [1,2,3]
// Output: [1,2,4]
// Explanation: The array represents the integer 123.
// Incrementing by one gives 123 + 1 = 124.
// Thus, the result should be [1,2,4].
// Example 2:

// Input: digits = [4,3,2,1]
// Output: [4,3,2,2]
// Explanation: The array represents the integer 4321.
// Incrementing by one gives 4321 + 1 = 4322.
// Thus, the result should be [4,3,2,2].
// Example 3:

// Input: digits = [0]
// Output: [1]
// Explanation: The array represents the integer 0.
// Incrementing by one gives 0 + 1 = 1.
// Thus, the result should be [1].
// Example 4:

// Input: digits = [9]
// Output: [1,0]
// Explanation: The array represents the integer 9.
// Incrementing by one gives 9 + 1 = 10.
// Thus, the result should be [1,0].


// Constraints:

// 1 <= digits.length <= 100
// 0 <= digits[i] <= 9
// digits does not contain any leading 0's.

/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    for (let i = digits.length - 1; i >= 0; i--) {
        digits[i]++
        if (digits[i] > 9) {
            digits[i] = 0
        } else {
            return digits
        }
    }
    digits.unshift(1)
    return digits
};

const testCases = [
    {
        input: [1,2,3],
        expected: [1,2,4]
    },
    {
        input: [4,3,2,1],
        expected: [4,3,2,2]
    },
    {
        input: [0],
        expected: [1]
    },
    {
        input: [9],
        expected: [1,0]
    },
    {
        input: [9,9],
        expected: [1,0,0]
    },
    {
        input: [8,9,9,9],
        expected: [9,0,0,0]
    },
]

for (const [i, test] of testCases.entries()) {
    const {input, expected} = test
    const result = plusOne(input)
    const equalExpected = result.every((val, i)=> val === expected[i])
    if (!equalExpected) {
        console.log(`case ${i} failed, expected: ${expected}, actual: ${result}`)
    }
}
