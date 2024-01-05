def solution(s, skip, index):
    alphabets = "abcdefghijklmnopqrstuvwxyz"
    new = ''

    for i in skip:
        alphabets = alphabets.replace(i, '')

    for j in s:
        if alphabets.index(j) + index <= alphabets.index(alphabets[-1]):
            new += alphabets[alphabets.index(j) + index]
        if alphabets.index(j) + index > alphabets.index(alphabets[-1]):
            new += alphabets[(alphabets.index(j) + index) % len(alphabets)]

    return new