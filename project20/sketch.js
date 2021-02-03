function setup() {
 createCanvas(800,400);
 var mrect,frect;
 
}
function draw() 
{
  background("0");  
 mrect=createSprite(200,200,50,50);
 frect=createSprite(250,200,50,50);
 mrect.shapeColor="blue";
 frect.shapeColor="red";
  drawSprites();
}