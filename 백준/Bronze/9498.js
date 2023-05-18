const input = require("fs").readFileSync("example.txt").toString()

if (Number(input)>=90) {
    console.log("A")
} else if (Number(input)<=89 && Number(input)>=80) {
    console.log("B")
} else if (Number(input)<=79 && Number(input)>=70) {
    console.log("C")
} else if (Number(input)<=69 && Number(input)>=60) {
    console.log("D")
} else {
    console.log("F")
}