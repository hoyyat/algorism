N = int(input())

a = []

for i in range(N):
    a.append(int(input()))

a.sort()

print(*a, sep='\n')