/**
 * ART 101
 * Exercise 3 - Alien Creatures
 * Code by Olivia Joy Cacdac
 */

let t, wave; // for component rotation
let tilt, waveCt; // counters
let speedx, speedy, lox, loy;     // for alien1
let speedx2, speedy2, lox2, loy2; // for alien2
let speedx3, speedy3, lox3, loy3; // for alien3
let speedx4, speedy4, lox4, loy4; // for alien4
let size1, size1Ct, size3, size3Ct, size4, size4Ct;
let spinCt2, spinCt3, spinCt4; // for creature mystery values
let bgc;

function setup() {
  createCanvas(1000,600);
  bgc = color(10, 30, 60);
  background(bgc);
  fill(255);
  angleMode(DEGREES);
  rectMode(CENTER);

  lox = width/2;
  loy = height/3;
  speedx = 3;
  speedy = 8;
  
  lox2 = width/2;
  loy2 = height/3;
  speedx2 = 5;
  speedy2 = 3;

  lox3 = width/2;
  loy3 = height/3;
  speedx3 = 12;
  speedy3 = -9;

  lox4 = width/2;
  loy4 = height/3;
  speedx4 = -6;
  speedy4 = 5;

  wave = 0;
  waveCt = 4;
  t = 0;
  tilt = 1;

  size1 = 1.8;
  size1Ct = 0.005;

  size3 = 2.1;
  size3Ct = 0.01;

  size4 = 2.3;
  size4Ct = 0.009;

  spinCt2 = 0;
  spinCt3 = 0;
  spinCt4 = 0;
}

function draw() {
    background(bgc);

    // alien body color
    let ac = color(90, 230, 100);
    let ac2 = color(100, 200, 150);
    let ac3 = color(190, 210, 100);
    let ac4 = color(230, 190, 200);

    // spawn different variations of the obj (moving)
    ocAlien(ac, lox, loy, -50, size1); // wrap around and increase/decrease scale
    ocAlien2(ac2, lox2, loy2, 0, 1.5, spinCt2); // bounce and rotate
    ocAlien3(ac3, lox3, loy3, 100, size3, -spinCt3); // bounce, spin, and scale
    ocAlien3(ac4, lox4, loy4, 0, size4, spinCt4); // wrap around, spin, and scale

    // non moving aliens
    ocAlien(color(90, 170, 200), 200, 150, -10, 0.9, 0);
    ocAlien2(color(190, 230, 20), width-200, height-150, 20, 0.8, 0);
    ocAlien3(color(140, 190, 70), width/2, height/2 -10, 5, 1.2, 0);

    // scale change for alien1
    size1 -= size1Ct; 
    if (size1 < 0.25 || size1 > 1.8) {
      size1Ct = -size1Ct;
    }
    
    lox += speedx;
    loy += speedy;

    // bounce behavior
    if (lox > width || lox < 0) {
      speedx = -speedx;
    }
    if (loy > height || loy < 0) {
      speedy = -speedy;
    }

    spinCt2 += 0.75; // rotate for alien2
    lox2 += speedx2;
    loy2 += speedy2;
    if (lox2 > width || lox2 < 0) {
      speedx2 = -speedx2;
    }
    if (loy2 > height || loy2 < 0) {
      speedy2 = -speedy2;
    }

    spinCt3 += 5; // rotate for alien3
    // scale change for alien3
    size3 -= size3Ct; 
    if (size3 < 0.1 || size3 > 2.1) {
      size3Ct = -size3Ct;
    }
    lox3 += speedx3;
    loy3 += speedy3;
    if (lox3 > width || lox3 < 0) {
      speedx3 = -speedx3;
    }
    if (loy3 > height || loy3 < 0) {
      speedy3 = -speedy3;
    }

    spinCt4 += 2; // rotate for alien4
    size4 -= size4Ct; // scale change for alien4
    if (size4 < 0.1 || size4 > 2.3) {
      size4Ct = -size4Ct;
    }
    lox4 += speedx4;
    loy4 += speedy4;
    if (lox4 > width || lox4 < 0) {
      speedx4 = -speedx4;
    }
    if (loy4 > height || loy4 < 0) {
      speedy4 = -speedy4;
    }

    // count for arm wave
    wave += waveCt;
    if (wave > 50 || wave < 0)
      waveCt = -waveCt;

    // count for head tilt
    t += tilt;
    if (t > 50 || t < 0)
      tilt = -tilt;
}

function ocAlien(k, lx, ly, r, sc) {
  push();
  translate(lx, ly); // the anchor point
  rotate(r);
  scale(sc);

  // creature components - use of child functions
  ocShip(color(150), 0, 50, 0, 1.0, 0);
  ocBody(k);
  ocHead(k, 0, -80, 0, 1.5, 0);
  ocUpperArm(k, -40, -20, 50, 1.0, 0); // left arm
  ocLowerArm(k, -65, 10, -330, 1.0, 0);
  ocUpperArm(k, 40, -50, -140, 1.0, 0); // right arm
  ocLowerArm(k, 55, -80, -200+wave, 1.0, 0); // wave
  ocShipCap(color(200, 150, 150, 70), 0, -70, 0, 1.0, 0);
  pop();
}

