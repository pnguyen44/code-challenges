export default function arrayEquals(a, b) {
  return (
    Array.isArray(a) &&
    Array.isArray(b) &&
    a.length === b.length &&
    a.every((val, index) => {
      if (Array.isArray(val)) {
        return arrayEquals(val, b[index]);
      }
      return val === b[index];
    })
  );
}

const testCases = [
  {
    a: [1, 2, 3],
    b: [1, 2, 4],
    expected: false,
  },
  {
    a: [1, 2, 3],
    b: [1, 2, 3],
    expected: true,
  },
  {
    a: [
      [0, 1],
      [2, 3],
    ],
    b: [
      [0, 1],
      [2, 3],
    ],
    expected: true,
  },
  {
    a: [[1, 2], []],
    b: [[1, 3], []],
    expected: false,
  },
];

for (const [i, test] of testCases.entries()) {
  const { a, b, expected } = test;
  const result = arrayEquals(a, b);

  if (result !== expected) {
    console.log(`case ${i} failed, expected: ${expected}, actual: ${result}`);
  }
}

