// 6 kyu Kebabize
// Modify the kebabize function so that it converts a camel case string into a kebab case.
//
// kebabize('camelsHaveThreeHumps') // camels-have-three-humps
// kebabize('camelsHave3Humps') // camels-have-humps

function kebabize(str) {
 let answer = []
 str = str.replace(/\d/g, '')
 str = str[0].toLowerCase() + str.slice(1,str.length)
 str = str.split('')

 for (let i = 0; i < str.length; i++) {
     if (str[i] ===   str[i].toUpperCase()) {
       answer.push(' ' + str[i].toLowerCase())
     } else {
       answer.push(str[i])
     }
 }

 return answer.join('').split(' ').join('-')
}

// alternative solutions
// function kebabize(str) {
//   return str.replace(/[^a-z]/ig, '').
//          replace(/^[A-Z]/, c => c.toLowerCase()).
//          replace(/[A-Z]/g, c => `-${c.toLowerCase()}`);
// }
//
// function kebabize(str) {
//
//   var nonumber = str.replace(/\d/g, '').split(/(?=[A-Z])/g);
//   return nonumber.join('-').toLowerCase();
//
// }
