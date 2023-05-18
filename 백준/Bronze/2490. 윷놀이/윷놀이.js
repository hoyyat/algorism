const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

let answer = "";

for (let i = 0; i < input.length; i++) {
    let line = input[i].split(" ");
    let cnt = 0;
    
    for (let j = 0; j < 4; j++){
        
        if (line[j] === "1") {
            cnt++;
        }
    }
    if (cnt === 0) {
        answer += "D";
    } else if (cnt === 3) {
        answer += "A";
    } else if (cnt === 2) {
        answer += "B";
    } else if (cnt === 1) {
        answer += "C";
    } else {
        answer += "E";
    }

    if(i!=input.length-1) {
        answer += "\n";
    } else {
       console.log(answer); 
    }
}