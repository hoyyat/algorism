const input = require('fs').readFileSync('example.txt').toString().split('\n')

const stack = []
const result = []

for (let i = 1; i < input.length; i++){
    switch (input[i].split(" ")[0]) {
        case "push":
            stack.push(input[i].split(" ")[1])
            break;
        case "pop":
            if (stack.length !== 0){
                result.push(stack.pop());
            } else {
                result.push("-1");
            }
            break;
        case "size":
            result.push(stack.length)
            break;
        case "empty":
            if (stack.length === 0) {
                result.push("1")
            } else {
                result.push("0")
            }
            break;
        case "top":
            if (stack.length !== 0){
                result.push(stack[stack.length - 1])
            } else {
                result.push("-1")
            }
            break;
    }
}

console.log(result.join("\n"))