const input = require('fs').readFileSync('example.txt').toString().split(' ').map(Number).sort((a,b) => a-b)

console.log(...input)