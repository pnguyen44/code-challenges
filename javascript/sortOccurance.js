// write a function takes a string, sorts the characters in string by the number of occurances in accending order
//, and returns that stirng.

function sortOccurence(str) {
  let obj = str.split('').reduce((obj,val) => {
    if (obj[val]) {
      obj[val] += obj[val]
    } else {
      obj[val] = 1
    }
    return obj
  },{})
  console.log('obj=', obj)
  let sortedKey = Object.keys(obj).sort((a,b) => {
    if (obj[a] === obj[b]) {
      if (a < b) {
        return - 1
      } else {
        return 1
      }
    } else {
      return obj[a] - obj[b]
    }
  })
  console.log('sortedKey', sortedKey)
  let ans = ""
  for (let letter of sortedKey) {
    ans += letter.repeat(obj[letter])
  }
  return ans

}


console.log(sortOccurence('ccdbbaa')) // daabbcc
