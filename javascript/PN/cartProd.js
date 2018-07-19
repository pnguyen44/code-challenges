// Write a function that returns an array of the cartesian product of two sets.

function cartProd2Sets(setA, setB) {
  let result = []
  setA.forEach(x => {
    for (let i = 0; i < setB.length; i++) {
      result.push([x, setB[i]])
    }
  })
  return result
}

// Alternative Solution:
// function cartProd2Sets(setA, setB) {
//   let result = []
//   for(let a = 0; a < setA.length; a++) {
//     for (let i = 0; i < setB.length; i++) {
//         result.push([setA[a],setB[i]] )
//     }
//   }
//   return result
// }



// test
const a = [1]
const b = [1, 2]
const c = [1, 2, 3]
const x = ['a']
const y = ['a', 'b']
const z = ['a', 'b', 'c']

console.log(cartProd2Sets(a,a))
console.log(cartProd2Sets(a,x))
console.log(cartProd2Sets(x,a))
console.log(cartProd2Sets(c,x))
console.log(cartProd2Sets(b,y))
