// Write a function called that takes a string of parentheses, and determines if the order of the parentheses is valid. The function should return true if the string is valid, and false if it's invalid.
//
// Examples
// "()"              =>  true
// ")(()))"          =>  false
// "("               =>  false
// "(())((()())())"  =>  true
// Constraints
// 0 <= input.length <= 100
//
// You may assume that the input string will only contain opening and closing parenthesis and will not be an empty string.

function validParentheses(parens){
  let stack = []
  for (let i = 0; i < parens.length; i++) {
    let char = parens[i]
    if (char === ')') {
      if (stack.length === 0 || stack.pop() !== '(') {
        return false
      }
    } else {
      stack.push(char)
    }
  }
  return stack.length === 0
}


// Alternative Solution:
// function validParentheses(parens){
//   var indent = 0;
//
//   for (var i = 0 ; i < parens.length && indent >= 0; i++) {
//     indent += (parens[i] == '(') ? 1 : -1;
//   }
//
//   return (indent == 0);
// }
