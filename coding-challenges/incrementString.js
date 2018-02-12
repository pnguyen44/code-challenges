// 5kyu - String incrementer
//
// Your job is to write a function which increments a string, to create a new string. If the string already ends with a number, the number should be incremented by 1. If the string does not end with a number the number 1 should be appended to the new string.
//
// Examples:
// foo -> foo1
// foobar23 -> foobar24
// foo0042 -> foo0043
// foo9 -> foo10
// foo099 -> foo100
//
// Attention: If the number has leading zeros the amount of digits should be considered.

function incrementString (strng) {
  let leadingZero = strng.split('').filter(x => x === '0' ).length
  let num = (Number(strng.replace(/[a-z]/gi,'')) + 1) .toString()
  let word = strng.replace(/[0-9]/g,'')
  if (strng[strng.length - 1] === '9' || num === '1') {
    leadingZero -= 1
  }
  return leadingZero > 0 ? word +  '0'.repeat(leadingZero) + num : word + num
}

// Alternative Solution:
// function incrementString(strng) {
//   if(isNaN(parseInt(strng[strng.length - 1]))) return strng + '1';
//   return strng.replace(/(0*)([0-9]+$)/, function(match, p1, p2) {
//     var up = parseInt(p2) + 1;
//     return up.toString().length > p2.length ? p1.slice(0, -1) + up : p1 + up;
//   });
// }
