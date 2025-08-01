/**
 * ART 101
 * Exercise 5 - Phase 1
 * Code by Olivia Joy Cacdac
 */

// This uses the transformation matrix tools to move,
//rotate and scale things as batch operations
// 30 x 30
let gridarr1 = [ // eevee
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 1, 3, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 3, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 1, 3, 3, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 3, 3, 3, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0],
    [0, 1, 3, 3, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 3, 3, 3, 3, 1, 0, 0, 0, 0, 0, 1, 1, 2, 2, 1, 0],
    [0, 0, 1, 3, 3, 1, 0, 1, 1, 1, 1, 1, 0, 1, 3, 3, 3, 1, 0, 0, 0, 0, 1, 1, 2, 2, 2, 2, 1, 0],
    [0, 0, 1, 3, 3, 1, 1, 3, 3, 3, 3, 3, 1, 3, 3, 3, 3, 1, 0, 0, 0, 1, 3, 2, 2, 2, 2, 2, 1, 0],
    [0, 0, 0, 1, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 1, 1, 0, 0, 0, 1, 3, 3, 2, 2, 2, 2, 2, 1, 0],
    [0, 0, 0, 0, 1, 3, 3, 3, 3, 3, 3, 3, 3, 3, 1, 0, 0, 0, 0, 1, 3, 3, 3, 3, 2, 2, 2, 2, 1, 0],
    [0, 0, 0, 0, 1, 3, 9, 1, 3, 3, 9, 1, 3, 1, 0, 0, 0, 0, 0, 1, 3, 3, 3, 3, 2, 2, 2, 2, 1, 0],
    [0, 0, 0, 0, 1, 3, 1, 1, 3, 3, 1, 1, 3, 1, 0, 0, 0, 0, 1, 3, 3, 3, 3, 3, 3, 3, 2, 1, 0, 0],
    [0, 0, 0, 0, 1, 3, 1, 1, 3, 3, 1, 1, 3, 1, 0, 0, 0, 0, 1, 3, 3, 3, 3, 3, 3, 3, 3, 1, 0, 0],
    [0, 0, 0, 0, 1, 3, 3, 3, 3, 3, 3, 3, 3, 1, 0, 0, 0, 0, 1, 3, 3, 3, 3, 3, 3, 3, 3, 1, 0, 0],
    [0, 0, 0, 0, 0, 1, 3, 3, 1, 1, 3, 3, 1, 0, 0, 0, 0, 0, 1, 3, 3, 3, 3, 3, 3, 3, 1, 0, 0, 0],
    [0, 0, 0, 1, 1, 2, 1, 3, 3, 3, 3, 1, 2, 1, 1, 0, 1, 1, 1, 1, 3, 3, 3, 3, 3, 3, 1, 0, 0, 0],
    [0, 0, 1, 2, 2, 2, 2, 1, 1, 1, 1, 2, 2, 2, 2, 1, 3, 3, 3, 3, 1, 3, 3, 3, 1, 1, 0, 0, 0, 0],
    [0, 0, 1, 2, 2, 2, 1, 2, 2, 2, 2, 1, 2, 2, 2, 2, 1, 3, 3, 3, 3, 1, 1, 1, 0, 0, 0, 0, 0, 0],
    [0, 0, 1, 2, 2, 1, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 1, 3, 3, 3, 3, 1, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 1, 2, 2, 1, 2, 2, 2, 2, 2, 2, 1, 2, 2, 1, 3, 3, 3, 3, 3, 1, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 1, 2, 1, 2, 2, 2, 2, 2, 2, 1, 2, 1, 3, 3, 3, 3, 3, 3, 1, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 1, 1, 1, 2, 2, 2, 2, 1, 1, 1, 3, 3, 3, 3, 3, 3, 3, 1, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 1, 3, 1, 2, 2, 1, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 1, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 1, 3, 3, 1, 1, 3, 3, 3, 1, 1, 1, 1, 1, 3, 3, 3, 1, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 1, 3, 3, 1, 3, 3, 1, 0, 0, 0, 1, 3, 1, 3, 3, 1, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 1, 3, 3, 1, 3, 3, 1, 0, 0, 0, 1, 3, 1, 3, 3, 1, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 1, 3, 3, 1, 3, 3, 1, 0, 0, 0, 1, 3, 1, 3, 3, 1, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 1, 3, 3, 1, 3, 3, 1, 0, 0, 0, 1, 3, 1, 3, 3, 1, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 1, 3, 3, 1, 3, 3, 1, 0, 0, 0, 0, 1, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
];

