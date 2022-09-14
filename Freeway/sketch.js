function setup() {
  createCanvas(500, 400);
  soundTrack.loop();
 
}

function draw() {
  background(imageRoad);
  showPlayer();
  showCar();
  moveCar();
  movePlayer();
  carReset();
  collision();
  endRange();
  showScore();
}









