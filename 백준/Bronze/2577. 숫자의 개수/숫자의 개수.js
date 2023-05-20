const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");

const A = input[0]
const B = input[1]
const C = input[2]
const sum = (A * B * C).toString()
const Number = "0123456789"
const cnt = new Array(10).fill(0)

sum.split("").forEach(i => cnt[Number.indexOf(i)]++);

// arr.push(sum.indexOf(Number))
console.log(cnt.join("\n"))