
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var engine, world;
var ground,hammer
var rubber,iron;

function preload()
{
	
}

function setup() {
	createCanvas(1500, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	rubber=new Rubber(390,200,60)
	iron= new Iron(390,200,60)
	ground = new Ground(400,400,10000,20);
	hammer=new Hammer(100,100,50,80)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  ground.display();
  hammer.display();
  rubber.display();
  iron.display();
  drawSprites();
 
}



