let dayimg
let nightimg
let bgimg

function preload() {
    dayimg = loadImage('img/day.png');
    nightimg = loadImage('img/night.png');
    fontregular = loadFont('img/DarkParadise-Italic.otf')
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
    textFont(fontregular, 80);
    fill(47,62,17);
    textAlign(CENTER);
    text('good morning', 500, 200);
    pop();
    push();
    if(mouseX < 1000 && mouseX > 500 && mouseY < 900 && mouseY > 300) {
        background(77,92,122);
        image(nightimg, 237, 250, 525, 500);
        noStroke();
        textFont(fontregular, 80);
        fill(215,184,191);
        text('goodnight', 500, 830);
        push();
            translate(width * 0.75, height * 0.4);
            rotate(frameCount / 200.0);
            fill(135,181,211);
            star(0, 0, 80, 10, 10);
        pop();
        push();
            translate(width * 0.25, height * 0.6);
            rotate(frameCount / 100.0);
            star(0, 0, 10, 70, 18);
        pop();
        push();
            translate(width * 0.34, height * 0.3);
            rotate(frameCount / 50.0);
            star(0, 0, 10, 20, 5);
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
  