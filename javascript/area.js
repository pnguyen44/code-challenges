// 7 kyu - Find the area of the rectangle!
// Find the area of a rectangle when provided with one diagonal and one side of the rectangle. If the input diagonal is less than or equal to the length of the side, return "Not a rectangle". If the resultant area has decimals round it to two places.


function area(d,l){
  return Math.round(l * Math.sqrt((d * d) - (l * l)) * 100) / 100 || 'Not a rectangle'
}

// Alternative Solution:
// function area(d, l) {
//   return Math.round(l * Math.sqrt(d*d - l*l) * 1e2) / 1e2 || 'Not a rectangle';
// }

let answer = area(12,5)
console.log(answer)
