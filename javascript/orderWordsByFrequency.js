// Given an array of words return the array of unique words ordered by their frequency in the array.
// For words the have the same frequency order them in ascending order

import arrayEquals from "../utils.js";

function orderWordsByFrequency(arr) {
  const freq = {};

  for (const word of arr) {
    freq[word] = (freq[word] || 0) + 1;
  }

  return Object.keys(freq).sort((a, b) => {
    if (freq[a] < freq[b]) {
      return -1;
    }

    if (freq[a] > freq[b]) {
      return 1;
    }

    return a.charCodeAt(0) - b.charCodeAt(0);
  });
}

const cases = [
  {
    array: [
      "dog",
      "cat",
      "cat",
      "hat",
      "cat",
      "car",
      "hat",
      "dog",
      "dog",
      "cat",
      "dog",
    ],
    want: ["car", "hat", "cat", "dog"],
  },
];

for (const { array, want } of cases) {
  const result = orderWordsByFrequency(array);

  if (!arrayEquals(result, want)) {
    console.log(
      "Failed on input:",
      array,
      "expected:",
      want,
      "actual:",
      result
    );
  }
}
