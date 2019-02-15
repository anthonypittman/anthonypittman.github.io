// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"



function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255);
  fill("red");
}
function draw() {
//background(255);
  textSize(40);
  textFont("Comic Sans MS");
  textStyle(BOLD);
  text("Anthony Pittman", 50, 50);
}

function keyTyped() {
  if (key === "a") {
    fill(random(255), random(255), random(255));
    rect(mouseX, mouseY, 250, 100);
  }
  else if (key === "s") {
    fill(random(255), random(255), random(255));
    ellipse(mouseX, mouseY, 200, 200);
  }
  else if (key === "d") {
    fill(random(255), random(255), random(255));
    triangle(mouseX+100, mouseY-100, mouseX-100, mouseY+100, mouseX-100, mouseY-100);
  }
  
  
}

