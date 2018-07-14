// Given an array of integers, write a function that changes the order of the integers so
// negative numbers appear first then positive numbers. Do not change the order of the integers.  

function specialSort(num) {
  let neg = num.filter(x => x < 0)
  let pos = num.filter(x => x >= 0)
  return neg.concat(pos)
}

let test = specialSort([-7, -9, 9, -4, 0, 1])
console.log(test)