function ocAlien2(k, lx, ly, r, sc, q) {
  push();
  translate(lx, ly); // the anchor point
  rotate(r+q); // spin
  scale(sc);

  ocShip(color(150), 0, 50, 0, 0.9, 0);
  ocBody(k);
  ocHead2(k, 0, -80, -22+t, 1.3, 0); // head tilt
  ocUpperArm(k, -50, -25, 70, 1.0, 0); // left arm
  ocLowerArm(k, -62, 0, -40, 1.0, 0);
  ocUpperArm(k, 50, -25, -70, 1.0, 0); // right arm
  ocLowerArm(k, 62, 0, 40, 1.0, 0);
  ocShipCap(color(150, 200, 150, 70), 0, -70, 0, 1.0, 0);
  pop();
}

function ocAlien3(k, lx, ly, r, sc, q) {
  push();
  translate(lx, ly); // the anchor point
  rotate(r+q); // spin
  scale(sc);

  ocShip(color(150), 0, 50, 0, 0.9, 0);
  ocBody(k);
  ocHead(k, 0, -70, -15, 1.2, 0);
  ocUpperArm(k, -40, -50, 150, 1.0, 0); // left arm
  ocLowerArm(k, -45, -85, 180+wave, 1.0, 0); // wave
  ocUpperArm(k, 50, -50, -120, 1.0, 0); // right arm
  ocLowerArm(k, 70, -75, 160+wave, 1.0, 0); // wave
  ocShipCap(color(150, 150, 200, 70), 0, -70, 0, 1.0, 0);
  pop();
}

function ocBody(k) { // a child function
  fill(k);
  rect(0, 0, 60, 80, 10, 10, 0, 0);
}

// head with happy face
function ocHead(k, lx, ly, r, sc) { // a child function
  push();
  translate(lx, ly);
  rotate(r);
  scale(sc);

  fill(k);
  ellipse(0, 0, 50, 50); // circle part of head
  beginShape();
  vertex(-20, 15); // left point
  vertex(0, 40);   // pointed end
  vertex(20, 15);  // right point
  endShape();

  ocFace1(); // use of sub function
  pop();
}

// head with angry face
function ocHead2(k, lx, ly, r, sc) {
  push();
  translate(lx, ly);
  rotate(r);
  scale(sc);

  fill(k);
  ellipse(0, 0, 50, 50);
  beginShape();
  vertex(-20, 15); // left point
  vertex(0, 40);   // pointed end
  vertex(20, 15);  // right point
  endShape();

  ocFace2(); // use of sub function
  pop();
}

// happy face
function ocFace1() { // custom function, no args
  // eyes are rotated, passed as param
  ocEye(color(20, 90, 130), -10, 0, -20, 1.0, 0); // left eye
  ocEye(color(20, 90, 130), 10, 0, 20, 1.0, 0); // right eye
  fill(0);
  arc(0, 15, 10, 15, PI, 180); // mouth

}

// angry face
function ocFace2() { // another custom funct, no args
  // eyes are rotated, passed as param
  ocEye(color(90, 20, 20), -10, 0, -20, 1.0, 0); // left eye
  ocEye(color(90, 20, 20), 10, 0, 20, 1.0, 0); // right eye

  line(-15,-13, -5, -6); // slanted eyebrows
  push();
  rotate(180);
  line(-15,13, -5, 6); // other eyebrow
  pop();

  fill(0);
  arc(0, 20, 12, 20, 180, PI); // mouth
}

function ocEye(k, lx, ly, r, sc) {
  push();
  translate(lx, ly);
  rotate(r);
  scale(sc);
  fill(k);
  ellipse(0,0, 10, 15); // the eye
  pop();
}

function ocUpperArm(k, lx, ly, r, sc) {
  push();
  translate(lx, ly);
  rotate(r);
  scale(sc);
  fill(k);
  rect(0, 0, 18, 55, 5, 5, 30, 30); // arm
  pop();

}

function ocLowerArm(k, lx, ly, r, sc) {
  push();
  translate(lx, ly);
  rotate(r);
  scale(sc);
  fill(k);
  rect(0,0, 15, 40, 30, 30, 5, 5); // arm
  ellipse(0, 30, 20, 20); // hand
  pop();
}

function ocShip(k, lx, ly, r, sc) {
  push();
  translate(lx, ly);
  rotate(r);
  scale(sc);

  fill(147, 245, 230, 150);
  ellipse(0,25, 330, 130); // glow

  fill(k);
  ellipse(0,0, 400, 110); // ship body

  let ranR = random(255);
  fill(200, 230, ranR);
  ellipse(0, 30, 15, 15); // flashing lights
  ellipse(60, 25, 15, 15);
  ellipse(120, 15, 15, 15);
  ellipse(160, -5, 15, 15);
  ellipse(-60, 25, 15, 15);
  ellipse(-120, 15, 15, 15);
  ellipse(-160, -5, 15, 15);
  pop();
}

function ocShipCap(k, lx, ly, r, sc) {
  push();
  translate(lx, ly);
  rotate(r);
  scale(sc);
  fill(k);
  arc(0, 110, 275, 380, 180, PI); // over cover
  arc(3, 110, 280, 45, PI, 180);  // under
  pop();
}
