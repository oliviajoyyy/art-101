/**
 * ART 101
 * Project 2
 * parametric.js
 * Parametric Equations Algorithm referenced from https://p5js.org/examples/math-parametric-equations.html
 * Code by Olivia Joy Cacdac
 */

class ocParametric {

    t;
    k;      // color
    cx;     // x
    cy;     // y
    rot;    // rotation
    sc;     // scale
    spx;    // speed x
    spy;    // speed y
    ang;    // angle
    radius;

    /**
     * Constructor
     * @param {color} lk 
     * @param {x} lx 
     * @param {y} ly 
     * @param {rotation} lr 
     * @param {scale} lsc 
     */
    constructor(lk, lx, ly, lr, lsc) {
        this.k = lk;
        this.ocSetlXlY(lx, ly);
        this.rot = lr;
        this.sc = lsc;
        this.t = 0;
    }

    /**
     * Function: ocSetlXlY 
     *    Sets X and Y values for the constructor.
     *    There are 3 preset locations according to 'a' 'b' and 'c' values.
     * @param {x} lx 
     * @param {y} ly 
     */
    ocSetlXlY(lx, ly) {
        if (lx == 'a') {
            // place at top left position
            this.cx = width/2 + 600 * cos(degrees(300));
            this.cy = height/2 + 400 * sin(degrees(300));
            this.ang = 300;
        } else if (lx == 'b') {
            // place at middle right position
            this.cx = width/2 + 600 * cos(degrees(210));
            this.cy = height/2 + 400 * sin(degrees(210));
            this.ang = 210;
        } else if (lx == 'c') {
            // place at lower left position
            this.cx = width/2 + 600 * cos(degrees(45));
            this.cy = height/2 + 400 * sin(degrees(45));
            this.ang = 45;
        }
        else {
            // otherwise set according to x and y coordinates
            this.cx = lx;
            this.cy = ly;
        }
    }

    /**
     * Function: ocDisplay
     *    Displays the drawing based on the parametric algorithm equations.
     * @param {number of lines} lc 
     */
    ocDisplay(lc) { // lc = number of lines
        push();
        translate(this.cx, this.cy);
        rotate(this.rot);
        scale(this.sc);
        stroke(this.k);
        strokeWeight(1.5);
        
        //loop for adding lc number of lines
        for(let i = 0;i<lc;i++){
            line(this.x1(this.t+i), this.ocY1(this.t+i), this.ocX2(this.t+i)+50, this.y2(this.t+i)+50);
            ellipse(this.x1(this.t+i), this.ocY1(this.t+i), 15, 15);
            ellipse(this.ocX2(this.t+i)+50, this.y2(this.t+i)+50, 15, 15);
        }
        this.t += 0.15; // speed of the moving lines

        pop();
    }

    /**
     * Function: ocDisplay2
     *    Displays the drawing based on the parametric algorithm equations.
     * @param {number of lines} lc 
     */
    ocDisplay2(lc) { // lc = number of lines
        push();
        translate(this.cx, this.cy);
        rotate(this.rot);
        scale(this.sc);
        stroke(this.k);
        strokeWeight(1.5);
        
        //loop for adding lc number of lines
        for(let i = 0;i<lc;i++){
            line(this.x1(this.t+i), this.y1(this.t+i), this.x2(this.t+i)+50, this.y2(this.t+i)+50);
            ellipse(this.x1(this.t+i), this.y1(this.t+i), 15, 15);
            ellipse(this.x2(this.t+i)+50, this.y2(this.t+i)+50, 15, 15);
        }
        this.t += 0.15; // speed of the moving lines

        pop();
    }

    /**
     * Function: ocDisplay2
     *    Displays the drawing based on the parametric algorithm equations.
     * @param {number of lines} lc 
     */
    ocDisplay3(lc) { // lc = number of lines
        push();
        translate(this.cx, this.cy);
        rotate(this.rot);
        scale(this.sc);
        stroke(this.k);
        strokeWeight(1.5);
        
        //loop for adding lc number of lines
        for(let i = 0;i<lc;i++){
            line(this.ocX1_d3(this.t+i), this.ocY1_d3(this.t+i), this.x2(this.t+i)+50, this.ocY2_d3(this.t+i)+50);
            ellipse(this.ocX1_d3(this.t+i), this.ocY1_d3(this.t+i), 15, 15);
            ellipse(this.x2(this.t+i)+50, this.ocY2_d3(this.t+i)+50, 15, 15);
        }
        this.t += 0.15; // speed of the moving lines

        pop();
    }

