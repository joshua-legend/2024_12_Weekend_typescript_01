const add = (x: number, y: number): number => {
  return x + y;
};

// 곱하기 함수
const multiply = (x: number, y: number): number => x * y;
multiply(123, 123);

// 어떤 숫자를 입력하면 홀수면 콜라 짝수면 사이다가 나오는 함수를 정의
const some = (num: number): string => (num % 2 ? "사이다" : "콜라");

// 어떤 문자가 들어가면 빈문자면 false, 아니면 true가 나오는 함수를 정의
const isEmptyStr = (str: string): boolean => !!str;

const printMsg = (str: string): void => {
  console.log(`${str} 출력!`);
};

const callName = (first: string, last?: string) => {
  console.log(`${first}성 ${last}이름`);
};

const callName1 = (first: string, last: string = "Guest") => {
  console.log(`${first}성 ${last}이름`);
};

callName("김");
callName("이", "순신");
