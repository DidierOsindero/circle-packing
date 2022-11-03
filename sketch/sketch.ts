
function setup() {
  createCanvas(windowWidth, windowHeight);
  noLoop();
}

function draw() {
  background('white');
  const circlesArray = calculatePackedCircles(width, height);
  for (const c of circlesArray) {
    drawCircleWithWord(c);
  }
}

function drawCircle(c: Circle) {
  const shade = random(50, 100);
  fill(shade);
  noStroke();
  circle(c.pos.x, c.pos.y, c.radius * 2);
}

function drawCircleWithWord(c: Circle) {
  const word = random(["code", "p5.js", "create", "JavaScript"]);

  push();
  translate(c.pos.x, c.pos.y)
  rotate(radians(random(-80, 80)));
  textSize(50)
  textAlign(CENTER, CENTER);
  const sz = 2 * c.radius / textWidth(word);
  scale(sz, sz)
  text(word, 0, 0);
  pop();
}
function keyPressed() {
  //keys 1, 2 choose the implementation function and redraw
  if (key === "1") {
    calculatePackedCircles = calculatePackedCircles1;
    redraw();
  }
  if (key === "2") {
    calculatePackedCircles = calculatePackedCircles2;
    redraw();
  }
}