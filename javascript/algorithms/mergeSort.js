import arrayEquals from "../../utils.js";

// create a function that performs a merge sort
// Time complexity O(n log(n)). Space complexity O(n)

function mergeSort(arr) {
  if (arr.length < 2) {
    return arr;
  }

  const mid = Math.floor(arr.length / 2);
  const a = arr.slice(0, mid);
  const b = arr.slice(mid);
  return mergeHalves(mergeSort(a), mergeSort(b));
}

function mergeHalves(a, b) {
  let indexA = 0;
  let indexB = 0;
  const result = [];

  while (indexA < a.length && indexB < b.length) {
    if (a[indexA] < b[indexB]) {
      result.push(a[indexA]);
      indexA++;
    } else {
      result.push(b[indexB]);
      indexB++;
    }
  }
  return result.concat(a.slice(indexA), b.slice(indexB));
}

const cases = [
  {
    array: [2, 5, 1, 3, 7, 2, 3, 8, 6, 3],
    want: [1, 2, 2, 3, 3, 3, 5, 6, 7, 8],
  },
  {
    array: [],
    want: [],
  },
  {
    array: [1],
    want: [1],
  },
];

for (const c of cases) {
  const { array, want } = c;
  const result = mergeSort(array);
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
