// Refactor 04
// Anthony Pittman
// April 17th 2019
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let fillColour = 0;

function setup() {
  createCanvas(600, 600);
}

function draw() {
  chessBoard();
}

function chessBoard() {
  //draws x squares
  for (let x = 0; x <= 525; x += 75) {
    //draws y squares
    for (let y = 0; y <= 525; y += 75) {
      fill(fillColour);
      rect(x, y, 75, 75);
      //determines square colour
      if (fillColour === 0) {
        fillColour = 255;
      }
      else {
        fillColour = 0;
      }
    }
    // flips colours to give chess board effect
    if (fillColour === 0) {
      fillColour = 255;
    }
    else {
      fillColour = 0;
    }
  }
}