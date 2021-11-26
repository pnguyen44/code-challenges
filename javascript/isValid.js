// 20. Valid Parentheses

// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:

//     1. Open brackets must be closed by the same type of brackets.
//     2. Open brackets must be closed in the correct order.

// Example 1:

// Input: s = "()"
// Output: true
// Example 2:

// Input: s = "()[]{}"
// Output: true
// Example 3:

// Input: s = "(]"
// Output: false
// Example 4:

// Input: s = "([)]"
// Output: false
// Example 5:

// Input: s = "{[]}"
// Output: true

// Constraints:

// 1 <= s.length <= 104
// s consists of parentheses only '()[]{}'.

/**
 * @param {string} s
 * @return {boolean}
 */
// const isValid = function (s) {
//   const mapping = {
//     "(": ")",
//     "[": "]",
//     "{": "}",
//   };
//   const openBrackets = [];
//   for (i = 0; i < s.length; i++) {
//     const curr = s[i];
//     if (mapping[curr]) {
//       openBrackets.push(curr);
//       continue;
//     }

//     if (openBrackets.length === 0) return false;

//     if (mapping[openBrackets.pop()] !== curr) {
//       return false;
//     }
//   }

//   return openBrackets.length === 0;
// };

// Faster solution
const isValid = function (s) {
  const closeBrakcets = [];

  for (let i = 0; i < s.length; i++) {
    const curr = s[i];
    switch (curr) {
      case "(":
        closeBrakcets.push(")");
        break;
      case "[":
        closeBrakcets.push("]");
        break;
      case "{":
        closeBrakcets.push("}");
        break;
      default:
        if (closeBrakcets.pop() !== curr) return false;
    }
  }
  return closeBrakcets.length === 0;
};

const testCases = [
  {
    input: "()",
    expected: true,
  },
  {
    input: "()[]{}",
    expected: true,
  },
  {
    input: "(]",
    expected: false,
  },
  {
    input: "([)]",
    expected: false,
  },
  {
    input: "{[]}",
    expected: true,
  },
  {
    input: "]",
    expected: false,
  },
];

for (const [i, test] of testCases.entries()) {
  const { input, expected } = test;
  const result = isValid(input);
  if (result !== expected) {
    console.log(`case ${i} failed, expected: ${expected}, actual: ${result}`);
  }
}
