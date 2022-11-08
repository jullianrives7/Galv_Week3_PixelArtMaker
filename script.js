// if ID, needs # in front, if CLASS, needs . in front
//try to use flexbox or grid system in css instead of float
const grid = document.querySelector("#grid");
const $save = document.querySelector("#save");
const $open = document.querySelector("#open");
const $clear = document.querySelector("#clear");
const $audio = document.querySelector("#audio");
const $musicPlayer = document.querySelector("figure");
//
function makeBox() {
  const box = document.createElement("div");
  box.classList.add("grid-square");
  grid.appendChild(box);
}

function makeGrid() {
  for (let i = 0; i < 500; i++) {
    makeBox();
  }
}

makeGrid();
//
//
//
//
const colorPalette = document.querySelector("#color-palette");
//
function makePaletteColorCircles() {
  const colorArr = [
    "white",
    "black",
    "red",
    "green",
    "blue",
    "yellow",
    "orange",
    "purple",
    "moccasin",
    "magenta",
    "teal",
    "brown",
    "maroon",
    "olive",
    "silver",
    "gray",
    "cyan",
    "lime",
    "darkblue",
    "lightblue",
  ];
  for (let i = 0; i < 20; i++) {
    const circle = document.createElement("div");
    circle.classList.add("palette-colors-circles");
    circle.style.backgroundColor = colorArr[i];
    colorPalette.appendChild(circle);
  }
}
//
makePaletteColorCircles();
//
//
//
//
//
function makeCurrentColorDisplay() {
  const currentColorContainer = document.createElement("div");
  currentColorContainer.classList.add("current-color-container");
  //
  const currentColorContainerTextBox = document.createElement("div");
  currentColorContainerTextBox.classList.add("current-color-text-box");
  currentColorContainerTextBox.innerText = "Current Color >";
  //
  const currentColorContainerColorBox = document.createElement("div");
  currentColorContainerColorBox.classList.add("current-color-display-box");
  //
  // if ((currentColorContainerColorBox.style.backgroundColor = "empty")) {
  //   currentColorContainerColorBox.style.backgroundColor = "white";
  //   currentColorContainerColorBox.style.innerText = "Pick a color!";
  //   currentColorContainerColorBox.style.color = "black";
  //   currentColorContainerColorBox.style.fontSize = "10px";
  // }
  //
  colorPalette.appendChild(currentColorContainer);
  currentColorContainer.appendChild(currentColorContainerTextBox);
  currentColorContainer.appendChild(currentColorContainerColorBox);
}
//
makeCurrentColorDisplay();
//
//
//
//
const paletteColorCircles = document.querySelectorAll(
  ".palette-colors-circles"
);
//
const currentColorDisplayBox = document.querySelector(
  ".current-color-display-box"
);
//
//
//
// Event listener used to change current color display box's bg-color on
// clicking a palette color.
for (var index = 0; index < paletteColorCircles.length; index++) {
  paletteColorCircles[index].addEventListener("click", function (e) {
    currentColorDisplayBox.style.backgroundColor =
      e.target.style.backgroundColor;
  });
}
//
//
//
//
const gridSquares = document.querySelectorAll(".grid-square");
console.log(gridSquares);
//
var currentColor = currentColorDisplayBox.style.backgroundColor;
//
// function changeColor(e) {
//   e.target.style.backgroundColor = currentColor;
// }
//
// for (var index = 0; index < gridSquares.length; index++) {
//   gridSquares[index].addEventListener("dragenter", changeColor);
// }
//
//
//
// Event listener used to change gridsquare bg-color on
// clicking to selected palette color.
for (var index = 0; index < gridSquares.length; index++) {
  gridSquares[index].addEventListener("mousedown", function (e) {
    e.target.style.backgroundColor =
      currentColorDisplayBox.style.backgroundColor;
  });
  gridSquares[index].addEventListener("mouseenter", function (e) {
    if (e.buttons === 1) {
      //1 is the primary mouse button (leftcick is pressed)
      e.target.style.backgroundColor =
        currentColorDisplayBox.style.backgroundColor;
    }
  });
}
// }

$save.addEventListener("click", function save() {
  console.log("saved");
  let pixelArtSaveName = window.prompt(
    "What would you like to name your saved pixel art file?"
  );

  let saveImage = [];
  for (var i = 0; i < gridSquares.length; i++) {
    saveImage[i] = gridSquares[i].style.backgroundColor;
  }
  window.localStorage.setItem(pixelArtSaveName, JSON.stringify(saveImage));
});

$open.addEventListener("click", function load() {
  console.log("loading");
  let pixelArtSaveName = window.prompt(
    "Enter the name of the pixel art file you would like to open"
  );
  let loadedImage = JSON.parse(window.localStorage.getItem(pixelArtSaveName));
  for (var i = 0; i < gridSquares.length; i++) {
    gridSquares[i].style.backgroundColor = loadedImage[i];
  }
});

$clear.addEventListener("click", function () {
  for (var i = 0; i < gridSquares.length; i++) {
    gridSquares[i].style.backgroundColor = "white";
  }
});

window.document.onload($audio.play());
