type Oper = "add" | "minus" | "multi" | "divide";

const calculate = (oper: Oper | null, x: number, y: number) => {
  switch (oper) {
    case "add":
      return x + y;
    case "minus":
      return x - y;
    case "multi":
      return x * y;
    case "divide":
      return y == 0 ? "에러" : x / y;
    default:
      return "에러";
  }
};
