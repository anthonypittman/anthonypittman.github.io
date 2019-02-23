// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let x,y;
let xSpeed, ySpeed;
let myFunction;


function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255);
  fill("red");
  x = width/2;
  y = height/2;
  xSpeed = 25;
  ySpeed = 25;
  noStroke();
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
  else if (key === "q") {
    ellipse(x, y, 25, 25);
    x += xSpeed;
    y += ySpeed;
    fill(random(255), random(255), random(255));
    if (x < 0 || x > width) {
      xSpeed *= -1;
    }
    if (y < 0 || y > height) {
      ySpeed *= -1;
    }
  }
  else if (key ===" ") {
    remove();
  }
  
  

}