let size = 10;
let color = "#49274a";
let mousedown = false;

const canvas = document.getElementById("canvas");
const resetBtn = document.getElementById("reset");
const colorInput = document.getElementById("color");
const sizeInput = document.getElementById("size");

function handleMouseover(e) {
  if (mousedown) e.target.style.backgroundColor = color;
}
function handleClick(e) {
  e.target.style.backgroundColor = color;
}

function addCell(parent) {
  const cell = document.createElement("div");
  cell.className = "cell";
  cell.addEventListener("mouseover", handleMouseover);
  cell.addEventListener("click", handleClick);
  parent.appendChild(cell);
}

function generateGrid(size, parent) {
  parent.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
  parent.style.gridTemplateRows = `repeat(${size}, 1fr)`;
  for (let i = 0; i < size * size; i++) {
    addCell(parent);
  }
}

function resetGrid(size, parent) {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
  generateGrid(size, parent);
}

resetBtn.addEventListener("click", () => {
  resetGrid(size, canvas);
});

window.addEventListener("mousedown", () => {
  mousedown = true;
});
window.addEventListener("mouseup", () => {
  mousedown = false;
});

colorInput.addEventListener("input", (e) => {
  color = e.target.value;
});

sizeInput.addEventListener("input", (e) => {
  size = +e.target.value;
  resetGrid(size, canvas);
});

generateGrid(size, canvas);
