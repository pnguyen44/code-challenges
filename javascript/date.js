// write a function that takes 2 string dates and return the differnce in days between the 2 dates.



function getDateDifference(d1,d2) {
  d1 = new Date(d1).getTime();
  d2 = new Date(d2).getTime();
  let result = (Math.abs(d1 - d2) / (1000 * 3600 * 24))
  console.log(result)
}

getDateDifference('12/01/2019','12/1/2018') // 365
