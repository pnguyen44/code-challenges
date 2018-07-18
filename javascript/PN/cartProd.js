// Write a function that returns the cartesian product of two sets as an array.

function cartProd2Sets(setA, setB) {
  let result = []
  let set = []
  setA.forEach(x => {
    for (let i = 0; i < setB.length; i++) {
      set = [x, setB[i]]
      result.push(set)
      set = []
    }
  })
  return result
}

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
