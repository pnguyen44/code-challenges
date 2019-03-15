// Decimal to binary converter
//
// Convert decimal numbers to binary

// function decToBin(d) {
//   let res = []
//   let x = d
//   do {
//     res.push(x)
//     d = x
//     x = Math.floor(d/2)
//   } while (x !== 0)
//   return res.reverse().map(x => x === 0 ? 0 : x % 2 === 0 ? 0 : 1).join('')
// }

// Alternative Solution:
function decToBin(d) {
  let bin = ''
  while(d > 0) {
    bin += d % 2
    d = Math.trunc(d / 2)
  }
  return bin.split('').reverse().join('')
}



console.log(decToBin(10)) // 1010
console.log(decToBin(14)) // 1110
