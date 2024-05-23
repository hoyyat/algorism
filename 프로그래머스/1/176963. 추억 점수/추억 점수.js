function solution(name, yearning, photo) {
    let score = {}
    let answer = Array(photo.length).fill(0)
    for (let i = 0;i < name.length;i++) {
        score[name[i]] = yearning[i];
    }
    for (let i = 0;i < photo.length;i++) {
        photo[i].map((v) => {
            if(score[v] !== undefined) {
                answer[i] += score[v];
            }
        })
    }
    return answer;
}