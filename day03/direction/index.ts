// as - assertion[단언]
const x = document.querySelector("#x") as Element;
const y = document.querySelector("#y") as Element;

const position = { x: 0, y: 0 };
x.innerHTML = String(position.x);
y.innerHTML = String(position.y);

const move = (direction) => {
  switch (direction) {
    case "up":
      position.y = position.y + 1;
      y.innerHTML = String(position.y);
      break;
    case "right":
      position.x = position.x + 1;
      x.innerHTML = String(position.x);
      break;
    case "left":
      position.x = position.x - 1;
      x.innerHTML = String(position.x);
      break;
    case "down":
      position.y = position.y - 1;
      y.innerHTML = String(position.y);
      break;
    default:
      console.log("에러");
  }
};
const arrow = ["right", "left", "up", "down"];
arrow.forEach((v) => {
  const direction = document.querySelector(`#${v}`) as Element;
  direction.addEventListener("click", () => {
    move(v);
  });
});
