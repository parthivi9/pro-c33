const Engine = Matter.Engine
 const World = Matter.World
 const Events = Matter.Events
 const Bodies = Matter.Bodies;
var bg
var girl
var bear
var particle=[]

function preload(){
  bg=loadImage("snow2.jpg")
  girl=loadImage("70529-and-masha-dress-bear-the-with-transparent.png")
  bear=loadImage("59296-el-masha-youtube-bear-birthday-oso-party.png")
}
function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
  engine = Engine.create();
  world = engine.world;
  girl= createSprite(50,180,20,80);
}

function draw() {
  Engine.update(engine);
  background(bg);  
  if(frameCount%20===0){
particle.push(new snow(random(50,750),10,50))
  }
  for(var j=0;j<particle.length;j++){
    particle[j].display()
  }
  girl.display();
  //bear.display();
  drawSprites();
}
