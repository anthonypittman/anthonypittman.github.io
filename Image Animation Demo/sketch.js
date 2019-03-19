//Image Demo



let direction = 1;
//left = 1
//right = 2
let lionL, lionR;

let pinImages = [];


function preload() {
  lionL = loadImage("assets/lion-left.png");
  lionR = loadImage("assets/lion-right.png");
  pinImages.push(loadImage("assets/pin-00.png"));
}

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);
  lions();
  image(pinImages[0], width/2, height/2);
}

function lions(){
  moving();
  imageMode(CENTER);
  push();
  translate(mouseX, mouseY);
  scale(0.5);
  if (direction === 1) {
    image(lionL, 0, 0);
  }
  else {
    image(lionR, 0, 0);
  }
  pop();

  function moving() {
    //determine the direction of mouse movement
    if (mouseX > pmouseX) {
      direction = 2;
    }
    else if (mouseX < pmouseX) {
      direction = 1;
    }
  }
}
