function solution(s) {
    let arr = s.split("").sort((a,b) => b.localeCompare(a))
    let up = []
    let low = []
    for(let i = 0; i < arr.length;i++) {
        arr[i] === arr[i].toLowerCase() ? low.push(arr[i]) : up.push(arr[i])
    }
    return low.join("") + up.join("")
}