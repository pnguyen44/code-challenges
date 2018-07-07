// 7 kyu - Exclamation marks series #7: Remove words from the sentence if it contains one exclamation mark
// Remove words from the sentence if it contains one exclamation mark. Words are separated by spaces in the sentence. Please remember, one.
//
// Examples
// remove("Hi!") === ""
// remove("Hi! Hi!") === ""
// remove("Hi! Hi! Hi!") === ""
// remove("Hi Hi! Hi!") === "Hi"
// remove("Hi! !Hi Hi!") === ""
// remove("Hi! Hi!! Hi!") === "Hi!!"
// remove("Hi! !Hi! Hi!") === "!Hi!"

// function remove(s){
//   return s.split(' ').filter(x => {
//     let count = x.split('').filter(c => c === '!').length
//     return count > 1 || count === 0
//   }).join(' ')
// }

// Alternative Solution:

// function remove(s){
//   return s.split(' ').filter(w => w.split('!').length !== 2).join(' ')
// }

function remove(s){
  return s.split(' ').filter(w => !/^(!\w+|\w+!)$/.test(w) ).join(' ')
}

let answer = remove("!Hi Hi! Hi!!")
console.log(answer)
