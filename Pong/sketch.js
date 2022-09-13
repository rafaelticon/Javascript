//ball variables
let xBall = 300;
let yBall = 200;
let diameter = 30
let radius = diameter/2
let collision = false;

//ball speed
let speedXBall = 6;
let speedYBall = 6;

//paddle variables
let xPaddle = 5;
let yPaddle = 150;
let paddleLenght = 10
let paddleHeight = 90

//Cpu paddle variables
let xPaddleCpu = 585;
let yPaddleCpu = 150;
let speedYCpu;

//game score
let score = 0;
let scoreCpu = 0;

//game sounds
let raquetada;
let ponto;
let trilha;

function preload(){
  trilha = loadSound("trilha.mp3")
  raquetada = loadSound("raquetada.mp3")
  ponto = loadSound("ponto.mp3")
  }

function setup() {
  createCanvas(600, 400);
  trilha.loop();
}

function draw() {
  background(0);
  midLine();
  showBall();
  moveBall();
  boardCollision();
  showPadde(xPaddle,yPaddle);
  showPadde(xPaddleCpu,yPaddleCpu)
  movePaddle();
  collide(xPaddle, yPaddle);
  collide(xPaddleCpu, yPaddleCpu)
  movimentaCpu();
  showScore();
  scoreCount();
     
}

function midLine(){
  fill(255)
  rect(300, 25, 8, 40)
  rect(300, 100, 8, 40)
  rect(300, 180, 8, 40)
  rect(300, 260, 8, 40)
  rect(300, 340, 8, 40)

  
}

function showBall(){
  circle(xBall,yBall,diameter);
  }

function moveBall(){
  xBall += speedXBall;
  yBall += speedYBall;
 }

function boardCollision(){
  if ((xBall + radius) > width || (xBall - radius) < 0){
    speedXBall *= -1;
  }
  
  if ((yBall + radius) > height || (yBall - radius) < 0){
    speedYBall *= -1;
  }
}

function showPadde(x,y){
  rect(x,y, paddleLenght,paddleHeight)
  }

function movePaddle(){
  if (keyIsDown(UP_ARROW)){
    yPaddle -= 10;
  }
  if (keyIsDown(DOWN_ARROW)){
    yPaddle += 10;
  }
}

function collide(x,y){
collision =
collideRectCircle(x, y, paddleLenght, paddleHeight, xBall, yBall, radius);
if (collision){
    speedXBall *= -1;
    raquetada.play();
            }

}

function movimentaCpu(){
  speedYCpu = yBall - yPaddleCpu - paddleLenght/2 - 30
  yPaddleCpu += speedYCpu
  //if (keyIsDown(87)){
    //yPaddleCpu -= 10;
  //}
  //if (keyIsDown(83)){
    //yPaddleCpu += 10;
  //}
}

function showScore(){
  //stroke(255)
  textAlign(CENTER)
  textSize(25)
  fill(color(255, 140, 0))
  rect(130, 5, 40, 25)
  fill(255)
  text(score, 150, 26);
  fill(color(255, 140, 0))
  rect(430, 5, 40, 25)
  fill(255)
  text(scoreCpu, 450, 26);
}

function scoreCount(){
  if (xBall >585){
    score += 1
    xBall = 300
    yBall = 200
    ponto.play();
  }
  if (xBall < 15){
    scoreCpu += 1;
    xBall = 300
    yBall = 200
    ponto.play();
  }
}