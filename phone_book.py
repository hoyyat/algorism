# 프로그래머스 코딩테스트 연습 > 해시 > 전화번호 목록
def solution(phone_book):
    answer = True
    # 리스트를 정렬, 앞과뒤 요소를 비교
    phone_book.sort()
    # 정렬한 리스트의 앞의 요소와 뒷 요소를 비교하여 값 반환
    for i in range(len(phone_book)-1):
        if phone_book[i] in phone_book[i+1][:len(phone_book[i])]:
            return False
    return answer