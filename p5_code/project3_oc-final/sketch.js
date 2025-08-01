/**
 * ART 101
 * Project 3 - Personal Clock
 * sketch.js
 * Code by Olivia Joy Cacdac
 */

let s, m, h; // seconds, minutes, hours
let ms, mm, mh; // mapped seconds, mins, hrs
let s_img_w = 40; // image sizes
let m_img_w = 70;
let h_img_w = 100;
let bSz = 150;
let currentSec, currentMin, currentHr; // image for current sec, min, hr
let utensils, juice, breakfast; // breakfast
let utensil2, waterBottle, lunch; // lunch
let waterCup, dinner; // dinner
let dogTreat, dogFood, dog; // feed dogs
let code, laptop, backpack; // school
let pen, notebook; // homework/study
let tvRemote, prime, tv; // watch tv shows
let sims, minecraft, ps4; // play video games
let internet, ig, socialMedia; // social media scrolling
let z, bed, sleep; // sleep
let hrArr; // array of images per hour
let bgColors; // colors of the day per hour
let font;
let bgc;
let t1 = { timer:0, counter:0, period:0, act_timer:0, actflag:0};
let t2 = { timer:0, counter:0, period:0, act_timer:0, actflag:0};
let sunM, sunA, moonN1, moonN2;
let sun, moon; // img

function preload()  {
  font = loadFont('assets/lb-bold.ttf');
  utensils = loadImage('assets/utensils1.png');
  utensils2 = loadImage('assets/utensils2.png');
  juice = loadImage('assets/juice.png');
  breakfast = loadImage('assets/breakfast.png');
  code = loadImage('assets/code.png');
  notebook = loadImage('assets/notebook.png');
  laptop = loadImage('assets/laptop.png');
  pen = loadImage('assets/pen.png');
  backpack = loadImage('assets/backpack.png');
  lunch = loadImage('assets/sandwich.png');
  waterBottle = loadImage('assets/water-bottle.png');
  dinner = loadImage('assets/dinner.png');
  waterCup = loadImage('assets/water-cup.png');
  dogTreat = loadImage('assets/dog-treat.png');
  dogFood = loadImage('assets/dog-bowls.png');
  dog = loadImage('assets/dog.png');
  tvRemote = loadImage('assets/tv-remote.png');
  prime = loadImage('assets/prime-video.png');
  tv = loadImage('assets/mr-robot2.png');
  z = loadImage('assets/z.png');
  bed = loadImage('assets/bed.png');
  sleep = loadImage('assets/sleep-mask.png');
  internet = loadImage('assets/internet.png');
  ig = loadImage('assets/ig.png');
  socialMedia = loadImage('assets/social-media.png');
  sims = loadImage('assets/sims.png');
  minecraft = loadImage('assets/minecraft.png');
  ps4 = loadImage('assets/ps4-controller.png');
  sun = loadImage('assets/sun.png');
  moon = loadImage('assets/moon.png');
  
}

function setup() {
  createCanvas(1200+bSz,700);
  bgColors = [color("#1d3555"), color("#1d3555"), color("#1d3555"), color("#1d3555"), color("#1d3555"), color("#1d3555"),
              color("#dcbd77"), color("#9cc2c3"), color("#84b8c3"), color("#a7d3e7"), color("#81bce7"),
              color("#70bef4"), color("#70bef4"), color("#70bef4"), color("#70bef4"), color("#69a9e2"), color("#69a9e2"), 
              color("#5b93c5"), color("#5b93c5"), color("#486284"), color("#486284"), color("#3a4a74"), color("#3a4a74"),
              color("#1d3555")];
  bgc = color(bgColors[hour()]); // color for current hr
  background(bgc);
  angleMode(DEGREES);
  textSize(40);
  textFont(font);
  noStroke();
  currentSec = z; // set to default images
  currentMin = bed;
  currentHr = sleep;
  hrArr = [ps4, ig, bed, bed, bed, bed, bed, bed, bed, bed, dog, breakfast, 
          backpack, backpack, backpack, backpack, prime, dog, laptop, laptop, dinner, laptop, laptop, ps4];
  resetTime(t1,0);
  resetTime(t2,0);
}

