/**
 * ART 101
 * Project 2
 * sketch.js
 * Code by Olivia Joy Cacdac
 */

let recMode = false;
let can;  // canvas reference
let p1, p2, p3, p4, p5, p6;
let mixCt = 8;
let pArr1 = new Array(mixCt);
let pArr2 = new Array(mixCt);
let rotations = new Array(mixCt*2);
let c = 150;
let bgc;  // background color
let ct5 = 100;
let a = 75;

function setup() {
    can = createCanvas(1920, 1080);
    bgc = color(0);
    background(bgc);
    rectMode(CENTER);
    fill(255);
    frameRate(10); // slow down the framerate so everything can be drawn
    // frameRate was set to 1 when saving the images for the animation

    p1 = new ocParametric(color(20, 90, 255), width/2, height/2, 0, 0);
    p2 = new ocParametric(color(30, 240, 230), 'a', 'a', 0, 0.1);
    p3 = new ocParametric(color(30, 240, 230), 'b', 'b', -15, 0.1);
    p4 = new ocParametric(color(30, 240, 230), 'c', 'c', 90, 0.1);
    p5 = new ocParametric(color(30, 180, 120), width/2, height/2, 180, 5);
    
    // instantiate objects and populate arrays
    for (let i=0; i< mixCt; i++) {
        rotations[i] = i*30;
        rotations[i+mixCt] = i*30;
        pArr1[i] = new ocParametric(color(random(255), 255, 255), width/2, height/2, rotations[i], 0.5);
        pArr2[i] = new ocParametric(color(random(255), 255, 255), width/2, height/2, rotations[i+mixCt], 0.5);
    }
}

function draw() {
    console.log("fc: " + frameCount);
    background(bgc);    

    // Acts
    // Zoom into first object
    if (frameCount < 450) {
        p1.ocDisplay(100);
        p1.ocZoom(3, 0);
    } 
    // Show 3 more objects, zoom in/out
    else if (frameCount < 600) {
        p2.ocDisplay(200);
        p3.ocDisplay(200);
        p4.ocDisplay(200);
        p1.ocDisplay(100);

        p1.ocZoom(0.7, 0.05);
        p2.ocZoom(0.5, 0);
        p3.ocZoom(0.5, 0);
        p4.ocZoom(0.5, 0);
    }
    // Spin the objects
    else if (frameCount < 950) {
        p2.ocDisplay(200);
        p3.ocDisplay(200);
        p4.ocDisplay(200);
        p1.ocDisplay(100);

        p1.ocSpin(-0.03);
        p1.ocLineSpeed(1);
        p2.ocMoveCircle();
        p3.ocMoveCircle();
        p4.ocMoveCircle();
    }
    // Zoom out to no objects
    else if (frameCount < 1000) {
        p1.ocDisplay(100);
        p1.ocLineSpeed(1);
        p2.ocDisplay(200);
        p3.ocDisplay(200);
        p4.ocDisplay(200);
        
        p1.ocZoom(0, 0);
        p2.ocZoom(0, 0);
        p2.ocMoveAround(-5, 0);
        p3.ocZoom(0, 0); 
        p3.ocMoveAround(0, -5);
        p4.ocZoom(0, 0); 
        p4.ocMoveAround(5, 5);
    } 
    // Show arrays of several objects
    else if (frameCount < 1450) {
        ocParametric.ocCombine(pArr1, pArr2, 375, c);
        c+=0.4;
    } 
    // Show final object
    else if (frameCount < 2090) {
        p5.ocDisplay3(ct5);
        
        if (frameCount < 1525)
            p5.ocZoom(1, 0.1); // start with zoom out
        else if (frameCount < 1550) {
            ct5 += 0.75; // increase number of lines drawn
            p5.ocSetColor(color(30, 180, 120));
        }
        else if (frameCount < 1600) {
            ct5 += 1.25; // increase more lines
            p5.ocSetColor(color(40, 200, 90));
        }
        else if (frameCount < 1700) {
            ct5 += 1.75; // increase lines
            p5.ocLineSpeed(1); // increase speed of moving lines
            p5.ocSetColor(color(50, 230, 50));
        }
        else {
            ct5 += 2.25; // increase lines
            p5.ocLineSpeed(2); // further increase speed of moving lines
            p5.ocSetColor(color(60, 255, 20));
            p5.ocZoom(5, 0); // begin zoom in on object
            if (frameCount > 2000) {
                background(60, 255, 20, a);
                a += 2;
            }
        }
    } else {   
        background(60, 255, 20);
    }// end acts - nothing shown afterward

    recordit(); // always have this last

}


/////////////////////// use both keyPressed and recordit ///////////

function keyPressed() {

    if (keyIsPressed === true) {
        let k = key;
        console.log("k is " + k);

        if (k == 's' || k == 'S') {
            console.log("Stopped Recording");
            recMode = false;
            noLoop();
        }

        if (k == ' ') {
            console.log("Start Recording");
            recMode = true;
            loop();
        }
    }
}

function recordit() {  // new version
    if (recMode == true) {
        let ext = nf(frameCount, 4);
        saveCanvas(can, 'frame-' + ext, 'jpg');
        console.log("rec " + ext);
    }
}
