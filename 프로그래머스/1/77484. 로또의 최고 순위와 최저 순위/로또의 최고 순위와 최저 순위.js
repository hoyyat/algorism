function solution(lottos, win_nums) {
    const rate = {
        '6': 1,
        '5': 2,
        '4': 3,
        '3': 4,
        '2': 5,
        '1': 6,
        '0': 6,
    }
    
    let winResult = win_nums.filter(v => lottos.includes(v)).length + lottos.filter(v => v === 0).length
    let roseResult = win_nums.filter(v => lottos.includes(v)).length
    
    let result = [rate[winResult], rate[roseResult]]

    return result;
}