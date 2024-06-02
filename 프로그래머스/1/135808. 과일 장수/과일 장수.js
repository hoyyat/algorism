function solution(k, m, score) {
    let result = []
    score.sort((a, b) => b - a)
    for (let i = 1; i <= score.length; i++) {
        if(i % m === 0) result.push(score[i-1] * m)
    }
    return result.reduce((acc, cur) => acc + cur, 0)
}