// 8 kyu - Palindrome Strings
// Palindrome strings
// A palindrome is a word, phrase, number, or other sequence of characters which reads the same backward or forward. This includes capital letters, punctuation, and word dividers.
//
// Examples
// "anna"   ==> true
// "walter" ==> false
// 12321    ==> true
// 123456   ==> false

// function isPalindrome(line) {
//   return line.toString().split("").reverse().join("") === line.toString();
// }

// Faster solution
// function isPalindrome(line) {
//   const numAsString = line.toString();
//   for (let i = 0; i < Math.floor(numAsString.length / 2); i++) {
//     if (numAsString[i] !== numAsString[numAsString.length - (i + 1)]) {
//       return false;
//     }
//   }
//   return true;
// }

// Best solution
function isPalindrome(line) {
  const array = String(line).split("");

  while (array.length > 1) {
    if (array.shift() !== array.pop()) {
      return false;
    }
  }

  return true;
}

const testCases = [
  {
    nums: "anna",
    expected: true,
  },
  {
    nums: "walter",
    expected: false,
  },
  {
    nums: 12321,
    expected: true,
  },
  {
    nums: 123456,
    expected: false,
  },
  {
    nums: -121,
    expected: false,
  },
  {
    nums: 0,
    expected: true,
  },
  {
    nums: 1000021,
    expected: false,
  },
];

for (const [i, test] of testCases.entries()) {
  const { nums, expected } = test;
  const result = isPalindrome(nums);

  if (result !== expected) {
    console.log(`case ${i} failed, expected: ${expected}, actual: ${result}`);
  }
}
