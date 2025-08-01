/*
 * Art 101-01
 * Exercise 1 - Wild Wallpaper
 * Code by Olivia Joy Cacdac
 */

let ct = 500;
let b = 2;
let g = 1000;
let r = 100;
let i_ct = 0;

function setup() {
  createCanvas(900,500);
  background(100, 50, 70);
  stroke(40);
  strokeWeight(1);
}

function draw() {
  i_ct++;
  //console.log("i_ct: " + i_ct);

  let my = mouseY;
  let mx = mouseX;

  let rx = random(-75, 75);
  let ry = random(-75, 75);
  r -= 10;
  if (r < 0) {
    r = 100;
  }
  console.log("r value: " + r + "\ni_ct value: " + i_ct);

  // code from example 2, altered by me
  if (mx < width/2)  { // if mouse is on left side of canvas
    ellipse(mx, height/2, r*2, r);
    fill(30, 150);
    rect(mx+rx, (height/2)+ry, 20, 10); // random rectangles around mouse
  } 
  else { // otherwise mouse on right side
    fill(0, 170, 200, 40);
    rect(mx, height/2, r, r);
    fill(30, 150);
    ellipse(mx+rx, (height/2)+ry, 10, 20);
  } // end code from example 2

  // mouse on left side of screen
  if (mouseX < 450)  {
    
    // draw circles beside each other following mouseY position
    for (let i = 0; i < 410; i += 20) {
      for (let j = 0; j < 410; j += 20) {
        let rr = random(75, 250);
        let rg = random(40);

        if (b > 255) { // blue value for circle fill
          b = b % 255;  
        }
        b *= 2.5;

        if (g < 100) { // green value for stroke
          g = 1000;
        }
        g /= 2;

        fill(rr, rg, b); // random color for every circle
        stroke(100, g, 20);
        ellipse(i+5, mouseY, 20, 20);
        stroke(40);
      }
    }

    // code from example 1, altered by me
    // wicker pattern on right side of canvas
    for (let i=0; i < width; i+=20) {
      let m = mouseY % 1000; // keeps range btwn 255
      let c = random(255);

      // horizontal rectangles, 20px below previous rectangle
      fill(c, 110, m); 
      rect(0+410, i, width, 10);
    
      // vertical rectangles, 20px to the right of prev rectangle
      fill(210, m, c);
      rect(i+410, 0, 10, height);
    } // end code from example 1
  }
  else { // when not in draw zone for above circles

    // code from example 3, altered by me
    // draw circles in grid layout, flashing blue/green colors
    for (let i = 0; i < 410; i += 20) {
      for (let j = 0; j < 350; j += 20) {
        let rr = random(20); // less red
        let rg = random(255);
        let rb = random(255);

        fill(rr, rg, rb); // random color for every circle
        ellipse(i+5, j+5, 20, 20);
      }
    } // end code from example 3
  }

  // mouse on right side of screens
  if (mouseX > 400)  {
    if (mouseY < 200) { // mouse on upper right of screen
      let rx = random(0, 500);
      let ry = random(200, height);
      fill(rx,ry, 100);
      quad(rx-20, ry, rx, ry-35, rx+20, ry, rx, ry+35); // draw long diamonds
    }
    
    // draw boxes following x position
    for (let i = 0; i < mouseX; i += 2) {
      // draw red quad shapes (diamonds) following x position
      //let px = random(0, width);
      let py = random(0, height);
      stroke(200, 230, 20);
      fill(250, 0, 0, 90); // red
      quad(mx-20, py, mx, py-20, mx+20, py, mx, py+20); // diamond
      stroke(40);
     }

    // mouse on upper right side of screen
    if (mouseY < 250) {
      let t = random(-20, 20);
      // draw orange triangle
      fill(255,150,20,250);
      triangle(r+mx,r+my,r+(mx-20),r+my+30,r+mx+20,r+my+30);

    }  else {
      // draw arc shape of half ellipse all over until ct reaches 0
      if (ct<=500) {
        let px = random(0, width);
        fill(140, 210, 50, 175); // orange/yellow
        arc(px, my+45, 140, 170, PI, 0); // half ellipse
      }
      else {
        ct = 500; // reset count
      }
      ct--;
      console.log("ct value: " + ct);

      // draw circle
      noFill();
      strokeWeight(4);
      stroke(20, 145, 90, 180);
      ellipse(mx+100,my-50,50,50); //circle
      ellipse(mx-100,my+50,50,50); //circle
      stroke(200, 230, 20);
      strokeWeight(1);
    }
  }

}