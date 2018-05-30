// 7 kyu - Find the area of the rectangle!
// Find the area of a rectangle when provided with one diagonal and one side of the rectangle. If the input diagonal is less than or equal to the length of the side, return "Not a rectangle". If the resultant area has decimals round it to two places.


function area(d,l){
  if(d <= l) return 'Not a rectangle'
  let w = Math.sqrt(Math.pow(d,2) - Math.pow(l,2))
  return Math.round(w  * l * 100)/100
}

let answer = area(12,5)
console.log(answer)
