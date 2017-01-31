function setup() {
  createCanvas(500, 500);
  colorMode(HSB);
  stroke(255);
  strokeWeight(3);
  background(50, 50, 0);
  w = new walker(1);
  wa = new walker(2);
  d = new walker(1);
}

function draw() {
  w.update();
  wa.update();
  w.appear();
  wa.appear();
  d.update();
  d.appear();
}
