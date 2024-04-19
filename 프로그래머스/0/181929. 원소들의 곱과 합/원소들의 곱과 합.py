def solution(num_list):
    sumi = 0
    muli = 1
    for i in num_list:
        muli *= i
        sumi += i
    if muli < sumi**2:
        return 1
    elif muli > sumi**2:
        return 0