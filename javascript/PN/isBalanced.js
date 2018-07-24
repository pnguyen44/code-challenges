// You are given an array of strings. Each of these strings is made up of bracket characters only :
// '(', ')', '{',  '}',  '[',  ']'.
// Programming languages utilize these brackets in balanced pairs, so the following rules are always followed :
//
// Every opening bracket has a corresponding closing bracket : '(' with ')', '{' with '}', and '[' with ']'.
// Two brackets form a pair if they have no open bracket of any type between them.
// For example: '[}]' is invalid, '[{}]' is valid.
// The closing bracket of a pair must be of the same type as the opening bracket, e.g. '( )' is valid, but '[ )' is not valid.
// Your task is to determine if of the strings of brackets in the input array are valid or invalid by these criteria.

function isBalanced(str) {
  let brackets = '[]{}()'
  str = str.split('')
  let stack = []
  for(let i = 0; i < str.length; i++) {
    let char = str[i]
    let closeBracketIndex = brackets.indexOf(char)
    if(closeBracketIndex % 2 > 0) {
      let matchOpenBracket = brackets[closeBracketIndex - 1]
      if (stack.length === 0 || stack.pop() !== matchOpenBracket) {
        return false
      }
    } else {
      stack.push(char)
    }
  }
  return stack.length === 0
}
