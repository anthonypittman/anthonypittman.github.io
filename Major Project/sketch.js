// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let link;
let tree;
let treeTimer = 60;
let treeMoving = false;
let bg;
function preload() {
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  bg = loadImage("assets/level02.png");
  link = createSprite(400, 400);
  tree = createSprite(400, 600);
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
  tree.addAnimation("idle", "assets/treeIdle01.png");
  tree.addAnimation("walk", "assets/treeWalk01.png", "assets/treeWalk03.png");
  tree.addAnimation("walkUp", "assets/treeWalkUp01.png", "assets/treeWalkUp03.png");
  tree.addAnimation("walkLeft", "assets/treeWalkleft01.png", "assets/treeWalkLeft03.png");
  tree.addAnimation("walkRight", "assets/treeWalkRight01.png", "assets/treeWalkRight03.png");
}

function draw() {
  background(220);
  image(bg, 0, 0);
  drawSprites();
  move();
  treeMove();
}

function treeMove() {
  tree.collide(link);
  if (treeMoving === false) {
    treeTimer --;
  }
  if (treeTimer === 0) {
    treeMoving = true;
    treeTimer = 60;
    tree.changeAnimation("walkRight");
  }
  if (treeMoving === true) {
    treeTimer --;
    tree.position.x += 2.5;
    if (treeTimer === 0) {
      treeMoving = false;
      treeTimer = 120;
      tree.changeAnimation("idle");
    }
  }
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
