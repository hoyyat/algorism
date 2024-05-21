function solution(s) {
    var answer = '';
    const number = {
        "zero": 0,
        "one": 1,
        "two": 2,
        "three": 3,
        "four": 4,
        "five": 5,
        "six": 6,
        "seven": 7,
        "eight": 8,
        "nine": 9
    }
    let temp = ''
    
    for (let i of s) {       
        if (isNaN(i)) {
            temp += i;
            if (temp in number) {
                answer += number[temp];
                temp = '';
            }
        } else {
            answer += i;
        }
    }
    return Number(answer);
}