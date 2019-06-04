// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let r = 30;

function setup() {
  createCanvas(windowWidth, windowHeight);
  noLoop();
}

function draw() {
  background(220);
  drawCircle();
}

function drawCircle(size) {
  ellipse(width/ 2, height / 2, 100, 100);
  push();
  rotate(radians(r));
  translate(r);
  pop();
}