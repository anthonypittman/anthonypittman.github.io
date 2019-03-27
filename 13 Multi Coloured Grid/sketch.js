// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let squareSize = 30;

function setup() {
  createCanvas(windowWidth, windowHeight);
  createGrid();
}

function draw() {

}
function createGrid() {
  for (let y = 0; y < height; y += squareSize) {
    for (let x = 0; x < width; x+= squareSize) {
      fill(random(255), random(255), random(255));
      rect(x, y, squareSize, squareSize);
    }
  }
}

function mousePressed() {
  squareSize += 5;
  createGrid();
}

function keyPressed() {
  if (key === "q") {
    squareSize += 5;
  }

}