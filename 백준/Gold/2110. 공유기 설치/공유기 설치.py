# 2110 공유기 설치
import sys
input = sys.stdin.readline

# def router(homes):
#     start = 1
#     end = homes[-1] - home[0]
#     while start <= end:
def router(homes):
    start = 1
    end = homes[-1] - homes[0]
    while start <= end:
        mid = (start + end) // 2
        current = homes[0]
        cnt = 1

        for i in range(1, len(homes)):
            if homes[i] >= current + mid:
                cnt += 1
                current = homes[i]

        if cnt >= C:
            global answer
            start = mid + 1
            answer = mid
        else:
            end = mid - 1

#입력
N, C = map(int, input().split())
home = [int(input()) for _ in range(N)]
home.sort()
answer = 0
#출력
router(home)
print(answer)
