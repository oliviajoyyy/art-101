/**
 * ART 101
 * Exercise 3 - Character Combined Code
 * Code by Olivia Joy Cacdac, combined with Jake's code
 */

let waveCt = 0;
let speedx, speedy, lox, loy;
let counter1;

function setup() {
  createCanvas(500,500);
  background(20);
  fill(255);
  angleMode(DEGREES);

  speedx = random(-5, 5);
  speedy = random(-5, 5);
  lox = 100;
  loy = 150;

  counter1 = 0;
}

function draw() {
    background(20);

    let tc = color(110, 190, 250);
    let tc2 = color(120, 220, 90);
    counter1 += 0.25; // increse

    lox += speedx;
    loy += speedy;
    if (lox > width || lox < 0) {
      speedx = -speedx;
    }
    if (loy > height || loy < 0) {
      speedy = -speedy;
    }

    // can spawn different variations of the obj using the template
    toon1(tc, lox, loy, 0, 1.0, counter1); // moving
    toon2(tc2, 300, 150, 0, 1.0, 0); // combined toon

    // ct for arm rotation
    waveCt++;
    if (waveCt > 20) {
      waveCt = 0;
    }
}

// my toon character
function toon1(k, lx, ly, r, sc, q) {
  push();
  translate(lx, ly); // the anchor point
  rotate(r+q);
  scale(sc);

  // bodyparts
  ocBody(); // translate carries over into the function
  ocHead(k, 30, -30, 0, 1.0, 0); // describe where what head to be
  ocLeg(k, 0, 85, 10, 1.0, 0);
  ocLeg(k, 35, 90, 10, 1.0, 0);
  ac = color(75, 70);
  ocArm(ac, 60, 20, -130, 1.0, 0); // shadow arm
  ocArm(ac, 60, 20, -110, 1.0, 0); // shadow arm
  ocArm(k, -5, 0, 30, 1.0, 0); // left arm
  ocArm(k, 60, 20, -130+waveCt, 1.0, 0); // right arm, waving

  pop();
}

// combined toon character with Jake's function for the arm
function toon2(k, lx, ly, r, sc, q) {
  push();
  translate(lx, ly); // the anchor point
  rotate(r);
  scale(sc);

  // bodyparts
  ocBody(); // translate carries over into the function
  ocHead(k, 30, -30, 0, 1.0, 0); // describe where what head to be
  ocLeg(k, 0, 85, 15, 1.0, 0);
  ocLeg(k, 35, 90, 0, 1.0, 0);

  arm2(k, 0, 20, 130, 1.0, 0);  // Jake's arm function
  arm2(k, 50, 5,-130+waveCt, 1.0, 0); // Jake's arm function
  pop();
}

// my function
function ocBody() { // child function of toon
  fill(200);
  rect(0, 0, 60, 100, 10, 10, 25, 25);
}

// my function
function ocHead(k, lx, ly, r, sc, q) { // uses obj template
  push();
  translate(lx, ly);
  rotate(r);
  scale(sc);

  fill(k);
  ellipse(0,0, 50, 70); // head, anchor for this object

  fill(255);
  ellipse(-10, -10, 10, 10); // eye
  ellipse(10, -10, 10, 10); // eye

  fill(0);
  ellipse(-10, -10, 5, 5); // eye fill
  ellipse(10, -10, 5, 5); // eye fill
  
  noFill();
  arc(0, 12, 20, 15, PI, 180); // mouth
  triangle(0,-2, -4, 7, 4, 7); // nose

  pop();
}

// my function
function ocLeg(k, lx, ly, r, sc, q) { // uses obj template
  push();
  translate(lx, ly);
  rotate(r);
  scale(sc);

  // bodyparts
  fill(k);
  rect(0,0, 25, 100, 10); // leg, anchor for this object

  pop();
}

// my function
function ocArm(k, lx, ly, r, sc, q) {
  push();
  translate(lx, ly);
  rotate(r);
  scale(sc);

  // bodyparts
  fill(k);
  rect(0, 0, 20, 70, 5, 5, 30, 30); // arm, anchor for this object
  ellipse(10, 77, 20, 20); // hand

  pop();
} // end my function

// code from Jake R
function arm2(k,lx,ly,r,sc,q){ 

  push();
  translate(lx,ly);
  rotate(r);
  scale(sc);

  //bodyparts
  
  //left arm
  fill(k)
  rect(-20,50,20,50,0,0,25,25);
  fill(255,0,0);
  rect(-20,0,20,60,10,10,0,0);
  pop();
} // end Jake's code
