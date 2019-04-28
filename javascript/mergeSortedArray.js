//Merge Sorted Array

// Given two sorted integer arrays nums1 and nums2, merge nums2 into nums1 as one sorted array.
//
// Note:
//
// The number of elements initialized in nums1 and nums2 are m and n respectively.
// You may assume that nums1 has enough space (size that is greater or equal to m + n) to hold additional elements from nums2.
//

var merge = function(nums1, m, nums2, n) {
  let mergeSortedList = []
  let leftIndex = 0
  let rightIndex = 0
  while(leftIndex < 3 && rightIndex < n) {
    if (nums1[leftIndex] < nums2[rightIndex]) {
      mergeSortedList.push(nums1[leftIndex])
      leftIndex++
    } else {
      mergeSortedList.push(nums2[rightIndex])
      rightIndex++
    }
    // console.log(rightIndex)
  }
  const restOfRightArray = nums2.splice(rightIndex)
  // console.log('...', mergeSortedList.concat(rest))
  // mergeSortedList = mergeSortedList.concat(rest)
  return mergeSortedList.concat(restOfRightArray)
};

console.log(merge( [1,2,3,0,0,0] , 3 , [2,5,6] , 3)) // [1,2,2,3,5,6]
