type coffee = { name: string; price: number };
const americano: coffee = { name: "아아", price: 3000 };

// 타입 빵 이름,칼로리,성분,가격
// 빵메뉴라는 변수 만들기!
type bread = {
  name: string;
  kcal: number | string;
  ingredients: string[];
  price: number;
};

const parisbaguette: bread[] = [
  { name: "소금빵", kcal: "200", price: 1500, ingredients: ["소금", "밀가루"] },
  { name: "단팥빵", kcal: 250, price: 2500, ingredients: ["팥", "밀가루"] },
];

// 대학생 타입 이름,나이,전공,학번,학년

type Person = { name: string; age: number };
type Student = { major: string; id: string; grade: number };
type University = Person & Student;

const kim: University = {
  name: "김탁구",
  age: 22,
  grade: 2,
  id: "12345",
  major: "체육학과",
};

// 유저타입
// User 타입: id, username
// Profile 타입: firstname,lastname,email
// UserProfile

type User = { id: string; username: string };
type Profile = { firstName: string; lastName: string; email: string };
type UserProfile = User & Profile;
// const a1:UserProfile = { id:"id" }

type Post = { postId: number; title: string; content: string };
type Author = { authorId: number; name: string; gender: string };
type PostWithAuthor = Post & Author;

// Post 타입: postid,title,content
// Author 타입: authorId, name, gender
// PostWithAuthor

// 함수타입 알리아스 만들기
// 두 매개변수 더하는 함수 타입 만들기
type Operation = (x: number, y: number) => number;

const add1: Operation = (x, y) => x + y;
const minus: Operation = (x, y) => x - y;
