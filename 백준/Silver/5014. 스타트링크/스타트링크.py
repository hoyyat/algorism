from collections import deque

F, S, G, U, D = map(int, input().split())
# F = 총 층수 / S = 현재위치 / G = 목적지 / U = 위 / D = 아래
# U D 만큼 움직여서 최소한 몇번만에 가야하냐 구하기

visited = [0 for i in range(F + 1)]

q = deque()
q.append(S)
visited[S] = 1

def bfs():

    while q:
        x = q.popleft()
        if x == G:
            print(visited[x]-1)
        for i in (x+U,x-D):
            if 0 < i <= F and not visited[i]:
                visited[i] = visited[x] + 1
                q.append(i)
    if visited[G] == 0:
        print('use the stairs')
bfs()