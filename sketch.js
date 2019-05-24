var img;
function preload(){
  img = loadImage('bg.png');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(255);
  image(img, 0, 0, width, height);

  // noFill();
  // stroke(200);
  // strokeWeight(1);
  // rect(600, 100, 90, 30, 15);
  // rect(720, 100, 90, 30, 15);
  // rect(840, 100, 90, 30, 15);
  // rect(960, 100, 90, 30, 15);

  noStroke();
  fill('#E3A72F');
  rect(140, 420, 90, 30, 15);
  textSize(13);
  textFont('Yantramanav');
  fill(255);
  textAlign(CENTER);
  text('Buy It Now', 185, 439);

  fill(100);
  text('About', 645, 120);
  text('How to Use', 765, 120);
  text('Comments', 885, 120);
  text('Customize', 1005, 120);

  mouse();

}


function mouse(){
if(mouseX>600&&mouseX<690&&mouseY>100&&mouseY<130){
  fill('#E3A72F');
  noStroke();
  rect(600, 100, 90, 30, 15);
  fill(255);
  text('About', 645, 120);
}


if(mouseX>720&&mouseX<810&&mouseY>100&&mouseY<130){
  fill('#058789');
  noStroke();
  rect(720, 100, 90, 30, 15);
  fill(255);
  text('How to Use', 765, 120);
}

if(mouseX>840&&mouseX<930&&mouseY>100&&mouseY<130){
  fill('#D54B1A');
  noStroke();
  rect(840, 100, 90, 30, 15);
  fill(255);
  text('Comments', 885, 120);
}

if(mouseX>960&&mouseX<1050&&mouseY>100&&mouseY<130){
  fill('#503D2E');
  noStroke();
  rect(960, 100, 90, 30, 15);
  fill(255);
  text('Customize', 1005, 120);
}

}

function mousePressed(){
  if(mouseX>720&&mouseX<810&&mouseY>100&&mouseY<130){
    fill('#058789');
    window.location.href = "customize.html";
  }

}
