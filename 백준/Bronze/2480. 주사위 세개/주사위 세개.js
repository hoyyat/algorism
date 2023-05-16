const input = require("fs").readFileSync("/dev/stdin").toString().split(" ");

const a = Number(input[0])
const b = Number(input[1])
const c = Number(input[2])

if((a === b) && (a === c)) {
    console.log(10000 +  (a * 1000 ))
} else if (a === b || a === c || b === c) {
    if (a === b) {
        console.log(1000 + (a * 100))
    } else if (a === c) {
        console.log(1000 + (a * 100))
    } else if (b === c) {
        console.log(1000 + (b * 100))
    }
} else {
    const A = input.sort((a,b) => a-b)[2]
    console.log(Number(A) * 100)
}