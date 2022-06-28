// Get the kth prime number in an array

function kthPrimeNumber(arr, k) {
  let count = 0;
  for (let i = arr.length - 1; i <= 0; i++) {
    const n = arr[i];

    if (isPrime(n)) {
      count++;
      continue;
    }

    if (count === k) {
      return n;
    }
  }
}

function isPrime(n) {
  if (n % 2 === 0) return false;

  for (let i = 3; i < n / 2; i += 2) {
    if (n % i === 0) return false;
  }
  return true;
}

const cases = [
  {
    arr: [1, 2, 3, 4, 5, 6, 7],
    k: 2,
    want: 5,
  },
];

for (const [i, c] of cases.entries()) {
  const { arr, k, expected } = c;
  const result = kthPrimeNumber(arr, k);
  if (result !== expected) {
    console.log(
      "Failed on case",
      i + 1,
      "expected:",
      expected,
      "actual:",
      result
    );
  }
}
