// Primitive Paint
// Anthony
// Feb 25th
// I had some ideas I just didnt know how to get those ideas to work and ran past the deadline to hand in.
// Extra for Experts:
// - describe what you did to take this project "above and beyond"
// variables are supposed to be the speed of the ellipse i drew for the "q" key.
let x,y;
let xSpeed, ySpeed;

//setup speed 
function setup() {
  createCanvas(windowWidth, windowHeight);
  x = width/2;
  y = height/2;
  xSpeed = 25;
  ySpeed = 25;
  background(255);
  noStroke();
}

// created the text for my name and filled it so the text was one colour and the second changes every other shape.
function draw() {
  textSize(40);
  textFont("Comic Sans MS");
  textStyle(BOLD);
  fill("red");
  text("Anthony Pittman", 50, 50);
  fill(random(255), random(255), random(255));
}


// used if and else statements to quickly define the keys for there shapes.
function keyTyped() {
  if (key === "a") {
    rect(mouseX, mouseY, 250, 100);
  }
  else if (key === "s") {
    fill(random(255), random(255), random(255));
    ellipse(mouseX, mouseY, 200, 200);
  }
  else if (key === "d") {
    triangle(mouseX+100, mouseY-100, mouseX-100, mouseY+100, mouseX-100, mouseY-100);
  }
  // q is supposed to be the circle design that covers the screen from our shapes demo that i somehow made.
  // I wanted it to start and stop with the press of the key but as you can see it only generates 1 circle at a time.
  // Wasn't sure how to have it update and move with the speed variables I set and start and stop with the push of the key.
  else if (key === "q") {
    ellipse(x, y, 25, 25);
    x += xSpeed;
    y += ySpeed;
    if (x < 0 || x > width) {
      xSpeed *= -1;
    }
    if (y < 0 || y > height) {
      ySpeed *= -1;
    }
  }
  // clears the canvas.
  // Not sure how I could refresh the canvas like reloading it.
  // tried redraw() but I couldnt get it to work.
  else if (key ===" ") {
    remove();
  }
}