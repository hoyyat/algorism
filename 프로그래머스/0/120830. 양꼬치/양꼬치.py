def solution(n, k):
    a = int(n) // 10
    if int(k) >=a:
        return 12000*n + 2000*(k-a)
    else:
        return 12000*n