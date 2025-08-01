/**
 * ART 101
 * alien.js
 * Code by Olivia Joy Cacdac
 */

class ocAlien {

k;
lx;
ly;
r;
sc;
spinSpeed;
spx;
spy;
motion;
motionCt;
sizeCt;
eyeCH;
eyeCA;
eSet;
eCol;

// color, lx, ly, rotation, scale, speedx, speedy, spinspeed
constructor (lk, llx, lly, lrot, lsc, lspx, lspy, lssp) {
  this.k = lk;
  this.lx = llx;
  this.ly = lly;
  this.r = lrot;
  this.sc = lsc;
  this.spinSpeed = lssp;
  this.spx = lspx;
  this.spy = lspy;
  this.motion = 0;
  this.motionCt = 3;
  this.sizeCt = 0.01;
  this.eSet = false;
  this.eyeCH = [color("#4287f5"), color("#cceded"), color(20, 90, 130)];
  this.eyeCA = [color("#c9a9a7"), color("#b00a00"), color(90, 20, 20)];
}

/**
 * Displays a happy alien
 */
displayHappy() {
  push();
  translate(this.lx, this.ly); // the anchor point
  rotate(this.r);
  scale(this.sc);

  this.ocShip(color(150), 0, 55, 0, 0.9, 0);
  this.ocBody(this.k);
  this.ocHead(this.k, 0, -70, -15, 1.2, 0);
  this.ocUpperArm(this.k, -40, -50, 150, 1.0, 0); // left arm
  this.ocLowerArm(this.k, -50, -85, 180+this.motion, 1.0, 0); // wave
  this.ocUpperArm(this.k, 50, -45, -120, 1.0, 0); // right arm
  this.ocLowerArm(this.k, 70, -70, 160+this.motion, 1.0, 0); // wave
  this.ocShipCap(color(150, 150, 200, 70), 0, -70, 0, 1.0, 0);

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
ocMotion() {
  this.motion += this.motionCt;
  if (this.motion > 50 || this.motion < 0) {
    this.motionCt = -this.motionCt;
  }
}

/**
 * Controls object's bounce movement around the canvas
 */
ocBounce() {
  this.lx += this.spx;
  this.ly += this.spy;
  if (this.lx > width || this.lx < 0) {
    this.spx = -this.spx;
  }
  if (this.ly > height || this.ly < 0) {
    this.spy = -this.spy;
  }
}

/**
 * Controls the spin (rotation) of the object
 */
ocSpin() {
  this.r += this.spinSpeed;
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
  if (this.eSet == false) {
    this.eCol = this.eyeCH[int(random(3))];
    this.eSet = true;
  }
  this.ocEye(this.eCol, -10, 0, -20, 1.0, 0); // left eye
  this.ocEye(this.eCol, 10, 0, 20, 1.0, 0); // right eye
  fill(0);
  arc(0, 15, 10, 15, PI, 180); // mouth

}

/**
 * Draws an angry face
 */
ocFaceAngry() {
  if (this.eSet == false) {
    this.eCol = this.eyeCA[int(random(3))];
    this.eSet = true;
  }
  this.ocEye(this.eCol, -10, 0, -20, 1.0, 0); // left eye
  this.ocEye(this.eCol, 10, 0, 20, 1.0, 0); // right eye

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
  ellipse(0, 35, 15, 15); // flashing lights
  ellipse(60, 32, 15, 15);
  ellipse(120, 22, 15, 15);
  ellipse(165, 5, 15, 15);
  ellipse(-60, 32, 15, 15);
  ellipse(-120, 22, 15, 15);
  ellipse(-165, 5, 15, 15);

  pop();
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
  arc(0, 110, 275, 380, 180, PI); // over cover
  arc(3, 110, 280, 45, PI, 180);

  pop();
}

} // end of alien class

