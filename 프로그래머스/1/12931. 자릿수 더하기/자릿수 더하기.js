function solution(N) {
    const arr = N.toString().split('')
    return arr.map(Number).reduce((acc, cur) => acc + cur, 0);
}