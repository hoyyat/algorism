def solution(a, b):
    answer = ''
    ab = int(str(a)+str(b))
    ba = int(str(b)+str(a))
    if ab < ba:
        return ba
    else:
        return ab