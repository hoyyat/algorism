function solution(k, m, score) {
    // 점수 내림차순 정렬
    score.sort((a, b) => b - a);
    
    // 누적 결과 저장할 변수 선언
    let total = 0;
    
    for (let i = 1; i <= score.length; i++) {
        if(i % m === 0) total += score[i-1] * m;
    }
    return total;
}