// 6 kyu - Complete Fibonacci Series
//
// The function 'fibonacci' should return an array of fibonacci numbers. The function takes a number as an argument to decide how many no. of elements to produce. If the argument is less than or equal to 0 then return empty array
//
// Example:
//
// fibonacci(4); // should return [0,1,1,2]
// fibonacci(-1); // should return []

function fibonacci(n) {
  let res = [0,1]
  for(let i = 0; i < n - 2; i++) {
    let sum = res.slice(i).reduce((acc, curr) => {
      return acc + curr
    })
    res.push(sum)
  }
  return n <=0 ? [] : res
}

let answer =  fibonacci(4)
console.log(answer)
