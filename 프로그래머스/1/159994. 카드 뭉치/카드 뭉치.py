def solution(cards1, cards2, goal):
    
    s = []
    for i in goal:
        if cards1:
            if i == cards1[0]:
                s.append(i)
                cards1.pop(0) 
        if cards2:
            if i == cards2[0]:
                s.append(i)
                cards2.pop(0)
    if goal == s:
        return 'Yes'
    else:
        return 'No'