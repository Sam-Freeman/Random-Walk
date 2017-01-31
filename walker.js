function walker(step) {
  this.position = createVector(random(200), random(200));
  this.step = step

  this.update = function() {
    this.walk();
  }

  this.appear = function() {
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
