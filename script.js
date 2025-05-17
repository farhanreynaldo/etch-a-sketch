let size = 16;
const buttonColor = document.querySelector("#buttonColor");
const buttonOpt = document.querySelector("#buttonOpt");

function randomColor() {
  let palette = [];
  for (let i = 0; i < 3; i++) {
    let value = Math.floor(Math.random() * 255);
    palette.push(value);
  }
  return `rgb(${palette[0]}, ${palette[1]}, ${palette[2]})`;
}

function createCanvas(size) {
  const canvas = document.querySelector(".canvas");
  for (let i = 0; i < size; i++) {
    const columnDiv = document.createElement("div");
    columnDiv.classList.add("column");
    canvas.appendChild(columnDiv);
    for (let j = 0; j < size; j++) {
      const boxDiv = document.createElement("div");
      boxDiv.classList.add("box");
      boxDiv.textContent = `${i * size + j}`;
      columnDiv.appendChild(boxDiv);
    }
  }

  let opt = buttonOpt.checked ? 0.1 : 1;
  const boxes = document.querySelectorAll(".box");
  boxes.forEach((box) => {
    box.addEventListener("mouseover", () => {
      opt += 0.1;
      box.style.opacity = opt;
      if (buttonColor.checked) {
        box.style.backgroundColor = randomColor();
      }
      box.classList.add("active");
    });
  });
}

createCanvas(size);

const button = document.querySelector("button");
button.addEventListener("click", () => {
  inputSize = prompt("Enter grid size:", 16);
  if (parseInt(inputSize) > 100) {
    alert(`Maximum size is 100, you enter ${inputSize}`);
  } else {
    size = parseInt(inputSize);
    const canvas = document.querySelector(".canvas");
    canvas.innerHTML = "";
    createCanvas(size);
  }
});
