const coffee: string = "아메리카노";
const isFemale: boolean = true;
const cookie: string[] = ["화이트쿠키", "초코쿠키"];
const student: { name: string; age: number } = {
  name: "김자바",
  age: 23,
};
const menu: { name: string; kcal: number }[] = [
  { name: "피자", kcal: 500 },
  { name: "파스타", kcal: 300 },
];

const add = (x: number, y: number): number => x + y;
const change = (x: number | string) => x.toString();

type Person = { name: string; age: number; gender: "남성" | "여성" };
type PartTime = { wage: number; grade: "알바생" | "매니저" | "슈퍼매니저" };

const kim: Person & PartTime = {
  name: "김",
  age: 22,
  gender: "남성",
  grade: "알바생",
  wage: 10000,
};

type Wrapper<T> = {
  value: T;
};

const test: Wrapper<number> = {
  value: 10,
};

const test1: Wrapper<string> = {
  value: "당근",
};
