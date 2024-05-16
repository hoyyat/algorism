function solution(t, p) {
    let temp = []
    for(let i = 0;i < t.length - p.length + 1;i++) {
        temp.push(t.slice(i, i+p.length))
    }
    console.log(temp.filter(v => v <= p))
    return temp.filter(v => v <= p).length;
}