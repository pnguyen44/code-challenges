// A binary gap within a positive integer N is any maximal sequence of consecutive zeros that is surrounded by ones at both ends in the binary representation of N.
//
// For example, number 9 has binary representation 1001 and contains a binary gap of length 2. The number 529 has binary representation 1000010001 and
// contains two binary gaps: one of length 4 and one of length 3. The number 20 has binary representation 10100 and contains one binary gap of length 1. The number 15 has binary representation 1111 and has no binary gaps. The number 32 has binary representation 100000 and has no binary gaps.



function solution(N) {
    let bin = ""

    while(N > 0) {
        bin += N % 2
        N = Math.trunc(N/2)
    }
    bin = bin.split('').reverse().join('').toString()
    let count = 0
    let ans = 0
    for (let digit of bin) {
        if (digit === "0") {
            count += 1
        } else {
            ans = Math.max(ans,count)
            count = 0
        }
    }
    return ans
}


// console.log(solution(  32 )) // 0
// console.log(solution(  1041 )) // 5
console.log(solution(  561892 )) // 3
