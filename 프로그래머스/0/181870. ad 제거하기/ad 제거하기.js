function solution(strArr) {
    for(let i = 0; i<strArr.length; i++){
        if(strArr[i].includes('ad')) {
            return strArr.filter((v) => !v.includes('ad'))
        }
    }
    return strArr
}