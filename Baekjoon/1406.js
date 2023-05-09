const input = require('fs').readFileSync('example.txt').toString().split('\n');

const lstack = input[0].split("");
const rstack = [];
let ak = "";

for(let i = 2; i < input.length; i++) {
    if (input[i].length === 3) {
        ak = input[i][2];
    }

    switch (input[i][0]) {
        case "L":
            if(lstack.length !== 0) rstack.push(lstack.pop());
            break;
        case "D":
            if(rstack.length !== 0) lstack.push(rstack.pop());
            break;
        case "B":
            if(lstack.length !== 0) lstack.pop();
            break;
        case "P":
            lstack.push(ak);
    }
}

const result = [...lstack, ...rstack.reverse()];
console.log(result.join(""));