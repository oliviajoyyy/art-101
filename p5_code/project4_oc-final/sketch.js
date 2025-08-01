/**
 * ART 101 - Final Project
 * sketch.js
 * Olivia Joy Cacdac
 * 
 * This project contains the use of p5.scenemanager, p5.sound, and p5.touchgui libraries.
 * Library documentation:
 * p5.scenemanager: https://github.com/mveteanu/p5.SceneManager
 * p5.sound: https://p5js.org/reference/#/libraries/p5.sound
 * p5.touchgui: https://github.com/L05/p5.touchgui
 * 
 */

var flute, laser, retro_ping, epic, rain, future, sweep; // sounds for scenes
var intro_bg, study_bg, game_bg, help_bg, end_bg; // bitmaps for backgrounds
var beam, beam2, cow1, cow2; // bitmaps for scenes
var mgr; // global manager object for SceneManager

function preload() {
  flute = loadSound("assets/flute.mp3");
  laser = loadSound("assets/laser.mp3")
  retro_ping = loadSound("assets/retro-ping.mp3");
  epic = loadSound("assets/epic-begin.mp3");
  rain = loadSound("assets/light-rain.mp3");
  future = loadSound("assets/future.mp3");
  sweep = loadSound("assets/wood.mp3");
  intro_bg = loadImage("assets/galaxy.png"); // intro 
  study_bg = loadImage("assets/space-planet.png"); // timer
  game_bg = loadImage("assets/house2-c.png"); // game
  help_bg = loadImage("assets/space.png"); // help
  end_bg = loadImage("assets/galaxy2.jpeg"); // end
  beam = loadImage("assets/green-beam.png"); // beam
  beam2 = loadImage("assets/green-beam2.png"); // beam
  cow1 = loadImage("assets/cow1.png");
  cow2 = loadImage("assets/cow2.png");
}

function setup() {
    createCanvas(1200, 700);
    frameRate(60); // 60 frames per second

    mgr = new SceneManager();
    mgr.addScene (intro);
    mgr.addScene (scene2); // timer
    mgr.addScene (scene3); // game
    mgr.addScene (sceneHelp); // help page
    mgr.addScene (theend);
    mgr.showNextScene(); // starts up the program, starts at the first you added by default
}

function draw() {
    mgr.draw(); // pass the current draw function into the SceneManager
}

function mousePressed() {
  mgr.mousePressed(); // pass the mousePressed message into the SceneManager
}

function keyPressed() {
    switch(key)
    {
        case '1':
            mgr.showScene( intro );
            break;
        case '2':
            mgr.showScene( scene2 );
            break;
        case '3':
            mgr.showScene( scene3 );
            break;
        case '4':
            mgr.showScene( sceneHelp );
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
        case 'g':
            mgr.showScene( scene3 );
            break;
        case 'G':
            mgr.showScene( scene3 );
            break;
        case 'e':
            mgr.showScene( theend );
            break;
        case 'E':
            mgr.showScene( theend );
            break;
    }

    mgr.keyPressed(); // ... then dispatch via the SceneManager.
}