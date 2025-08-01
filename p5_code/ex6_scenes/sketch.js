//
// Art 101 - Exercise 6
// Olivia Joy Cacdac
//
// This contains the use of SceneManager, p5.sound, and p5.touchgui
// Documentation:
// p5.scenemanager: https://github.com/mveteanu/p5.SceneManager
// p5.sound: https://p5js.org/reference/#/libraries/p5.sound
// p5.touchgui: https://github.com/L05/p5.touchgui
//

var retro_alarm, bass, retro_ping, epic; // sounds for scenes

function preload() {
  retro_alarm = loadSound("assets/retro-alarm.mp3");
  bass = loadSound("assets/mysterious-bass.mp3")
  retro_ping = loadSound("assets/retro-ping.mp3");
  epic = loadSound("assets/epic-begin.mp3");
}

// global manager object
var mgr;

function setup() {
    createCanvas(1200, 700);
    mgr = new SceneManager();
    // Preload scenes. Preloading is normally optional
    // ... but needed if showNextScene() is used.
    mgr.addScene (intro);
    mgr.addScene (sceneHelp); // help page
    mgr.addScene (scene2); // alien page 2
    mgr.addScene (scene3); // alien page 3
    mgr.addScene (theend);
    mgr.showNextScene(); // starts up the program, starts at the first you added by default
}

function draw() {
    // pass the current draw function into the SceneManager
    mgr.draw();
}

function mousePressed() {
   // pass the mousePressed message into the SceneManager
  mgr.mousePressed();
}


function mouseMoved() {
   // pass the mouseMoved message into the SceneManager
   mgr.handleEvent("mouseDragged");
}


function mouseDragged() {
   // pass the mouseMoved message into the SceneManager
    mgr.handleEvent("mouseDragged");
}

function keyPressed() {
    // You can optionaly handle the key press at global level...
    switch(key)
    {
        case '1':
            mgr.showScene( intro );
            break;
        case '2':
            mgr.showScene( sceneHelp );
            break;
        case '3':
            mgr.showScene( scene2 );
            break;
        case '4':
            mgr.showScene( scene3 );
            break;
        case '5':
            mgr.showScene( theend );
            break;
        case 'h':
            mgr.showScene( sceneHelp );
            break;
        case 'H':
            mgr.showScene( sceneHelp );
            break;
        case 'e':
            mgr.showScene( theend );
            break;
    }

    // ... then dispatch via the SceneManager.
    mgr.keyPressed();
}