//images and sounds

let imageRoad;
let imagePlayer;
let imageCar;
let imageCar2;
let imageCar3;
let soundTrack;
let soundScore;
let soundCollide;

function preload(){
  imageRoad = loadImage("images/road.png");
  imagePlayer = loadImage("images/player.png");
  imageCar = loadImage("images/car1.png");
  imageCar2 = loadImage("images/car2.png");
  imageCar3 = loadImage("images/car3.png");  
  imageCars = [imageCar, imageCar2, imageCar3, imageCar2, imageCar, imageCar3]
  soundTrack = loadSound("sounds/track.mp3")
  soundScore = loadSound("sounds/score.mp3")
  soundCollide = loadSound("sounds/collide.mp3")
}