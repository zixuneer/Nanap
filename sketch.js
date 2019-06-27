var img;
var clanpro;
function preload(){
  img = loadImage('bg.png');
  clanpro = loadFont('clanpro.otf');
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
  //rect(140, 420, 90, 30, 15);
  rect(width/9.2, height/1.57, 90, 30, 15);
  textSize(10);
  textFont(clanpro);
  fill(255);
  textAlign(CENTER);
  //text('Buy It Now', 185, 439);
  text('Buy It Now', width/9.2 + 45, height/1.57 + 19);

  fill(140);
  text('About', width/2.13+45, height/6.6+20);
  text('How to Use', width/2.13+165, height/6.6+20);
  text('Comments', width/2.13+285, height/6.6+20);
  text('Customize', width/2.13+405, height/6.6+20);

  mouse();

}


function mouse(){
if(mouseX>width/2.13&&mouseX<width/2.13+90&&mouseY>height/6.6&&mouseY<height/6.6+30){
  fill('#E3A72F');
  noStroke();
  //rect(600, 100, 90, 30, 15);
  rect(width/2.13, height/6.6, 90, 30, 15);
  fill(255);
  text('About', width/2.13+45, height/6.6+20);
}

if(mouseX>width/2.13+120&&mouseX<width/2.13+210&&mouseY>height/6.6&&mouseY<height/6.6+30){
  fill('#058789');
  noStroke();
  //rect(720, 100, 90, 30, 15);
  rect(width/2.13+120, height/6.6, 90, 30, 15);
  fill(255);
  text('How to Use', width/2.13+165, height/6.6+20);
}

if(mouseX>width/2.13+240&&mouseX<width/2.13+330&&mouseY>height/6.6&&mouseY<height/6.6+30){
  fill('#D54B1A');
  noStroke();
  //rect(840, 100, 90, 30, 15);
  rect(width/2.13+240, height/6.6, 90, 30, 15);
  fill(255);
  text('Comments', width/2.13+285, height/6.6+20);
}

if(mouseX>width/2.13+360&&mouseX<width/2.13+450&&mouseY>height/6.6&&mouseY<height/6.6+30){
  fill('#503D2E');
  noStroke();
  //rect(960, 100, 90, 30, 15);
  rect(width/2.13+360, height/6.6, 90, 30, 15);
  fill(255);
  text('Customize', width/2.13+405, height/6.6+20);
}

}

function mousePressed(){

  if(mouseX>width/9.2&&mouseX<width/9.2+90&&mouseY>height/1.57&&mouseY<height/1.57+30){
    fill('#E3A72F');
    window.location.href = "customize.html";
  }

  if(mouseX>width/2.13&&mouseX<width/2.13+90&&mouseY>height/6.6&&mouseY<height/6.6+30){
    fill('#E3A72F');
    window.location.href = "index.html";
  }

  if(mouseX>width/2.13+120&&mouseX<width/2.13+210&&mouseY>height/6.6&&mouseY<height/6.6+30){
    fill('#058789');
    window.location.href = "use.html";
  }

  if(mouseX>width/2.13+240&&mouseX<width/2.13+330&&mouseY>height/6.6&&mouseY<height/6.6+30){
    fill('#D54B1A');
    window.location.href = "comment.html";
  }

  if(mouseX>width/2.13+360&&mouseX<width/2.13+450&&mouseY>height/6.6&&mouseY<height/6.6+30){
    fill('#503D2E');
    window.location.href = "customize.html";
  }

}
