def solution(hp):
    return hp // 5 + (hp % 5) // 3 + (hp % 5) % 3

# hp // 5 -> 장군 개미 숫자
# (hp % 5) // 3 -> 병정개미 숫자
# ((hp % 5) % 3) // 1 -> 일개미 숫자