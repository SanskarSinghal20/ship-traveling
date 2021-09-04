var sea
var ship, ship1, ship2, ship3,ship4 
var seaimage
var shipimage

function preload(){
seaimage = loadImage("sea.png")
shipimage = loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png")
}

function setup(){
  createCanvas(400,400);
  
  sea = createSprite(200,180,20,100)
 sea.addImage("ground",seaimage)
sea.x = sea.width /10;
 sea.velocityX = -4
sea.scale = 0.5
 
  
  ship = createSprite(150,220,20,50)
 ship.addAnimation("running", shipimage)
 ship.scale = 0.3

 
}

shipimage.setLifetimeImage(-1)
seaimage.setLifetimeImage(-1)

function draw() {
  background("blue");



 drawSprites();
}