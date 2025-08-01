
// =============================================================
// =                         BEGIN SCENES                      =
// =============================================================
// Art 101 - Exercise 6
// code by Olivia Joy Cacdac
//


// global var that can be used between scenes
let tsz = 30;
let house, space_planet, earth_space, earth, space_galaxy, galaxy; // background images
////////////////////////////// 1 /////////////////
function intro()  { // a local version of the draw command
    let loy;
    let gui, b1, b2;

    this.setup = function() {
      console.log("setup for scene 1 (intro)");
      space_galaxy = loadImage("assets/space.jpeg");
      background(space_galaxy);
      rectMode(CORNER);
      textAlign(CENTER);
      textSize(tsz);
      loy = 100;
      gui = createGui();
      b1 = createButton("Help",width-200, 140);
      b2 = createButton("Start",width-200, 70);
    }

    // enter() will be called each time SceneManager switches
    // to this scene
    this.enter = function()  {
      console.log("enter scene 1 (intro)");
      rectMode(CORNER);
      loy = 100;
      if(retro_alarm.isPlaying())
        retro_alarm.stop();
      if(retro_ping.isPlaying())
        retro_ping.stop();
      if(epic.isPlaying())
        epic.stop();
      if (bass.isPlaying()) {
        bass.stop();
      } 
      gui = createGui();
      b1 = createButton("Help",width-200, 140);
      b2 = createButton("Start",width-200, 70);
    }

    this.draw = function() {
      background(space_galaxy);
      textAlign(CENTER);
      textSize(tsz);
      drawGui();

      if(b1.isPressed) {
        this.sceneManager.showScene(sceneHelp);
      }
      if(b2.isPressed) {
        this.sceneManager.showScene(scene2);
      }

        // code for color and text movement
        push();
        //
        translate(width/2,loy*2);
        fill(255);
        text("Somewhere in the galaxy...", 0, 0);
        text("Click 'Start' to continue", 0, 50);
        // ellipse(0,0,30,30);
        if (loy > height) {
          loy = 0;
        } else {
          loy++;
        }
        //
        pop();

    }

}

//////////////////// scene help instructions /////////////////

function sceneHelp() {
  let loy = 255;
  let gui, b1;

   this.setup = function()  {
     console.log("We are at setup for scene help");
     galaxy = loadImage("assets/galaxy.jpeg");
     background(galaxy);
     rectMode(CORNER);
     loy = 255;
     gui = createGui();
     b1 = createButton("Start",width-150,height-70);
   }

   this.enter = function()  {
     console.log("We are entering scene help");
     loy = 255;
     rectMode(CORNER);
     if(retro_alarm.isPlaying())
      retro_alarm.stop();
     if(retro_ping.isPlaying())
      retro_ping.stop();
     if(epic.isPlaying())
      epic.stop();
     if(!bass.isPlaying())
       bass.play();
     gui = createGui();
     b1 = createButton("Start",width-150,height-70);
   }

   this.draw = function() {
     background(galaxy);
     textAlign(CENTER);
     textSize(tsz);
     drawGui();
       push();
       translate(width/2, 150);
       fill(0, 200);
       rect(-500, -70, 1000, 300);
       //
       fill(255);
       text("Help page:", 0, 0);
       text("Move the mouse to interact with the aliens in the next scene", 0, 50);
       text("Click the mouse in the third scene for the sound effects", 0, 100);
       text("Click 'Start' to continue", 0, 150);
       //
       pop();

      if(b1.isPressed) {
        this.sceneManager.showScene(scene2);
      }
   }
}

///////////////////////  2  ////////////////////////

