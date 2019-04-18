// Write a function that receives an array of integers, and return the first occurrence of a duplicate.


function findFirstDuplicate(arr) {
  for(let i = 0; i < arr.length; i++) {
    const currElem = arr[i]
    let firstFoundIndex = arr.indexOf(currElem)
    let lastFoundIndex = arr.lastIndexOf(currElem)
    console.log('frist', firstFoundIndex)
    console.log('last', lastFoundIndex)
    if (firstFoundIndex > -1 && lastFoundIndex > -1 && firstFoundIndex !== lastFoundIndex) {
      return arr[i]
      break;
    }
  }
  // return empty array if nothing is duplicated
  return []
}


// console.log(findFirstDuplicate([10, 5, 3, 4, 3, 5, 6])) // 5
// console.log(findFirstDuplicate([-10, -5, 6, 3, 4, 3, 5, 6])) // 6
// console.log(findFirstDuplicate([-10])) // []
// console.log(findFirstDuplicate([1, 8989, 8998, 9889, 8, 9, -8998, 89, 8989])) // 8989
// console.log(findFirstDuplicate([4, -4, 5, 0, 2, 12, 20])) // []
// console.log(findFirstDuplicate([33, 3, 333, 0.3, -3, -33, 333])) // 333
