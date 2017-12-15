// 7kyu
// Write a function that takes an array and counts the number of each unique element present.
//
// count(['james', 'james', 'john'])
// #=> { 'james': 2, 'john': 1}


function count(array){
  return array.reduce((allVal, val) => {
    return val in allVal? allVal[val]++ : allVal[val] = 1, allVal
  }, {})
}
