'use strict'
//Merge Sorted Array

// Given two sorted integer arrays nums1 and nums2, merge nums2 into nums1 as one sorted array.
//
// Note:
//
// The number of elements initialized in nums1 and nums2 are m and n respectively.
// You may assume that nums1 has enough space (size that is greater or equal to m + n) to hold additional elements from nums2.
//

// var merge = function(nums1, m, nums2, n) {
//   let
//   let index1 = 0
//   let index2 = 0
//   const shorterArr = nums1.length < nums2.length ? nums1 : nums2
//   // console.log('shorterArr', shorterArr)
//   while(index1 < shorterArr.length && index2 < shorterArr.length) {
//     // console.log('index1, index2', index1, index2)
//     if (nums1[index1] < nums2[index2]) {
//       mergeSortedList.push(nums1[index1])
//       index1++
//     } else {
//       mergeSortedList.push(nums2[index2])
//       index2++
//     }
//   }
//   const restOfArray1 = nums1.slice(index1)
//   const restOfArray2 = nums2.slice(index2)
//   return mergeSortedList.concat(restOfArray1, restOfArray2)
// };

var merge = function(nums1, m, nums2, n) {
  const arr1 = nums1.slice(0,m)
  return [...arr1, nums2].sort().reduce((acc,val) => acc.concat(val),[])
}

// var merge = function(nums1, m, nums2, n) {
//   const tempNum1 = nums1.slice(0,m)
//   let index1 = 0
//   let index2 = 0
//   let counter = 0
//
//   if (n === 0) return
//
//   while(counter < m + n) {
//     const val1 = tempNum1[index1]
//     const val2 = nums2[index2]
//     if(val1 < val2) {
//       nums1[counter] = val1
//       index1++
//     } else if (val1 === val2) {
//         nums1[counter] = val1
//         index1++
//         counter++
//         nums1[counter] = val2
//         index2++
//     } else {
//       nums1[counter] = val2
//       index2++
//     }
//     counter++
//   }
//   // console.log('nums1', nums1)
// };

console.log(merge( [1,2,3,0,0,0] , 3 , [2,5,6] , 3)) // [1,2,2,3,5,6]
console.log(merge( [1] , 1 , [] , 0)) // [1,2,2,3,5,6]
