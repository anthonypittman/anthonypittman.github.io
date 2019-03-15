// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let tWidth = 1;
let start = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  rectMode(CORNERS);
}


function drawTerrain() {
  // draws terrain per 1 frame
  let xOff = start;
  for (let x = 0; x < width; x+= tWidth) {
    rect(x, noise(xOff) * height, x + tWidth, height);
    xOff += 0.01;
  }
  start += 0.01;

}

function draw() {
  background(220);
  drawTerrain();
}
