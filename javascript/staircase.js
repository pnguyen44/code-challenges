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
    // var n = parseInt(readLine());
    var arr = []
    var s = 0
    var space = 0
    var hash = 0
    for(let l=1; l<=n; l++){
       space = n - l
        hash = n - space

        for(s=1; s<=space; s++){
            arr.push(' ')
        }

          for(let h=1; h<=hash; h++){
             arr.push("#")

          }


                // console.log(arr)

            // arr.push(space)
    // arr.push(hash)
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