function scene2()  {
  let alien1, alien2;
  let gui, b1, b2;

  this.setup = function() {
      space_planet = loadImage("assets/space-planet.png");
      background(space_planet);
      console.log("We are at setup for scene2");
      alien1 = new ocAlien(color("#3fe330"), width/3, 200, 15, 1.2, 0, 0, 5);
      alien2 = new ocAlien(color("#cee330"), (3*width)/4, 400, -25, 0.7, 0, 0, 8);
      angleMode(DEGREES);
      rectMode(CENTER);
      gui = createGui();
      b1 = createButton("Help",width-200, 140);
      b2 = createButton("Next",width-200, 70);
  }

  this.enter = function()
  {
      console.log("We are at  scene2 (again?)");
      angleMode(DEGREES);
      rectMode(CENTER);
      if(retro_alarm.isPlaying())
        retro_alarm.stop();
      if(retro_ping.isPlaying())
        retro_ping.stop();
      if(bass.isPlaying())
        bass.stop();
      if(!epic.isPlaying())
        epic.play();
      gui = createGui();
      b1 = createButton("Help",width-200, 140);
      b2 = createButton("Next",width-200, 70);
  }

    this.draw = function()
    {
      background(space_planet);
      alien1.displayHappy();
      alien2.displayHappy();
      drawGui();
      if(b1.isPressed) {
        this.sceneManager.showScene(sceneHelp);
      }
      if(b2.isPressed) {
        this.sceneManager.showScene(scene3);
      }

    }

    this.mouseDragged = function() {
      console.log("mouseDragged");
      alien1.ocSpin();
      alien2.ocSpin();
    }

    this.mousePressed = function()
    {
      if(!epic.isPlaying())
        retro_ping.play();
    }
}


///////////////////////  3  ////////////////////////

function scene3()  {
  let alien1, alien2, alien3;
  let gui, b1, b2;

  this.setup = function() {
      house = loadImage("assets/house.jpeg");
      background(house);
      console.log("We are at setup for scene2");
      alien1 = new ocAlien(color("#3fe330"), width/3, 200, 15, 1.2, 0, 0, 5);
      alien2 = new ocAlien(color("#cee330"), (3*width)/4, 400, -25, 0.7, 0, 0, 8);
      alien3 = new ocAlien(color("#30d4e3"), width/2, 300, 5, 1.0, 0, 0, 3);
      angleMode(DEGREES);
      rectMode(CENTER);
      gui = createGui();
      b1 = createButton("Help",width-200, 140);
      b2 = createButton("Next",width-200, 70);
  }

  this.enter = function()
  {
      console.log("We are at scene2 (again?)");
      angleMode(DEGREES);
      rectMode(CENTER);
      if(retro_ping.isPlaying())
        retro_ping.stop();
      if(bass.isPlaying())
        bass.stop();
      if(epic.isPlaying())
        epic.stop();
      if(!retro_alarm.isPlaying())
        retro_alarm.play();
      gui = createGui();
      b1 = createButton("Help",width-200, 140);
      b2 = createButton("Next",width-200, 70);
  }

    this.draw = function()
    {
      background(house);
      drawGui();
      alien1.displayHappy();
      alien2.displayHappy();
      alien3.displayAngry();

      if(b1.isPressed) {
        this.sceneManager.showScene(sceneHelp);
      }
      if(b2.isPressed) {
        this.sceneManager.showScene(theend);
      }
    }

    this.mouseDragged = function() {
      console.log("mouseDragged");
      alien1.ocScale();
      alien2.ocScale();
      alien3.ocScale();
    }

    this.mousePressed = function()
    {
      if(!epic.isPlaying())
        retro_ping.play();
    }
}


///////////////////////  the end  ////////////////////////

function theend() {
  let lox;
  let gui, b1;

  this.setup = function()  {
      console.log("we are setting up the end scene");
      earth_space = loadImage("assets/earth-space.png");
      background(earth_space);
      rectMode(CORNER);
      lox = width-100;
      gui = createGui();
      b1 = createButton("Restart",width-200, 140);
  }

  this.enter = function() {
    console.log("we are entering the end scene");
    rectMode(CORNER);
    lox = width-100;
    if(retro_alarm.isPlaying())
      retro_alarm.stop();
    if(retro_ping.isPlaying())
      retro_ping.stop();
    if(bass.isPlaying())
      bass.stop();
    if(epic.isPlaying())
      epic.stop();
    gui = createGui();
    b1 = createButton("Restart",width-200, 140);
  }

  this.draw = function() {
   background(earth_space);
   fill(255);
   drawGui();
   text("The End", lox, height/2);
   if (lox < 0) {
    lox = width;
   } else {
    lox--;
   }
   if(b1.isPressed) {
    this.sceneManager.showScene(intro);
  }
  }
}
