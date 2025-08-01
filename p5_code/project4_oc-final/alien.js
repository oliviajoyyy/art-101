/**
 * ART 101 - Final Project
 * alien.js
 * Code by Olivia Joy Cacdac
 */

class ocAlien {

k;
lx;
ly;
r;
sc;
motion;
motionCt;
sizeCt;

// color, lx, ly, rotation, scale, speedx, speedy, spinspeed
constructor (lk, llx, lly, lrot, lsc) {
  this.k = lk;
  this.lx = llx;
  this.ly = lly;
  this.r = lrot;
  this.sc = lsc;
  this.motion = 0;
  this.motionCt = 2;
  this.sizeCt = 0.01;
}

/**
 * Displays a happy alien with both arms up
 */
displayHappy() {
  push();
  translate(this.lx, this.ly); // the anchor point
  rotate(this.r);
  scale(this.sc);
  stroke(0);

  this.ocShip(color(150), 0, 55, 0, 0.9, 0);

  push(); // alien body
  translate(0, -10);
  this.ocBody(this.k);
  this.ocHead(this.k, 0, -70, -15, 1.2, 0);
  this.ocUpperArm(this.k, -40, -50, 150, 1.0, 0); // left arm
  this.ocLowerArm(this.k, -50, -85, 180+this.motion, 1.0, 0); // wave
  this.ocUpperArm(this.k, 50, -45, -120, 1.0, 0); // right arm
  this.ocLowerArm(this.k, 70, -70, 160+this.motion, 1.0, 0); // wave
  pop();

  this.ocShipCap(color(150, 150, 200, 70), 0, 20, 0, 1.0, 0);

  pop();
}

/**
 * Displays a happy alien
 */
displayAlien() {
  push();
  translate(this.lx, this.ly); // the anchor point
  rotate(this.r);
  scale(this.sc);
  stroke(0);
  fill(this.k);

  rect(-15, 100, 23, 85, 5);
  rect(15, 100, 23, 85, 5);
  ellipse(-15, 145, 30, 20);
  ellipse(15, 145, 30, 20);
  this.ocUpperArm(this.k, 45, -30, -90+(-this.motion), 1.05, 0); // right arm
  this.ocLowerArm(this.k, 70, -30, -70+this.motion, 1.05, 0); // wave
  rect(0, 12, 60, 95, 10);
  this.ocHead(this.k, 0, -70, -15, 1.3, 0);
  this.ocUpperArm(this.k, -5, -18, -55+(-this.motion), 1.05, 0); // left arm
  this.ocLowerArm(this.k, 30, -3, -90+this.motion, 1.05, 0); // wave

  pop();
}

/**
 * Displays an angry alien
 */
displayAngry() {
  push();
  translate(this.lx, this.ly); // the anchor point
  rotate(this.r);
  scale(this.sc);
  stroke(0);
  
  this.ocShip(color(150), 0, 50, 0, 0.9, 0);
  this.ocBody(this.k);
  this.ocHead2(this.k, 0, -75, -22+this.motion, 1.3, 0); // head tilt
  this.ocUpperArm(this.k, -50, -25, 70, 1.0, 0); // left arm
  this.ocLowerArm(this.k, -62, 0, -40, 1.0, 0);
  this.ocUpperArm(this.k, 50, -25, -70, 1.0, 0); // right arm
  this.ocLowerArm(this.k, 62, 0, 40, 1.0, 0);
  this.ocShipCap(color(170, 120, 100, 70), 0, -70, 0, 1.0, 0);
  pop();
}

/**
 * Controls motion for both head tilts and waving arms
 */
ocMotion(a) {
  this.motion += this.motionCt;
  if (this.motion > a || this.motion < 0) {
    this.motionCt = -this.motionCt;
  }
}

/**
 * Moves the object according to the given parameters
 */
ocMove(lspx, lspy) {
  this.lx += lspx;
  this.ly += lspy;
  if (this.lx > width) {
    this.lx = width;
  } 
  if (this.lx < 0) {
    this.lx = 0;
  }
  if (this.ly > height) {
    this.ly = height;
  } 
  if (this.ly < 0) {
    this.ly = 0;
  }
}

/**
 * Controls object's bounce movement around the canvas
 * according to the given speed
 */
ocBounce(lspx, lspy) {
  this.lx += lspx;
  this.ly += lspy;
  if (this.lx > width || this.lx < 0) {
    lspx = -lspx;
  }
  if (this.ly > height || this.ly < 0) {
    lspy = -lspy;
  }
}

/**
 * Controls the spin (rotation) of the object
 * according to the given spin speed
 */
ocSpin(lsp) {
  this.r += lsp;
}

setR(r) {
  this.r = r;
}

/**
 * Controls the increasing/decreasing scale of the object
 */
ocScale() {
  this.sc -= this.sizeCt;
    if (this.sc < 0.2 || this.sc > 1.2) {
      this.sizeCt = -this.sizeCt;
    }
}

/**
 * Draws the alien body
 * @param k color
 */
ocBody(k) { // a child function
  fill(k);
  rect(0, 0, 60, 80, 10, 10, 5, 5);
}

/**
 * Draws the head with a happy face
 * Params: color, x, y, rotation, scale
 */
ocHead(k, lx, ly, r, sc) { // a child function
  push();
  translate(lx, ly);
  rotate(r);
  scale(sc);

  // head shape
  fill(k);
  ellipse(0, 0, 50, 50); // circle part of head
  beginShape();
  vertex(-20, 15); // left point
  vertex(0, 40);   // pointed end
  vertex(20, 15);  // right point
  endShape();

  this.ocFaceHappy(); // use of subfunction (happy face)

  pop();
}

/**
 * Draws the head with an angry face
 * Params: color, x, y, rotation, scale
 */
ocHead2(k, lx, ly, r, sc) {
  push();
  translate(lx, ly);
  rotate(r);
  scale(sc);

  // head shape
  fill(k);
  ellipse(0, 0, 50, 50);
  beginShape();
  vertex(-20, 15); // left point
  vertex(0, 40);   // pointed end
  vertex(20, 15);  // right point
  endShape();

  this.ocFaceAngry(); // use of sub function

  pop();
}

/**
 * Draws a happy face
 */
ocFaceHappy() { // custom function w/out args
  this.ocEye(color(20, 90, 130), -10, 0, -20, 1.0, 0); // left eye
  this.ocEye(color(20, 90, 130), 10, 0, 20, 1.0, 0); // right eye
  fill(0);
  arc(0, 15, 10, 15, PI, 180); // mouth

}

/**
 * Draws an angry face
 */
ocFaceAngry() {
  this.ocEye(color(90, 20, 20), -10, 0, -20, 1.0, 0); // left eye
  this.ocEye(color(90, 20, 20), 10, 0, 20, 1.0, 0); // right eye

  line(-15,-13, -5, -6); // angry eyebrows
  push();
  rotate(180);
  line(-15,13, -5, 6);
  pop();

  fill(0);
  arc(0, 20, 12, 20, 180, PI); // mouth
}

/**
 * Draws one eye
 */
ocEye(k, lx, ly, r, sc) {
  push();
  translate(lx, ly);
  rotate(r);
  scale(sc);
  fill(k);
  ellipse(0,0, 10, 15); // the eye
  pop();
}

/**
 * Draws an upper arm (shoulder)
 */
ocUpperArm(k, lx, ly, r, sc) {
  push();
  translate(lx, ly);
  rotate(r);
  scale(sc);

  fill(k);
  rect(0, 0, 18, 55, 5, 5, 30, 30); // arm

  pop();

}

/**
 * Draws a lower arm with a hand
 */
ocLowerArm(k, lx, ly, r, sc) {
  push();
  translate(lx, ly);
  rotate(r);
  scale(sc);

  fill(k);
  rect(0,0, 15, 40, 30, 30, 5, 5); // arm
  ellipse(0, 30, 20, 20); // hand

  pop();
}

/**
 * Draws the space ship body
 * Params: color, x, y, rotation, scale
 */
ocShip(k, lx, ly, r, sc) {
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
  this.ocLight(color(200, 230, ranR), 0, 25, 0); // flashing lights
  this.ocLight(color(200, 230, ranR), 60, 22, -25);
  this.ocLight(color(200, 230, ranR), -60, 22, 25);
  this.ocLight(color(200, 230, ranR), 120, 12, -45);
  this.ocLight(color(200, 230, ranR), -120, 12, 45);
  this.ocLight(color(200, 230, ranR), 165, -5, -65);
  this.ocLight(color(200, 230, ranR), -165, -5, 65);
  pop();
}

ocLight(k, lx, ly, r) {
  push();
  translate(lx,ly)
  rotate(r);
  fill(k);
  ellipse(0, 0, 12, 40);
  pop()
}

/**
 * Draws the space ship cover
 * Params: color, x, y, rotation, scale
 */
ocShipCap(k, lx, ly, r, sc) {
  push();
  translate(lx, ly);
  rotate(r);
  scale(sc);

  fill(k);
  arc(0, 0, 275, 380, 180, PI); // over cover
  arc(3, 0, 280, 45, PI, 180);

  pop();
}

getX() {
  return this.lx;
}

getY() {
  return this.ly;
}

} // end of alien class

