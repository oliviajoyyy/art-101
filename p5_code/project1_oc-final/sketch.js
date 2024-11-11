/**
 * Art 101-01
 * Project 1 - Algorithmic Brushes (using paint template)
 * Code by Olivia Joy Cacdac
 */
let currentkey = '1';
let bgc;
let drawSize;
let greyScale;
let strokeColor;

function setup() {
  createCanvas(1000, 670);
  //bgc = color(150, 50, 60);
  bgc = color(230);
  background(bgc);
  smooth();
  rectMode(CENTER);
  ellipseMode(CENTER);
  drawSize = 15;
  greyScale = false;
  strokeColor = color(200, 230, 20);
}

function draw() {
  if( keyIsPressed) {
    clear_print(); // checks if 'x' clicked to clear canvas
    toggle_change(); // check for changes in greyscale or size
  }
  // triggering new keychoice for drawing
  if(mouseIsPressed) {
    drawChoice();
  }
}

function drawChoice() {
  let currentkey = key; // key global var contains last key pressed

  switch(currentkey) {
  case '1':
    console.log("Tool 1: ocPetal");
    ocPetal(strokeColor, mouseX, mouseY, pmouseX, pmouseY);
    break;
  case '2':
    console.log("Tool 2: ocSpikes");
    ocSpikes(strokeColor, mouseX, mouseY, pmouseX, pmouseY);
    break;
  case '3':
    console.log("Tool 3: ocSpots");
    ocSpots(drawSize, 220, mouseX, mouseY);
    break;
  case '4':
    console.log("Tool 4: ocStitch");
    ocStitch(strokeColor, random(-10,10), mouseX, mouseY, pmouseX, pmouseY);
    break;
  case '5':
    console.log("Tool 5: ocDiamond");
    ocDiamonds(drawSize, mouseX);
    break;
  case '0':
    console.log("Tool 0: eraser");  // erase with background color
    eraser(drawSize, mouseX, mouseY, pmouseX, pmouseY);
    break;
  default:
    console.log("None");
    break;
  }
}

function toggle_change() {
  let currentkey = key;

  switch(currentkey) {
    case '+':
      // increase size up to max 120
      if (drawSize+5 <= 120) {
        drawSize += 5
      }
      console.log("draw size: " + drawSize);
      break;
    case '-':
      // decrease size down to min 5
      if (drawSize-5 >= 5) {
        drawSize -= 5;
      }
      console.log("draw size: " + drawSize);
      break;
    case 'g':
      // toggle tools between greyscale and color
      if (greyScale == true) {
        greyScale = false
      } else {
        greyScale = true;
      }
      console.log("greyscale: " + greyScale);
      break;
    default:
      console.log("None");
      break;
  }
   key = ""; // empty key to not double trigger
}

/**
 * Function: ocPetal
 *   Draws lotus-like petals, based at the bottom of the canvas in a burgundy
 *   or greyscale color scheme
 * @param strCol - stroke color
 * @param lx - x position for point of petal
 * @param ly - y position for point of petal
 * @param px - x position for bezier curve control point
 * @param py - y position for bezier curve control point
 */
function ocPetal(strCol, lx, ly, px, py) {
  strokeWeight(1);
  //stroke(0);
  stroke(strCol);
  if (greyScale) {
    fill((width-lx)%255, (width-lx)%100);
  } else {
    // burgundy color scheme
    let rb = random(20, 70);
    fill(50, 20, rb, random(110, 190)); 
  }

  // draw petal shape based at bottom of canvas
  beginShape();
  vertex(lx, ly);
  bezierVertex(width*1.5, (height*1.5), -px, -py+(height*2), lx, ly); 
  endShape();
}

/**
 * Function: ocSpikes
 *    Draws spikes in a red or greyscale color scheme
 * @param strCol - stroke color
 * @param lx - x position for base of the spike
 * @param ly - y position for base of the spike
 * @param px - x position for connection point of new spikes
 * @param py - y position for connection point of new spike
 */
