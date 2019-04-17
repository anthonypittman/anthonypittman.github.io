// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let sprite = [];
let speed = 6;
let counter = 0;
let x;
let y;


function preload() {
  for (let i = 0; i < 4; i++) {
    sprite.push(loadImage("assets/idle-0" + i + ".png"));
    //player = loadImage("assets/Layer 3.png");
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
  if (frameCount % 8 === 0) {
    if (keyIsPressed) {
      if (key === "d") {
        if (counter < 4 || counter > 8) {
          counter = 4;
        }
        else {
          counter++;
        }
      }
      else if (key === "a") {
        if (counter < 10 || counter > 14) {
          counter = 10;
        }
        else {
          counter++;
        }
      }
    }
    
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
  image(sprite[counter], width/2, height/2,75, 110);
  //image(player, width/2, height/4);

 //if (frameCount % int(speed) === 0) {
    //counter ++;
    //if (counter > 3) {
      //counter = 0;
    //}
  //}
}