// 30 x 30
let textarr = [ // charmander
    ["bg", "bg", "bg", "bg", "bg", "bg", "bg", "bg", "bg", "bg", "bg", "bg", "bg", "bg", "bg", "bg", "bg", "bg", "bg", "bg", "bg", "bg", "bg", "bg", "bg", "bg", "bg", "bg", "bg", "bg"],
    ["bg", "bg", "bg", "bg", "bg", "bg", "bg", "bg", "bg", "bg", "bg", "bg", "bg", "bg", "bg", "bg", "bg", "bg", "bg", "bg", "bg", "bg", "bg", "bg", "bg", "bg", "bg", "bg", "bg", "bg"],
    ["bg", "bg", "bg", "bg", "bg", "bg", "bg", "bg", "bg", "bg", "bg", "bg", "bg", "bg", "bg", "bg", "bg", "bg", "bg", "bg", "bg", "ol", "bg", "bg", "bg", "bg", "bg", "bg", "bg", "bg"],
    ["bg", "bg", "bg", "bg", "bg", "ol", "ol", "ol", "ol", "bg", "bg", "bg", "bg", "bg", "bg", "bg", "bg", "bg", "bg", "bg", "ol", "fire", "ol", "bg", "bg", "bg", "bg", "bg", "bg", "bg"],
    ["bg", "bg", "bg", "bg", "ol", "head", "head", "head", "head", "ol", "bg", "bg", "bg", "bg", "bg", "bg", "bg", "bg", "bg", "ol", "fire", "fire", "fire", "ol", "bg", "bg", "bg", "bg", "bg", "bg"],
    ["bg", "bg", "bg", "ol", "head", "head", "head", "head", "head", "head", "ol", "bg", "bg", "bg", "bg", "bg", "bg", "bg", "bg", "ol", "fire", "fire", "fire", "ol", "bg", "bg", "bg", "bg", "bg", "bg"],
    ["bg", "bg", "bg", "ol", "head", "head", "head", "head", "head", "head", "ol", "bg", "bg", "bg", "bg", "bg", "bg", "bg", "bg", "ol", "fire", "fire", "fire", "fire", "ol", "bg", "bg", "bg", "bg", "bg"],
    ["bg", "bg", "bg", "ol", "head", "head", "sparkle", "eye", "head", "head", "ol", "bg", "bg", "bg", "bg", "bg", "bg", "bg", "ol", "fire", "fire", "fire", "fire", "fire", "ol", "bg", "bg", "bg", "bg", "bg"],
    ["bg", "bg", "ol", "head", "head", "head", "eye", "eye", "head", "head", "head", "ol", "bg", "bg", "bg", "bg", "bg", "bg", "ol", "fire", "fire", "fire", "fire", "fire", "ol", "bg", "bg", "bg", "bg", "bg"],
    ["bg", "ol", "head", "head", "head", "head", "eye", "eye", "head", "head", "head", "body", "ol", "bg", "bg", "bg", "bg", "bg", "ol", "fire", "fire", "fire", "fire", "fire", "ol", "bg", "bg", "bg", "bg", "bg"],
    ["bg", "ol", "head", "head", "head", "head", "head", "head", "head", "head", "head", "body", "ol", "bg", "bg", "bg", "bg", "bg", "ol", "fire", "fire", "fire", "fire", "fire", "ol", "bg", "bg", "bg", "bg", "bg"],
    ["bg", "ol", "head", "head", "head", "head", "head", "head", "head", "head", "head", "body", "body", "ol", "bg", "bg", "bg", "bg", "bg", "ol", "fire", "fire", "fire", "ol", "bg", "bg", "bg", "bg", "bg", "bg"],
    ["bg", "ol", "head", "head", "head", "head", "head", "head", "head", "head", "body", "body", "body", "body", "ol", "bg", "bg", "bg", "bg", "ol", "fire", "fire", "fire", "ol", "bg", "bg", "bg", "bg", "bg", "bg"],
    ["bg", "bg", "ol", "head", "head", "head", "head", "head", "head", "body", "body", "body", "body", "body", "ol", "bg", "bg", "bg", "bg", "bg", "ol", "fire", "ol", "bg", "bg", "bg", "bg", "bg", "bg", "bg"],
    ["bg", "bg", "bg", "ol", "ol", "head", "head", "head", "body", "body", "arm", "body", "body", "body", "body", "ol", "bg", "bg", "bg", "bg", "ol", "tail", "ol", "bg", "bg", "bg", "bg", "bg", "bg", "bg"],
    ["bg", "bg", "bg", "bg", "bg", "ol", "body", "body", "body", "arm", "body", "body", "body", "body", "body", "ol", "ol", "bg", "bg", "ol", "tail", "tail", "ol", "bg", "bg", "bg", "bg", "bg", "bg", "bg"],
    ["bg", "bg", "bg", "bg", "bg", "ol", "body", "body", "body", "arm", "body", "body", "body", "body", "body", "body", "ol", "bg", "bg", "ol", "tail", "tail", "ol", "bg", "bg", "bg", "bg", "bg", "bg", "bg"],
    ["bg", "bg", "bg", "bg", "bg", "ol", "belly", "body", "body", "arm", "body", "body", "arm", "body", "body", "body", "ol", "ol", "ol", "tail", "tail", "tail", "ol", "bg", "bg", "bg", "bg", "bg", "bg", "bg"],
    ["bg", "bg", "bg", "bg", "bg", "ol", "belly", "belly", "body", "arm", "body", "body", "arm", "body", "body", "body", "ol", "tail", "tail", "tail", "tail", "ol", "bg", "bg", "bg", "bg", "bg", "bg", "bg", "bg"],
    ["bg", "bg", "bg", "bg", "bg", "ol", "belly", "belly", "belly", "body", "arm", "arm", "body", "body", "body", "body", "ol", "tail", "tail", "tail", "tail", "ol", "bg", "bg", "bg", "bg", "bg", "bg", "bg", "bg"],
    ["bg", "bg", "bg", "bg", "bg", "ol", "belly", "belly", "belly", "body", "body", "body", "body", "body", "body", "body", "ol", "tail", "tail", "tail", "ol", "bg", "bg", "bg", "bg", "bg", "bg", "bg", "bg", "bg"],
    ["bg", "bg", "bg", "bg", "bg", "ol", "belly", "belly", "belly", "belly", "body", "body", "body", "body", "body", "body", "ol", "tail", "tail", "tail", "ol", "bg", "bg", "bg", "bg", "bg", "bg", "bg", "bg", "bg"],
    ["bg", "bg", "bg", "bg", "ol", "body", "ol", "belly", "belly", "belly", "belly", "body", "body", "body", "body", "ol", "tail", "tail", "ol", "ol", "bg", "bg", "bg", "bg", "bg", "bg", "bg", "bg", "bg", "bg"],
    ["bg", "bg", "bg", "bg", "ol", "body", "ol", "belly", "belly", "belly", "belly", "ol", "body", "body", "body", "ol", "ol", "ol", "bg", "bg", "bg", "bg", "bg", "bg", "bg", "bg", "bg", "bg", "bg", "bg"],
    ["bg", "bg", "bg", "bg", "ol", "body", "body", "ol", "ol", "ol", "ol", "body", "body", "body", "body", "ol", "bg", "bg", "bg", "bg", "bg", "bg", "bg", "bg", "bg", "bg", "bg", "bg", "bg", "bg"],
    ["bg", "bg", "bg", "bg", "ol", "body", "body", "ol", "bg", "bg", "ol", "body", "body", "body", "ol", "bg", "bg", "bg", "bg", "bg", "bg", "bg", "bg", "bg", "bg", "bg", "bg", "bg", "bg", "bg"],
    ["bg", "bg", "bg", "bg", "bg", "ol", "ol", "bg", "bg", "bg", "ol", "body", "body", "body", "ol", "bg", "bg", "bg", "bg", "bg", "bg", "bg", "bg", "bg", "bg", "bg", "bg", "bg", "bg", "bg"],
    ["bg", "bg", "bg", "bg", "bg", "bg", "bg", "bg", "bg", "bg", "bg", "ol", "ol", "ol", "bg", "bg", "bg", "bg", "bg", "bg", "bg", "bg", "bg", "bg", "bg", "bg", "bg", "bg", "bg", "bg"],
    ["bg", "bg", "bg", "bg", "bg", "bg", "bg", "bg", "bg", "bg", "bg", "bg", "bg", "bg", "bg", "bg", "bg", "bg", "bg", "bg", "bg", "bg", "bg", "bg", "bg", "bg", "bg", "bg", "bg", "bg"],
    ["bg", "bg", "bg", "bg", "bg", "bg", "bg", "bg", "bg", "bg", "bg", "bg", "bg", "bg", "bg", "bg", "bg", "bg", "bg", "bg", "bg", "bg", "bg", "bg", "bg", "bg", "bg", "bg", "bg", "bg"]
];


