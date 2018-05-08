// Decimal to binary converter
//
// Convert decimal numbers to binary

function decToBin(d) {
  let res = []
  let x = d
  do {
    res.push(x)
    d = x
    x = Math.floor(d/2)
  } while (x !== 0)
  return res.reverse().map(x => x === 0 ? 0 : x % 2 === 0 ? 0 : 1).join('')
}
