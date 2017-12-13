// function addBinary(a,b) {
// let quotient
// let dec = a + b
// let remainderStr = ''
// quotient = dec
//   while (quotient > 0) {
//     quotient = Math.floor(dec / 2)
//     remainderStr += dec % 2
//     dec = quotient
//   }
//   return remainderStr.split('').reverse().join('')
// }
function addBinary(a,b){
  return (a+b).toString(2)
}

console.log(addBinary(10, 3))
