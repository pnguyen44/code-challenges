// Write a function that returns an array of the cartesian product of two sets.
function cartProd2Sets(sets) {
  let result = []
  sets[0].forEach(x => {
    for (let i = 0; i < sets[1].length; i++) {
      result.push([x, sets[1][i]])
    }
  })
  return result
}

// Alternative Solutions:
// function cartProd2Sets(sets) {
//   let result = []
//   for(let a = 0; a < sets[0].length; a++) {
//     for (let i = 0; i < sets[1].length; i++) {
//         result.push([sets[0][a],sets[1][i]] )
//     }
//   }
//   return result
// }

// function cartProd2Sets(sets) {
//   let result = [];
//   let arr = [];
//   for (let a = 0; a < sets[0].length; a++) {
//     arr.push(sets[0][a]);
//     for (let b = 0; b < sets[1].length; b++) {
//       result.push(arr.concat(sets[1][b]))
//     };
//     arr.pop()
//   };
//   return result
// }


// Write a function that returns an array of the cartesian product of three sets.
function cartProd3Sets(sets) {
  let result = []
  let arr= []
  for(let a = 0; a < sets[0].length; a++) {
    arr.push(sets[0][a])
    for (let b = 0; b < sets[1].length; b++) {
      arr.push(sets[1][b])
      for (let c = 0; c < sets[2].length; c++) {
        result.push(arr.concat(sets[2][c]))
      }
      arr.pop()
    }
    arr = []
  }
  return result
}


// Write a function that returns an array of the cartesian product of any number of sets passed to it.
function cartProd(sets) {
  let results = [[]]
  // loop through the sets array
  for (let s = 0; s < sets.length; s++) {
    // set currSet to the current element of the sets array
    let currSet = sets[s]
    let temp = []
    // loop through the results array
    for(let r = 0; r < results.length; r++) {
      // loop through the currSet array
      // concat the current element of the currSet array with the results array
      //and push that value to the temp array
      for(let c = 0; c < currSet.length; c++) {
        temp.push(results[r].concat(currSet[c]))
      }
    }
    // set results to the temp array
    results = temp
  }
  return results
}


// test

// console.log(cartProd2Sets([[1], [1]])) //  [[1, 1]]
// console.log(cartProd2Sets([[1], ['a']])) // [[1, 'a']]
// console.log(cartProd2Sets([['a'], [1]])) // [['a', 1]]
// console.log(cartProd2Sets([[1, 2, 3], ['a']])) // [[1, 'a'], [2, 'a'], [3, 'a']]
// console.log(cartProd2Sets([[1, 2], ['a', 'b']])) // [[1, 'a'], [1, 'b'], [2, 'a'], [2, 'b']]
//console.log(cartProd([[1], [1, 2], [1,2,3]])) // [[1, 1, 1], [1, 2, 1],
                                              // [1, 1, 2], [1, 2, 2],
                                              // [1, 1, 3], [1, 2, 3]]
console.log(cartProd([[1, 2], [1, 2], [1,2]])) // [[1, 1, 1], [1, 1, 2], [1, 2, 1],
                                              // [1, 2, 2], [2, 1, 1], [2, 1, 2],
                                              // [2, 2, 1], [2, 2, 2]]
