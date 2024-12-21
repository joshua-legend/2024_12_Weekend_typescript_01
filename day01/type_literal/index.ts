// 리터럴 타입
type Course = "리액트" | "자바" | "파이썬" | "C언어";
const Eclass: Course = "리액트";

type StatusCode = 200 | 404 | 500;
const getData = (code: StatusCode) => {
  if (code == 200) console.log("통과");
  else if (code == 404) console.log("클라 에러");
  else if (code == 500) console.log("서버 에러");
  else console.log("특수 에러");
};

// 맥도날드 세트 타입
// 메인메뉴: 빅맥, 치즈, 새우, 불고기, 상하이
// 서브메뉴: 감튀, 코우슬로, 치즈스틱,
// 음료메뉴: 콜라, 제로콜라, ...
type MainMenu = "빅맥" | "치즈버거" | "새우버거" | "불고기" | "상하이";
type SubMenu = "감자튀김" | "코우슬로" | "치즈스틱" | "너겟";
type DrinkMenu = "콜라" | "제로콜라" | "판타" | "오렌지주스" | "물";

type Macdonald = {
  main: MainMenu;
  sub: SubMenu;
  drink: DrinkMenu;
};

type MakeSet = (main: MainMenu, sub: SubMenu, drink: DrinkMenu) => Macdonald;

const order: MakeSet = (main, sub, drink) => {
  return { main, sub, drink };
};

const myOrder = order("빅맥", "감자튀김", "물");
const yourOrder = order("불고기", "감자튀김", "콜라");

// 빵, 치즈, 야채, 소스

type Bread = "플랫브래드" | "허니오트" | "파마산 오레가노" | "화이트" | "휘트";
type Cheese = "슈레드" | "모짜렐라" | "체다치즈";
type Vegitable =
  | "토마토"
  | "양상추"
  | "오이"
  | "피클"
  | "올리브"
  | "할라피뇨"
  | "양파";
type Source =
  | "렌치"
  | "스위트어니언"
  | "스위트 칠리"
  | "바비큐"
  | "머스타드"
  | "허니 머스타드";

type Sandwich = {
  bread: Bread;
  cheese: Cheese;
  vegitable: Vegitable[];
  Source: Source[];
};

const orderSubway = (
  bread: Bread,
  cheese: Cheese,
  vegitable: Vegitable[],
  source: Source[]
) => {
  return { bread, cheese, vegitable, source };
};

const myOrder1 = orderSubway(
  "파마산 오레가노",
  "모짜렐라",
  ["양상추", "양파", "오이"],
  ["렌치", "머스타드"]
);
