
// =============================================================
// =                         BEGIN SCENES                      =
// =============================================================
//
// ART 101 - Final Project
// scenes.js
// Code by Olivia Joy Cacdac
//

let tsz = 30; // text size
let min, sec;
let prevScene;
let pomodoro_ct = 0; // when reaches 4th study session, show end scene after game

///////////////////////  1 - intro  ////////////////////////

function intro()  { // a local version of the draw command
    let gui, help_btn, start_btn, game_btn;

    this.setup = function() {
      console.log("setup scene 1 (intro)");
      textSize(tsz);
    }

    this.enter = function()  {
      console.log("enter scene 1 (intro)");
      prevScene = "intro";
      background(intro_bg);
      angleMode(DEGREES);
      rectMode(CENTER);
      textAlign(CENTER);

      // initialize gui buttons from library touchgui
      gui = createGui();
      help_btn = createButton("Help", 150, height-140);
      start_btn = createButton("Start", width/2 - 50, height-140);
      game_btn = createButton("Game", width-250, height-140);

      // check sounds so they don't overlap
      if(flute.isPlaying())
        flute.stop();
      if(rain.isPlaying())
          rain.stop();
      if(retro_ping.isPlaying())
          retro_ping.stop();
      if(epic.isPlaying())
          epic.stop();
      if(laser.isPlaying())
          laser.stop();
      if(future.isPlaying())
          future.stop();
    } // end enter


    this.draw = function() {
      background(intro_bg);
      fill(255);

      // check button presses
      drawGui();
      if(help_btn.isPressed) {
        sweep.play();
        this.sceneManager.showScene(sceneHelp);
      }
      if(start_btn.isPressed) {
        sweep.play();
        this.sceneManager.showScene(scene2);
      }
      if(game_btn.isPressed) {
        sweep.play();
        this.sceneManager.showScene(scene3);
      }

      push();
      textSize(125);
      text("25:00", width/2, 300);
      pop();
    } // end draw

} // end intro



///////////////////////  2 - study  ////////////////////////

