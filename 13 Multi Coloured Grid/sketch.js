// Multi Coloured grid
// Anthony Pittman
// April 2nd 2019
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
//Creates the Grid
function createGrid() {
  for (let y = 0; y < height; y += squareSize) {
    for (let x = 0; x < width; x+= squareSize) {
      fill(random(255), random(255), random(255));
      rect(x, y, squareSize, squareSize);
    }
  }
}
//Changes Size
function mousePressed() {
  if (mouseButton === LEFT) {
    squareSize += 5;
    createGrid();
  }
  else{
    squareSize -= 5;
    createGrid();
  }
}
//Refreshes 
function keyPressed() {
  if (key === "q") {
    fill(random(255), random(2550), random(255));
    createGrid();
  }

}