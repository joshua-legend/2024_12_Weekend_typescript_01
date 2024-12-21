// 유니언 연산자(|): 또는 or
const nickname: string | number = "123";

// 문자 or 문자 배열
const str: string | string[] = ["감자", "고구마"];

// 오브젝트 or 불리언
const obj: {} | boolean = {};

// 비행기 오브젝트 {항공사이름,비행기모델:문자or숫자,승객수}
const airplane: { air: string; model: string | number; passengers?: number } = {
  air: "머한항공",
  model: "airbnb",
  passengers: 200,
};

// 인터섹션 연산자(&): and 그리고

// never: 그런 타입 없다(간접적 에러경고)
// const test: number & string

const university_student: { name: string } & { major: string } = {
  name: "김현강",
  major: "오프라인학과",
};

// cookie 이름, 칼로리 숫자 or 문자, 가격
const cookie: { name: string } & { kcal: string | number } & { price: number } =
  {
    name: "화이트쿠키",
    kcal: "350",
    price: 3500,
  };

//type alias
