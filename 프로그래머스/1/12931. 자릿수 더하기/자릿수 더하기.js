function solution(N) {
    return (N+"").split("").map(Number).reduce((acc, cur) => acc + cur, 0);
}