import sys
from itertools import permutations
input = sys.stdin.readline

N = int(input())
arr = list(map(int, input().split()))

cases = list(permutations(arr))

answer = 0
for case in cases:
    mid_sum = 0
    for i in range(N - 1):
        mid_sum += abs(case[i] - case[i + 1])
    answer = max(mid_sum, answer)

print(answer)