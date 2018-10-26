// Complete the makeAnagram function in the editor below. It must return an integer representing the minimum total characters that must be deleted to make the strings anagrams.


// function makeAnagram(a, b) {
//   const shortLong = a.length < b.length ? [a,b] : [b,a];
//   let shortW = shortLong[0];
//   const longW = shortLong[1]
//   let count = 0;
//   shortW = shortW.split('');
//   for (let i = 0; i < longW.length; i++) {
//     const pos = shortW.indexOf(longW[i])
//     if (pos === -1) {
//       count +=1;
//     } else {
//       shortW.splice(pos,1)
//     }
//   }
//   return count + shortW.length;
// }


// Alternative Solution:
// function makeAnagram(a, b) {
//   a = a.split("");
//   b = b.split("");
//   const  shortLong = a.length > b.length ? [b,a] : [a,b]
//   const short = shortLong[0];
//   const long = shortLong[1];
//
//   let matches = 0;
//   short.forEach(function(cv, i){
//       const indexInLong = long.indexOf(cv);
//       if (indexInLong !== -1) {
//           matches ++
//           long[indexInLong] = ""
//       }
//   })
//   return a.length + b.length - matches * 2
// }

function makeAnagram(a, b) {
  const count = new Array(26).fill(0);
  const pos = s => {
    return s.charCodeAt(0) - 'a'.charCodeAt(0);
  }

  for (let i = 0; i < a.length; ++i) {
    count[pos(a.charAt(i))]++;
  }

  for (let i = 0; i < b.length; ++i) {
    count[pos(b.charAt(i))]--;
  }

  // console.log(count);

  const diff = count.reduce((p, c) => {
    return Math.abs(p) + Math.abs(c);
  }, 0);

  return diff;
}


console.log(makeAnagram("cde", "abc")); // 4
// console.log(makeAnagram("showman", "woman")); // 2`