function scene2()  {
  let gui, reset_btn, pause_tgl, help_btn;
  let minRemain, secRemain;
  let sz_bw, sz_bh, sz_gh, sz_c1w, sz_c1h, sz_c2h; // size counters
  let sz_l; // array for light size counters
  let alien;
  let motivation = ["Stay determined!", "Keep working hard!", "Keep up the good work!", "You've got this!", 
                  "Believe in yourself!", "Keep going, you're making progress", "Great work!"];

    this.setup = function() {
      console.log("setup scene 2 (study)");
      textSize(tsz);
      this.resetVars(1); // 1 means also reset mins
    }

    this.enter = function()  {
      console.log("enter scene 2 (study)");
      console.log(prevScene);
      background(study_bg);
      angleMode(DEGREES);
      rectMode(CENTER);
      textAlign(CENTER);

      // reset timer when prevScene is all but the help scene (help scene just pauses timer)
      if (prevScene == "intro" || prevScene == "game" || prevScene == "end") {
        console.log("will reset timer coming fr diff scene");
        this.resetVars(1);
        if(!flute.isPlaying())
        flute.play();
      }

      prevScene = "study";

      // initialize gui buttons from library touchgui
      gui = createGui();
      reset_btn = createButton("Reset Timer", width-175, 100);
      help_btn = createButton("Help", 50, 50);
      pause_tgl = createToggle("Pause Timer", width-175, 50);
      pause_tgl.labelOff = "Pause Timer";
      pause_tgl.labelOn = "Unpause";
      pause_tgl.val = false;

      // check sounds so they don't overlap
      if(rain.isPlaying())
        rain.stop();
      if(retro_ping.isPlaying())
        retro_ping.stop();
      if(epic.isPlaying())
        epic.stop();
      if (laser.isPlaying())
        laser.stop();
      if(future.isPlaying())
        future.stop();

      alien = new ocAlien(color("#3fe330"), -230, -40, 0, 1.0); //330, height-240

      // FOR TESTING
      // minRemain = 1;
      // secRemain = 0;

    } // end enter


    this.draw = function() {
      background(study_bg);
      fill(255);
      if (!flute.isPlaying() && !rain.isPlaying())
        rain.play();

      // check button presses
      drawGui();
      if (reset_btn.isPressed) {
        sweep.play();
        if(rain.isPlaying())
          rain.stop();
        if(flute.isPlaying())
          flute.stop();
        flute.play();
        this.resetVars(1);
      }
      if (help_btn.isPressed) {
        sweep.play();
        this.sceneManager.showScene(sceneHelp);
      }
      
      // draw timer countdown
      push();
      textSize(100);
      let minTxt = minRemain;
      let secTxt = secRemain;
      if (minRemain<10)
        minTxt = "0" + minRemain;
      if (secRemain<10)
        secTxt = "0" + secTxt;
      text(minTxt + ":" + secTxt, width/2, 125);
      pop();

      // check conditions for timer countdown
      if (secRemain == 0 && !pause_tgl.val) {
        minRemain--;
        secRemain = 59;
        this.resetVars(0); // 0 means don't reset mins
      } else if ((frameCount % 60 == 0) && !pause_tgl.val) {
        secRemain--;
      }

      // when timer gets to 0, play sound and go to game screen
      if (minRemain == 0 && secRemain == 0) {
        pomodoro_ct++; // increment global pomodoro count
        this.sceneManager.showScene(scene3);
      }

      // show a motivational message every minute
      if (secRemain <= 35 && secRemain >= 25) {
        push();
        text(motivation[minRemain%motivation.length], width/2 + 50, 200);
        pop();
      }

      // begin simulation of alien building its space ship
      // repeats every 1 minute
      push();
      translate(lox, height-220);
      stroke(0);
      lc = color(200, 230, 170);
      
      if (secRemain > 56) { // alien moves onto screen
        alien.displayAlien();
        if (lox < width/2 + 50 && !pause_tgl.val)
          lox+=5;
      }
      else if (secRemain > 50){ // build space ship body
        alien.displayAlien();
        if (!pause_tgl.val)
          alien.ocMotion(30);
        
        if (sz_bw < 400 && !pause_tgl.val)
          sz_bw+=1.25;
        if (sz_bh < 110 && !pause_tgl.val)
          sz_bh+=0.5;
        fill(color(150));
        ellipse(0,0, sz_bw, sz_bh); // ship body
      }
      else if (secRemain > 44) { // add glow behind ship
        alien.displayAlien();
        if (!pause_tgl.val)
          alien.ocMotion(30);

        if (sz_gh < 130 && !pause_tgl.val)
          sz_gh+=0.5;
        fill(147, 245, 230, 150);
        ellipse(0,25, 330, sz_gh);

        fill(color(150));
        ellipse(0,0, 400, 110); // ship body
      } 
      else if (secRemain > 40){ // add light
        alien.displayAlien();
        if (!pause_tgl.val)
          alien.ocMotion(30);
        fill(147, 245, 230, 150);
        ellipse(0,25, 330, 130); // glow
        fill(color(150));
        ellipse(0,0, 400, 110); // ship body
        if (sz_l[0] < 40 && !pause_tgl.val)
          sz_l[0] += 0.25;
        this.drawLight(lc, 0, 25, 0, sz_l[0]);
      } 
      else if (secRemain > 36) { // add light
        alien.displayAlien();
        if (!pause_tgl.val)
          alien.ocMotion(30);
        fill(147, 245, 230, 150);
        ellipse(0,25, 330, 130); // glow
        fill(color(150));
        ellipse(0,0, 400, 110); // ship body
        this.drawLight(lc, 0, 25, 0, 40);
        if (sz_l[1] < 40 && !pause_tgl.val)
          sz_l[1] += 0.25;
        this.drawLight(lc, 60, 22, -25, sz_l[1]);
      }
      else if (secRemain > 32) { // add light
        alien.displayAlien();
        if (!pause_tgl.val)
          alien.ocMotion(30);
        fill(147, 245, 230, 150);
        ellipse(0,25, 330, 130); // glow
        fill(color(150));
        ellipse(0,0, 400, 110); // ship body
        this.drawLight(lc, 0, 25, 0, 40);
        this.drawLight(lc, 60, 22, -25, 40);
        if (sz_l[2] < 40 && !pause_tgl.val)
          sz_l[2] += 0.25;
        this.drawLight(lc, -60, 22, 25, sz_l[2]);
      }
      else if (secRemain > 28) { // add light
        alien.displayAlien();
        if (!pause_tgl.val)
          alien.ocMotion(30);
        fill(147, 245, 230, 150);
        ellipse(0,25, 330, 130); // glow
        fill(color(150));
        ellipse(0,0, 400, 110); // ship body
        this.drawLight(lc, 0, 25, 0, 40);
        this.drawLight(lc, 60, 22, -25, 40);
        this.drawLight(lc, -60, 22, 25, 40);
        if (sz_l[3] < 40 && !pause_tgl.val)
          sz_l[3] += 0.25;
        this.drawLight(lc, 120, 12, -45, sz_l[3]);
      }
      else if (secRemain > 24) { // add light
        alien.displayAlien();
        if (!pause_tgl.val)
          alien.ocMotion(30);
        fill(147, 245, 230, 150);
        ellipse(0,25, 330, 130); // glow
        fill(color(150));
        ellipse(0,0, 400, 110); // ship body
        this.drawLight(lc, 0, 25, 0, 40);
        this.drawLight(lc, 60, 22, -25, 40);
        this.drawLight(lc, -60, 22, 25, 40);
        this.drawLight(lc, 120, 12, -45, 40);
        if (sz_l[4] < 40 && !pause_tgl.val)
          sz_l[4] += 0.25;
        this.drawLight(lc, -120, 12, 45, sz_l[4]);
      }
      else if (secRemain > 20) { // add light
        alien.displayAlien();
        if (!pause_tgl.val)
          alien.ocMotion(30);
        fill(147, 245, 230, 150);
        ellipse(0,25, 330, 130); // glow
        fill(color(150));
        ellipse(0,0, 400, 110); // ship body
        this.drawLight(lc, 0, 25, 0, 40);
        this.drawLight(lc, 60, 22, -25, 40);
        this.drawLight(lc, -60, 22, 25, 40);
        this.drawLight(lc, 120, 12, -45, 40);
        this.drawLight(lc, -120, 12, 45, 40);
        if (sz_l[5] < 40 && !pause_tgl.val)
          sz_l[5] += 0.25;
        this.drawLight(lc, 165, -5, -65, sz_l[5]);
      }
      else if (secRemain > 16) { // add light
        alien.displayAlien();
        if (!pause_tgl.val)
          alien.ocMotion(30);
        fill(147, 245, 230, 150);
        ellipse(0,25, 330, 130); // glow
        fill(color(150));
        ellipse(0,0, 400, 110); // ship body
        this.drawLight(lc, 0, 25, 0, 40);
        this.drawLight(lc, 60, 22, -25, 40);
        this.drawLight(lc, -60, 22, 25, 40);
        this.drawLight(lc, 120, 12, -45, 40);
        this.drawLight(lc, -120, 12, 45, 40);
        this.drawLight(lc, 165, -5, -65, 40);
        if (sz_l[6] < 40 && !pause_tgl.val)
          sz_l[6] += 0.25;
        this.drawLight(lc, -165, -5, 65, sz_l[6]);
      }
      else if (secRemain > 11) { // draw ship cap
        alien.displayAlien();
        if (!pause_tgl.val)
          alien.ocMotion(30);
        fill(147, 245, 230, 150);
        ellipse(0,25, 330, 130); // glow
        fill(color(150));
        ellipse(0,0, 400, 110); // ship body
        this.drawLight(lc, 0, 25, 0, 40);
        this.drawLight(lc, 60, 22, -25, 40);
        this.drawLight(lc, -60, 22, 25, 40);
        this.drawLight(lc, 120, 12, -45, 40);
        this.drawLight(lc, -120, 12, 45, 40);
        this.drawLight(lc, 165, -5, -65, 40);
        this.drawLight(lc, -165, -5, 65, 40);

        fill(color(150, 150, 200, 70));
        if (sz_c1w < 280 && !pause_tgl.val)
          sz_c1w++;
        if (sz_c1h < 45 && !pause_tgl.val)
          sz_c1h+=0.2;
        arc(3, -40, sz_c1w, sz_c1h, PI, 180); // cap under
      }
      else if (secRemain > 4){ // draw cover cap
        alien.displayAlien();
        if (!pause_tgl.val)
          alien.ocMotion(30);
        fill(147, 245, 230, 150);
        ellipse(0,25, 330, 130); // glow
        fill(color(150));
        ellipse(0,0, 400, 110); // ship body
        this.drawLight(lc, 0, 25, 0, 40);
        this.drawLight(lc, 60, 22, -25, 40);
        this.drawLight(lc, -60, 22, 25, 40);
        this.drawLight(lc, 120, 12, -45, 40);
        this.drawLight(lc, -120, 12, 45, 40);
        this.drawLight(lc, 165, -5, -65, 40);
        this.drawLight(lc, -165, -5, 65, 40);

        fill(color(150, 150, 200, 70));
        arc(3, -40, 280, 45, PI, 180);
        if (sz_c2h < 380 && !pause_tgl.val) 
          sz_c2h++;
        arc(0, -40, 275, sz_c2h, 180, PI); // cap over cover
      }
      else { // move alien and space ship off the screen
        alien.displayAlien();
        fill(147, 245, 230, 150);
        ellipse(0,25, 330, 130); // glow
        fill(color(150));
        ellipse(0,0, 400, 110); // ship body
        this.drawLight(lc, 0, 25, 0, 40);
        this.drawLight(lc, 60, 22, -25, 40);
        this.drawLight(lc, -60, 22, 25, 40);
        this.drawLight(lc, 120, 12, -45, 40);
        this.drawLight(lc, -120, 12, 45, 40);
        this.drawLight(lc, 165, -5, -65, 40);
        this.drawLight(lc, -165, -5, 65, 40);
        fill(color(150, 150, 200, 70));
        arc(3, -40, 280, 45, PI, 180);
        arc(0, -40, 275, 380, 180, PI); // cap over cover
        if (!pause_tgl.val)
          lox+=5;
      }
      pop();
    } // end draw

    // reset timer, size, and lox variables
    // minReset = 1 means completely reset timer to 25:00
    // otherwise reset everythinge except mins
    this.resetVars = function(minReset) {
      if (minReset == 1) {
        minRemain = 25;
        secRemain = 0;
      } else {
        secRemain = 59;
      }
      sz_bw = 1;
      sz_bh = 1;
      sz_gh = 10;
      sz_l = [0,0,0,0,0,0,0];
      sz_c1w = 1;
      sz_c1h = 1;
      sz_c2h = 1;
      lox = -20;
    } // end resetVars

    // draw one light for space ship
    this.drawLight = function(k, lx, ly, r, sz) {
      push();
      translate(lx,ly)
      rotate(r);
      fill(k);
      ellipse(0, 0, 12, sz);
      pop()
    }
} // end scene 2 (study)


