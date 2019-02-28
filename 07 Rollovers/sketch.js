// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let quadrant; // 1 - topLeft, 2 - topRight, 3 - bottomLeft, 4 - bottomRight
let fillQ1 = 255, fillQ2 = 255, fillQ3 = 255, fillQ4 = 255;
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
  fillQ1 += 4;
  fillQ2 += 4;
  fillQ3 += 4;
  fillQ4 += 4;
  if (quadrant === 1) {
    fillQ1 = 0;
  }
  if (quadrant === 2) {
    fillQ2 = 0;
  }
  if (quadrant === 3) {
    fillQ3 = 0;
  }
  if (quadrant === 4) {
    fillQ4 = 0;
  }
  fill(fillQ1);
  rect(0, 0, width/2, height/2);
  fill(fillQ2);
  rect(width/2, 0, width/2 - 1, height/2);
  fill(fillQ3);
  rect(0, height/2, width/2, height/2 - 1);
  fill(fillQ4);
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




