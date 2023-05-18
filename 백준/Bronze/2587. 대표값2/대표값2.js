const input = require('fs').readFileSync('/dev/stdin').toString().trim().split("\n").map(Number);

let sum = 0;

for(let i =0; i < input.length; i++) {
    sum += input[i]
}

console.log(sum/input.length)
input.sort()
let A = Math.floor(input.length/2)
console.log(input[A])