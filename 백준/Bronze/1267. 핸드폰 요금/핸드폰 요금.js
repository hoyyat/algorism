const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");

const N = input[0] 
const arrTime = input[1].split(" ")
let YSFee = 0;
let MSFee = 0;

for(let i = 0; i < N; i++) {
    YSFee += 10 + (10 * parseInt(arrTime[i]/30))
    MSFee += 15 + (15 * parseInt(arrTime[i]/60))
}

if(YSFee < MSFee) console.log("Y",YSFee)
else if (YSFee === MSFee) console.log("Y M",YSFee)
else console.log("M",MSFee)