///////////////////////  3 - Game  ////////////////////////

function scene3()  {
  let gui, help_btn, j;
  let minRemain, secRemain;
  let w_bound = width-220;
  let score;
  let alien1;
  let lxB, lyB;
  let lxC, lyC;
  let lxCow, lyCow, ci;
  let drawBeam;
  let r;

    this.setup = function() {
      console.log("setup scene 3 (game)");      
      textSize(tsz);
      minRemain = 5;
      secRemain = 0;
      score = 0;
    }

    this.enter = function()  {
      console.log("enter scene 3 (game)");
      background(game_bg);
      angleMode(DEGREES);
      rectMode(CENTER);
      textAlign(LEFT);
      alien1 = new ocAlien(color("#3fe330"), width/3, 200, 10, 0.7);

      // reset timer game vars when coming from the study, intro, or end scene
      if (prevScene == "study" || prevScene == "intro" || prevScene == "end") {
        minRemain = 5;
        secRemain = 0;
        score = 0;
        drawBeam = false;
        drawCow = true;
        lxB = 0;
        lyB = 0;
        lxC = alien1.getX();
        lyC = alien1.getY();
        lxB = lxC - 80;
        lyB = lyC + 50;
        lxCow = 0;
        lyCow = height-150;
        ci = 2;
        r = true;
      } // otherwise scene is only paused when on the help scene

      prevScene = "game";

      // initialize gui
      gui = createGui();
      help_btn = createButton("Help", w_bound+40, 100);
      j = createJoystick("Joystick", w_bound+25, height-200, 175, 175, -5, 5, 5, -5);

      // check sounds
      if(flute.isPlaying())
        flute.stop();
      if(rain.isPlaying())
        rain.stop();
      if(!epic.isPlaying())
        epic.play();
      if(future.isPlaying())
        future.stop();

      // FOR TESTING
      // minRemain = 0;
      // secRemain = 10;
      // pomodoro_ct = 4; 
      // move to end scene when ct is 4, otherwise it moves back to study scene

    } // end enter

    this.draw = function() {
      background(game_bg);
      fill(255);
      stroke(255);
      line(w_bound, 0, w_bound, height);

      drawGui();
      if(help_btn.isPressed) {
        sweep.play();
        this.sceneManager.showScene(sceneHelp);
      }
      
      // draw timer countdown
      push();
      translate(w_bound, 0);
      textSize(70);
      let minTxt = minRemain;
      let secTxt = secRemain;
      if (minRemain<10)
        minTxt = "0" + minRemain;
      if (secRemain<10)
        secTxt = "0" + secTxt;
      text(minTxt + ":" + secTxt, 20, 80);

      // draw score
      textSize(30);
      text("Score: " + score, 35, 220);
      pop();

      // check countdown conditions
      if (secRemain == 0) {
        minRemain--;
        secRemain = 59;
      } else if ((frameCount % 60 == 0)) {
        secRemain--;
      }
      
      // when timer gets to 0, play sound and go to study scene
      if (minRemain == 0 && secRemain == 0) {
        // move to the end scene when reach 4 pomodoros
        if (pomodoro_ct > 0 && (pomodoro_ct % 4 == 0)) // mod 4 so no need to reset the count
          this.sceneManager.showScene(theend); 
        else // otherwise go back to the study scene
          this.sceneManager.showScene(scene2);
      }

      // game elements   
      
      lxCow+=ci;
      if (ci > 0) {
        image(cow1, lxCow, lyCow, 200, 100);
      } else {
        image(cow2, lxCow, lyCow, 200, 100);
      }
      if (lxCow < 0 || lxCow > w_bound-200)
        ci = -ci;

      if (drawBeam) {
        lyB+=2;
        if (r) {
          lxB+=2;
          image(beam, lxB, lyB, 150, 150);
        }
        else {
          lxB-=2;
          image(beam2, lxB, lyB, 150, 150);
        }
      }      
      if (lyB > height) {
        drawBeam = false;
        lxC = alien1.getX();
        lyC = alien1.getY();
        lxB = lxC - 80;
        lyB = lyC + 50;
      }

      if (dist(lxB+75, lyB+75, lxCow+100, lyCow+50) < 100) {
        score++;
        retro_ping.play();
        lxCow = random(0, w_bound-200);
        lyB = height;
      }

      alien1.displayHappy(); // alien character in space ship
      alien1.ocMotion(50);
      alien1.ocMove(j.valX, j.valY); // move with gui controller
      if (j.valX >= 0) alien1.setR(10);
      else alien1.setR(-10);
    } // end draw

    this.keyPressed = function() {
      if (key == 'B' || key == 'b' && !drawBeam) {
        console.log("key b presed");
        laser.play();
        drawBeam = true;
        if (j.valX >= 0) r = true;
        else r = false;
      }
    }

} // end scene 3 (game)


