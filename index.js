let button = document.querySelector("button");
let resetButton = document.querySelector("#resetSize");
let randColor = document.querySelector("#randomColor");

// Change size of the grid
button.addEventListener("click", () => {
  let size = getSize();
  if (size < 16 || size > 100) {
    alert("Please enter a number between 16 and 100");
    return;
  } else {
    changeSize(size);
  }
});

// Reset the size of the grid
resetButton.addEventListener("click", () => {
  changeSize(defaultSize);
});

randColor.addEventListener("click", () => {
  randomizedColor();
});

// Function to get the size of the grid
function getSize() {
  return prompt("Enter the size of the grid Input only number between 16-100");
}

function multiplyDiv(size) {
  const container = document.querySelector("#container");
  const divElement = document.createElement("div");
  divElement.classList.add("row");
  let htmlString = "";
  for (let i = 0; i < size; i++) {
    htmlString += '<div class="square"></div>';
  }
  divElement.innerHTML = htmlString;
  container.appendChild(divElement);
}

function randomColor() {
  const R = Math.floor(Math.random() * 255 + 1);
  const G = Math.floor(Math.random() * 255 + 1);
  const B = Math.floor(Math.random() * 255 + 1);
  return `rgb(${R},${G},${B})`;
}

function createRow(size) {
  for (let i = 0; i < size; i++) {
    multiplyDiv(size);
    addHoverEffect();
  }
}

function resetSize(size) {
  createRow(size);
}

function addEventToSquare(eventType, callback) {
  const divSquare = document.querySelectorAll(".square");
  divSquare.forEach((div) => {
    div.addEventListener(eventType, callback);
  });
}

function addHoverEffect() {
  addEventToSquare("mouseover", (e) => {
    e.target.style.backgroundColor = "black";
    // e.target.style.opacity = 0.25;
  });
}

function randomizedColor() {
  addEventToSquare("mouseover", (e) => {
    e.target.style.backgroundColor = randomColor();
  });
}

function forMobile() {
  addEventToSquare("touchstart", (e) => {
    e.target.style.backgroundColor = randomColor();
  });
}

function changeSize(size) {
  const container = document.querySelector("#container");
  container.innerHTML = "";
  createRow(size);
  console.log(size);
}

const defaultSize = 16;
createRow(defaultSize);
