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