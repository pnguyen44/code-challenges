// 5 kyu - Convert string to camel case
//
// Complete the method/function so that it converts dash/underscore delimited words into camel casing. The first word within the output should be capitalized only if the original word was capitalized.
//
// Examples:
//
// // returns "theStealthWarrior"
// toCamelCase("the-stealth-warrior")
//
// // returns "TheStealthWarrior"
// toCamelCase("The_Stealth_Warrior")

function toCamelCase(str){
    return str.split(/-|_/g).map((e,i) => {
      return i === 0 ? e : e[0].toUpperCase() + e.slice(1)
    }).join('')
}

// alternative solution:
// function toCamelCase(str){
//   return str.replace(/[-_]\w/ig, x => x.charAt(1).toUpperCase())
// }
