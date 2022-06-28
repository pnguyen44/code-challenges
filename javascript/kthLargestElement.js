// Kth Largest Element of Two Sorted Arrays

// Given two sorted arrays nums1 and nums2 of size m and n respectively and an int k. Find the k-th largest element of these arrays.
// Note that it is the k-th largest element in the sorted order, not the k-th distinct element.

// function kthLargestElement(nums1, nums2, k) {
//   const sorted = mergeList(nums1, nums2);
//   return sorted[sorted.length - k];
// }

// function mergeList(a, b) {
//   let indexA = 0;
//   let indexB = 0;
//   const result = [];

//   while (indexA < a.length && indexB < b.length) {
//     if (a[indexA] < b[indexB]) {
//       result.push(a[indexA]);
//       indexA++;
//     } else {
//       result.push(b[indexB]);
//       indexB++;
//     }
//   }

//   return result.concat(a.slice(indexA), b.slice(indexB));
// }

// Alternative solution:
function kthLargestElement(nums1, nums2, k) {
  let count = 0;
  let aCounter = nums1.length - 1;
  let bCounter = nums2.length - 1;
  let result;

  if (nums1.length === 0 || nums2.length === 0) {
    return nums1[0] || nums2[0];
  }

  while (aCounter < nums1.length && bCounter < nums2.length) {
    if (nums1[aCounter] > nums2[bCounter]) {
      result = nums1[aCounter];
      aCounter--;
    } else {
      result = nums2[bCounter];
      bCounter--;
    }

    count++;

    if (count === k) {
      return result;
    }
  }
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
