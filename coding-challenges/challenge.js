const args = [34, 15, 88, 2]

class SmallestIntegerFinder {
  findSmallestInt (args) {
    return Math.min(...args)
  }
}

const smallNum = new SmallestIntegerFinder()

function isPangram (string) {
 string = string.toLowerCase()
  let alphArr = ('abcdefghijklmnopqrstuvwxyz').split('')
  return alphArr.every(x => {
    return string.indexOf(x) !== -1
  })
}

String.prototype.toJadenCase = function () {
 return this.split(' ').map(x => {
    return x.charAt(0).toUpperCase() + x.slice(1)
  }).join(' ')
}

// console.log('...', 'The quic brown fox jumps over the lazy dog'.toJadenCase())

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



function findUniq (arr) {
  let count = 0
  let unique
  // arr.forEach(x => {
  //   if (count = 1) {
  //     unique = x
  //   }
  // })
  // return arr.reduce((prev, curr) => {
  //       console.log(curr)
  //   if (prev !== curr) {
  //     return prev
  //   } else {
  //     return curr
  //   }
  // })
  // return [...new Set(arr)]
}

console.log(findUniq([ 1, 1, 1, 2, 1, 1 ]))
// _____________ not able so solve _______________
// Given two arrays a and b write a function comp(a, b) (compSame(a, b) in Clojure) that
// checks whether the two arrays have the "same" elements, with the same multiplicities.
// "Same" means, here, that the elements in b are the elements in a squared, regardless of the order.


function comp (array1, array2){
  if (array1 !== null ){
      if (array1.length ) {
      array1 = array1.map(x => {
        return x * x
      })
      return array1.every(x => {
  // console.log('x', x)
  //        x = Math.pow(x)
  //        console.log('x', x)
          return array2.indexOf(x) !== -1
        })
      } else {
        return false
      }
} else {
  return false
}

}

const a = [0, 121, 144, 19, 161, 19, 144, 19, 11]
// const a = null
const b = [14641, 20736, 361, 25921, 361, 20736, 361]
// const b = []
// console.log(comp(a, b))
