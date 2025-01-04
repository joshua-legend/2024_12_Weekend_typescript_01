// as - assertion[단언]
var x = document.querySelector("#x");
var y = document.querySelector("#y");
var position = { x: 0, y: 0 };
x.innerHTML = String(position.x);
y.innerHTML = String(position.y);
var move = function (direction) {
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
var arrow = ["right", "left", "up", "down"];
arrow.forEach(function (v) {
    var direction = document.querySelector("#".concat(v));
    direction.addEventListener("click", function () {
        move(v);
    });
});
