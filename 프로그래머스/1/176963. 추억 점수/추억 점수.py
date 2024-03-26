def solution(name, yearning, photo):
    answer = []
    dict_name = dict(zip(name, yearning))

    for i in range(len(photo)):
        sum_ = 0
        for j in photo[i]:
            # sum_ += dict_name[i][j]
            # print(sum_)
            if j in name:
                sum_ += dict_name[f"{j}"]
        answer.append(sum_)
    return answer