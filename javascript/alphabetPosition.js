// 6 kyu - Replace With Alphabet Position
// you are required to, given a string, replace every letter with its position in the alphabet.
//
// If anything in the text isn't a letter, ignore it and don't return it.
//
// a being 1, b being 2, etc.
//
// As an example:
//
// alphabet_position("The sunset sets at twelve o' clock.")
// Should return "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11" as a string.


function alphabetPosition(text) {
  let answer = []
  for (let i = 0; i < text.length; i++) {
    let code = text.toUpperCase().charCodeAt(i)
    if (code > 64 && code < 91) {
      answer.push(code - 64)
    }
  }
  return answer.join(' ')
}

// Alternative Solution
// function alphabetPosition(text) {
//   let alph = 'abcdefghijklmnopqrstuvwxyz'.split('')
//   return text.replace(/\W/g,'').replace(/\d/g,'').replace(/_/g,'').toLowerCase().split('').map(x => {
//     return alph.indexOf(x) + 1
//   }).join(' ')
// }
