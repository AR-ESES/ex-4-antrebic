let espLarg = 6;
let espAltura = 2;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
  stroke(255);
  strokeWeight(2);
  noFill();
  background(0);
}

function draw() {
  
  for (let i = 1; i < espLarg; i++) {
    for (let j = 1; j < espAltura; j++) {
      push();
      translate(i * width / espLarg,j * height / espAltura)
     stroke(255, 204, 100);
strokeWeight(5);
square(125, 240, 50, 10);
square(50, 50, 200, 20);
fill(153, 255, 255);
ellipse(100, 120, 55, 55);
ellipse(200, 120, 55, 55);
ellipse(100, 120, 10, 10);
ellipse(200, 120, 10, 10);
fill('red');
triangle(122, 205, 150, 150, 178, 205);
line(70, 75, 130, 80);
line(170, 80, 230, 75);
stroke('red');
strokeWeight(4);
fill('#fae');
square(70, 280, 160, 10);
stroke('green');
strokeWeight(4);
ellipse(150, 350, 55, 55);
line(120, 330, 180, 375);
line(120, 390, 180, 390);
line(120, 310, 180, 310);
      pop();
    }
  }
}