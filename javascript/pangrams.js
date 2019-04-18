// given a sentence, find out if it contains all letters from a-z. Hint: they are specifically looking for set.

const checkCharCodeIsUpperCaseLetter = (letter) => (letter.charCodeAt(0) - 64) >= 1 && (letter.charCodeAt(0) - 64) < 27

const makeUniqueArray = arr => arr.reduce((unique,curr) => {
   if(!unique.includes(curr)) {
     unique.push(curr)
   }
   return unique
 },[])


function pangrams(str) {
const upperCaseStrWithOutSpace = str.toUpperCase().replace(/ /g)
const upperCaseStrArray = upperCaseStrWithOutSpace.split("");
const upperCaseLetters = upperCaseStrArray.filter(checkCharCodeIsUpperCaseLetter);
const deduppedUpperCaseLetters = makeUniqueArray(upperCaseLetters)
return deduppedUpperCaseLetters.length === 26 ? 'pangram' : 'not pangram';
}



console.log(pangrams('qmExzBIJmdELxyOFWv LOCmefk TwPhargKSPEqSxzveiun')) // pangram
console.log(pangrams('We promptly judged antique ivory buckles for the next prize')) // pangram
console.log(pangrams('Two driven jocks help fax my big quiz' ))  // pangram
console.log(pangrams('Jackdaws love my big sphinx of quartz')) // pangram
console.log(pangrams('We promptly judged antique ivory buckles for the prize')) // not pangram
console.log(pangrams('Johnathon quickly extemporized five tow bag')) // not pangram
