const input = require('fs').readFileSync('/dev/stdin').toString().trim().split("\n").map(Number);

let arr1 = []
let sum = 0;

for (let i = 0; i < input.length; i ++) {
    if (input[i]%2 !== 0) {
        sum += input[i];
        arr1.push(input[i]);
    }
}

if (sum != 0) {
    console.log(sum)
    console.log(Math.min(...arr1))
} else {
    console.log("-1")
}