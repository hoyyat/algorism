const input = require('fs').readFileSync('example.txt').toString().split('\n');

console.log(input)

for (let i = 0; i < input.length; i++) {
    let line = input[i].split(" ");
    let cnt = 0;
    
    for (let j = 0; j < 4; j++){

        if (line[j] === "1") {
            cnt++;
        }
    }
    if (cnt === 0) {
        console.log("D")
    } else if (cnt === 3) {
        console.log("A")
    } else if (cnt === 2) {
        console.log("B")
    } else if (cnt === 1) {
        console.log("C")
    } else {
        console.log("E")
    }
}