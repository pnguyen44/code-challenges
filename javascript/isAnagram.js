// Given two strings s and t ,
// write a function to determine if t is an anagram of s.

// Note:
// You may assume the string contains only lowercase alphabets.

var isAnagram = function(s, t) {
  const sSorted = s.split('').sort().join('')
  const tSorted = t.split('').sort().join('')
  console.log('sSorted,tSorted', sSorted, tSorted)
  return sSorted === tSorted ? true : false

};

console.log(isAnagram('anagram', 'nagaram')) // true
console.log(isAnagram('rat', 'car')) // false
