import sys

N = int(sys.stdin.readline())

temp = []

for i in range(N):
    temp.append(int(sys.stdin.readline()))

for i in sorted(temp, reverse=False):
    print(i)