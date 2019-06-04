// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let link;

function preload() {

  //idle = loadAnimation("idle", "assets/idle.png");
  // link.addAnimation("walk", "assets/walk01.png", "assets/walk04.png");
  // link.addAnimation("walkLeft", "assets/walkLeft01.png", "assets/walkLeft02.png");
  // link.addAnimation("walkRight", "assets/walkRight01.png", "assets/walkRight02.png");
  // link.addAnimation("walkUp", "assets/walkUp01.png", "assets/walkUp04.png");
  //death = loadAnimation("death", "assets/death.png");
  //jab = loadAnimation("jab", "assets/jab.png");
  //jabLeft = loadAnimation("jabLeft", "assets/jabLeft.png");
  //jabRight = loadAnimation("jabRight", "assets/jabRight.png");
  //jabUp = loadAnimation("jabUp", "assets/jabUp.png");
}
function setup() {
  createCanvas(windowWidth, windowHeight);
  link = createSprite(400, 400);
  link.addAnimation("idle", "assets/idlee01.png", "assets/idlee02.png");
  link.addAnimation("walk", "assets/walk01.png", "assets/walk04.png");
  link.addAnimation("walkLeft", "assets/walkLeft01.png", "assets/walkLeft02.png");
  link.addAnimation("walkRight", "assets/walkRight01.png", "assets/walkRight02.png");
  link.addAnimation("walkUp", "assets/walkUp01.png", "assets/walkUp04.png");
}

function draw() {
  background(220);
  drawSprites();
  move();
}

function move() {
  if (keyDown("s")) {
    link.changeAnimation("walk");
    link.position.y += 5;
  }
  else {
    link.changeAnimation("idle");
    
  }
}
