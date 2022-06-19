let dayimg
let nightimg
let bgimg
let nightimg2
var gif_createImg;

function preload() {
    dayimg = loadImage('img/day.gif');
    nightimg = loadImage('img/night.gif');
    fontregular = loadFont('img/DarkParadise-Italic.otf');
    fontNew = loadFont('img/MilestoneFreeVersion-Script.otf');
}

function setup() {
    createCanvas(1000, 1000);
    rectMode();
}

function draw() {
    background(236,156,38);
    
    push();
    image(dayimg, 250, 250, 500, 500);
    noStroke();
    textFont(fontNew, 70);
    fill(47,62,17);
    textAlign(CENTER);
    text('good morning', 510, 220);
    cursor('img/cursor.png');
    push();
            translate(width * 0.5, height * 0.5);
            rotate(frameCount / 100.0);
            fill(227,215,22);
            star(180, 180, 10, 40, 10);
        pop();
        push();
            translate(width * 0.5, height * 0.5);
            rotate(frameCount / 120.0);
            fill(227,215,22);
            star(180, 180, 10, 40, 10);
        pop();
        push();
            translate(width * 0.5, height * 0.5);
            rotate(frameCount / 140.0);
            fill(227,215,22);
            star(180, 180, 10, 40, 10);
        pop();
    pop();
    push();
    if(mouseX < 750 && mouseX > 250 && mouseY < 750 && mouseY > 250) {
        background(77,92,122);
        image(nightimg, 237, 250, 525, 500);
        noStroke();
        textFont(fontNew, 70);
        fill(215,184,191);
        textAlign(CENTER);
        text('goodnight', 490, 810);
        cursor('img/cursor2.png');
        push();
            translate(width * 0.75, height * 0.4);
            rotate(frameCount / 200.0);
            fill(135,181,211);
            star(0, 0, 80, 10, 10);
        pop();
        
        push();
            translate(width * 0.25, height * 0.6);
            rotate(frameCount / 100.0);
            fill(135,181,211);
            star(0, 0, 10, 70, 18);
        pop();
        push();
            translate(width * 0.3, height * 0.64);
            rotate(frameCount / 230.0);
            fill(255);
            star(0, 0, 10, 40, 8);
        pop();
        push();
            translate(width * 0.335, height * 0.27);
            rotate(frameCount / 50.0);
            star(0, 0, 10, 20, 5);
        pop();
        push();
            translate(width * 0.38, height * 0.3);
            rotate(frameCount / 70.0);
            fill(135,181,211);
            star(0, 0, 10, 30, 4);
        pop();
        push();
            translate(width * 0.33, height * 0.33);
            rotate(frameCount / 30.0);
            fill(255);
            star(0, 0, 10, 20, 8);
        pop();
        push();
            translate(width * 0.74, height * 0.45);
            rotate(frameCount / 50.0);
            fill(255);
            star(0, 0, 10, 20, 5);
        pop();
        push();
            translate(width * 0.69, height * 0.69);
            rotate(frameCount / 28.0);
            star(0, 0, 10, 20, 8);
        pop();
        push();
            translate(width * 0.64, height * 0.7);
            rotate(frameCount / 50.0);
            fill(135,181,211);
            star(0, 0, 10, 30, 4);
        pop();
    }
}

function star(x, y, radius1, radius2, npoints) {
    let angle = TWO_PI / npoints;
    let halfAngle = angle / 2.0;
    beginShape();
    for (let a = 0; a < TWO_PI; a += angle) {
      let sx = x + cos(a) * radius2;
      let sy = y + sin(a) * radius2;
      vertex(sx, sy);
      sx = x + cos(a + halfAngle) * radius1;
      sy = y + sin(a + halfAngle) * radius1;
      vertex(sx, sy);
    }
    endShape(CLOSE);
  }
  