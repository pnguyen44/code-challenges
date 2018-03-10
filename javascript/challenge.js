
// find the smallest integer in an array
class SmallestIntegerFinder {
  findSmallestInt (args) {
    return Math.min(...args)
  }
}

// check if a string is a pangram
function isPangram (string) {
 string = string.toLowerCase()
  let alphArr = ('abcdefghijklmnopqrstuvwxyz').split('')
  return alphArr.every(x => {
    return string.indexOf(x) !== -1
  })
}

// Capitalize the first letter of each word in a sentence
String.prototype.toJadenCase = function () {
 return this.split(' ').map(x => {
    return x.charAt(0).toUpperCase() + x.slice(1)
  }).join(' ')
}


// add two string together, remove duplicate letters and sort letter in string
function longest (s1, s2) {
  return [...new Set (s1 + s2)].sort().join('')
}


// Your online store likes to give out coupons for special occasions. Some customers try to cheat the system by entering invalid codes or using expired coupons.

// Your mission:
// Write a function called checkCoupon to verify that a coupon is valid and not expired. If the coupon is good, return true. Otherwise, return false.
//
// A coupon expires at the END of the expiration date. All dates will be passed in as strings in this format: "June 15, 2014"

function checkCoupon(enteredCode, correctCode, currentDate, expirationDate){
  return enteredCode === correctCode && Date.parse(currentDate) <= Date.parse(expirationDate)
}
