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

// const input = require('fs').readFileSync('example.txt').toString().split('\n');

// console.log(input)

// for (let i = 0; i < input.length; i++) {
//     let line = input[i].split(" ");
//     let cnt = 0;
    
//     for (let j = 0; j < 4; j++){

//         if (line[j] === "1") {
//             cnt++;
//         }
//     }
//     if (cnt === 0) {
//         console.log("D")
//     } else if (cnt === 3) {
//         console.log("A")
//     } else if (cnt === 2) {
//         console.log("B")
//     } else if (cnt === 1) {
//         console.log("C")
//     } else {
//         console.log("E")
//     }
// }

// trim() 을 쓰는 이유 일부 입력값의 마지막에 개행문자가 포함된 경우가 종종 있다. 이런 경우 split("\n")할 경우 공백문자를 하나 더 갖는 배열을
// 반환한다. 이를 방지하기 위해서 사용