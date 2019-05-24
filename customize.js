var img;
function preload(){
  img = loadImage('bg2.png');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  image(img, 0, 0, width, height);

}
