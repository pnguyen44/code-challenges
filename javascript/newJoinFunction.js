// Write a function that works like the javascript .join() method.

function newJoinFunction(arr, separator=',') {
  let str = ''
  for (let i =0; i < arr.length; i++) {
    if (i === arr.length - 1) {
      str += arr[i]
    } else {
      str += arr[i] + separator
    }
  }
  return str
}


// console.log(newJoinFunction(['Fire', 'Wind', 'Rain'])) // Fire,Wind,Rain
// console.log(newJoinFunction(['Fire', 'Wind', 'Rain'],'')) // FireWindRain
// console.log(newJoinFunction(['Fire', 'Wind', 'Rain'],'-')) // Fire-Wind-Rain
// console.log(newJoinFunction(['cat', 'Dog', 'apple'], 'hi')) // cathiDoghiapple
