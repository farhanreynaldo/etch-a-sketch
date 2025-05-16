let size = 16;

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

  let opacity = 0.1;
  const boxes = document.querySelectorAll(".box");
  boxes.forEach((box) => {
    box.addEventListener("mouseover", () => {
      box.style.opacity = opacity;
      opacity += 0.1;
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
