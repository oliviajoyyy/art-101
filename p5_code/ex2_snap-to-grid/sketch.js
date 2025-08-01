/*
 * Art 101-01
 * Exercise 2 - Snap to Grid
 * Olivia Joy Cacdac
 */

let cx,cy;
let bgc;
let blueChange;
let blueCount;
let red;
let diamond;
let gridSize;
let turtle, dolphin, fish;
let currentImg;
let value = 0;
let f;
let counterText = 0;

function preload() {
  // load font and images
  f = loadFont('assets/prida65.otf');
  turtle = loadImage("assets/turtle.png");
  dolphin = loadImage("assets/dolphin.png");
  fish = loadImage("assets/fish.png");
}

function setup() {
    createCanvas(880, 680);
    background(255);
    rectMode(CENTER);

    blueChange = true;
    blueCount = 200;
    red = 20;
    diamond = false;

    currentImg = turtle;
    let t = color("#cc99ff"); // light purple
    tint(t);
    cx = width/2; // center of the canvas, for image placement
    cy = height/2;
    gridSize = 80; // size of the image

    textFont(f);
    textAlign(CENTER);
    counterText = height;
}

function draw() {
    let diamondColor = color("#e6eda4"); // light yellow

    // reset blue count when reaches below 0
    if (blueCount < 0) {
      blueCount = 255; 
    }

    // decrement blue count only when allowed (by toggle logic)
    if (blueChange) {
      blueCount--;
    }
    console.log("blue : " + blueCount);
    
    // background fade
    bgc = color(red, 170, blueCount, 5);  // higher alpha = more fade
    fill(bgc);
    rect(width/2,height/2,width, height);

    // RETURN key for toggle diamond or square border
    if (!diamond) { // not diamond, so draw square border
      for (let i=20; i<width; i+=80) {
        fill(value);
        rect(i, 20, 20, 20);
        rect(i, height-20, 20, 20);
      }
      for (let i=60; i<width; i+=80) {
        fill(255-value);
        rect(i, 20, 20, 20);
        rect(i, height-20, 20, 20);
      }
      for (let i=20; i<height-20; i+=80) {
        fill(value);
        rect(20, i, 20, 20);
        rect(width-20, i, 20, 20);
      }
      for (let i=60; i<height-20; i+=80) {
        fill(255-value);
        rect(20, i, 20, 20);
        rect(width-20, i, 20, 20);
      }
    }
    else { // draw diamond border
      fill(diamondColor);
      for (let i=20; i<width; i+=40) {
        quad(i-20, 20, i, 20-20, i+20, 20, i, 20+20);
        quad(i-20, height-20, i, height-40, i+20, height-20, i, height);
      }
      for (let i=60; i<height-20; i+=40) {
        quad(0, i, 20, i-20, 20+20, i, 20, i+20);
        quad(width-20-20, i, width-20, i-20, width, i, width-20, i+20);
      }
    }
 
    // trigger keyChoice for drawing any key is pressed
    if(keyIsPressed) {
      imageChoice();
       keyChoice();
       
    }

    // continuously press both mouse and any key to trigger moving text
    if(mouseIsPressed && keyIsPressed) {
      textSize((counterText)/2.5);
      text("Hello", width/2, counterText);
      counterText-=2.5; // counter decrements, use for text size & position
      if (counterText < -50) {
        counterText = height;
      } 
    }
}

function keyChoice() {
  // switch statment
  switch(key) {
  case 'a':
    console.log("a left");  // left
    // only move position if going left does not go off canvas
    if (cx-gridSize >= 0) {
      cx+= -gridSize; // cx -= gridsize move left
    }
    image(currentImg,cx,cy,gridSize,gridSize);
    break;
  case 'w':
    console.log("w up");  // up
    if (cy-gridSize >= 0) {
      cy+= -gridSize; 
    }
    image(currentImg,cx,cy,gridSize,gridSize);
    break;
  case 'd':
    console.log("d  right");  //right
    if (cx+gridSize <= width-gridSize) {
      cx+= gridSize;
    }
    image(currentImg,cx,cy,gridSize,gridSize);
    break;
  case 's':
    console.log("s back");  // back
    if (cy+gridSize <= height-40) {
      cy+= gridSize;
    }
    image(currentImg,cx,cy,gridSize,gridSize);
    break;
  case 'e':
      console.log("up right diagonal");  // up right
      if ((cy-gridSize >= 0) && (cx+gridSize <= width-gridSize)) {
        cy+= -gridSize; 
        cx+= gridSize;
      }
      image(currentImg,cx,cy,gridSize,gridSize);
      break;
  case 'q':
      console.log("up left diagonal");  // up left
      if ((cy-gridSize >= 0) && (cx-gridSize >= 0)) {
        cy+= -gridSize; 
        cx+= -gridSize;
      }
      image(currentImg,cx,cy,gridSize,gridSize);
      break;
  default:             // executes when case doesn't match switch param
    console.log("None");
    break;
  }
  key = "";  // empty key so it does not double trigger

}

function imageChoice() {
  switch(key) {
  case '1':
      currentImg = turtle; // choose turtle img
      break;
  case '2':
      currentImg = dolphin; // choose dolphin img
      break;
  case '3':
      currentImg = fish; // choose fish img
      break;
  default:             // executes when case doesn't match switch param
    console.log("None");
    break;
  }
}

function mouseMoved() {
  // change greyscale value of square border when mouse moves
  value += 3; // lower value = slower color change
  if (value > 255) {
    value = 0;
  }
}

function keyPressed() { 
  // toggle logic - change red value for background color & turn off blue change
  if ( key == 'r' || key == 'R' ) { 
    if (red == 20) { 
      red = 255;
      blueChange = false;
    } else { 
      red = 20;
      blueChange = true;
    }
  }

  // toggle logic - turn on/off diamond border
  if (keyCode == RETURN) {
    if (diamond == false) {
      diamond = true;
    }
    else {
      diamond = false;
    }
  }
}

function mousePressed() {
  // print text at mouse position when clicked, according to current image
  textSize(40);
  let textColor = color("#efff5c");
  fill(textColor);
  if (currentImg == turtle) {
    text("Turtle!", mouseX, mouseY);
  }
  else if (currentImg == dolphin) {
    text("Dolphin!", mouseX, mouseY);
  }
  else if (currentImg == fish) {
    text("Fish!", mouseX, mouseY);
  }
}