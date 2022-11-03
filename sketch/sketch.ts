function setup() {
    createCanvas(windowWidth, windowHeight);
    noLoop();
}

function draw() {
    background("white");

    const circlesArray: CircleData[] = calculatePackedCircles(width, height);
    console.log(calculatePackedCircles);

    for (const c of circlesArray) {
        drawCircle(c);
    }
}

function drawCircle(c: CircleData) {
    const shade = random(50, 100);
    fill(random(100,200),random(100,200),random(100,200));
    noStroke();
    circle(c.position.x, c.position.y, c.radius * 2);
}

// If user clicks, draw() will be called again (indirectly)
function mousePressed() {
    redraw();
}
