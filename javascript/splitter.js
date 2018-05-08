// 7 kyu - Split camelcase
// Split a camelcase string into individual words, the return value must be a single string of words separated by one whitespace.
//
// The strings are to be split on the capital letters like so:
//
// 'StringStringString' => 'String String String'


function splitter(str){
  return str.replace(/\s/,'').replace(/[A-Z]+/g, ' $&').trim()
}

// Alternative Solution:
// function splitter(str){
//     return str.replace(/\s*([A-Z]+)/g, ' $1').trim();
// }

let answer =  splitter('0vM6dQ7sGj2v1gWfDIs1')
console.log(answer)
