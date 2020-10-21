
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1200, 400);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	ground = new Ground(700,height,1400,20);
	dustbin1 = new Dustbin(1050,260,230, 90)
	dustbin2 = new Dustbin(1100,130,150, 180)
	trash = new Trash(100,100,70)


	Engine.run(engine);
  
}


function draw() {
  background(0);
  Engine.update(engine);
  ground.display();
  dustbin1.display();
  dustbin2.display();
  trash.display();

}




