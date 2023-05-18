const input = require("fs").readFileSync("example.txt").toString().split(' ')

const A = Number(input[0])
const B = Number(input[1])

const sum = A + B
const dif = A - B
const mul = A * B
const div = parseInt(A / B)
const rem = A % B

console.log(sum)
console.log(dif)
console.log(mul)
console.log(div)
console.log(rem)