//////////////////// 4 - help instructions /////////////////

function sceneHelp() {
  let gui, back_btn;
  let home_btn;

   this.setup = function()  {
     console.log("setup scene 4 (help)");
     textSize(tsz);
     loy = 255;
   }

   this.enter = function()  {
     console.log("enter scene 4 (help)");
     background(help_bg);
     angleMode(DEGREES);
     rectMode(CORNER);
     textAlign(LEFT);

     // initialize gui
     gui = createGui();
     back_btn = createButton("Go Back", 50, 50);
     // init home button only when prev scene was study or game
     if (prevScene == "game" || prevScene == "study") {
      home_btn = createButton("Home", width-175, 50);
     }

     // check sounds
     if(!future.isPlaying())
      future.play();
     if(flute.isPlaying())
      flute.stop();
     if(rain.isPlaying())
      rain.stop();
     if(retro_ping.isPlaying())
      retro_ping.stop();
     if(epic.isPlaying())
      epic.stop();
     if(laser.isPlaying())
      laser.stop();
   } // end enter

   this.draw = function() {
     background(help_bg);
     drawGui();
     
     // information about this software/project
     push();
     translate(75, 150);
     fill(0, 190);
     rect(-10, -40, 510, 550);
     fill(240);
     let appInfo = "Use the 25 minute timer to focus on studying or completing other tasks. "
     appInfo += "A scene of an alien building its space ship will play out while you work. "
     appInfo += "Click the pause button to pause the timer and the scene. ";
     appInfo += "Click unpause to resume the countdown and the scene. ";
     appInfo += "Click the reset button to set the timer back to 25 minutes. ";
     appInfo += "Once the 25 minutes are up, you will be able to take a break for 5 minutes to play a game. "
     text("About:", 0, 0);
     text(appInfo, 0, 25, 500);
     pop();

     // how to play the game
     push();
     translate(width/2 + 75, 150);
     fill(0, 190);
     rect(-10, -40, 510, 550);
     fill(240);
     let gameInfo = "Use the controller pad on the lower right side of the game screen to move the alien. \n\n";
     gameInfo += "Press the 'b' or 'B' key to shoot lasers from the alien's ship. \n\n";
     gameInfo += "Score points by shooting the laser at the cow. ";
     text("How to play the game:", 0, 0);
     text(gameInfo, 0, 25, 500);
     pop();

     // home button shown when prev scene was game or study
     if (prevScene == "game" || prevScene == "study") {
      if(home_btn.isPressed) {
        sweep.play();
        this.sceneManager.showScene(intro);
      }
     }

     // go to previous scene
     if(back_btn.isPressed) {
      sweep.play();
      console.log(prevScene);
      if (prevScene == "intro")
        this.sceneManager.showScene(intro);
      else if (prevScene == "game")
        this.sceneManager.showScene(scene3);
      else if (prevScene == "end")
        this.sceneManager.showScene(theend);
      else if (prevScene == "study")
        this.sceneManager.showScene(scene2);
      else
        this.sceneManager.showScene(intro);
    }
   } // end draw

} // end sceneHelp


