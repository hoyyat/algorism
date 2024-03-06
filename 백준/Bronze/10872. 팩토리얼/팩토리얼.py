N = int(input())

if not N == 0:
    for i in range(N-1):
        N = N * (i+1)
    print(N)
if N == 0:
    print("1")