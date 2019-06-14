let bg_image;
let character_image;
let obstacle_top;
let obstacle_bottom;
const background = new Background();
const character = new Character(100, 100, 0, 0, 0);
const obstacles = new Obstacles();

function setup() {
  let canvas = createCanvas(WIDTH, HEIGHT);
  canvas.parent("game-board");
  background.setup();
  obstacles.setup();
  character.setup();
}

function draw() {
  clear();
  background.draw();
  obstacles.draw();
  character.draw();
}

function keyPressed() {
  if (keyCode === UP_ARROW) {
    console.log("up pressed");
    character.yPosition -= 200;

    // } else if (keyCode === DOWN_ARROW) {
    //   console.log("down pressed");
    //   character.yPosition += 200;
    // }
  }
}