let font1;
let images =[]; // images for eevee
let images2 = []; // images for charmander

function preload()  {

       font1 = loadFont('assets/oswald.ttf');
       images[0] = loadImage('assets/forest.png');
       images[1] = loadImage('assets/black.png');
       images[2] = loadImage('assets/yellow.png');
       images[3] = loadImage('assets/brown.png');
       images[4] = loadImage('assets/white.png');

       images2[0] = loadImage('assets/green.png');
       images2[1] = loadImage('assets/fire.png');
       images2[2] = loadImage('assets/orange-caution.png');
       images2[3] = loadImage('assets/caution.png');
       images2[4] = loadImage('assets/sparkle.png');
       images2[5] = loadImage('assets/log.png');
       images2[6] = loadImage('assets/coal.png');

}


function setup() {
    createCanvas(1300, 1500);
    background(0, 60, 90);
    fill(100);
    textFont(font1);

    mapToMonoPixels(gridarr1, 20, 20, 0, 1.0, 255);
    mapToColorShapes(gridarr1, width/3 -35, 25, 0, 1.1, 255);
    mapNumToBitMaps(gridarr1, images, width-500, 20, 0, 0.8);

    mapToColorText(textarr, -10, 445, 0, 1, 255);
    mapTextToBitMaps(textarr, images2, width-500, 550, 0, 1.0);
    mapTextToColorShapes(textarr, 100, height/2+200, 0, 1.4, 255); 
}


