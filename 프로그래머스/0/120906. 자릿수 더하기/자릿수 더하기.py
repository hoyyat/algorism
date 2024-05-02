def solution(n):
    answer = 0
    arr = str(n)
    for i in arr:
        answer += int(i)
    return answer