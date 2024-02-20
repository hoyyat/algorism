from collections import deque

M, N, K = map(int, input().split())

graph = [[0] * N for i in range(M)]

for _ in range(K):
    x1, y1, x2, y2 = map(int, input().split())
    for i in range(y1, y2):
        for j in range(x1, x2):
            graph[i][j] = 1

dx = [0, 0, -1, 1]
dy = [1, -1, 0, 0]


def bfs(row, column):
    q = deque()
    q.append((row, column))
    cnt = 1

    while q:
        row, column = q.popleft()
        graph[row][column] = 1

        for i in range(4):
            nr = row + dx[i]
            nc = column + dy[i]

            if 0 > nr or M <= nr or nc < 0 or nc >= N:
                continue

            if graph[nr][nc] == 0:
                graph[nr][nc] = 1
                cnt += 1
                q.append((nr, nc))

    return cnt


array = []
for i in range(M):
    for j in range(N):
        if graph[i][j] == 0:
            array.append(bfs(i, j))

print(len(array))
print(*sorted(array), sep=" ")
