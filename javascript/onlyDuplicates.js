// 6 kyu - Only Duplicates
// Given a string, remove any characters that are unique from the string.
//
// Example:
//
// input: "abccdefee"
//
// output: "cceee"

function onlyDuplicates(str) {
  return str.split('').map(x => {
    return str.split('').filter(l => l === x).length > 1 ? x : ''
  }).join('')
}

// Alternative Solution:
// function onlyDuplicates(str) {
//   return str.split('').filter(x => str.indexOf(x) !== str.lastIndexOf(x)).join('')
// }
