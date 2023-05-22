const input = require("fs").readFileSync("example.txt").toString().trim().split("\n");

const columnLength = input[0]
const column = input[1].split(" ").map(v => +v).sort((a, b) => a - b)
const sum = +input[2]

let start = 0;
let end = columnLength - 1
let cnt = 0;


while (start != end) {
    if (column[start] + column[end] === sum) {
        cnt++;
        start++;
    } else if (column[start] + column[end] > sum) {
        end--;
    } else {
        start++;
    }
}


console.log(cnt)