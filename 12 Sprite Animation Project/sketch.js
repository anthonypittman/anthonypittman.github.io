// Sprite Animation
// Anthony Pittman
// April 18th 2019
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let sprite = [];
let speed = 6;
let counter = 0;
let x = 600;
let y = 500; 

// loads sprites
function preload() {
  for (let i = 0; i < 4; i++) {
    sprite.push(loadImage("assets/idle-0" + i + ".png"));
  }
  for (let i = 0; i < 6; i++) {
    sprite.push(loadImage("assets/run-0" + i + ".png"));
  }
  for (let i = 0; i < 6; i++) {
    sprite.push(loadImage("assets/runLeft-0" + i + ".png"));
  }
}

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function choosePicture() {
  //animation speed
  if (frameCount % 8 === 0) { 
    //right animation
    if (keyIsPressed) {
      if (key === "d") {
        x += 25;
        if (counter < 4 || counter > 8) {
          counter = 4;
        }
        else {
          counter++;
        }
      }
      //left animation
      else if (key === "a") {
        x -= 25;
        if (counter < 10 || counter > 14) {
          counter = 10;
        }
        else {
          counter++;
        }
      }
    }
    //idle animation
    else {
      if (counter > 2) {
        counter = 0;
      }
      else {
        counter++;
      }
    }
  }
}

function draw() {
  background(220);
  choosePicture();
  image(sprite[counter], x, y,75, 110);
}
