// Give you a phrase and a number, write a funcaton that take the number of words from the phrase and move them to the back

function yoda(phrase, N) {
  phrase = phrase.split(' ')

  const end = phrase.slice(0,N).join(' ')
  const start = phrase.slice(N).join(' ')

  return `${start} ${end}`

}


console.log(yoda('one two three four', 2)) // three four one two
