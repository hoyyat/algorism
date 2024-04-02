# 백준 16564번 히오스 프로게이머
import sys
input = sys.stdin.readline

def game(levels):
    start = levels[0] + 1 # 목표레벨의 최소값
    end = levels[0] + K # 최대값

    while (start <= end):
        mid = (start + end) // 2
        total = 0
        for i in range(len(levels)):
            if levels[i] < mid:
                total += mid - levels[i]
        if total <= K:
            global answer
            start = mid + 1
            answer = mid
        if total > K:
            end = mid - 1

# 입력
N, K = map(int, input().split())
level = [int(input()) for i in range(N)]
level.sort()
answer = 0

# 출력 (목표레벨 T 값은?)
game(level)
print(answer)
