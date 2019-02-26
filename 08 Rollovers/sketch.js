// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let topLeft, topRight, bottomRight, bottomLeft;

function setup() {
  createCanvas(windowWidth, windowHeight);
  
}

function draw() {
  background(255);
  
 
  rect(0, height/2, width/2, height/2 - 1);
  fill(255);
  rect(width/2, height/2, width/2 - 1, height/2 - 1);
  fill(255);
  if (mouseX <= width/2 && mouseY <= height/2) {
    fill(0);
  }
  else {
    fill(255);
  }
  rect(0, 0, width/2, height/2);


  if (mouseX >= width/2 && mouseY <= height/2) {
    fill(0);
  }
  else {
    fill(255);
  }
  rect(width/2, 0, width/2 - 1, height/2);

}




