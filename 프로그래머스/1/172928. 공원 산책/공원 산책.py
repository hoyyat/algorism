def solution(park, routes):

    # 시작위치찾기
    row, col = 0, 0
    w, h = len(park[0]), len(park)
    for i in range(len(park)):
        for j in range(len(park[i])):
            if park[i][j] == 'S':
                row = i
                col = j
                break

    # 이동
    for i in range(len(routes)):
        direction = routes[i].split()[0]
        distance = int(routes[i].split()[1])
        nr, nc = row, col

        for j in range(distance):
            if direction == 'N' and nr != 0 and park[nr-1][nc] != 'X':
                nr -= 1
                if j == distance - 1:
                    row = nr
            elif direction == "S" and nr != w - 1 and park[nr+1][nc] != 'X':
                nr += 1
                if j == distance - 1:
                    row = nr
            elif direction == "E" and nc != h -1  and park[nr][nc+1] != 'X':
                nc += 1
                if j == distance - 1:
                    col = nc
            elif direction == "W" and nc != 0 and park[nr][nc-1] != 'X':
                nc -= 1
                if j == distance - 1:
                    col = nc
            else:
                break

    return [row, col]