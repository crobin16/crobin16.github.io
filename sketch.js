var drumset;
var drumstickUp;
var drumstickDown;
var sounds = [];
var pads = [];

function preload(){
  drumset = loadImage("drum.png");
  drumstickUp = loadImage("drumsticksup.png");
  drumstickDown = loadImage("drumstickdown.png");
  sounds[0] = loadSound("horn.wav");
  sounds[1] = loadSound("box.aiff");
  sounds[2] = loadSound("symbol.aiff");
  sounds[3] = loadSound("clap.wav");
  sounds[4] = loadSound("ello.wav");
  sounds[5] = loadSound("priest.wav");
  sounds[6] = loadSound("screech.wav");
}

function setup() {
  createCanvas(windowWidth,windowHeight);

  pads[0] = new Pad(219, 97, 104);
  pads[1] = new Pad(283, 207, 75);
  pads[2] = new Pad(338, 36, 94);
  pads[3] = new Pad(350, 130, 90);
  pads[4] = new Pad(444,130,85);
  pads[5] = new Pad(555,176,100);
  pads[6] = new Pad(545,25,95);



}

function draw() {
  background(255);
  image(drumset, 0, 0, 800, 500);
  if (mouseIsPressed) {
    image(drumstickDown,mouseX-50 ,mouseY-50,150,150);
  }
  else {
    image(drumstickUp,mouseX-50,mouseY-50, 100,100);
  }
  fill(0);
  textSize(20);
  fill(255, 0, 0)

}

function mousePressed() {
  for (var x = 0; x<7; x++){
    if(pads[x].checkHit()) {
      sounds[x].play();
    }

  }
}

function keyPressed() {
  if (key == 'c') {

    sounds[0].play();
  }
  else if(key == 'v') {
    sounds[1].play();
  }

  else if(key == 'b'){
    sounds[2].play();
  }

  else if(key == 'n'){
    sounds[3].play();
  }
  else if(key == 'm'){
    sounds[4].play();
  }
  else if(key == 'd'){
    sounds[5].play();
  }
  else if(key == 'f'){
    sounds[6].play();

  }

}
function Pad (x,y,d){
  this.x = x
  this.y = y
  this.dia = d
  this.checkHit = function (){
    var x = (mouseX - this.x)*(mouseX - this.x);
    var y = (mouseY - this.y)*(mouseY - this.y);
    var dis = sqrt(x + y);
    if (dis < this.dia/2) {
      return true;
    }
    return false;
  }
}
