const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n").map(Number);

const k = input.shift()

let answer = [];

for (let i = 0; i < k; i++) {
    if (input[i] === 0) {
        answer.pop()
    } else {
        answer.push(input[i])
    }
}

console.log(answer.reduce((a,b) => a+b, 0))