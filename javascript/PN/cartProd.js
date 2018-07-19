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




// Write a function that returns an array of the cartesian product of three sets.
function cartProd3Sets() {
  let result = []
  let set = []
  for(let a = 0; a < arguments[0].length; a++) {
    set.push(arguments[0][a])
    for (let b = 0; b < arguments[1].length; b++) {
      set.push(arguments[1][b])
      for (let i = 0; i < arguments[2].length; i++) {
        result.push(set.concat(arguments[2][i]))
      }
      set.pop()
    }
    set = []
  }
  return result
}

// test
const a = [1]
const b = [1, 2]
const c = [1, 2, 3]
const x = ['a']
const y = ['a', 'b']
const z = ['a', 'b', 'c']

// console.log(cartProd2Sets(a,a))
// console.log(cartProd2Sets(a,x))
// console.log(cartProd2Sets(x,a))
// console.log(cartProd2Sets(c,x))
// console.log(cartProd2Sets(b,y))
console.log(cartProd3Sets(b,b,b))
