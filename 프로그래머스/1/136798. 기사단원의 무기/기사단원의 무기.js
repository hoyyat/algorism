const divisor = (n) => {
    let result = [];
    let index = 1;
    
    for (let i = 1; i * i <= n; i++){
        if(n % i === 0) {
            result.push(i)
            if(n / i !== i) {
                result.push(n/i)
            }
        }
    }
    return result.length;
}

const solution = (number, limit, power) => {
    let arr = [];
    let result = 0;
    
    for (let i = 1; i <= number; i++) {
        arr.push(divisor(i));
    }
    
    for (let i = 0; i < arr.length; i++) {
        arr[i] <= limit ? result += arr[i] : result += power;
    }
    return result;
}