class Background {
  constructor() {
    this.x = WIDTH;
    this.xReversed = 0;
  }

  setup() {
    this.bg_image = loadImage("assets/bg.png");
  }

  draw() {
    image(this.bg_image, this.x, 0, WIDTH, HEIGHT);
    image(this.bg_image, this.xReversed, 0, WIDTH, HEIGHT);

    if (this.x <= -WIDTH) {
      this.x = WIDTH;
    }

    if (this.xReversed <= -WIDTH) {
      this.xReversed = WIDTH;
    }

    this.x -= 3;
    this.xReversed -= 3;
  }
}
