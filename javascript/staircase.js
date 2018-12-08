//Staircase
// Consider a staircase of size n = 4 :
//
//    #
//   ##
//  ###
// ####
//
//
// Observe that its base and height are both equal to n, and the image is drawn using # symbols and spaces. The last line is not preceded by any spaces.
//
// Write a program that prints a staircase of size n.


function staircase(n) {
    let arr = []
    let s = 0
    for (let l = 1; l <= n; l++) {
        const space = n - l
        const hash = n - space

        for (s = 1; s <= space; s++) {
            arr.push(' ')
        }

        for (let h = 1; h <= hash; h++) {
            arr.push("#")

        }
        console.log(arr.join(''))
        arr = []
    }
}


console.log(staircase(6))
//      #
//     ##
//    ###
//   ####
//  #####
// ######