// 2d arr, x, y, rot, scale, alpha
function mapToMonoPixels(arr, lx, ly, rot, sc, fade) {
    push();
    translate(lx,ly);
    rotate(radians(rot));
    scale(sc);
    for (var i = 0; i < arr.length; i++) {
        for (var j = 0; j < arr[0].length; j++) {
            fill(arr[i][j] * 60, fade); // lower arr value = darker
            rect(j * 12, i * 12, 10, 10);
        }
    }
   pop();
}

// 2d arr, x, y, rot, scale, alpha
function mapToColorShapes(arr, lx, ly, rot, sc, fade) {
    push();
    translate(lx, ly);
    rotate(radians(rot));
    scale(sc);
    for (var i = 0; i < arr.length; i++) {
        for (var j = 0; j < arr[0].length; j++) {
            let value = arr[i][j];
            if ( value == 0 ) { // background
                fill(204, 235, 210, fade); // light green
                ellipse(j * 12, i * 12, 10, 10); // circle
            } else if ( value == 1 ) { // outline
                fill(0, fade); // black
                rect(j * 12-6, i * 12-6, 10, 10, 2); // square w curved corners
                //drawTriangle(j * 12, i * 12, 5);
            } else if ( value == 2 ) { // fur/tail area
                fill(247, 238, 176, fade); // yellow
                ellipse(j * 12, i * 12, 10, 15); // vertical oval
            } else if ( value == 3 ) { // body
                fill(161, 138, 111, fade);  // brown
                rect(j * 12-6, i * 12-6, 10, 10, 2); // square w curved corners
            } else {
                fill (255, fade); // white
                ellipse(j * 12, i * 12, 15, 10); // horizontal oval
            }
        }
    }
    pop();
}

// 2d arr, x, y, rot, scale, alpha
function mapToColorText(arr, lx, ly, rot, sc, fade) {
    textSize(15);
    textAlign(CENTER);
    push();
    translate(lx, ly);
    rotate(radians(rot));
    scale(sc);
    for (var i = 0; i < arr.length; i++) {
        for (var j = 0; j < arr[0].length; j++) {
            let value = arr[i][j];
            if ( value == "bg" ) {
                fill(20,170,0, fade); // green
            } else if ( value == "fire"){
                fill(232, 46, 46, fade); // red
            } else if ( value == "head" || value == "tail") {
                fill(255, 128, 48, fade); // orange
            } else if ( value == "belly") {
                fill(240, 236, 170, fade); // light yellow
            } else if ( value == "body") {
                fill(212, 105, 38, fade); // dark orange
            } else if ( value == "sparkle") {
                fill(255, fade); // white
            } else if ( value == "arm") {
                fill(150, fade); // grey
            } else {
                fill(0, fade); // black
            }
            text(value, j * 25, i * 15, 100); // display string
        }
    }
    pop();
}

