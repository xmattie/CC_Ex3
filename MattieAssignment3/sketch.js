var bspeed = 0;
var bgravity = 0.1;

function setup() {
  createCanvas(400, 400); //Creates 400 x 400 window
  rectMode(CENTER);
}

function draw() {
  background(0); //Makes background black
  
  drawBrick(40, 20); //Bricks
  drawBrick(100, 20);
  drawBrick(160, 20);
  drawBrick(220, 20); //I have a feeling I
  drawBrick(280, 20); //can loop to generate
  drawBrick(340, 20); // these  but haven't 
  drawBrick(40, 60); //figured it out
  drawBrick(100, 60);
  drawBrick(160, 60);
  drawBrick(220, 60);
  drawBrick(280, 60);
  drawBrick(340, 60);
  drawBrick(40, 100);
  drawBrick(100, 100);
  drawBrick(160, 100);
  drawBrick(220, 100);
  drawBrick(280, 100);
  drawBrick(340, 100);
  drawBrick(40, 140);
  drawBrick(100, 140);
  drawBrick(160, 140);
  drawBrick(220, 140);
  drawBrick(280, 140);
  drawBrick(340, 140);
  drawBrick(40, 180);
  drawBrick(100, 180);
  drawBrick(160, 180);
  drawBrick(220, 180);
  drawBrick(280, 180);
  drawBrick(340, 180);
  drawBrick(40, 220);
  drawBrick(100, 220);
  drawBrick(160, 220);
  drawBrick(220, 220);
  drawBrick(280, 220);
  drawBrick(340, 220);
  drawBrick(40, 260);
  drawBrick(100, 260);
  drawBrick(160, 260);
  drawBrick(220, 260);
  drawBrick(280, 260);
  drawBrick(340, 260);
  drawBrick(40, 300);
  drawBrick(100, 300);
  drawBrick(160, 300);
  drawBrick(220, 300);
  drawBrick(280, 300);
  drawBrick(340, 300);
  drawBrick(40, 340);
  drawBrick(100, 340);
  drawBrick(160, 340);
  drawBrick(220, 340);
  drawBrick(280, 340);
  drawBrick(340, 340);
  
}

function drawBrick(bx, by) { //Draws bricks
var br = random(0, 255.1) //Randomizes colors
var bg = random(0, 255.1)
var bb = random(0, 255.1)
fill(br, bg, bb);

if (mouseIsPressed){ //Makes bricks drop with mouse press
var bgravity = random(0, 1) //I wanted to make each block have different gravity but it doesn't look like it

by = by + bspeed;
bspeed = bspeed + bgravity;
if (by > height) {
  bspeed = bspeed * -0.95;
  }
}

rect(bx,by,40,15);
}