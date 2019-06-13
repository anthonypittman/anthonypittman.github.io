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
let sword;
let choice;
let health = 3;
let linkHealth = 3;
let deathTimer = 0;
let protect = false;
function preload() {
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  bg = loadImage("assets/level02.png");
  link = createSprite(400, 400);
  tree = createSprite(400, 600);
  sword = createSprite(400, 400);
  link.addAnimation("idle", "assets/idlee01.png");
  link.addAnimation("walk", "assets/walk01.png", "assets/walk04.png");
  link.addAnimation("walkLeft", "assets/walkLeft01.png", "assets/walkLeft02.png");
  link.addAnimation("walkRight", "assets/walkRight01.png", "assets/walkRight02.png");
  link.addAnimation("walkUp", "assets/walkUp01.png", "assets/walkUp04.png");
  link.addAnimation("death", "assets/death.png");
  link.addAnimation("jab", "assets/stab.png");
  link.addAnimation("jabLeft", "assets/stabLeft.png");
  link.addAnimation("jabRight", "assets/stabRight.png");
  link.addAnimation("jabUp", "assets/stabUp.png");
  sword.addAnimation("sword", "assets/swordJab.png");
  sword.addAnimation("swordRight", "assets/swordJabRight.png");
  sword.addAnimation("swordLeft", "assets/swordJabLeft.png");
  sword.addAnimation("swordUp", "assets/swordJabUp.png");
  sword.addAnimation("swordHide", "assets/swordHide.png");
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
  if (tree.collide(link)) {
    if (protect === false) {
      linkHealth -= 1;
      protect = true;
      deathTimer = 60;
    }
  }
  if (treeMoving === false) {
    treeTimer --;
  }
  if (treeTimer === 0) {
    treeMoving = true;
    treeTimer = 60;
    choice = int(random(4));
    if (choice === 0) {
      tree.changeAnimation("walkRight");
    }
    if (choice === 1) {
      tree.changeAnimation("walkLeft");
    }
    if (choice === 2) {
      tree.changeAnimation("walkUp");
    }
    if (choice === 3) {
      tree.changeAnimation("walk");
    }
  }
  if (treeMoving === true) {
    treeTimer --;
    if (choice === 0) {
      tree.position.x += 2.5;
    }
    if (choice === 1) {
      tree.position.x -= 2.5;
    }
    if (choice === 2) {
      tree.position.y -= 2.5;
    }
    if (choice === 3) {
      tree.position.y += 2.5;
    }
    
    if (treeTimer === 0) {
      treeMoving = false;
      treeTimer = 120;
      tree.changeAnimation("idle");
    }
  }
  if (health === 0) {
    tree.remove();
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
    sword.changeAnimation("sword");
    sword.position.y = link.position.y + 63;
    sword.position.x = link.position.x + 19;
    if (sword.collide(tree)){
      //decrease tree health
      //displace the tree
      health -= 1;
      tree.position.y += 40;
    }
  }
  else if (keyDown("left_arrow")) {
    link.changeAnimation("jabLeft");
    sword.changeAnimation("swordLeft");
    sword.position.y = link.position.y + 16;
    sword.position.x = link.position.x - 66;
    if (sword.collide(tree)) {
      health -= 1;
      tree.position.x -= 40;
    }
  }
  else if (keyDown("right_arrow")) {
    link.changeAnimation("jabRight");
    sword.changeAnimation("swordRight");
    sword.position.y = link.position.y + 16.5;
    sword.position.x = link.position.x + 65;
    if (sword.collide(tree)) {
      health -= 1;
      tree.position.x += 40;
    }
  }
  else if (keyDown("up_arrow")) {
    link.changeAnimation("jabUp");
    sword.changeAnimation("swordUp");
    sword.position.y = link.position.y - 65;
    sword.position.x = link.position.x - 24;
    if (sword.collide(tree)) {
      health -= 1;
      tree.position.y -= 40;
    }
  }
  else if (linkHealth === 0) {
    link.changeAnimation("death");
  }

  else {
    link.changeAnimation("idle");
    sword.changeAnimation("swordHide");
  }
  if (linkHealth < 1) {
    link.changeAnimation("death");
  }
  if (protect === true) {
    deathTimer --;
    if (deathTimer < 1) {
      protect = false;
    }
  }
}
