// 7 kyu - Numbers in strings
// In this Kata, you will be given a string that has lowercase letters and numbers. Your task is to
// compare the number groupings and return the largest number.
//
// For example, solve("gh12cdy695m1") = 695, because this is the largest of all number groupings.

function solve(s){
  s = s.replace(/[a-z]/gi, ' ').split(' ').filter(x => {
    x !== ''
    return Number(x)
  }).map(x => Number(x))
  return Math.max(...s)
}

// alternative solution:
// const solve=s=>Math.max(...s.split(/[a-z]/i).filter(x=>x).map(x=>+x))
