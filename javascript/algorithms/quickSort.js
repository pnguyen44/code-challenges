import arrayEquals from "../../utils.js";

// Sort an array using quick sort algorithm

// Time complexity O(n^2)

function quickSort(arr, left = 0, right = arr.length - 1) {
  if (left >= right) return arr;

  const mid = Math.floor((right + left) / 2);
  const pivot = arr[mid];
  const index = partition(arr, left, right, pivot);

  quickSort(arr, left, index - 1);
  quickSort(arr, index, right);

  return arr;
}

function partition(arr, left, right, pivot) {
  while (left <= right) {
    while (arr[left] < pivot) {
      left++;
    }

    while (arr[right] > pivot) {
      right--;
    }

    if (left <= right) {
      [arr[left], arr[right]] = [arr[right], arr[left]];
      left++;
      right--;
    }
  }
  return left;
}

const cases = [
  {
    array: [4, 5, 2, 6, 1],
    want: [1, 2, 4, 5, 6],
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
  const result = quickSort(array);
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
