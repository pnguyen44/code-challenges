// 7 kyu - Recursion #1 - Factorial
// ##1 - Factorial
//
// In mathematics, the factorial of a non-negative integer n, denoted by n!, is the product of all positive integers less than or equal to n. For example,
//
// 5! = 5 * 4 * 3 * 2 * 1 = 120.
//
// The value of 0! is 1.
//
// #Your task
//
// You have to create the function factorial that receives n and returns n!. You have to use recursion.

const factorial = (n) => {
  return n === 0 ? 1 : n * factorial(n - 1);
};

const cases = [
  {
    n: 0,
    want: 1,
  },
  {
    n: 2,
    want: 2,
  },
  {
    n: 5,
    want: 120,
  },
];

for (const c of cases) {
  const { n, want } = c;
  const result = factorial(n);

  if (want !== result) {
    console.log("failed on input", n, "excepted", want, "got", result);
  }
}