function draw() {
  fill(255); // text color

  // GET current second, minute, hour
  s = second(); // 0-59
  m = minute(); // 0-59
  h = hour();   // 0-23
  console.log("hour " + h);
  console.log("min " + m);
  console.log("sec " + s);

  // MAP seconds, minutes, hours
  // input, input low range, input high range, scale output low, scale output high
  ms = map(s, 0, 59, -(s_img_w/2), (width-bSz)-s_img_w);
  mm = map(m, 0, 59, -(m_img_w/4), (width-bSz)-m_img_w);
  mh = map(h, 0, 23, -(h_img_w/2), (width-bSz)-h_img_w);

  // map positions for sun and moon
  sunM = map(h, 6, 12, height-m_img_w, 0);
  sunA = map(h, 13, 19, 0, height-(m_img_w/2));
  moonN1 = map(h, 20, 23, height-m_img_w, 100);
  moonN2 = map(h, 0, 5, 0, height-(m_img_w/2));
  
  // EVENTS
  if (h == 10 && m >= 30) { // 10:30 to 10:59 = feed dogs
    currentSec = dogTreat;
    currentMin = dogFood;
    currentHr = dog;
  }
  else if (h == 11) { // 11:00am to 11:59am = breakfast
    currentSec = utensils;
    currentMin = juice;
    currentHr = breakfast;
  } 
  else if (h >= 12 && h < 16) { // 12:00pm to 3:59pm = school/classes
    currentSec = code;
    currentMin = laptop;
    currentHr = backpack;
  } 
  else if (h >= 16 && h <= 17) { 
    if (h == 16 && m < 30) { // 4:00pm to 4:29pm = eat lunch
      currentSec = utensils2;
      currentMin = waterBottle;
      currentHr = lunch;
    }
    else if (h == 17 && m >= 30) { // 5:30pm to 5:59pm = feed dogs
      currentSec = dogTreat;
      currentMin = dogFood;
      currentHr = dog;
    }
    else { // 4:30pm to 5:29 pm = watch show
      currentSec = tvRemote;
      currentMin = tv;
      currentHr = prime;
    }
  } 
  else if ((h >= 18 && h < 20) || (h >= 21 && h < 23)) { // 6:00pm to 7:59pm and 9:00pm to 10:59pm = homework/study
    currentSec = pen;
    currentMin = notebook;
    currentHr = laptop;
  } 
  else if (h == 20) { // 8:00pm to 8:59pm = dinner
    currentSec = utensils2;
    currentMin = waterCup;
    currentHr = dinner;
  } 
  else if (h == 23 || h < 1) { // 11:00pm to 12:59am = play video games
    currentSec = sims;
    currentMin = minecraft;
    currentHr = ps4;
  } 
  else if (h == 1) { // social media scrolling
    currentSec = internet;
    currentMin = socialMedia;
    currentHr = ig;
  }
  else { // 2:00am to 10:29am = sleep
    currentSec = z;
    currentMin = sleep;
    currentHr = bed;
  }

  let offs, offm, offh; // y offsets for images

  // SECONDS
  push();
  translate(0,0);

  // keep bg color updated to the hour
  fill(bgColors[h]);
  rect(0, 0, width, 155);

  // map time before this program is opended
  for (let i=1; i<s; i++) { // i = 1 so that no image is drawn at 0 seconds
    if (i % 2 == 0) {
      offs = 0;
    } else {
      offs = s_img_w+10;
    }
     image(currentSec, map(i, 0, 59, -(s_img_w/2), (width-bSz)-s_img_w), 20+offs, s_img_w, s_img_w+3); 
  }

  // set y offset value for minute img
  if (s % 2 == 0) {
    offs = 0;
  } else {
    offs = s_img_w+10;
  }

  if (s == 0) { // reset seconds
    fill(bgColors[h]); // bg color corresponding to current hour
    rect(0, 0, width, 155);
  } else {
    // draw current second
    image(currentSec, ms, 20+offs, s_img_w, s_img_w+3); // map live time
  }

  pop();

  // MINUTES
  push();
  translate(0, 155);

  // keep bg color updated to the hour  
  fill(bgColors[h]);
  rect(0, 0, width, 275);
  
  // map time before this program is opended
  for (let i=1; i<m; i++) { // i = 1 so that no image is drawn at 0 minutes
    if (i % 3 == 0) {
      offm = 0;
    } else if (i % 3 == 1) {
      offm = m_img_w+10;
    } else {
      offm = 2 * (m_img_w+10);
    }
    image(currentMin, map(i, 0, 59, -(m_img_w/4), (width-bSz)-m_img_w), 20+offm, m_img_w, m_img_w); 
  }

  // set y offset value for min img
  if (m % 3 == 0) {
    offm = 0;
  } else if (m % 3 == 1) {
    offm = m_img_w+10;
  } else {
    offm = 2 * (m_img_w+10);
  }

  // reset minutes or draw current minutes
  if (m == 0) { // dont draw image for minute 0
    fill(bgColors[h]);
    rect(0, 0, width, 275);
  } else {
    // draw current minute
    image(currentMin, mm, 20+offm, m_img_w, m_img_w); 
  }
  
  pop();

  // HOURS
  push();
  translate(0, 430);

  // keep background color updated
  fill(bgColors[h]);
  rect(0, 0, width, height);

  // map time before this program is opended and
  for (let i=1; i<h; i++) { // i = 1 so that no image is drawn at 0 hours
    if (i % 2 == 0) {
      offh = 0;
    } else {
      offh = h_img_w+10;
    }
    image(hrArr[i], map(i, 0, 23, -(h_img_w/2), (width-bSz)-h_img_w), 20+offh, h_img_w, h_img_w); 
  } 
  
  // set y offset for hr img
  if (h % 2 == 0) {
    offh = 0;
  } else {
    offh = h_img_w+10;
  }

  // reset hours or draw current hour
  if (h == 0) { // dont draw for hour 0
    fill(bgColors[h]);
    rect(0, 0, width, height);
  } else { 
    // draw current hour
    image(currentHr, mh, 20+offh, h_img_w, h_img_w); 
  }
  pop();

  stroke(255);
  strokeWeight(1);
  line(0, 155, width-bSz-10, 155);
  line(0, 430, width-bSz-10, 430);
  noStroke();

  // MILLIS
  push();
  textSize(20);

  nextInterval(t1,15000,3000); // every 15 seconds, show text for 3 seconds
  let nt1 = getIntervalCount(t1);
  let txt1 = "";
  
  if (h >= 12 && h < 16) { // during class time
    txt1 = "Focus";
  } else {
    txt1 = "";
  }

  if (checkIntervalAction(t1)) {
    text(txt1, width/3, 145);
  }
  if (nt1 > 100) {
  resetTime(t1,0);
  }

  nextInterval(t2,7000,2000); // every 7 seconds, show text for 2 seconds
  let nt2 = getIntervalCount(t2);
  let txt2 = "";
  
  if (h == 18 || h == 22 || (h == 23 && m >= 15 && m < 45)) { // during study time or when playing video games
    txt2 = "Eat snack - crackers";
  } else if ((h >= 2 && m > 10) && h < 10) { // during sleep
    txt2 = "Dream";
  } else {
    txt2 = "";
  }

  if (checkIntervalAction(t2)) {
    text(txt2, width/3, 145);
  }
  if (nt2 > 100) {
  resetTime(t2,0);
  }
  pop();

  // SHOW TEXT FOR ALARMS
  if ((h == 17 && m == 30) || (h == 10 && m == 30)) { // feed dogs
    if (h == 10 && s <= 10) { // for morning
      text("Wake Up!", width-350, 100);
    }
    else if (s <= 40) { // show text at min 30 in the first 40 seconds
      text("Feed the Dogs!", width-350, 100);
    }
  }
  if (h == 11 && m == 0) {
    if (s <= 40) { // show text at min 30 in the first 40 seconds
      text("Eat Breakfast!", width-350, 100);
    }
  }
  if (h == 12 && m == 0) {
    if (s <= 40) { // show text at min 30 in the first 40 seconds
      text("Go to Class!", width-350, 100);
    }
  }
  if (h == 16 && m == 0) {
    if (s <= 40) { // show text at min 30 in the first 40 seconds
      text("Eat Lunch!", width-350, 100);
    }
  }
  if (h == 16 && m == 30) {
    if (s <= 40) { // show text at min 30 in the first 40 seconds
      text("Watch TV \n  Show!", width-350, 100);
    }
  }
  if ((h == 18 && m == 0) || (h == 21 && m == 0)) {
    if (s <= 40) { // show text at min 30 in the first 40 seconds
      text("Do Homework \n & Study!", width-350, 100);
    }
  }
  if (h == 20 && m == 0) {
    if (s <= 40) { // show text at min 30 in the first 40 seconds
      text("Eat Dinner!", width-350, 100);
    }
  }
  if (h == 23 && m == 0) {
    if (s <= 40) { // show text at min 30 in the first 40 seconds
      text("Play Video \n Games!", width-350, 100);
    }
  }
  if (h == 1 && m == 0) {
    if (s <= 40) { // show text at min 30 in the first 40 seconds
      text("Scroll through \nInstagram!", width-350, 100);
    }
  }
  if (h == 2 && m == 0) {
    if (s <= 40) { // show text at min 30 in the first 40 seconds
      text("Go to Sleep!", width-350, 100);
    }
  }

  // DRAW SUN OR MOON to represent time of day
  let currentMap; // maping for sun/moon rising/setting
  let currentIcon; // sun or moon
  if (h >= 6 && h < 13) {
    currentMap = sunM;
    currentIcon = sun;
  }
  else if (h >= 13 && h < 20) {
    currentMap = sunA;
    currentIcon = sun;
  }
  else if (h >= 20) {// 8pm to 11:59am\
    currentMap = moonN1;
    currentIcon = moon;
  }
  else {
    currentMap = moonN2;
    currentIcon = moon;
  }
  image(currentIcon, (width-bSz)+30, currentMap, m_img_w, m_img_w);
}

// functions below are from P3 Time Example 6 - for millis() use
function resetTime(obj,s) {
  obj.timer = millis();
  obj.counter  = s;
  obj.act_flag = 0;
}

function nextInterval(obj,p,ap) {
   // p is a number in milliseconds
   if (millis() - obj.timer > p ) {
      obj.timer = millis();
      obj.counter = obj.counter+1;
      obj.act_timer = millis();
      obj.act_flag = 1;
   }

   if ( obj.act_flag == 1 ) {  // on 
     if (millis() - obj.act_timer > ap ) {  // off again 
      obj.act_flag = 0;
     }
   }
   return  obj.counter;
}

function checkIntervalAction(obj){
   if (obj.act_flag == 1 ) {
    return true;
   } else {
    return false;
   }
}

function getIntervalCount(obj){
  return obj.counter;
}