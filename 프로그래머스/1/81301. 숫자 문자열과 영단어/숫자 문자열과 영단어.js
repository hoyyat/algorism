function solution(s) {
    var answer = '';
    const number = {
        0:'zero',
        1:'one',
        2:'two',
        3:'three',
        4:'four',
        5:'five',
        6:'six',
        7:'seven',
        8:'eight',
        9:'nine',
    }
    let temp = ''
    
    for (let i of s) {       
        if (isNaN(i)) {
            temp += i;
            if (Object.values(number).includes(temp)) {
                let key = Object.keys(number).find(key => number[key] === temp);
                if (key) {
                    answer += key;
                    temp = '';
                }
            }
        } else {
            answer += i;
        }
    }
    return Number(answer);
}