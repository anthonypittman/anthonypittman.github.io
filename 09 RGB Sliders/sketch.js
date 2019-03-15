// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let sliderA, sliderB, sliderC;
let radio;

function setup() {
  createCanvas(windowWidth, windowHeight);
  sliderA = createSlider(0, 255, 120);
  sliderA.position(50, 10);
  sliderA.style("width", "180px");
  sliderB = createSlider(0, 255, 120);
  sliderB.position(50, 50);
  sliderB.style("width", "180px");
  sliderC = createSlider(0, 255, 120);
  sliderC.position(50, 100);
  sliderC.style("width", "180px");
  rectMode(CENTER);
  radio = createRadio();
  radio.option("circle", 1);
  if (radio.option === "1") {
    //
  }
  radio.option("square", 2);
  radio.style("width", "150px");
  radio.position(width/2, height/4);
  radio.value("1");
}

function draw() {
  background(sliderA.value(), sliderB.value(), sliderC.value());
  text("R:", 20, 30);
  text("G:", 20, 70);
  text("B:", 20, 120);
  textSize(30);
  rect(width/2, height/2, 200, 200);
  print(radio.value());

}
