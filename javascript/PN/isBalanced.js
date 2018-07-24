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
  let openBracketStack = []
  // loop through each character in string
  for(let i = 0; i < str.length; i++) {
    let char = str[i]
    let closeBracketIndex = brackets.indexOf(char)

    // check for closed bracket characters.  If the character is an open bracket then add
    // it to the openBracketStack array.
    if(closeBracketIndex % 2 > 0) {
      let matchOpenBracket = brackets[closeBracketIndex - 1]
      
      // if openBracketStack array is empty or if the last element of openBracketStack array onced removed does not equal the matchOpenBracket
      // return false
      if (openBracketStack.length === 0 || openBracketStack.pop() !== matchOpenBracket) {
        return false
      }
    } else {
      openBracketStack.push(char)
    }
  }
  return openBracketStack.length === 0
}

//test
// console.log(isBalanced("([)]")) // false
// console.log(isBalanced("()()")) // true
// console.log(isBalanced("{}[]()")) // true
// console.log(isBalanced("{[}]")) // false
console.log(isBalanced("{[}]")) // false
console.log(isBalanced("[{()()}({[]})]({}[({})])((((((()[])){}))[]{{{({({({{{{{{}}}}}})})})}}}))[][][]")) // true
console.log(isBalanced("{}[]()")) // true
console.log(isBalanced("(())((()())())")) // true
