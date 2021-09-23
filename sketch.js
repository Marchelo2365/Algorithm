var fixedRect, movingRect;

function setup() {
  createCanvas(1400,800);
  fixedRect = createSprite(400, 200, 50, 50);
  fixedRect.shapeColor = "green";
  movingRect = createSprite(400,200,50,50);
  movingRect.shapeColor = "green";

}

function draw() {
  background(0);  

movingRect.x = World.mouseX;
movingRect.y = World.mouseY;

if(fixedRect.x - movingRect.x < fixedRect.width/2 + movingRect.width/2 
  && fixedRect.y - movingRect.y < fixedRect.height/2 + movingRect.height/2) {
 fixedRect.shapeColor = "red";
 movingRect.shapeColor = "red";
}
else{
  fixedRect.shapeColor = "green";
  movingRect.shapeColor = "green";

}



  drawSprites();
}