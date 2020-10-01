var car, wall;
var speed, weight;

function setup() {
  createCanvas(1600,400);

  car = createSprite(100, 200, 20, 20);
  car.shapeColor = "white";
  wall = createSprite(1500, 200, 60, 200)

  speed = random(50,90);
  weight = random(400,1600);

  car.velocityX = speed;
 
}

function draw() {

  background("black");
 
  drawSprites();

  if(wall.x - car.x < (car.width + wall.width)/2){
  car.velocityX = -1 ;
  var deformation = 0.5*weight*speed*speed/22500;
  text(deformation,100,100);

  if(deformation<100){
    car.shapeColor="green";
  }
  if(deformation>100 && deformation<180){
    car.shapeColor= "yellow";
  }
  if(deformation>180){
    car.shapeColor="red";
  }
 }
}