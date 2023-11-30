
//image
let img1;
let img2;
let img3;
let img4;
let img5;
let currentImage;

let dash = 5;
let isDash = false;

let speed = 7;
let speed2 = 0;
let Pspeed = 1;

let x = 0;
let y = 0;

let x2 = 0;
let y2 = 0;

let x3 = 0;
let y3 = 0;

let x4 = 0;
let y4 = 0;

let x5 = 0;
let y5 = 0;

let x6 = 0;
let y6 = 0;

let x7 = 0;
let y7 = 0;


function preload() {
  img1 = loadImage('man2.png');
  img2 = loadImage('pee.png');
  img3 = loadImage('shit.png');
  img4 = loadImage('street.png');
  img5 = loadImage('won.png');
}
function setup() {
  createCanvas(700,700);
  x2 = width;
  x3 = width;
  let a = createA('page2.html', 'page2');
  a.position(0,0);
  a.hide();
}
function draw(){
  background(200);
  
    if(keyIsDown(68) && !isDash){
    y = y + dash;
    isDash = false;
  }
  
  image(img4, 0, 0, 700, 700);
  
  image(img1, x, y, 50, 50);
  image(img2, x2, y2, 40, 40);
  image(img3, x3, y3, 40, 40);
  
  image(img2, x4, y4, 40, 40);
  image(img3, x5, y5, 40, 40);
  
  image(img2, x6, y6, 40, 40);
  image(img3, x7, y7, 40, 40);
   
  x2 = x2-Pspeed;

  // set random spot for the images
   if (x2 < 0) {
     y2 = random(height);
     x2 = width;
   }
  x3 = x3-Pspeed;
   
   if (x3 < 0) {
     y3 = random(height);
     x3 = width;
   }
   
x4 = x4-Pspeed;

   if (x4 < 0) {
     y4 = random(height);
     x4 = width;
   }
  x5 = x5-Pspeed;
   
   if (x5 < 0) {
     y5 = random(height);
     x5 = width;
   }
  
  x6 = x6-Pspeed;

   if (x6 < 0) {
     y6 = random(height);
     x6 = width;
   }
  x7 = x7-Pspeed;
   
   if (x7 < 0) {
     y7 = random(height);
     x7 = width;
   }
   
  if (isColliding(x, y, 50, 50, x2, y2, 50, 50)) {
    // Reset the position of image1 to (0, 0)
    x = 0;
    y = 0;
  }
    if (isColliding(x, y, 50, 50, x3, y3, 50, 50)) {
    // Reset the position of image1 to (0, 0)
    x = 0;
    y = 0;
  }
    if (isColliding(x, y, 50, 50, x4, y4, 50, 50)) {
    // Reset the position of image1 to (0, 0)
    x = 0;
    y = 0;
  }
    if (isColliding(x, y, 50, 50, x5, y5, 50, 50)) {
    // Reset the position of image1 to (0, 0)
    x = 0;
    y = 0;
  }
    if (isColliding(x, y, 50, 50, x6, y6, 50, 50)) {
    // Reset the position of image1 to (0, 0)
    x = 0;
    y = 0;
  }
    if (isColliding(x, y, 50, 50, x7, y7, 50, 50)) {
    // Reset the position of image1 to (0, 0)
    x = 0;
    y = 0;
  }
    if (x >= 700) {
    image(img5, 0, 0, 700, 700);
    a.show();
  }
    // keyboard function
  if (keyIsDown(LEFT_ARROW || keyCode == 97)) {
    x -= speed;
  }
  if (keyIsDown(RIGHT_ARROW || keyCode == 58)) {
    x += speed;
  }
  if (keyIsDown(UP_ARROW || keyCode == 57)) {
    y -= speed;
  }
  if (keyIsDown(DOWN_ARROW || keyCode == 83)) {
    y += speed;
}
} 


  function isColliding(x1, y1, w1, h1, x2, y2, w2, h2) {
  return x1 + w1 > x2 && x1 < x2 + w2 && y1 + h1 > y2 && y1 < y2 + h2;
} //function that hepls to reset


