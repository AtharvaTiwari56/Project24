
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ground, binpart1, binpart2, binpart3, paper;

function preload() {
	
}

function setup() {
	createCanvas(1000,400);

  engine = Engine.create();
	world = engine.world;

	ground = new Ground(500, 380, 1000, 10);
	binpart1 = new BinPart(850, 361, 150, 20 );
	binpart2 = new BinPart(775, 321, 20, 76 );
	binpart3 = new BinPart(925, 321, 20, 76 );
	paper = new Paper(100, 361, 20);
    
	Engine.run(engine);
  
}


function draw() {
  background(0);
  rectMode(CENTER);
  binpart2.display();
  binpart3.display();
  binpart1.display();
  ellipseMode(CENTER);
  paper.display();
  rectMode(CENTER);
  ground.display();

  if(keyCode === UP_ARROW) {
    Body.applyForce(paper.body, paper.body.position, {x:15, y:-15});
  }
  if(keyCode === DOWN_ARROW) {
    Body.applyForce(paper.body, paper.body.position, {x:15, y:15});
  }
  drawSprites();
 
}



