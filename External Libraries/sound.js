// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let mySound;
let reverb;

function preload() {
  mySound = loadSound("assets/energy.mp3");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  mySound.setVolume(0.1);
  reverb = new p5.reverb();
}

function mouseClicked() {
  mySound.play();
}

function keyPressed() {
  reverb.process(mySound, 5, 1);
}

function draw() {
  background(220);
}
