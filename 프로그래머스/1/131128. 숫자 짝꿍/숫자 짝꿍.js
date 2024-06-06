function solution(X, Y) {
    let answer = '';
    let dup = [];
    let number1 = new Array(10).fill(0);
    let number2 = new Array(10).fill(0);
    
    if (X === 0 && Y === 0) return String(0);
    
    for (let i = 0; i < X.length; i++) {
        number1[X[i]] += 1;
    }
    for (let i = 0; i < Y.length; i++) {
        number2[Y[i]] += 1;
    }
    
    for (let i = 0; i < 10; i++) {
        if (number1[i] !== 0 && number2[i] !== 0) {
            if (number1[i] > number2[i]) {
                for (let j = 0; j < number2[i]; j++) {
                    dup.push(i)
                }
            } else {
                for (let j = 0; j < number1[i]; j++) {
                    dup.push(i)
                }
            }
        }
    }
    dup.sort((a,b) => b - a);
    
    if (dup.length === 0) return String(-1);
    if (dup[0] === 0) return String(0);
    for (let i = 0; i < dup.length; i++) {
        answer += dup[i];
    }
    return answer;
}

// 주어진 수의 임의의 자리에서 공통으로 나타나는 정수k들을 이용하여 만들 수 있는 가장큰 수 -> 짝꿍(짝지을 수 있는 숫자만 사용)
// 짝궁이 존재하지 않으면 -1 리턴, 주어진 수가 둘다 0이면 짝꿍은 0