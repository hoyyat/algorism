const input = require('fs').readFileSync('example.txt').toString().split(' ');
const A = Number(input[0])
const B = Number(input[1])
console.log(A+B)