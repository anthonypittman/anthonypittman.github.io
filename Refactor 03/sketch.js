// Refactor 3 Target
// Anthony Pittman
// April 4th 2019
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

//Black and White Target

const CIRCLE_SIZE = 40;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(240);
  drawTarget();
}

function drawTarget() {
  for (let i = 400; i >= CIRCLE_SIZE; i -= CIRCLE_SIZE) {
    ellipse(200, 200, i, i);
  }
}

