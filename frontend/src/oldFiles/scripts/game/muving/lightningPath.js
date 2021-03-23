export function lightningPath(coord) {
  coord.forEach((item) => {
    let square = document.querySelector(
      `[data-row="${item[0]}"][data-col="${item[1]}"]`
    );
    let coordSquare = square.getBoundingClientRect();

    let div = document.createElement("div");
    div.classList.add("pathPoint");
    div.style.height = coordSquare.height / 2 + "px";
    div.style.width = coordSquare.width / 2 + "px";
    div.style.borderRadius = coordSquare.height / 4 + "px";
    div.style.top = coordSquare.height / 4 + "px";
    div.style.left = coordSquare.width / 4 + "px";

    square.append(div);
  });
}

export function clearLightningPath() {
  let pathPoints = document.querySelectorAll(".pathPoint");

  for (let i = 0; i < pathPoints.length; i++) {
    pathPoints[i].remove();
  }
}
