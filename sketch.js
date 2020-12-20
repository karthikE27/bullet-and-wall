var bullet,wall;
var speed,weight,thickness;


function setup() {
  createCanvas(800,400);

thickness=random(22,83)

  speed=random(60,100);
  weight=random(400,1500);

  wall=createSprite(700, 200,thickness,height/2);
  
  bullet=createSprite(50,200,40,12);
  bullet.shapeColor=color("yellow");
  
  bullet.velocityX = speed;
}

function draw() {
  background("lightblue");  

if(hasCollided(bullet,wall)) {
bullet.velocityX=0;
var damage=0.5*weight*speed*speed*speed/(thickness*thickness*thickness);

if(damage>10) {
 wall.shapeColor=color(255,0,0);
}
 if(damage<10) {
   wall.shapeColor=color(0,255,0)
}
}
  drawSprites();
}

function hasCollided(bullet,wall) {
 bulletRightEdge=bullet.x+bullet.width;
 wallLeftEdge=wall.x;
 if(bulletRightEdge>=wallLeftEdge) {
   return true;
 }
 return false;
}