///////////////////////  5 - the end  ////////////////////////

function theend() {
  let lox;
  let gui, restart_btn;

  this.setup = function()  {
      console.log("setup scene 5 (end)");
      lox = width-100;
  }

  this.enter = function() {
    console.log("enter scene 5 (end)");
    prevScene = "end";
    background(end_bg);
    angleMode(DEGREES);
    rectMode(CENTER);
    textAlign(CENTER);
    lox = width-230;

    // init gui
    gui = createGui();
    restart_btn = createButton("Home", width/2 - 50, height-140);
    
    // check sounds
    if(flute.isPlaying())
      flute.stop();
    if (rain.isPlaying())
      rain.stop();
    if(retro_ping.isPlaying())
      retro_ping.stop();
    if(epic.isPlaying())
      epic.stop();
    if (laser.isPlaying())
      laser.stop();
    if(future.isPlaying())
      future.stop();
  } // end enter

  this.draw = function() {
   background(end_bg);
   drawGui();

   fill(255);
   text("Great job!", lox, height/2 - 50, 600);
   text("You've completed 4 Pomodoros.", lox, height/2, 600);
   text("Time for your 15-30 minute break!", lox, height/2 + 50, 600);

   // text movement
   if (lox < -300) {
    lox = width+300;
   } else {
    lox--;
   }

   if (restart_btn.isPressed) {
    sweep.play();
    this.sceneManager.showScene(intro);
   }
  } // end draw

} // end theend scene
