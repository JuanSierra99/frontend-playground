let width = window.innerWidth;
let height = window.innerHeight;
let mouseX = 0;
let mouseY = 0;

window.addEventListener("resize", () => {
  width = window.innerWidth;
  height = window.innerHeight;
  resizeCanvas(width, height);
});

window.addEventListener("mousemove", (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;
});

function setup() {
  createCanvas(width, height);
}

function draw() {
  background(220);
  let center = createVector(width / 2, height / 2);
  let mouse = createVector(mouseX, mouseY)
  stroke(150);
  strokeWeight(4)
  line(0, 0, center.x, center.y);
  line(0, 0, mouse.x, mouse.y);
  mouse.sub(center);
  stroke(0, 0, 255);
  translate(width / 2, height / 2)
  line(0, 0, mouse.x, mouse.y);
}
