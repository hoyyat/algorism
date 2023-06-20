const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n").map(Number);

const n = input.shift()

let stack = [];
let p = 0;
let answer = [];

for(let i = 0; i < input.length; i++) {
    
    while(p < input[i]) {
        p++;
        stack.push(p)
        answer.push("+");
    }

    if(stack[stack.length - 1] === input[i]){
        stack.pop()
        answer.push("-");
    } else {
        answer = ["NO"];
        break;
    }
}

console.log(answer.join("\n"))