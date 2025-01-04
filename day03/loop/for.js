// 조건에 따른 코드실행 - 조건문[if,switch,obj]
// 여러번 반복되는 코드실행 - 반복문[for, while]
// [].forEach, map, filter

for (let i = 0; i < 5; i++) {
  console.log(i);
}

//1. for문 사용해서 0~100 까지 출력
for (let i = 0; i <= 100; i++) {
  console.log(i);
}

//2. for문 사용해서 0~100 까지 짝수만 출력
for (let i = 0; i <= 100; i++) {
  if (i % 2 == 0) console.log(i);
}

//3. Array사용해서 둘다 만들기
Array(101)
  .fill(0)
  .map((v, i) => i)
  .forEach((v) => console.log(v));
Array(101)
  .fill(0)
  .map((v, i) => i)
  .filter((v) => v % 2 == 0)
  .forEach((v) => console.log(v));

//const는 변수 바뀌기기 불가능
const a = 1;
a = 3;

const a1 = { a: 2 };
a1.a = 10;

//let은 변수 바뀌기기 가능
let b = 2;
b = 3;
