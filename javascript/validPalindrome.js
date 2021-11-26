// 125. Valid Palindrome

// A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

// Given a string s, return true if it is a palindrome, or false otherwise.

// Example 1:

// Input: s = "A man, a plan, a canal: Panama"
// Output: true
// Explanation: "amanaplanacanalpanama" is a palindrome.
// Example 2:

// Input: s = "race a car"
// Output: false
// Explanation: "raceacar" is not a palindrome.
// Example 3:

// Input: s = " "
// Output: true
// Explanation: s is an empty string "" after removing non-alphanumeric characters.
// Since an empty string reads the same forward and backward, it is a palindrome.

// Constraints:

// 1 <= s.length <= 2 * 105
// s consists only of printable ASCII characters.

/**
 * @param {string} s
 * @return {boolean}
 */
const isPalindrome = function (s) {
  const letters = s.toLowerCase().replace(/[^A-Z0-9]/gi, "");

  for (let i = 0; i < Math.floor(letters.length / 2); i++) {
    if (letters[i] !== letters[letters.length - (i + 1)]) {
      return false;
    }
  }
  return true;
};

const testCases = [
  {
    input: "A man, a plan, a canal: Panama",
    expected: true,
  },
  {
    input: "race a car",
    expected: false,
  },
  {
    input: " ",
    expected: true,
  },
  {
    input: "0P",
    expected: false,
  },
];

for (const [i, test] of testCases.entries()) {
  const { input, expected } = test;
  const result = isPalindrome(input);
  if (result !== expected) {
    console.log(`case ${i} failed, expected: ${expected}, actual: ${result}`);
  }
}
