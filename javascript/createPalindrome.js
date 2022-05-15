import arrayEquals from "../utils.js";

// Given an array, return that array with each item converted into a palindrome. If the item can not be converted
// into a palindrome return -1 for that item.

function isPalindrome(str) {
  return str.toLowerCase() === [...str.toLowerCase()].reverse().join("");
}

function getUniqueLetters(str) {
  const freq = {};

  for (const c of str) {
    if (freq[c]) {
      delete freq[c];
    } else {
      freq[c] = 1;
    }
  }

  return Object.keys(freq);
}

function canBePalindrome(str) {
  const uniqueLetters = getUniqueLetters(str);
  return str.length % 2
    ? uniqueLetters.length === 1
    : uniqueLetters.length === 0;
}

function convertToPalindrome(str) {
  if (isPalindrome(str)) return str;
  if (!canBePalindrome(str)) return -1;

  const uniqueLetters = getUniqueLetters(str);
  const midLetter = uniqueLetters.length === 1 ? uniqueLetters[0] : "";
  const sorted = [...str].sort((a, b) => a.localeCompare(b));
  const midIndex = midLetter ? sorted.indexOf(midLetter) : -1;

  if (midIndex > -1) {
    sorted.splice(midIndex, 1);
  }

  const left = sorted.filter((_, i) => i % 2 === 0).join("");
  const right = sorted
    .filter((_, i) => i % 2)
    .reverse()
    .join("");

  return left.concat(midLetter, right);
}

function createPalindrome(arr) {
  return arr.map(convertToPalindrome);
}

const cases = [
  {
    array: ["__c"],
    want: ["_c_"],
  },
  {
    array: ["__c_"],
    want: [-1],
  },
  {
    array: ["a__c__acd"],
    want: ["__acdca__"],
  },
  {
    array: ["acac"],
    want: ["acca"],
  },
  {
    array: ["acac", "ax"],
    want: ["acca", -1],
  },
  {
    array: ["acacd"],
    want: ["acdca"],
  },
  {
    array: ["aCCcacCCd"],
    want: ["acCCdCCca"],
  },
  {
    array: [],
    want: [],
  },
  {
    array: [""],
    want: [""],
  },
  {
    array: ["dbd"],
    want: ["dbd"],
  },
  {
    array: ["bdd"],
    want: ["dbd"],
  },
];

for (const c of cases) {
  const { array, want } = c;
  const result = createPalindrome(array);
  if (!arrayEquals(result, want)) {
    console.log(
      "Failed on input:",
      array,
      "expected:",
      want,
      "actual:",
      result
    );
  }
}
