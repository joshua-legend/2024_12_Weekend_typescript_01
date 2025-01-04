// while 멈추는 방법 1
let a = 1;
while (a < 10) {
  console.log(a);
  a++;
}

// while 멈추는 방법 2
let b = 1;
while (true) {
  console.log(b);
  b++;
  const input = prompt("끝내고 싶으면 exit 입력:");
  if (input == "exit") break;
}

//for vs while
// for문은 개발자가 끝을 정할때
// while문은 유저가 끝을 정할때
