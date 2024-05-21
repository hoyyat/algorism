function solution(s, n) {
    let answer = '';
    const upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lower = 'abcdefghijklmnopqrstuvwxyz';
    
    for (let letter of s) {
        if (letter === ' ') {
            answer += ' ';
        } else if (upper.includes(letter)) {
            let index = upper.indexOf(letter);
            answer += upper[(index + n) % 26];
        } else if (lower.includes(letter)) {
            let index = lower.indexOf(letter);
            answer += lower[(index + n) % 26];
        }
    }
    return answer;
}