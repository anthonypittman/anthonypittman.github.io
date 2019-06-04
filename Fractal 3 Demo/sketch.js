//3D primitives and Fractals

let angle = 5;
let angleSpeed = 1;

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  smooth(100);
  fill(random(255), random(255), random(255));
}

function draw() {
  //angle = map(mouseX, 0, width, 0, 40);
  angle += angleSpeed;
  if (angle < -40 || angle > 40) {
    angleSpeed *= -1;
  }
  background(220);
  // rotateY(radians(frameCount));
  // fill(100, 150, 90);
  // torus(100);
  push();
  rotateY(radians(frameCount));
  for (let i = 0; i < 360; i += 45) {
    push();
    rotateY(radians(i));
    boxes(70);
    pop();
  }
  pop();
}

function boxes(size) {
  if (size > 20) {
    rotateZ(radians(angle));
    translate(size * 1.5, 0);
    box(size);

    boxes(size * 0.8);
  } 
}
