// 6 kyu - Decipher this!
// Decipher this!
// You are given several secret messages you need to decipher. Here are the conditions:
//
// The first letter corresponds to ASCII character code (case sensitive)
// The second letter needs to be switched to the last letter
// The last letter needs to be switched to the second letter
// If it only has one letter, it will be unchanged
// If it only has two letters, you will just need to convert the ASCII character code to a letter
// Keepin' it simple -- there are no special characters
//
// Example:
// decipherThis('72olle 103doo 100ya'); // 'Hello good day'
// decipherThis('82yade 115te 103o'); // 'Ready set go'

function decipherThis(str) {
  let newWord
  return str.split(' ').map(x => {
    let word = x.replace(/\d+/gi, n => String.fromCharCode(n))
    newWord  = word.toString().split('')
      newWord.splice(1, 1, word[word.length - 1])
      newWord.splice(word.length -1, 1, word[1])
    return newWord.join('')
  }).join(' ')
};
