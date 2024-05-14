function solution(a,b) {
    let cur = 0
    let c = Math.min(a,b);
    let d = Math.max(a,b);
    for(let i = c;i <= d;i++) {
        cur += i;
    }
    return cur;
}