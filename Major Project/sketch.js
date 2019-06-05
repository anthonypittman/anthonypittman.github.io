// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let link;
let bg;

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
  bg = loadImage("assets/BG.png");
  link = createSprite(400, 400);
  link.addAnimation("idle", "assets/idlee01.png");
  link.addAnimation("walk", "assets/walk01.png", "assets/walk04.png");
  link.addAnimation("walkLeft", "assets/walkLeft01.png", "assets/walkLeft02.png");
  link.addAnimation("walkRight", "assets/walkRight01.png", "assets/walkRight02.png");
  link.addAnimation("walkUp", "assets/walkUp01.png", "assets/walkUp04.png");
  link.addAnimation("death", "assets/death.png");
  link.addAnimation("jab", "assets/jab.png");
  link.addAnimation("jabLeft", "assets/jabLeft.png");
  link.addAnimation("jabRight", "assets/jabRight.png");
  link.addAnimation("jabUp", "assets/jabUp.png");
}

function draw() {
  background(220);
  image(bg, 600, 600);
  drawSprites();
  move();
}

function move() {
  if (keyDown("s")) {
    link.changeAnimation("walk");
    link.position.y += 5;
  }
  else if (keyDown("a")) {
    link.changeAnimation("walkLeft");
    link.position.x -= 5;
  }
  else if (keyDown("d")) {
    link.changeAnimation("walkRight");
    link.position.x += 5;
  }
  else if (keyDown("w")) {
    link.changeAnimation("walkUp");
    link.position.y -= 5;
  }
  else if(keyDown("down_arrow")) {
    link.changeAnimation("jab");
  }
  else if (keyDown("left_arrow")) {
    link.changeAnimation("jabLeft");
  }
  else if (keyDown("right_arrow")) {
    link.changeAnimation("jabRight");
  }
  else if (keyDown("up_arrow")) {
    link.changeAnimation("jabUp");
  }

  else {
    link.changeAnimation("idle");
  }
}
