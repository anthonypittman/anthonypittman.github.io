// Refactor 1
// Anthony Pittman
// March 28th 2019
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let xPosition; // variables control x, y position and 
let yPosition; // x, y speed.
let xSpeed;
let ySpeed; 

function setup() {
  createCanvas(windowWidth, windowHeight);
  // sets the default position and speed of the square.
  xPosition=200; yPosition=300; xSpeed=random(3, 8); ySpeed=random(3, 8);
}

function draw() {
  moveSquare(); // calling the function to move the square.
  background(80,80,80);
  //draws the rectangle.
  rect(xPosition,yPosition,250,75);
}

function moveSquare() {
  // creates the ability for the square to move.
  xPosition+=xSpeed; yPosition+=ySpeed;
  if (yPosition>=height-75||yPosition<=0) {
    ySpeed=ySpeed*-1;
  }
  if (xPosition>=width-250||xPosition<=0) {
    xSpeed=xSpeed*-1;
  }
}