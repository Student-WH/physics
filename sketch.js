const Engine = Matter.Engine; // triggers physics engine
const World = Matter.World; // creates physics world
const Bodies = Matter.Bodies; // creates bodies in the world


var engine, world, object;
function setup() {
 var canvas =  createSprite(800,400);



 //step 1
 engine = Engine.create();
 world = engine.world;


 var options = 
 {
   isStatic : true
 }

object = Bodies.rectangle(100,100,50,50, options);
World.add(world,object);


 
}

function draw() {
  background(0);

  //step 2
  Engine.update(engine);
  rectMode(CENTER);

  rect(object.position.x, object.position.y,50,50);

 //rect(200,200,50,50);  
  drawSprites();
}