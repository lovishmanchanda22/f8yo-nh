
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var engine,world,bob1, bob2, bob3 , bob4 , bob5, roof, sling1, sling2, sling3, sling4, sling5;

function preload()
{
	
}

function setup() {
	createCanvas(800, 600);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	roof = new Roof(385,100,400,50);
	bob1 = new Ball(250,300,30);
	bob2 = new Ball(310,300,30);
	bob3 = new Ball(370,300,30);
	bob4 = new Ball(430,300,30);
	bob5 = new Ball(490,300,30);

	sling1 = new Rope(bob1.body, roof.body, -60 , 0);
	sling2 = new Rope(bob2.body, roof.body, -75, 0);
	sling3 = new Rope(bob3.body, roof.body, -15, 0);
	sling4 = new Rope(bob4.body, roof.body, 45, 0);
	sling5 = new Rope(bob5.body, roof.body, 105, 0);



	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(180);
  
  drawSprites();
 roof.display();
 bob1.display();
 bob2.display();
 bob3.display();
 bob4.display();
 bob5.display();

 sling1.display();
 sling2.display();
 sling3.display();
 sling4.display();
 sling5.display();
 
}



