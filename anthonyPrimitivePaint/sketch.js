// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"



function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255);
}
function draq() {
  
}

keyTyped();

function keyTyped() {
  if (key === "a") {
    fill("red");
    rect(mouseX, mouseY, 250, 100);
  }
  else if (key === "s") {
    fill("magenta");
    ellipse(mouseX, mouseY, 200, 200);
  }
  else if (key === "d") {
    fill("green");
    triangle(mouseX+100, mouseY-100, mouseX-100, mouseY+100, mouseX-100, mouseY-100);
  }
  
  
}

