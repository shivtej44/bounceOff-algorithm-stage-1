function setup() {
  createCanvas(800,400);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  //fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  //movingRect.debug = true;
  movingRect.velocityX = 3;
  movingRect.velocityY = 3;
 
  fixedRect.velocityX = -3;
  fixedRect.velocityY = -3;

}

function draw() {
  background("lightblue");


  
  console.log(movingRect.x - fixedRect.x);
  console.log(movingRect.width/2+fixedRect.width/2);
if(movingRect.x - fixedRect.x <= movingRect.width/2+fixedRect.width/2
 &&fixedRect.x - movingRect.x <= movingRect.width/2+fixedRect.width/2)
{
  
  movingRect.velocityX = (-1)*movingRect.velocityX;
  fixedRect.velocityX = (-1)*fixedRect.velocityX;

}

if(movingRect.y - fixedRect.y <= movingRect.height/2+fixedRect.height/2
  &&fixedRect.y - movingRect.y <= movingRect.height/2+fixedRect.height/2)
{

  movingRect.velocityY = (-1)*movingRect.velocityY;
  fixedRect.velocityY = (-1)*fixedRect.velocityY;

}





  drawSprites();


}