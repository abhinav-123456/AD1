
var fixedRect,movingRect
function setup() {
  createCanvas(800,400);
 fixedRect= createSprite(200, 200, 50, 50);
 movingRect = createSprite(600,200,50,50);
 fixedRect.shapeColor="red"
 movingRect.shapeColor="red"

 fixedRect.debug=true
 movingRect.debug=true

 fixedRect.velocityX=5;
 movingRect.velocityX=-5;
}

function draw() {
  background(0);
  
  //movingRect.x=World.mouseX
  //movingRect.y=World.mouseY

 bounce(movingRect,fixedRect);


  drawSprites();
}

function bounce(p1,p2){

  if(pi.x - p2.x <= p2.width/2 + p1.width/2 &&
    p2.x - p1.x <= p2.width/2 + p1.width/2 ){
p2.velocityX=p2.velocityX*(-1);
p1.velocityX=p1.velocityX*(-1)
  }
  if(p1.y - p2.y <= p2.height/2 + p1.height/2 &&
    p2.y - p1.y <= p2.height/2 + p1.height/2){
     p2.velocityY=p2.velocityY*(-1);
      p1.velocityY=p1.velocityY*(-1)
  }
}