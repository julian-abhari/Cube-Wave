let angle = 0;
let rWidth = 20;
let isometricAngle;

function setup() {
	createCanvas(500, 500, WEBGL);
	isometricAngle = atan(1 / sqrt(2));
}
function draw() {
	background(255);
	ortho(-350, 350, 350, -350, 0, 700);

	rotateX(isometricAngle);
	rotateY(-PI / 4);

	for (let z = 0; z < height; z += 30) {
		for (let x = 0; x < width; x += 30) {
			push();
			// algorithm to make the rectangles act like a wave
			let distance = dist(x, z, width / 2, height / 2);
			let maximumDistance = dist(0, 0, width / 2, height);
			let offset = map(distance, 0, maximumDistance, -5, 5);
			// --end of algorithm
			var rHeight = map(sin(angle + offset), -1, 1, 100, 300);
			translate(x - (width/2) + 10, 0, z - (height / 2) + 10);
			normalMaterial();
			box(rWidth, rHeight, rWidth);
			//rect(x - (width / 2) + 10, 0, rWidth, rHeight);
			pop();
		}
	}
	angle -= 0.08;
}
