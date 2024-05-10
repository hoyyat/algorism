const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

let input = [];

rl.on("line", (line) => {
    input = line.split(' ')
}).on("close", () => {
    const n = Number(input[0]);
    let logStr = ''
    for(let i = 0 ; i < n; i++) {
        for(let j = 0 ; j <= i; j++) {
            logStr += '*'
        }
        logStr += '\n'
    }
    console.log(logStr)
});