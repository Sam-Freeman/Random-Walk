function walker(step) {
  this.position = createVector(random(1300), random(500));
  this.step = step;
  this.col = random(255);

  this.update = function() {
    this.walk();
  }

  this.appear = function() {
    stroke(this.col, 255, 255);
    fill(this.col, 255, 255);
    point(this.position.x, this.position.y);
  }

  this.walk = function() {
    var r = floor(random(4));
    switch (r) {
      case 0:
        this.position.x += step;
        break;
      case 1:
        this.position.x -= step;
        break;
      case 2:
        this.position.y -= step;
        break;
      case 3:
        this.position.y += step;
        break;
      default:

    }
  }
}

function MixColours(walkerA, walkerB) {
  if (walkerA.position.equals(walkerB.position)) {
    console.log("contact");
  }
}
