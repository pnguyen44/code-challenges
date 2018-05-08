// 8 kyu - Bin to Decimal
// Complete the function which converts a binary number (given as a string) to a decimal number.

function binToDec(bin){
  return [...bin].reverse().map((e,i) => e * Math.pow(2,i)).reduce((a,c) => a+c)
}
