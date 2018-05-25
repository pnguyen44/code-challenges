// 7 kyu - The iccanobiF Sequence
// Your task is to create an array of size n with the values of the Fibonnaci sequence, and reverse the order in which the sequence is displayed.
//
// For example: [1, 1, 2, 3, 5] would become [5, 3, 2, 1, 1]
//
// You can assume that n will always be a positive integer between and including, 1 and 64.


function iccanobif(n) {
  if (n ===1) return [1]
  let arr = [1,1]
  for (let i = 0; i < n - 2; i++) {
    arr.push(arr[i] + arr[i + 1])
  }
  return arr.reverse()
}

let answer = iccanobif(3)
console.log(answer)
