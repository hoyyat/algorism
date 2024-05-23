function solution(k, score) {
    let answer = [];
    let temple = [];
    
    for (let i = 0;i < score.length;i++) {
        temple.push(score[i])
        temple.sort((a, b) => b - a)
        
        temple.length <= k ?
        answer.push(temple[temple.length - 1]) :
        answer.push(temple[k - 1])
    }
    return answer;
}