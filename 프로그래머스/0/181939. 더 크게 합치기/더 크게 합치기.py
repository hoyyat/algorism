def solution(a, b):
    answer = ''
    ab = int(str(a)+str(b))
    ba = int(str(b)+str(a))
    if ab < ba:
        answer += str(ba)
    else:
        answer += str(ab)
    return  int(answer)