// Complete the makeAnagram function in the editor below. It must return an integer representing the minimum total characters that must be deleted to make the strings anagrams.


function makeAnagram(a, b) {
  let firstWord,secondWord
  if(a.length === b.length) {
    firstWord = a;
  } else {
    //find the longer length word
    firstWord = a.length > b.length ? a : b;
  }
  let count = 0;
  if (firstWord === a) {
    secondWord = b.split('')
  } else {
    secondWord = a.split('')
  }
  for (let i = 0; i < firstWord.length; i++) {
    const pos = secondWord.indexOf(firstWord[i])
    if (pos === -1) {
      count +=1;
    } else {
      secondWord.splice(pos,1)
    }
  }
  console.log(secondWord)
  return count + secondWord.length;
}


console.log(makeAnagram("cde", "abc")); // 4
// console.log(makeAnagram("showman", "woman")); // 2`
