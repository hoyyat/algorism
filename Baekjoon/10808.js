const S = require('fs').readFileSync('example.txt').toString().split("")

const alphabet = "abcdefghijklmnopqrstuvwxyz";
const counts = new Array(26).fill(0);
// Array() 생성자
// - 새로운 Array 객체를 생성할 때 사용.
// - 베열은 리터럴 표기법으로도 생성가능. []
// arr.fill() 
// - 배열을 같은 값으로 채우기. start index 와 end index도 설정 가능하다.
S.forEach(i => counts[alphabet.indexOf(i)]++);
// arr.foreach()
// - 주어진 callback을 배열에 있는 각 요소에 대해 오름차순으로 한번씩 실행.

console.log(counts.join(" "))