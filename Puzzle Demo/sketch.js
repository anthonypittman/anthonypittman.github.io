// Grid Demo

const NUM_ROWS = 4;
const NUM_COLS = 5;
let rectWidth, rectHeight;
let currentRow, currentCol;

let gridData = [[0, 255, 0, 255, 0],
               [255, 0, 255, 0, 255],
               [0, 255, 0, 255, 0],
               [255, 0, 255, 0, 255]];

function setup() {
  createCanvas(windowWidth, windowHeight);
  rectWidth = width / NUM_COLS;
  rectHeight = height / NUM_ROWS;
}

function drawGrid() {
  // Rebder a grid of squares = fill colour set
  // According to data stored in 2D array. 
  for (let y = 0; y < NUM_ROWS; y++) {
    for (let x = 0; x < NUM_COLS; x++) {
      fill(gridData[y][x]);
      rect(x * rectWidth, y * rectHeight, rectWidth, rectHeight);
    }
  }
}

function determineActiveSquare() {
  //An expression to run each frame and to determine
  //where the mouse is.
  currentRow = int(mouseY / rectHeight);
  currentCol = int(mouseX / rectWidth);
  print(currentCol, currentRow);
}
function mousePressed() {
  flip(currentCol, currentRow);
  flip(currentCol - 1, currentRow);
  flip(currentCol + 1, currentRow);
  flip(currentCol, currentRow - 1);
  flip(currentCol, currentRow + 1);
}

function flip(col, row) {
  if (col >= 0 && col < NUM_COLS && row < NUM_ROWS) {
    if (gridData[row][col] === 0) {
      gridData[row][col] = 255;
    }
    else {
      gridData[row][col] = 0;
    }
  }
}

function draw() {
  background(220);
  determineActiveSquare();
  drawGrid();
}
