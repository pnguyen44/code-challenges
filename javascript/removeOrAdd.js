// 7 kyu - Exclamation marks series #9: Remove or add a exclamation mark at the end of words of the sentence
// Remove or add a exclamation mark at the end of words of the sentence. Words are separated by spaces in the sentence. That is: If a word has one ! at the end, remove it; If a word has no ! at the end, add a ! to the end; If there are more than one ! at the end of word, keep it.
//
// Examples
// removeOrAdd("Hi!") === "Hi"
// removeOrAdd("Hi! Hi!") === "Hi Hi"
// removeOrAdd("Hi! Hi") === "Hi Hi!"
// removeOrAdd("Hi! Hi Hi!!") === "Hi Hi! Hi!!"
// removeOrAdd("!Hi! !Hi !Hi!!") === "!Hi !Hi! !Hi!!"

function removeOrAdd(s){
  return s.split(' ').map(w => {
    if (w[w.length - 1] !== '!') {
      return w + '!'
    } else if (w[w.length - 1]  === '!' && w[w.length - 2] !== '!') {
      return w.slice(0,-1)
    } else {
      return w
    }
  }).join(' ')
}
