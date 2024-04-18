def solution(a, d, included):
    result = 0
    arr = []
    arr.append(a)
    
    for i in range(1, len(included)+1):
        arr.append(a+(i*d))
        
    for i in range(len(included)):
        if included[i]:
            result += arr[i]
            
    return result