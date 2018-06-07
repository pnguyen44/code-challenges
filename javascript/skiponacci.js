// 7 kyu - The Skiponacci Sequence
// Your task is to generate the Fibonacci sequence to n places, with each alternating value as "skip". For example:
//
// "1 skip 2 skip 5 skip 13 skip 34"

function skiponacci(n) {
  if (n === 1) return '1'
  let fib = [1,1]
  for (let i = 0; i < n - 2; i++) {
    fib.push(fib[i] + fib[i+1])
  }
  return fib.map((c,i) => (i+1) % 2 === 0 ? 'skip' : c).join(' ')
}

let answer = skiponacci(5)
console.log(answer)
