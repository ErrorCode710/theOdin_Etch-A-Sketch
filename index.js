let button = document.querySelector("button");
let resetButton = document.querySelector(".resetSize");

// Event Listener

// Change size of the grid
button.addEventListener("click", () => {
  let size = getSize();
  if (size !== null) {
    createRow(size);
  }
});

// Reset the size of the grid
// resetButton.addEventListener("click", () => {
//   resetSize(16);
// });

// Function to get the size of the grid
function getSize() {
  return prompt("Enter the size of the grid");
}

function multiplyDiv(size) {
  const container = document.querySelector("#container");
  const divElement = document.createElement("div");
  let htmlString = "";

  for (let i = 0; i < size; i++) {
    htmlString += '<div class="square"></div>';
  }

  divElement.innerHTML = htmlString;

  container.appendChild(divElement);

  return divElement;
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
function addHoverEffect() {
  const divSquare = document.querySelectorAll(".square");
  divSquare.forEach((div) => {
    div.addEventListener("mouseover", (event) => {
      event.target.style.backgroundColor = "red";
    });
  });
}
