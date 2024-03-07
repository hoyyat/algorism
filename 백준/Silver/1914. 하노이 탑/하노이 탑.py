def hanoi(N, start, temp, end):

    if N == 1:
        print(start, end)
        return

    if N <= 20:
        hanoi(N-1, start, end, temp)
        hanoi(1, start, temp, end)
        hanoi(N-1, temp, start, end)

N = int(input())
print(2**N-1)
hanoi(N, 1, 2, 3)