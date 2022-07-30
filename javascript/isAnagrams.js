// Check if an array contains all anagrams

function isAnagrams(array) {
  const a = array[0];

  for (const b of array.slice(1)) {
    if (!isAnagram(a, b)) {
      return false;
    }
  }

  return true;
}

function isAnagram(a, b) {
  const freq = {};

  for (const c of a) {
    freq[c] = (freq[c] || 0) + 1;
  }

  for (const c of b) {
    freq[c] = (freq[c] || 0) - 1;
  }

  return Object.values(freq).every((v) => v === 0);
}

const cases = [
  {
    array: ["alive", "live"],
    expected: false,
  },
  {
    array: ["devil", "viled", "lived"],
    expected: true,
  },
];

for (const [i, test] of cases.entries()) {
  const { array, expected } = test;

  const result = isAnagrams(array);

  if (result !== expected) {
    console.log(`case ${i} failed, expected: ${expected}, actual: ${result}`);
  }
}
