interface Circle {
    pos: Position;
    radius: number;
}
interface Position {
    x: number;
    y: number;
}
//The exact function we use can be chosen from a few implementations
let calculatePackedCircles = calculatePackedCircles1;

function calculatePackedCircles2(areaWidth: number, areaHeight: number): Circle[] {
    const maxRadius = min(areaHeight, areaWidth) * 0.2;
    const circles: Circle[] = [];
    for (let i = 0; i < 10000; i++) {

        const candidate = { pos: randomPosition(), radius: 0 }
        if (noOverlapWithAny(candidate, circles)) {
            const nearestCircle = findNearestApproaching(candidate.pos, circles);
            if (!nearestCircle) {
                candidate.radius = random(0, maxRadius);
            } else {
                const distToNearestEdge = distance(candidate.pos, nearestCircle.pos) - nearestCircle.radius;
                candidate.radius = min(distToNearestEdge, maxRadius);
            }
            circles.push(candidate);
        }
    }
    return circles;
}
function findNearestApproaching(pos: Position, circles: Circle[]): Circle | null {
    if (circles.length === 0) {
        return null;
    }
    return minBy(circles, c => distance(c.pos, pos) - c.radius);

}
function calculatePackedCircles1(areaWidth: number, areaHeight: number): Circle[] {
    const circles: Circle[] = [];

    for (let i = 0; i < 100000; i++) {
        const candidate = { pos: randomPosition(), radius: random(10, 100) }
        if (noOverlapWithAny(candidate, circles)) {
            circles.push(candidate)
        }
    }
    return circles;
}

/** Returns the distance between two given positions.
    This function doesn't require p5.js 
 */
function distance(p1: Position, p2: Position): number {
    const x = p1.x - p2.x;
    const y = p1.y - p2.y;
    const hyp = Math.sqrt(x * x + y * y);
    return hyp;
}

function randomPosition() {
    return {
        x: random(width),
        y: random(height)
    }
}

function noOverlapWithAny(circle: Circle, otherCircles: Circle[]): boolean {
    return !otherCircles.some(other => overlap(circle, other));
}

function overlap(c1: Circle, c2: Circle): boolean {
    return distance(c1.pos, c2.pos) < c1.radius + c2.radius;
}