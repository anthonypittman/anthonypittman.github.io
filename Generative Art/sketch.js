// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let x = 0;
let y = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  stroke(random(255), random(255), random(255));
  strokeWeight(0.5);
  background(0);
}

function draw() {
  drawHorizontal();
  //drawVertical();
}

function drawHorizontal() {
  let newX = random(width, height);
  let newY = random(width, height);
  for (let i = random(0, 200); i < width; i += 100) {
    for (let j = random(0, 200); j < height; j += 100) {
      line(i, j, newX, newY);
    }
  }
}

function keyPressed() {
  if (key === " ") {
    save();
  }
}

// function drawVertical() {
//   let newY = 100;
//   for (let i = 0; i < width; i += 10) {
//     for (let j = 0; j < height; j += 10) {
//       line(i, j, x, newY);
//     }
//   }

// }