def solution(my_string, s, e):
    temp = my_string[s:e+1][::-1]
    return my_string[:s] + temp + my_string[e+1:]