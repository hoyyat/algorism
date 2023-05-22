const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");

const cnt = +input.shift()

for (let i = 0; i < cnt; i++) {
    password(input[i].split(""))
}

function password(str) {
    let answer = [];
    let tmp = [];
    str.forEach(x => {
        switch(x) {
            case "<" :
                if (answer.length !== 0) tmp.push(answer.pop());
                break;
            case ">" :
                if (tmp.length !== 0) answer.push(tmp.pop());
                break;
            case "-" :
                answer.pop()
                break;
            default :
                answer.push(x)
        }
    })
    console.log(answer.join("") + tmp.reverse().join(""))
}