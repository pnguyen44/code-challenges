// 14. Longest Common Prefix

// Write a function to find the longest common prefix string amongst an array of strings.

// If there is no common prefix, return an empty string "".



// Example 1:

// Input: strs = ["flower","flow","flight"]
// Output: "fl"
// Example 2:

// Input: strs = ["dog","racecar","car"]
// Output: ""
// Explanation: There is no common prefix among the input strings.


// Constraints:

// 1 <= strs.length <= 200
// 0 <= strs[i].length <= 200
// strs[i] consists of only lower-case English letters.


/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    let prefix = strs[0]
    for (let i = 1; i < strs.length; i++) {
        while(!strs[i].startsWith(prefix)) {
            prefix = prefix.slice(0, -1)
            if (prefix.length === 0) {
                return ''
            }
        }

    }
    return prefix
};

// Alternative solution
// var longestCommonPrefix = function(strs) {
//     return strs.reduce((prefix, curr, i) => {
//          while(!curr.startsWith(prefix)) {
//             prefix = prefix.slice(0, -1)
//             if (prefix.length === 0) {
//                 prefix =  ''
//             }
//         }
//         return prefix

//     }, strs[0])
// };


const testCases = [
    {
        input: ["flower","flow","flight"],
        expected: "fl"
    },
    {
        input: ["dog","racecar","car"],
        expected: ""
    },
    {
        input: ["c","acc","ccc"],
        expected: ""
    },
]

for (const [i, test] of testCases.entries()) {
    const {input, expected} = test
    const result = longestCommonPrefix(input)
    if (result !== expected) {
        console.log(`case ${i} failed, expected: '${expected}', actual: '${result}'`)
    }
}
