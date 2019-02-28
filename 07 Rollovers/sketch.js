// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let quadrant; // 1 - topLeft, 2 - topRight, 3 - bottomLeft, 4 - bottomRight
let fillQ1, fillQ2, fillQ3, fillQ4;
function setup() {
  createCanvas(windowWidth, windowHeight);

}

function determineQuadrant() {
  if (mouseX < width / 2) {
    if (mouseY < height / 2) {
      quadrant = 1;
    }
    else {
      quadrant = 3;
    }
  }
  else {
    //right half of screen
    if (mouseY < height / 2) {
      quadrant = 2;
    }

    else {
      quadrant = 4;
    }
  }
  print(quadrant);
}

function drawRectangle() {
  if (quadrant === 1) {
    //
  }
  if (quadrant === 2) {
    //
  }
  if (quadrant === 3) {
    //
  }
  if (quadrant === 4) {
    //
  }
  rect(0, 0, width/2, height/2);
  rect(width/2, 0, width/2 - 1, height/2);
  rect(0, height/2, width/2, height/2 - 1);
  rect(width/2, height/2, width/2 - 1, height/2 - 1);
}



function draw() {
  background(255);
  determineQuadrant();
  drawRectangle();
  //rect(0, height / 2, width / 2, height / 2 - 1);
  //fill(255);
  //rect(width / 2, height / 2, width / 2 - 1, height / 2 - 1);
  //fill(255);
  //if (mouseX <= width / 2 && mouseY <= height / 2) {
    //fill(0);
  //}
  //else {
    //fill(255);
  //}
  //rect(0, 0, width / 2, height / 2);


  //if (mouseX >= width / 2 && mouseY <= height / 2) {
    //fill(0);
  //}
  //else {
    //fill(255);
 // }
  //rect(width / 2, 0, width / 2 - 1, height / 2);

}




