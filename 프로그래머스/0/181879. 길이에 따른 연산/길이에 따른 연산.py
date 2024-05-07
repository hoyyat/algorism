def solution(num_list):
    
    if len(num_list) >= 11:
        return sum(num_list)
    else:
        multi = 1
        for i in num_list:
            multi *= i
        return multi
            