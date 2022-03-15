// 28. Implement strStr()
// Implement strStr().

// Return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.

// Clarification:

// What should we return when needle is an empty string? This is a great question to ask during an interview.

// For the purpose of this problem, we will return 0 when needle is an empty string. This is consistent to C's strstr() and Java's indexOf().



// Example 1:

// Input: haystack = "hello", needle = "ll"
// Output: 2
// Example 2:

// Input: haystack = "aaaaa", needle = "bba"
// Output: -1
// Example 3:

// Input: haystack = "", needle = ""
// Output: 0


// Constraints:

// 0 <= haystack.length, needle.length <= 5 * 104
// haystack and needle consist of only lower-case English characters.

/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
// var strStr = function(haystack, needle) {
//     if (needle.length === 0) return 0;
//     for (let i = 0; i < haystack.length; i++) {
//         if (haystack.slice(i, i + needle.length) === needle) {
//             return i
//         }
//     }
//     return -1
// };

// Faster solution:
// var strStr = function(haystack, needle) {
//     if (needle.length === 0) return 0;
//     const splitAtNeedle = haystack.split(needle)
//     return splitAtNeedle.length > 1 ? splitAtNeedle[0].length : -1
// };

// Solution using no built-in methods
var strStr = function(haystack, needle) {
    if (needle.length === 0 || haystack === needle) return 0
    if (haystack.length < needle.length + 1) return - 1

    for (let i = 0; i < haystack.length - needle.length + 1; i++) {
        let j = 0
        let k = i
        while (haystack[k] === needle[j] && j < needle.length) {
            j++
            k++
        }

        if (j === needle.length) return i
    }

    return -1
};

const testCases = [
    {
        haystack: 'hello',
        needle: 'll',
        expected: 2
    },
    {
        haystack: 'aaaaa',
        needle: 'bba',
        expected: -1
    },
    {
        haystack: '',
        needle: '',
        expected: 0
    },
    {
        haystack: '',
        needle: 'a',
        expected: -1
    },
]

for (const [i, test] of testCases.entries()) {
    const {haystack, needle , expected} = test
    const result = strStr(haystack, needle)
    if (result !== expected) {
        console.log(`case ${i} failed, expected: ${expected}, actual: ${result}`)
    }
}