function ocSpikes(strCol, lx, ly, px, py) {
  //stroke(0);
  strokeWeight(1);
  stroke(strCol);
  if (greyScale) {
    fill((width-lx)%255);
  } else {
    // red color scheme
    fill(((width-lx)%230), 10, 20); 
  }

  let r = random(-10, 10);
  let r2 = random(-20, 20);
  
  beginShape();
  vertex(lx, ly);
  // spikes change direction near sides and upper edge of canvas
  bezierVertex(px+r, py+r2, width-px, py*4, px, py);
  endShape();
}

/**
 * Function: ocSpots
 *    Draws ellipses in a random position around lx, ly with a random height
 *    and width added to the base size, in a maroon or greyscale color scheme
 * @param spSize - base size of the ellipse
 * @param alphaVal - alpha value for the ellipses
 * @param lx - x position to draw ellipse
 * @param ly - y position to draw ellipse
 */
function ocSpots(spSize, alphaVal, lx, ly) {
  //stroke(0);
  noStroke();
  if (greyScale) {
    fill(random(255), alphaVal);
  } else {
     // maroon color scheme
    let rr = random(75, 170);
    let rg = random(25, 55);
    let rb = random(30, 80);
    fill(rr, rg, rb, alphaVal);
  }

  // for random position around x,y location
  let ranX = random(-50, 50);
  let ranY = random(-50, 50);
  
  // random height and width beyond size param
  ellipse(lx+ranX, ly+ranY, spSize+(ranY/2),spSize+(abs(ranX/30)));
}

/**
 * Function: ocStitch
 *    Draws a line with a criss-cross stitch pattern in yellow or black
 * @param strCol - stroke color
 * @param lnSize - length of the criss-cross lines
 * @param lx - x position to draw lines
 * @param ly - y position to draw lines
 * @param px - x position connection point for lines
 * @param py - y position connection point for lines
 */
function ocStitch(strCol, lnSize, lx, ly, px, py) {
  if (greyScale) {
    stroke(0);
    strokeWeight(2);
    line(lx, ly, px, py); // base line
    line(px+lnSize, py+lnSize, px-lnSize, py-lnSize); // slanted left lines (\)
    line(px-lnSize, py+lnSize+4, px+lnSize, py-lnSize); // slanted right lines (/)
  } else {
    // black outline on the yellow line
    stroke(0);
    strokeWeight(3);
    line(lx, ly, px, py); // base line
    line(px+lnSize, py+lnSize, px-lnSize, py-lnSize); // slanted left lines (\)
    line(px-lnSize, py+lnSize+4, px+lnSize, py-lnSize); // slanted right lines (/)
    // yellow line
    stroke(strCol);
    strokeWeight(2);
    line(lx, ly, px, py); // base line
    line(px+lnSize, py+lnSize, px-lnSize, py-lnSize); // slanted left lines (\)
    line(px-lnSize, py+lnSize+4, px+lnSize, py-lnSize); // slanted right lines (/)
  }
}

/**
 * Function: ocDiamonds
 *    Draws diamonds at random Y positions at the X position in red or black
 * @param sz -  size of the diamonds
 * @param lx - x position where diamonds are placed
 */
function ocDiamonds(sz, lx) {
  if (greyScale) {
    stroke(255);
    fill(0, 90);
  } else {
    stroke(200, 230, 20);
    fill(250, 0, 0, 90); // red
  }

  // draw quad shapes as diamonds following x position
  for (let i = 0; i < 25; i += 2) {
    let py = random(0, height); // random y position
    quad(lx-sz, py, lx, py-sz, lx+sz, py, lx, py+sz); // diamond
   }
}

/**
 * Eraser - draws a line in the same color as the background color
 * @param erSize - size of the eraser line
 */
function eraser(erSize, lx, ly, px, py) {
  stroke(bgc);
  strokeWeight(erSize);
  line(lx, ly, px, py);
}

function clear_print() {
  // clear the canvas to background color with 'x' or 'X'
  // save the current image as a file with 'p' or 'P'
  if (key == 'x' || key == 'X') {
    background(bgc);
  } else if (key == 'p' || key == 'P') {
    saveFrames('image-0', 'png', 1, 1);
    key = '';  // resets the key so it does not make more than one image.
  }

}

