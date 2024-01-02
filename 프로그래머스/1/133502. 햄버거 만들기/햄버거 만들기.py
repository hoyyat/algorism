def solution(ingredient):
    
    order = ''.join(map(str ,ingredient))
    cnt = 0
    while order:
        if '1231' in order:
            cnt += 1
            order = order.replace('1231', '', 1)
        else:
            break

    return cnt
