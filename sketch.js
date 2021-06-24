var bow, arrow, argrp, virus;
var brown, red, yellow, black, blue, pink, green, darkgreen, orange;
var background,
  score = 0,
  arrows = 0,
  balloons = 0,
  gameState = "play";
var bottleImage, inimg, backgroundImage;
var br, rd, dg, gn, or, yw, bk, bu, pn;

function preload() {
  backgroundImage = loadImage("background0.png");
  inimg = loadImage("Vaccinne.jpg");
  bottleImage = loadImage("bottle.png");
  bn = loadImage("brown.png");
  rd = loadImage("Red.png");
  dg = loadImage("darkgreen.png");
  gn = loadImage("green.png");
  or = loadImage("orange.png");
  yw = loadImage("yellow.png");
  bk = loadImage("black.png");
  bu = loadImage("blue.png");
  pn = loadImage("pink.png");
}
function setup() {
  createCanvas(windowWidth, windowHeight);

  

  // creating bow to shoot arrow
  bow = createSprite(width - 20, 220, 20, 50);
  bow.addImage(bottleImage);
  bow.scale = 0.1 ;

  virus = new Group();
  argrp = new Group();
}

function draw() {
  background("skyblue");
   

  if (gameState === "play") {
    bow.y = World.mouseY;
    if (keyDown("space")) {
      createArrow();
      arrows = arrows + 1;
    }
    var select_balloon = Math.round(random(1, 9));
    if (World.frameCount % 70 === 0) {
      if (select_balloon === 1) {
        redv();
        balloons = balloons + round(random(11, 44));
      }
      if (select_balloon === 2) {
        bluev();
        balloons = balloons + round(random(11, 44));
      }
      if (select_balloon === 3) {
        greenv();
        balloons = balloons + round(random(11, 44));
      }
      if (select_balloon === 4) {
        pinkv();
        balloons = balloons + round(random(11, 44));
      }
      if (select_balloon === 5) {
        yellowv();
        balloons = balloons + round(random(11, 44));
      }
      if (select_balloon === 6) {
        darkv();
        balloons = balloons + round(random(11, 44));
      }
      if (select_balloon === 7) {
        blackv();
        balloons = balloons + round(random(11, 44));
      }
      if (select_balloon === 8) {
        orangev();
        balloons = balloons + round(random(11, 44));
      }
      if (select_balloon === 9) {
        brownv();
        balloons = balloons + round(random(11, 44));
      }
    }
    if (argrp.isTouching(virus)) {
      score = score + Math.round(20 + balloons / arrows);
      argrp.destroyEach();
      virus.destroyEach();
    }
    if (arrows > 50 && score < 600) {
      gameState = "end";
    }
    if (score > 600 && arrows < 50) {
      gameState = "end";
    }
  }
  if (gameState === "end") {
    argrp.destroyEach();
    virus.destroyEach();
  }

  drawSprites();
  textSize(20);
  fill("black");
  text("SCORE = " + score, 20, 50);
  text("Injections = " + arrows + "/50", 20, 80);
  text("Viruses = " + balloons, 20, 110);
  if (score > 600 && arrows < 50) {
    textSize(50);
    text("Y O U  W I N", 50, 200);
  }
  if (arrows > 50 && score < 600) {
    fill("red");
    textSize(50);
    text("YOU LOSE", 50, 200);
  }
}

function createArrow() {
  var arrow = createSprite(100, 100, 60, 10);
  arrow.addImage(inimg);
  arrow.x = 360;
  arrow.y = bow.y;
  arrow.velocityX = -4;
  arrow.lifetime = 100;
  arrow.scale = 0.3;
  argrp.add(arrow);
}
function redv() {
  var red = createSprite(0, Math.round(random(20, 370)), 10, 10);
  red.addImage(rd);
  red.velocityX = 3;
  red.lifetime = 150;
  red.scale = 0.1;
  virus.add(red);
}
function bluev() {
  var blue = createSprite(0, Math.round(random(20, 370)), 10, 10);
  blue.addImage(bu);
  blue.velocityX = 3;
  blue.lifetime = 150;
  blue.scale = 0.1;
  virus.add(blue);
}
function greenv() {
  var green = createSprite(0, Math.round(random(20, 370)), 10, 10);
  green.addImage(gn);
  green.velocityX = 3;
  green.lifetime = 150;
  green.scale = 0.1;
  virus.add(green);
}
function pinkv() {
  var pink = createSprite(0, Math.round(random(20, 370)), 10, 10);
  pink.addImage(pn);
  pink.velocityX = 3;
  pink.lifetime = 150;
  pink.scale = 0.2;
  virus.add(pink);
}
function blackv() {
  var black = createSprite(0, Math.round(random(20, 370)), 10, 10);
  black.addImage(bk);
  black.velocityX = 3;
  black.lifetime = 150;
  black.scale = 0.1;
  virus.add(black);
}
function yellowv() {
  var yellow = createSprite(0, Math.round(random(20, 370)), 10, 10);
  yellow.addImage(yw);
  yellow.velocityX = 3;
  yellow.lifetime = 150;
  yellow.scale = 0.1;
  virus.add(yellow);
}
function darkv() {
  var darkgreen = createSprite(0, Math.round(random(20, 370)), 10, 10);
  darkgreen.addImage(dg);
  darkgreen.velocityX = 3;
  darkgreen.lifetime = 150;
  darkgreen.scale = 0.1;
  virus.add(darkgreen);
}
function orangev() {
  var orange = createSprite(0, Math.round(random(20, 370)), 10, 10);
  orange.addImage(or);
  orange.velocityX = 3;
  orange.lifetime = 150;
  orange.scale = 0.2;
  virus.add(orange);
}
function brownv() {
  var brown = createSprite(0, Math.round(random(20, 370)), 10, 10);
  brown.addImage(bn);
  brown.velocityX = 3;
  brown.lifetime = 150;
  brown.scale = 0.1;
  virus.add(brown);
}
