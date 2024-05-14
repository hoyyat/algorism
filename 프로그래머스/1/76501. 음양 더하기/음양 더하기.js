function solution(absolutes, signs) {
    let add = 0
    for(let i = 0;i < absolutes.length;i++) {
        if(signs[i]) {
            add += absolutes[i]
        } else {
            add -= absolutes[i]
        }
    }
    return add
}