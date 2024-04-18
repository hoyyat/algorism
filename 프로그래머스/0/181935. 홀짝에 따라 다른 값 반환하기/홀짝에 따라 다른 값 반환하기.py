def solution(n):
    answer = 0
    if n % 2 == 0:
        for i in range(n):
            if (i + 1) % 2 == 0:
                answer += int((i + 1)**2)
    else:
        for i in range(n):
            if (i + 1) % 2 == 1:
                answer += i + 1
    return answer