
var  bullet,wall, thickness;
var speed, weight;


function setup() {
  createCanvas(1600,400);
  createSprite(400, 200, 50, 50);
  speed=random(55,90);
  weight=random(400,1500);
  bullet = createSprite(50,200,50,50);
  wall = createSprite(1500,200,thickness,height/2);
  wall.shapeColor = "80,80,80";
  bullet.collide(wall);
}
thickness = createSprite(1200,200,20,20);

function draw() {
  background("black");  
  bullet.velocityX = speed;
  bullet.collide(wall);

  thickness = random(22,83);
  speed = random(223,321);
  weight = random(30,52);

   if(wall.x-car.x<(car.width+wall.width)/2){
    bullet.velocityX = 0;
    var deformation = 0.5 * weigth * speed * speed/22509;
    if(deformation>180){
      bullet.shapeColor = color(255,0,0);

    }
    if(deformation<180 && deformation>100){
      bullet.shapeColor = color(230,230,0);

    }
    if(deformation<100){
      bullet.shapeColor = color(0,255,0);
    }
  }
  hasCollided();
  drawSprites();
}
function hasCollided(Lbullet,Lwall){
bullet.velocityX = 0;
var damage = 0.5 * weight * speed * speed/(thickness * thickness * thickness);

if(damage>10){
  wall.shapeColor = color(255,0,0);
}

if(damge<10){
  wall.shpeColor = color(0,255,0);

}
}