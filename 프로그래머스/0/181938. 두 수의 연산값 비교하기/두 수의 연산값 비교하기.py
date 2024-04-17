def solution(a, b):
    answer = ''
    ab = int(str(a) + str(b))
    
    if ab < 2*int(a*b):
        return 2*int(a*b)
    else:
        return ab