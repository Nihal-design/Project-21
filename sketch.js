var bullet, speed, weight;
var wall, thickness;
var div1, div2, div3, div4;
var check1, check2, check3;
var bulletleftedge, wallrightedge;



function setup(){
  var canvas = createCanvas(1600, 400);

  thickness=random(22, 83);
  weight=random(30, 52);
  speed=random(223, 321);

  wall=createSprite(400, 200, thickness, height);
  wall.shapeColor=(80,80,80);

  bullet=createSprite(1580,20,15,5);
  bullet.shapeColor = "white";

  div1=createSprite(800,75,1600,5);
  div1.shapeColor = "white";

  check1=createSprite(1580,115,15,5);
  check1.shapeColor = "white";

  div2=createSprite(800,170,1600,5);
  div2.shapeColor="white";

  check2=createSprite(1580, 205, 15, 5);
  check2.shapeColor = "white";

  div3=createSprite(800,255, 1600, 5);
  div3.shapeColor = "white";

  check3=createSprite(1580, 300, 15, 5);
  check3.shapeColor = "white";

  div4=createSprite(800, 355, 1600, 5);
  div4.shapeColor = "white";

}

function draw(){
  background(0,0,0);

  if(keyDown("space")){
    bullet.velocityX=-(speed);
  }

  if(hasCollided(bullet, wall)){

    bullet.velocityX=0;

    var damage = (0.5*weight*speed*speed)/(thickness*thickness*thickness);
    
      if(damage > 10){
        wall.shapeColor="red";
      }
      if(damage < 10){
        wall.shapeColor="green";
      }
    
  }

  drawSprites();
}

function hasCollided(bulletleftedge, wallrightedge){

  bulletleftedge = bullet.x + bullet.width;
  wallrightedge = wall.x;

  if(wallrightedge  >= bulletleftedge ){
    return true;
  }

  else{
    return false;
  }
}