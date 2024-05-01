def solution(my_string):
    answer = ''
    arr = 'aeiou'
    for i in my_string:
        if i not in arr:
            answer += i
    return answer