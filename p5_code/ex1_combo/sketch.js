// Exercise 1 - Code Combination
// Example 1.1.3 code by Olivia Joy Cacdac & Example 1.1.2 code by Courtney Spisak

function setup() {
  createCanvas(900,500);
  background(20);
  fill(255);
  rectMode(CENTER);
}

function draw() {

  // Olivia's code
  // draw circles in grid layout, right beside each other
  for (let i = 0; i < 410; i += 20) {
    for (let j = 0; j < 510; j += 20) {
      let rr = random(20); // less red
      let rg = random(255);
      let rb = random(255);
      fill(rr, rg, rb, 200); // random color for every circle, alpha value added
      ellipse(i+5, j+5, 20, 20 );
      console.log("rr has a value of" + rr);
    }
  }
  // end Olivia's code

  // Courtney's code
  fill(255);
  let r = random(30);
  let m = mouseX;
  let y = mouseY;
  console.log(m + " " + r);
  if (m+r < height/2-10)  {
    background(67,67,255,10);
    triangle(m, m+ (2*m), m * 5, 67+r * 2, 2);
  }// close if

  else if(height/2- 10 < m < height/2){
    background(78,247,7,15); // I increased the alpha value
    triangle(m, m, m * 5, m * m, m)
  } // close the else if

   if(y < width/2-10){
    background(255,89,67,15);
    rect(m+r, height/2, m, m);
  } // close the if statement
  // end Courtney's code

  // Olivia's code
  // draw squares in diagonal/grid way
  // []  []  []
  //   []  []   []
  for (let n=-width; n<width; n+=40) { // space square corners 40px apart
    for (let i=0; i < width; i+=20) {
      fill(190, 20, 70, 120); // dark pink/red color, alpha value decreased
      rect(i+n+5, i+5, 10, 10); 
      console.log(i);
    }
  }
  // end Olivia's code
  
}