// Write a function that converts a string input of standard time to military time.
// Give a string input with a time format of '5:30 PM', change the input to military time.


const getHour = (time, isPM) => {
  if(isPM) {
    return (time % 12) + 12
  } else {
    time = (time % 12)
    return `0${time}`
  }
}
function timeConversion(s) {
  // remvoe PM and AM
  const strWithoutLetters = s.slice(0, s.length - 2)
  const isPM = s.slice(-2).toUpperCase() === 'PM'
  const strNumArr = strWithoutLetters.split(':')
  const hour = getHour(strNumArr[0],isPM)
  const result = `${hour}:${strNumArr[1]}:${strNumArr[2]}`
  return result
}

// console.log(timeConversion('07:05:45PM')) // 19:05:45
// console.log(timeConversion('12:40:22AM')) // 00:40:22
// console.log(timeConversion('06:40:03AM')) //  06:40:03
// console.log(timeConversion('01:10:10PM')) //  13:10:10
// console.log(timeConversion('03:33:15AM')) // 03:33:15
// console.log(timeConversion('05:15:55PM')) // 17:15:55
