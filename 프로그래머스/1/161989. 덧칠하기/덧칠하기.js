function solution(n, m, section) {
    let wall = new Array(n).fill(1);
    let cnt = 0;
    
    for (let i = 0; i < section.length; i++) {
        wall[section[i] - 1] = 0;
    }
    for (let i = 0; i < wall.length; i++) {
        if (wall[i] === 0) {
            cnt++;
            wall.splice(i, m, ...Array(m).fill(1))
        }
    }
    return cnt;
}