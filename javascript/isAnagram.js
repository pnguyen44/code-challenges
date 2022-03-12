// 242. Valid Anagram
// Given two strings s and t, return true if t is an anagram of s, and false otherwise.

// Example 1:

// Input: s = "anagram", t = "nagaram"
// Output: true
// Example 2:

// Input: s = "rat", t = "car"
// Output: false

// Constraints:
// 1 <= s.length, t.length <= 5 * 104
// s and t consist of lowercase English letters.

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
// const isAnagram = function (s, t) {
//   const sSorted = s.split("").sort().join("");
//   const tSorted = t.split("").sort().join("");
//   return sSorted === tSorted ? true : false;
// };

// Faster solution
// const isAnagram = function (s, t) {
//   const hash = {};
//   s.split("").forEach((c) => (hash[c] = hash[c] ? hash[c] + 1 : 1));
//   t.split("").forEach((c) => (hash[c] = hash[c] ? hash[c] - 1 : 1));
//   return Object.values(hash).every((v) => v === 0);
// };

// Alternative solution
var isAnagram = function(s, t) {
  if (s.length !== t.length) return false

  const count = {}

  for (let item of s ) {
      count[item] = (count[item] || 0) + 1
  }

  for (let item of t) {
      if (!count[item]) return false
      count[item]--
  }
  return Object.values(count).every(v => v === 0)
};

const testCases = [
  {
    s: "anagram",
    t: "nagaram",
    expected: true,
  },
  {
    s: "rat",
    t: "car",
    expected: false,
  },
];


for (const [i, test] of testCases.entries()) {
  const { t, s, expected } = test;
  const result = isAnagram(t, s);
  if (result !== expected) {
    console.log(`case ${i} failed, expected: ${expected}, actual: ${result}`);
  }
}
