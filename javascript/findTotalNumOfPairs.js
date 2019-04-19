// Given n people, find total number of pairs can be formed.  1 Answer - They are looking for recursion.

function findTotalNumOfPairs(n) {
  if (n <= 1) return 0
  return findTotalNumOfPairs(n - 1) + (n - 1)
}


// console.log(findTotalNumOfPairs(1)) //  0
// console.log(findTotalNumOfPairs(2)) // 1
// console.log(findTotalNumOfPairs(3)) // 3
// console.log(findTotalNumOfPairs(4)) // 6
// console.log(findTotalNumOfPairs(5)) // 10
// console.log(findTotalNumOfPairs(6)) // 15
// console.log(findTotalNumOfPairs(7)) // 21
// console.log(findTotalNumOfPairs(8)) // 28
// console.log(findTotalNumOfPairs(9)) // 36
console.log(findTotalNumOfPairs(10)) // 45
console.log(findTotalNumOfPairs(564)) // 158766
// console.log(findTotalNumOfPairs(44)) // 946
console.log(findTotalNumOfPairs(9853)) // 48535878


// Given n, find the total number of pair combinations. Order does matter.

function countNumOfPair(n) {
  if (n === 2) return 2
  return countNumOfPair(n-1) + ((n - 1) * 2)
}


console.log(countNumOfPair(5)) //  20
console.log(countNumOfPair(10)) //  90
console.log(countNumOfPair(1888)) //  3562656
