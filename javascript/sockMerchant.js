
// Sock Merchant


// John works at a clothing store. He has a large pile of socks that he must pair by color for sale. Given an array of integers representing the color of each sock, determine how many pairs of socks with matching colors there are.
//
//
// Complete the sockMerchant function in the editor below. It must return an integer representing the number of matching pairs of socks that are available.
//
// sockMerchant has the following parameter(s):
//
// n: the number of socks in the pile
// ar: the colors of each sock

function sockMerchant(n, ar) {
    let color = []
    let numOfPairs = 0
    for (let i = 0; i < n; i++) {
        if (!color.includes(ar[i])) {
          const counts = ar.filter(x => x === ar[i]).length
          const pairsCount = Math.floor(counts/2)
          console.log('pairs', pairsCount)
          if (pairsCount > 0 ) {
            numOfPairs+= pairsCount
            color.push(ar[i])
          }
        }
    }
    return numOfPairs
}


console.log(sockMerchant( 9, [10, 20, 20, 10, 10, 30, 50, 10, 20])) // 3
