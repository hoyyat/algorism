const input = require('fs').readFileSync('/dev/stdin').toString().trim().split("\n").map(Number).sort((a,b)=>a-b);


const initalValue = 0;
const sumAll = input.reduce(
    (acc, cur) => acc + cur, initalValue
);

let arr1 = []
const subtract = sumAll - 100
for (let i = 0; i < 9; i++) {
    let a = subtract-input[i]
    if (input.includes(a)) {
        arr1.push(input[i])
        arr1.push(a)
        break;
    }
}


console.log(input.filter(x => !arr1.includes(x)).join("\n"))