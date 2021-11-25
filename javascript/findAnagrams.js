// 438. Find All Anagrams in a String
// Given two strings s and p, return an array of all the start indices of p's anagrams in s. You may return the answer in any order.

// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

// Example 1:

// Input: s = "cbaebabacd", p = "abc"
// Output: [0,6]
// Explanation:
// The substring with start index = 0 is "cba", which is an anagram of "abc".
// The substring with start index = 6 is "bac", which is an anagram of "abc".
// Example 2:

// Input: s = "abab", p = "ab"
// Output: [0,1,2]
// Explanation:
// The substring with start index = 0 is "ab", which is an anagram of "ab".
// The substring with start index = 1 is "ba", which is an anagram of "ab".
// The substring with start index = 2 is "ab", which is an anagram of "ab".

// Constraints:

// 1 <= s.length, p.length <= 3 * 104
// s and p consist of lowercase English letters.

const { arrayEquals } = require("../utils");

/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
const findAnagrams = function (s, p) {
  let unique = 0;
  const hash = {};

  for (const l of p) {
    if (hash[l]) {
      hash[l]++;
    } else {
      unique++;
      hash[l] = 1;
    }
  }

  const result = [];
  let left = 0;
  for (let right = 0; right < s.length; right++) {
    if (hash[s[right]] !== null) hash[s[right]]--;
    if (hash[s[right]] === 0) unique--;
    if (unique === 0) result.push(left);
    if (right - left + 1 === p.length) {
      if (hash[s[left]] !== null) hash[s[left]]++;
      if (hash[s[left++]] === 1) unique++;
    }
  }
  return result;
};

const testCases = [
  {
    s: "cbaebabacd",
    p: "abc",
    expected: [0, 6],
  },
  {
    s: "abab",
    p: "ab",
    expected: [0, 1, 2],
  },
];

for (const [i, test] of testCases.entries()) {
  const { s, p, expected } = test;
  const result = findAnagrams(s, p);
  if (!arrayEquals(result, expected)) {
    console.log(`case ${i} failed, expected: ${expected}, actual: ${result}`);
  }
}
