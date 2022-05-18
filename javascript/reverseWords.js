// 6 kyu - Reverse words
//
// Write a reverseWords function that accepts a string a parameter, and reverses each word in the string. Any spaces in the string should be retained.
//
// Example:
//
// reverseWords("This is an example!"); // returns  "sihT si na !elpmaxe"
// reverseWords("double  spaces"); // returns  "elbuod  secaps"

// function reverseWords(str) {
//   return str.split(' ').map(x => x.split('').reverse().join('')).join(' ')
// }

// recursive solution
function reverseWords(str) {
  const reverseString = (str) => {
    return str ? reverseString(str.substr(1)) + str[0] : str;
  };

  return str.split(" ").map(reverseString).join(" ");
}

const cases = [
  {
    str: "This is an example!",
    want: "sihT si na !elpmaxe",
  },
  {
    str: "double  spaces",
    want: "elbuod  secaps",
  },
];

for (const c of cases) {
  const { str, want } = c;
  const result = reverseWords(str);

  if (want !== result) {
    console.log("failed on input", str, "excepted", want, "got", result);
  }
}
