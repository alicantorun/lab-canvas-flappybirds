// let sizeY = Math.floor(Math.random() * 200);
// let sizeX = Math.floor(Math.random() * 200);
// let sizeY2 = Math.floor(Math.random() * 200);
// let sizeX2 = Math.floor(Math.random() * 200);

let minGapRnd = WIDTH / 4 + Math.ceil(Math.random() * 500);
let topObsMinGapRnd = 300 + Math.ceil(Math.random() * 500);

let minGapRnd2 = WIDTH / 4 + Math.ceil(Math.random() * 500);
let botObsMinGapRnd = 200 + Math.ceil(Math.random() * 500);

class Obstacles {
  constructor() {}

  setup() {
    this.obstacle_top = loadImage("assets/obstacle_top.png");
    this.obstacle_bottom = loadImage("assets/obstacle_bottom.png");
  }

  draw() {
    // console.log(minGapRnd % WIDTH);
    console.log(minGapRnd2 % WIDTH);

    if (minGapRnd < 0) {
      minGapRnd = -minGapRnd * 1200;
    }

    if (minGapRnd2 < 0) {
      minGapRnd2 = -minGapRnd2 * 1200;
    }

    image(this.obstacle_top, minGapRnd % WIDTH, 0, 0, topObsMinGapRnd);
    image(this.obstacle_bottom, minGapRnd2 % WIDTH, botObsMinGapRnd, 0, 0);

    // if (this.sizeX <= -WIDTH) {
    //   this.sizeX = WIDTH;
    // }

    // if (this.sizeX <= -WIDTH) {
    //   this.sizeX = WIDTH;
    // }

    minGapRnd -= 10;
    minGapRnd2 -= 6;
  }
}
