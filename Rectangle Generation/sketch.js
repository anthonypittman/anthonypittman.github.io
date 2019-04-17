// Art Replication Warm-up
// Anthony Pittman
// April 15th 2019
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let x = 900;
let y = 500;


function setup() {
  createCanvas(windowWidth, windowHeight);
  strokeWeight(2);
}

function draw() {
  //background(220);
  drawHorizontal();
  drawVertical();
  
}
//draws horizontal lines
function drawHorizontal() {
  let newX = random(800, 1200);
  line(x, y, newX, y);
  x = newX;
}
//draws vertical lines
function drawVertical() {
  let newY = random(100, 800);
  line(x, y, x, newY);
  y = newY;
}
//captures the screen
function keyPressed() {
  if (key === " ") {
    save();
  }
}