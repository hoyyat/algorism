import sys
input = sys.stdin.readline

N = int(input())
arr = []

for i in range(N):
    arr.append(input().rstrip('\n'))

set_arr = set(arr)
list_arr = list(set_arr)
list_arr.sort()
list_arr.sort(key=len)

for i in list_arr:
    print(i)