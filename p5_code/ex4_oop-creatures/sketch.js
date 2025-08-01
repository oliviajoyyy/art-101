/**
 * ART 101
 * Exercise 4 - Alien Creatures
 * sketch.js
 * Code by Olivia Joy Cacdac
 */

let alien1;
let alienCt = 15; // number of Alien objects to create
let aliens = new Array(alienCt); // array of Alien objects

let colors = new Array(alienCt);
let rot = new Array(alienCt);
let scal = new Array(alienCt);
let spdX = new Array(alienCt);
let spdY = new Array(alienCt);
let spin = new Array(alienCt);

function setup() {
  createCanvas(1000,600);
  bgc = color(10, 30, 60);
  background(bgc);
  fill(255);
  angleMode(DEGREES);
  rectMode(CENTER);
  
  for (let i = 0;  i < aliens.length; i++) {
    colors[i] = color(random(255), random(190, 255), random(255));
    rot[i] = random(-45, 45);
    scal[i] = random(0.2, 1.2); // scale from 0.2 to 1.2
    spdX[i] = random(-10, 10);
    spdY[i] = random(-10, 10);
    spin[i] = random(0.5, 3);

    // create Alien
    aliens[i] = new ocAlien(colors[i], width/2, height/2, rot[i], scal[i], spdX[i], spdY[i], spin[i]);
  }

}

function draw() {
  background(bgc);

  for (let i = 0;  i < aliens.length; i++) {
    // every other alien is happy/angry
    if (i%2 == 0) {
      aliens[i].displayHappy();
    }
    else {
      aliens[i].displayAngry();
    }
    aliens[i].ocMotion();
    aliens[i].ocBounce();
    
    // behavior controlled by mouse press
    if (mouseIsPressed) {
      aliens[i].ocScale(); // aliens get bigger/smaller
    }
  }
}

// behavior controlled by mouse movement
function mouseMoved() {
  for (let i = 0;  i < aliens.length; i++) {
    aliens[i].ocSpin(); // aliens spin
  }
}