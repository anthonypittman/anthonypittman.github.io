// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(255);
  fill('red');
  ellipse(200, 200, 125);
  fill('pink');
  rect(mouseX, 400, 75, 75);

  x += xSpeed;
  if (x > windowWidth) x = -30;
}
