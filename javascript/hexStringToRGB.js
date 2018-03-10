// 5 kyu - Convert A Hex String To RGB
//
// When working with color values in JavaScript it can sometimes be useful to extract the individual red, green, and blue (RGB) component values for a color. Implement a hexStringToRGB() function that meets these requirements:
//
// Accepts a case-insensitive hexadecimal color string as its parameter (ex. "#FF9933" or "#ff9933")
// Returns an object with the structure {r:255, g:153, b:51} where r, g, and b range from 0 through 255
// Note, your implementation does not need to support the shorthand form of hexadecimal notation (ie "#FFF").
//
// Example
// hexStringToRGB("#FF9933") // returns {r:255, g:153, b:51}

function hexStringToRGB(hexString) {
  return {
    r: parseInt(hexString.slice(1,3), 16),
    g: parseInt(hexString.slice(3,5), 16),
    b: parseInt(hexString.slice(5,7), 16)
  }
}

// Alternative Solution:
//
// function hexStringToRGB(hexString) {
//   let dec = []
//   hexString = hexString.split('').map((e, i) =>  isNaN(e) ? e.toUpperCase().charCodeAt(0) - 55 : e)
//
//   hexString.forEach( (e,i) => {
//     if (i > 0 && i % 2 === 0 ) {
//       dec.push( Number(hexString[i-1] * 16) + Number(hexString[i]))
//     }
//    })
//    return {
//      r: dec[0],
//      g: dec[1],
//      b: dec[2]
//    }
// }
