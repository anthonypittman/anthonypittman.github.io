// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let Idle = [];
let speed = 6;
let counter = 0;
let player;

function preload() {
  for (let i = 0; i < 4; i++) {
    Idle.push(loadImage("assets/idle-0" + i + ".png"));
    player = loadImage("assets/Layer 3.png");
  }
}

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);
  image(Idle[counter], width/2, height/2, 150, 150);
  image(player, width/2, height/4);

 //if (frameCount % int(speed) === 0) {
    //counter ++;
    //if (counter > 3) {
      //counter = 0;
    //}
  //}
}
