function solution(wallpaper) {
    let startPoint = [];
    let lastPoint = [];
    
    for (let i = 0; i < wallpaper.length; i++) {
        for (let j = 0; j < wallpaper[0].length; j++) {
            if (wallpaper[i][j] === '#') {
                if (startPoint[0] === undefined || startPoint[0] > i) {
                    startPoint = [i, startPoint[1]]
                }
                if (startPoint[1] === undefined || startPoint[1] > j) {
                    startPoint = [startPoint[0], j]
                }
                break;
            }
        }
    }
    
    for (let i = wallpaper.length; i > 0; i--) {
        for (let j = wallpaper[0].length; j > 0; j--) {
            if (wallpaper[i - 1][j - 1] === '#') {
                if (lastPoint[0] === undefined || lastPoint[0] < i) {
                    lastPoint = [i, lastPoint[1]]
                }
                if (lastPoint[1] === undefined || lastPoint[1] < j) {
                    lastPoint = [lastPoint[0], j]
                }
                break;
            }
        }
    }
    return [...startPoint, ...lastPoint]
}