// 문자 타입 만들기
const movie: string = "10";

// 숫자 타입 만들기
const num: number = 10;

// 불리언 타입 만들기
const isDark: boolean = true;

const coffees: string[] = ["아메리카노", "라떼"];
const coffees1: Array<string> = ["디카페인", "고구마라떼"];

// 숫자 배열 타입
const num1: number[] = [1, 2, 3, 4, 5];

// 불리언 배열 타입
const isTitles: boolean[] = [true, false, false];

// 오브젝트
const student: { name: string; age: number } = {
  name: "제발나와",
  age: 23,
};

// latte 오브젝트 shots, kcal, ingredients
const latte: { shot: number; kcal: number; ingredients: string[] } = {
  shot: 2,
  kcal: 400,
  ingredients: ["우유", "커피"],
};

// car 오브젝트 배열
// name, model, engine {name,model,power}

const car: {
  name: string;
  model: string;
  engine: { name: string; model: string; power: number };
}[] = [
  {
    name: "테슬라",
    model: "Y",
    engine: { name: "ABC", model: "K1", power: 100 },
  },
  {
    name: "니로",
    model: "제발나와",
    engine: { name: "현강제발", model: "나와주세요", power: 500 },
  },
];
// 도너츠 오브젝트 배열
// 이름, 칼로리, 성분 오브젝트 배열{name,함량}
const donuts: {
  name: string;
  kcal: number;
  ingredient: { name: string; containment: number }[];
}[] = [
  {
    name: "바바리안",
    kcal: 300,
    ingredient: [
      { name: "밀가루", containment: 30 },
      { name: "딸기쨈", containment: 40 },
    ],
  },
  {
    name: "코코넛",
    kcal: 300,
    ingredient: [
      { name: "밀가루", containment: 30 },
      { name: "코코넛", containment: 50 },
    ],
  },
];
