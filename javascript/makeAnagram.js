// Complete the makeAnagram function in the editor below. It must return an integer representing the minimum total characters that must be deleted to make the strings anagrams.


// function makeAnagram(a, b) {
//   let firstWord,secondWord
//   if(a.length === b.length) {
//     firstWord = a;
//   } else {
//     //find the longer length word
//     firstWord = a.length > b.length ? a : b;
//   }
//   let count = 0;
//   if (firstWord === a) {
//     secondWord = b.split('')
//   } else {
//     secondWord = a.split('')
//   }
//   for (let i = 0; i < firstWord.length; i++) {
//     const pos = secondWord.indexOf(firstWord[i])
//     if (pos === -1) {
//       count +=1;
//     } else {
//       secondWord.splice(pos,1)
//     }
//   }
//   return count + secondWord.length;
// }


// Alternative Solution:
function makeAnagram(a, b) {
  a = a.split("");
  b = b.split("");
  const  shortLong = a.length > b.length ? [b,a] : [a,b]
  const short = shortLong[0];
  const long = shortLong[1];

  let matches = 0;
  short.forEach(function(cv, i){
      const indexInLong = long.indexOf(cv);
      if (indexInLong !== -1) {
          matches ++
          long[indexInLong] = ""
      }
  })
  return a.length + b.length - matches * 2
}


// console.log(makeAnagram("cde", "abc")); // 4
console.log(makeAnagram("showman", "woman")); // 2`
