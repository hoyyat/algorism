const input = require("fs").readFileSync("/dev/stdin").toString().trim().split(" ").map(Number);

let a = input[0]
let b = input[1]
let arr = []

if (a <= b) {
    while (a < b-1) {
        a++;
        arr.push(a)
    }
} else  {
    while (b < a-1) {
        b++;
        arr.push(b)
    }
}

arr.sort((x,y) => x-y)
console.log(arr.length)
console.log(...arr)

// 예외처리 : 1. a,b 가 같을때 2. a,b가 1차이 날떄 3. b가 a보다 클때