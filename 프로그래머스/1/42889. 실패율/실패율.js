function solution(N, stages) {
    // 각 스테이지 클리어중인 사람 수
    let round = new Array(N + 1).fill(0);
    let failRate = [];
    
    // 각 스테이지에 도달한 사람 수
    for (let i = 0; i < stages.length; i++) {
        round[stages[i] - 1] += 1;
    }
    
    let playersRemaining = stages.length; // 도전 중인 사람 수
    
    for (let i = 0; i < N; i++) {
        let rate = round [i] / stages.length;
        if (i === 0) {
            failRate.push({ stage: 1, failRate: rate});
            stages.length -= round[0];
        } else {
            failRate.push({ stage: i + 1, failRate: rate});
            stages.length -= round[i];
        }
    }
    
    failRate.sort((a, b) => b.failRate - a.failRate || a.stage - b.stage)
    
    let sortedResult = failRate.map(item => item.stage);
    
    return sortedResult;
}