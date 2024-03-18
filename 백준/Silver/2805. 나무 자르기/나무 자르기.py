# import sys
# input = sys.stdin.readline
#
# # 리스트의 각원소를 H와 뻴셈한다. 그 후 그값들을 더해서 M인지 확인한다.
# # 맞으면 그 H값 출력
# # 아니면 다시 H를 +1 해서 값들을 더해본다. (반복)
#
# def cut_tree(trees, target):
#
#     answer = 0
#     H = 0
#
#     while True:
#         sum_trees = 0
#         for i in range(len(trees)):
#             if trees[i] - H > 0:
#                 sum_trees += trees[i] - H
#         if sum_trees >= target:
#             answer = max(answer, H)
#             H += 1
#         if sum_trees < target:
#             break
#
#     return answer
#
# # 입력
# N, M = map(int, input().split())
# tree = list(map(int, input().split()))
#
# # 출력
# print(cut_tree(tree, M))

# 시간초과 -> 이분탐색으로 다시 해보자

import sys
input = sys.stdin.readline

def cut_trees(trees, target):
    start = 0
    end = max(trees)

    while start <= end:
        sum_trees = 0
        mid = (end + start) // 2

        for tree in trees:
            if tree > mid:
                sum_trees += tree - mid
        if sum_trees < target:
            end = mid - 1
        if sum_trees >= target:
            start = mid + 1

    return end

# 입력
N, M = map(int, input().split())
tree = list(map(int, input().split()))

# 출력
print(cut_trees(tree, M))