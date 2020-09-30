var movingR,fixedR;





function setup() {
  createCanvas(800,400);
 movingR = createSprite(35, 100, 100, 50);
 movingR.shapeColor="blue"
movingR.debug = true;
fixedR.debug = true;

 fixedR = createSprite(400,200,50,100);
 fixedR.shapeColor="blue"
}

function draw() {
  background(0,0,0);  
movingR.x = World.mouseX;
movingR.y = World.mouseY;

if(movingR.y-fixedR.y<movingR.width/2+fixedR.width/2){
fixedR.shapeColor="red"
movingR.shapeColor="red"
}

else{

  fixedR.shapeColor="blue"
  movingR.shapeColor="blue"


}






  drawSprites();
}