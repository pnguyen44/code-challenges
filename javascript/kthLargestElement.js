// Kth Largest Element of Two Sorted Arrays

// Given two sorted arrays nums1 and nums2 of size m and n respectively and an int k. Find the k-th largest element of these arrays.
// Note that it is the k-th largest element in the sorted order, not the k-th distinct element.

function kthLargestElement(nums1, nums2, k) {
  let counter1 = 0;
  let counter2 = 0;
  let result = [];

  while (counter1 < nums1.length && counter2 < nums2.length) {
    if (nums1[counter1] < nums2[counter2]) {
      result.push(nums1[counter1]);
      counter1++;
    } else {
      result.push(nums2[counter2]);
      counter2++;
    }
  }

  result = result.concat(nums1.slice(counter1), nums2.slice(counter2));
  return result[result.length - k];
}

const cases = [
  {
    nums1: [-2, -1, 3, 5, 6, 8],
    nums2: [0, 1, 2, 5, 9],
    k: 4,
    expected: 5,
  },
  {
    nums1: [6],
    nums2: [2, 4],
    k: 1,
    expected: 6,
  },
  {
    nums1: [1],
    nums2: [],
    k: 1,
    expected: 1,
  },
];

for (const [i, c] of cases.entries()) {
  const { nums1, nums2, k, expected } = c;
  const result = kthLargestElement(nums1, nums2, k);
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
