// Write a function to determine if a string is a substring of another string.  

function checkString(str, word) {
  return str.split(' ').includes(word)
}

// Alternative Solution:
function checkString(str, word) {
  let re  = new RegExp(word)
  return re.test(str)
}
