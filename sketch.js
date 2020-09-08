var wall, car;
var Speed, weight;


function setup() {
  createCanvas(1600,400);

  Speed=random(55,90);
  weight=random(400,1500)

  car = createSprite(50, 200, 50, 50);
  car.velocityX=Speed

  wall = createSprite(1500,200,60,200);
  wall.shapeColor="80"
}

function draw() {
  background(0);  

  collision();

  drawSprites();
}

function collision(){
  if(wall.x - car.x < (car.width+wall.width)/2){
   car.velocityX=0;

   var deformation = 0.5*weight*Speed*Speed /22500;

   if(deformation<100)
   {
   car.shapeColor="green"
   }
   
   if(deformation>100 && deformation<180)
   {
   car.shapeColor="yellow";
   }
   
   if(deformation>180)
   {
   car.shapeColor="red";
   }
  }
}