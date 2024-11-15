// 58. Length of Last Word
// Given a string s consisting of some words separated by some number of spaces, return the length of the last word in the string.

// A word is a maximal substring consisting of non-space characters only.



// Example 1:

// Input: s = "Hello World"
// Output: 5
// Explanation: The last word is "World" with length 5.
// Example 2:

// Input: s = "   fly me   to   the moon  "
// Output: 4
// Explanation: The last word is "moon" with length 4.
// Example 3:

// Input: s = "luffy is still joyboy"
// Output: 6
// Explanation: The last word is "joyboy" with length 6.


// Constraints:

// 1 <= s.length <= 104
// s consists of only English letters and spaces ' '.
// There will be at least one word in s.

/**
 * @param {string} s
 * @return {number}
 */
// var lengthOfLastWord = function(s) {
//     return s.split(' ').filter(Boolean).pop().length
// };


// Alternative solution
var lengthOfLastWord = function(s) {
    let end = s.length - 1
    while (end >= 0 && s[end] === ' ') {
         end--;
    }

    let start = end
    while (start >= 0 && s[start] !== ' ') {
        start--;
    }

    return end - start;
};


const testCases = [
    {
        input: 'Hello World',
        expected: 5
    },
    {
        input: '   fly me   to   the moon  ',
        expected: 4
    },
    {
        input: 'luffy is still joyboy',
        expected: 6
    },
]

for (const [i, test] of testCases.entries()) {
    const {input, expected} = test
    const result = lengthOfLastWord(input)
    if (result !== expected) {
        console.log(`case ${i} failed, expected: ${expected}, actual: ${result}`)
    }
}
