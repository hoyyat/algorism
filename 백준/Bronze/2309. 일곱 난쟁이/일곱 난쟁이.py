import sys
input = sys.stdin.readline

lst = []
[lst.append(int(input())) for i in range(9)]
lst_sum = sum(lst)
lst.sort()

for i in range(len(lst)):
    for j in range(i+1, len(lst)):
        if lst_sum - lst[i] - lst[j] == 100:
            for k in range(len(lst)):
                if k == i or k == j:
                    pass
                else:
                    print(lst[k])
            exit()