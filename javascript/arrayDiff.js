// 6 kyu - Array.diff
// Your goal in this kata is to implement an difference function, which subtracts one list from another.
//
// It should remove all values from list a, which are present in list b.
//
// array_diff([1,2],[1]) == [2]
// If a value is present in b, all of its occurrences must be removed from the other:

// array_diff([1,2,2,2,3],[2]) == [1,3]

function array_diff(a, b) {
return  a.filter(x => {
    return x !== b[0]
  })

// alternative solution:
// function array_diff(a, b) {
//   return a.filter(function(x) { return b.indexOf(x) == -1; });
// }
