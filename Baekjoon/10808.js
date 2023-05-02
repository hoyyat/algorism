const S = require('fs').readFileSync('example.txt').toString().split("")

const alphabet = "abcdefghijklmnopqrstuvwxyz";
const counts = new Array(26).fill(0);

S.forEach(i => counts[alphabet.indexOf(i)]);

console.log(counts.join(" "))