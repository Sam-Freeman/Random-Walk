
var walkers = [];
var _walkerNumber = 100;
function setup() {
  createCanvas(1300, 500);
  colorMode(HSB);
  stroke(255);
  strokeWeight(3);
  background(50, 50, 0);
  for (var i = 0; i < _walkerNumber; i++) {
    walkers.push(new walker(floor(random(1, 2))));
  }
}

function draw() {
  for (var i = 0; i < walkers.length; i++) {
    walkers[i].update();
    walkers[i].appear();
    for (var j = 0; j < walkers.length; j++) {
      if (i != j) {
        MixColours(walkers[i], walkers[j]);
      }
    }
  }
}
