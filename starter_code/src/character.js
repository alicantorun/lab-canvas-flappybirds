class Character {
  constructor(width, height, xPosition, yPosition, gravity) {
    this.width = width;
    this.height = height;
    this.xPosition = xPosition;
    this.yPosition = yPosition;
    this.gravity = gravity;
  }

  setup() {
    this.character_image = loadImage("assets/flappy.png");
  }

  draw() {
    // image(this.character_image, this.x, this.y, 0, 0);
    // this.character_image.resize(100, 100);
    // image(this.character_image, this.xPosition, this.yPosition, 0, 0);
    // this.character_image.resize(this.width, this.height);

    console.log("y");
    image(
      this.character_image,
      this.xPosition,
      this.yPosition % (HEIGHT - this.height),
      0,
      0
    );
    this.character_image.resize(this.width, this.height);
    this.yPosition += 5;

    // this.character_image.resize(200, 200);
    // this.clouds.resize(WIDTH / 5, WIDTH / 5);
  }
}
