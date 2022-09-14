//cars

let xCars = [600, 600, 600, 600, 600, 600];
let yCars = [40, 96, 150, 210, 270, 318];
let speedCars = [2, 2.5, 3.2, 5, 3, 2.3];

function showCar(){
  for (let i = 0; i < imageCars.length; i += 1){
    image(imageCars[i], xCars[i], yCars[i], 50, 40);
  }
}

function moveCar(){
  for (let i = 0; i < imageCars.length; i += 1){
    xCars[i] -= speedCars[i];
  }
}

function carReset(){
  for (let i = 0; i < imageCars.length; i += 1){
    if (xCars[i] < -50){
      xCars[i] = 600
    }
  }
}




