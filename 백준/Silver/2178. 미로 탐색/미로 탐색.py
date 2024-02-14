from collections import deque

n, m = map(int, input().split())
graph = []

for i in range(n):
    graph.append(list(map(int, list(input()))))

dx = [0, 0, 1, -1]
dy = [1, -1, 0, 0]

def bfs(a, b):
    q = deque()
    q.append((a, b))

    while q:
        x, y = q.popleft()
        for i in range(4):
            nx = x + dx[i]
            ny = y + dy[i]
            if nx < 0 or nx >= n or ny < 0 or ny >= m:
                continue
            if graph[nx][ny] == 1:
                q.append((nx, ny))
                graph[nx][ny] = graph[x][y] + 1

bfs(0, 0)
print(graph[n-1][m-1])