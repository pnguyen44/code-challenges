// Two Sum II - Input array is sorted
//
// Given an array of integers that is already sorted in ascending order, find two numbers such that they add up to a specific target number.
//
// The function twoSum should return indices of the two numbers such that they add up to the target, where index1 must be less than index2.
//
// Note:
//
// Your returned answers (both index1 and index2) are not zero-based.
// You may assume that each input would have exactly one solution and you may not use the same element twice.

var twoSum = function(numbers, target) {
  // let result = []
  for(let i = 0; i < numbers.length; i++) {
    for(let j = i + 1; j < numbers.length; j++) {
      if(numbers[i] + numbers[j] === target) {
        return [i + 1, j + 1]
      }
    }
  }
};

console.log(twoSum( [2,7,11,15] , 9 )) // [1,2]
