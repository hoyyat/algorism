const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("");

const set = "0123456789".split("")
const cnt = new Array(10).fill(0);

input.forEach(x => cnt[set.indexOf(x)]++);

cnt[9] = Math.ceil((cnt[6]+cnt[9])/2)
cnt[6] = 0

console.log(cnt.sort().pop())