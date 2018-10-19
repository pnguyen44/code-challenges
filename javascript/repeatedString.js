// Lilah has a string,s, of lowercase English letters that she repeated infinitely many times.
//
// Given an integer,n, find and print the number of letter a's in the first n letters of Lilah's infinite string.
//
//
// Complete the repeatedString function in the editor below. It should return an integer representing the number of occurrences of a in the prefix of length n in the infinitely repeating string.
//
// repeatedString has the following parameter(s):
//
// s: a string to repeat
// n: the number of characters to consider

function repeatedString(s, n) {
    const matchStr = s.match(/a/g)
    if (matchStr === null) return 0;
    const numWholeStr = Math.floor(n / s.length)
    let result = numWholeStr * matchStr.length
    let str = s.slice(0,n - (numWholeStr * s.length))
    str = str.match(/a/g)
    if (str === null) {
        return result
    } else {
        return result + str.length
    }
}

// Alternative Solution:
// function repeatedString(s, n) {
//   const match = s.match(/a/g);
//   if (match == null) return 0;
//   const repeat = Math.floor(n / s.length);
//   const left = s.slice(0, n - (repeat * s.length));
//   return (repeat * match.length) + left.split('').filter(x => x === 'a').length;
// }

console.log(repeatedString('abc', 10)) // 7
console.log(repeatedString('a', 1000000000000)) // 1000000000000
