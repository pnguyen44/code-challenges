// Given an array of dates, write a function that sort the dates.

function sorDates(dates) {
    dates.sort(function(a, b) {
      let date1 = new Date(a)
      let date2 = new Date(b)
      return date1 - date2
    });
    console.log(dates)
    return dates
}

let dates =
  [ '2017-06-25',
    '2017-07-07',
    '2017-06-18',
    '2017-07-04',
    '2017-07-01',
    '2017-06-28',
    '2017-06-26',
    '2017-06-19',
    '2017-06-23',
    '2017-06-21',
    '2017-06-20' ]

console.log(sorDates(dates))
// [ '2017-06-18',
//   '2017-06-19',
//   '2017-06-20',
//   '2017-06-21',
//   '2017-06-23',
//   '2017-06-25',
//   '2017-06-26',
//   '2017-06-28',
//   '2017-07-01',
//   '2017-07-04',
//   '2017-07-07' ]
