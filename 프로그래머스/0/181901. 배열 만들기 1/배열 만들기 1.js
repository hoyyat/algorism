function solution(n, k) {
    let answer = []
    c = parseInt(n/k)
    for(let i = 1; i <= c; i++){
        answer.push(k*i)
    }
    return answer;
}