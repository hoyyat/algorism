function solution(s) {
    return [...s].sort((a,b) => {
        if(a > b) return -1;
        if(b > a) return 1;
        return 0
        // return 0
    }).join("")
}