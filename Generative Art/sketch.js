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
  strokeWeight(0.1);
  background(0);
}

function draw() {
  drawHorizontal();
  //drawVertical();
}

function drawHorizontal() {
  let newX = random(0, height);
  for (let i = 0; i < width/2; i += 200) {
    for (let j = 0; j < height/2; j += 200) {
      line(i, j, newX, height);
    }
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