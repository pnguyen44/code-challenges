// 7 kyu - Cipher
// This cipher involves taking each character of a string and multiplying their char codes by 6.
//
// For example, Hello World! would become ưɞʈʈʚÀȊʚʬʈɘÆ.
//
// You must write two functions:
// encode to encode a given string,
// decode to decode a given string.


function encode(str) {
  return str.split('').map( (c,i,a )=> {
    return String.fromCharCode(str.charCodeAt(i) * 6)
  }).join('')
}

function decode(str) {
  return str.split('').map( (c,i,a )=> {
    return String.fromCharCode(str.charCodeAt(i) / 6)
  }).join('')
}

let answer =  decode("ưɞʈʈʚÀȊʚʬʈɘÆ")
console.log(answer)
