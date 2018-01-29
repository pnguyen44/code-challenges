// 7 kyu - String matchup
// Given two arrays of strings, return the number
// of times each string of the second array appears in the first array.

function solve(a,b){
  return b.map(x =>  a.filter(y =>  y === x).length)
}
