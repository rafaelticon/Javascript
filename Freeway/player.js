//Player
let xPlayer = 100;
let yPlayer = 366;
let collide = false;
let score = 0

function showPlayer(){
  image(imagePlayer, xPlayer, yPlayer, 30, 30);
}

function movePlayer(){
  if (keyIsDown(UP_ARROW)){
    yPlayer -= 3;
  }
  if (keyIsDown(DOWN_ARROW)){
    yPlayer += 3;
  }
}

function collision(){
  for (let i = 0; i < imageCars.length; i += 1){
    collide = collideRectCircle(xCars[i], yCars[i], 50, 40, xPlayer, yPlayer, 15)
    if (collide){
      xPlayer = 100
      yPlayer = 366
      score = 0
    }
  }
}

function endRange(){
  if (yPlayer < 10){
    yPlayer = 366
    score += 1
  }
  if (yPlayer > 366){
    yPlayer = 366
  }
}

function showScore(){
  textAlign(CENTER)
  textSize(25)
  fill(color(255, 240,60))
  text(score,250,25);
}