    /**
     * Function: ocCombine
     *    Draws all objects of the two arrays with movement according to the algorithm's equations.
     * @param {array of objects} pArr1 
     * @param {array of objects} pArr2 
     * @param {distance} dist 
     * @param {speed} t 
     */
    static ocCombine(pArr1, pArr2, dist, t) {
        let x1 = width/6 + sin(t/5)*75-sin(t/20)*55-sin(t/30)*75;
        let y1 = height/3 - cos(t/10)*225+cos(t/40)*125+cos(t/30)*125;
        let x2 = width/6 + sin(t/5)*125+sin(t/25)*125+sin(t/35)*125;
        let y2 = height/3 - cos(t/15)*125-cos(t/40)*125-cos(t/35)*75;

        for(let i = 0; i<pArr1.length; i++) {
            strokeWeight(3);
            stroke(255);
            line(x1*i, y1, x2*i + dist, y2+dist);

            pArr1[i].ocSetlXlY(x1*i, y1);
            pArr2[i].ocSetlXlY(x2*i + dist, y2 + dist);
            pArr1[i].ocDisplay2(150);
            pArr2[i].ocDisplay2(150);
            pArr1[i].ocLineSpeed(1);
            pArr2[i].ocLineSpeed(1);
        }
    }
    
    /**
     * Function: ocMoveAround
     *    Wraparound behavior. Move this object according to speed x and speed y
     * @param {speed x} spx 
     * @param {speed y} spy 
     */
    ocMoveAround(spx, spy) {
        this.cx += spx;
        this.cy += spy;
        if (this.cx < 0-100) {
            this.cx = width+100;
        }
        if (this.cx > width+100) {
            this.cx = 0-100;
        }
        if (this.cy < 0-100) {
            this.cy = height+100;
        }
        if (this.cy > height+100) {
            this.cy = 0-100;
        }
    }

    /**
     * Function: ocMoveCircle
     *    Moves the object in a circle about the center of the canvas
     *    Code referenced from https://editor.p5js.org/kchung/sketches/SJkdHhWUQ
     */
    ocMoveCircle() {
        this.cx = width/2 + 600 * cos(degrees(this.ang));
        this.cy = height/2 + 400 * sin(degrees(this.ang));
        this.ang += 0.0002;
    }
    
    /**
     * Function: ocZoom
     *    Increases the scale of this object to value of zoom z, at speed sp
     * @param {zoom} z 
     * @param {speed} sp 
     */
    ocZoom(z, sp) {
        z = abs(z);  // z > 0

        if (z > this.sc) { // target scale is greater than current
            if (this.sc + 0.01 + sp < z) { // make sure scale stays below target
                this.sc += (0.01 + sp);
                console.log("sc: " + this.sc);
            }
        }
        else if (z < this.sc) { // target scale is smaller than current
            if (this.sc - (0.01 + sp) > z) {// make sure scale stays above target
                this.sc -= (0.01 + sp);
                console.log("sc: " + this.sc);
            }
        }
    }

    /**
     * Function: ocLineSpeed
     *    Increases the speed the lines are drawn at by value sp.
     * @param {speed} sp 
     */
    ocLineSpeed(sp) {
        this.t = this.t + sp;
    }

    /**
     * Function: ocSetColor 
     *    Sets the color of this object
     * @param {color} co
     */ 
    ocSetColor(co) {
        this.k = co;
    }    

    /**
     * Function: ocSpin
     *    Continuously rotates (spins) this object
     * @param {spin speed} sp 
     */
    ocSpin(sp) {
        this.rot += sp;
    }

    // The functions below are based on the equations from the Parametric Equations Algorithm
    // from https://p5js.org/examples/math-parametric-equations.html 

    // altered function to change initial x co-ordinate of the line
    x1(t){
        return sin(t/5)*125+sin(t/20)*125+sin(t/30)*125;
    }
    
    // original function to change initial y co-ordinate of the line
    y1(t){
        return cos(t/10)*125+cos(t/20)*125+cos(t/30)*125;
    }
    
    // original function to change final x co-ordinate of the line
    x2(t){
        return sin(t/15)*125+sin(t/25)*125+sin(t/35)*125;
    }
    
    // original function to change final y co-ordinate of the line
    y2(t){
        return cos(t/15)*125+cos(t/25)*125+cos(t/35)*125;
    }

    // for ocDisplay3 - altered function to change initial x co-ordinate of the line
    ocX1_d3(t){
        return sin(t/5)*725+sin(t/20)*125+sin(t/30)*125;
    }

    // for ocDisplay3 - function to change initial y co-ordinate of the line
    ocY1_d3(t){
        return cos(t/10)*125+cos(t/20)*525+cos(t/30)*125;
    }

    // for ocDisplay3 - altered function to change final y co-ordinate of the line
    ocY2_d3(t){
        return cos(t/15)*125+cos(t/25)*525+cos(t/35)*425;
    }

    // for ocDisplay - altered function to change initial y co-ordinate of the line
    ocY1(t){
        return cos(t/10)*125+cos(t/20)*325+cos(t/30)*125;
    }
    
    // for ocDisplay - altered function to change final x co-ordinate of the line
    ocX2(t){
        return sin(t/15)*525+sin(t/25)*125+sin(t/35)*125;
    }
}