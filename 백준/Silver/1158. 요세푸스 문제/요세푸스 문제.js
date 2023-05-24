const input = require("fs").readFileSync("/dev/stdin").toString().trim().split(" ").map(Number);

const people = input[0]
const remove = input[1];

let arr = new Array(people).fill().map((v, i) => i+1);

let answer = [];

for (let i = 0; i < people; i++) {
    for (let j = 1; j <= remove; j++) {
        if (j === remove) {
            answer.push(arr.shift());
        } else {
            arr.push(arr.shift())
        }
    } 
}

answer = "<" + answer.join(", ") + ">"

console.log(answer)