// 2d arr, x, y, rot, scale, alpha
function mapTextToColorShapes(arr, lx, ly, rot, sc, fade) {
    push();
    translate(lx, ly);
    rotate(radians(rot));
    scale(sc);
    for (var i = 0; i < arr.length; i++) {
        for (var j = 0; j < arr[0].length; j++) {
            let value = arr[i][j];
            if ( value == "bg" ) { // background
                fill(20,170,0, fade); // green
                drawTriangle(j * 12, i *12, 11);
            } else if ( value == "fire" ) { // fire
                fill(232, 46, 46, fade); // red
                drawTriangle(j * 12, i *12, 11);
            } else if ( value == "head") {
                fill(255, 128, 48, fade); // orange
                ellipse(j * 12, i * 12, 17, 12); // horizontal oval
            } else if ( value == "tail") {
                fill(255, 128, 48, fade); // orange
                ellipse(j * 12, i * 12, 12, 17); // vertical oval
            } else if ( value == "belly" ) {
                fill(240, 236, 170, fade); // light yellow
                rect(j * 12-6, i * 12-6, 12, 12, 4); // square w curved corners
            } else if ( value == "body") {
                fill(212, 105, 38, fade); // dark orange
                rect(j * 12-6, i * 12-6, 12, 12, 3); // square w curved corners
            } else if ( value == "sparkle") {
                fill(255, fade); // white
                drawTriangle(j * 12, i *12, 7);
            } else if ( value == "arm") {
                fill(150, fade); // grey
                ellipse(j * 12, i * 12, 10, 15); // vertical oval
            } else {
                fill(0, fade); // black
                rect(j * 12-5, i * 12-7, 10, 14, 2); // square w curved corners
            }
        }
    }
    pop();
}

function drawTriangle(lx, ly, sz) {
    push();
    translate(lx, ly);
    //fill(255);
    triangle(0, -sz, sz, sz, -sz, sz);
    pop();
}

// 2d arr, image arr, x, y, rot, scale, alpha
function mapTextToBitMaps(arr, imgarr, lx, ly, rot, sc) {
    push();
    translate(lx, ly);
    rotate(radians(rot));
    scale(sc);
    let nuimg;
    
    for (var i = 0; i < arr.length; i++) {
        for (var j = 0; j < arr[0].length; j++) {
             let value = arr[i][j];
             if ( value == "bg" ) {
                nuimg = imgarr[0]; // leaves
            } else if ( value == "fire"){
                nuimg = imgarr[1]; // fire
            } else if ( value == "head" || value == "tail") {
                nuimg = imgarr[2]; // warning sign
            } else if ( value == "belly") {
                nuimg = imgarr[3]; // caution sign
            } else if ( value == "body") {
                tint(252, 159, 106); // dark orange tint
                nuimg = imgarr[2]; // warning sign
            } else if ( value == "sparkle") {
                nuimg = imgarr[4]; // star
            } else if ( value == "arm") {
                nuimg = imgarr[5]; // log
            } else {
                nuimg = imgarr[6]; // coal
            }
            image(nuimg, j * 15, i * 15, 15, 15); // draw img
            noTint();
        }
    }
    pop();
}

// 2d arr, image arr, x, y, rot, scale, alpha
function mapNumToBitMaps(arr, imgarr, lx, ly, rot, sc) {
    push();
    translate(lx, ly);
    rotate(radians(rot));
    scale(sc);
    let sz = 20;
    let nuimg;
    
    for (var i = 0; i < arr.length; i++) {
        for (var j = 0; j < arr[0].length; j++) {
             let value = arr[i][j];
             if ( value == 0) {
                nuimg = imgarr[0]; // 
            } else if ( value == 1){
                nuimg = imgarr[1]; // 
            } else if ( value == 2) {
                nuimg = imgarr[2]; // 
            } else if ( value == 3) {
                nuimg = imgarr[3]; // 
            } else {
                nuimg = imgarr[4]; // 
            }
            image(nuimg, j * sz, i * sz, sz, sz); // draw img
        }
    }
    pop();


}
