const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground;
var ball;
var block,block2,blockDown;

function preload(){

}


function setup() {
	createCanvas(800, 700);

    block = new Bin(300,595,20,100);
	block.shapeColor = rgb(255,0,0);
	block.isStatic = false;

	blockDown = new Bin(390,650,200,20);
	blockDown.shapeColor = rgb(255,0,0);
	blockDown.isStatic = false;	

	block2 = new Bin(480,595,20,100);
	block2.shapeColor = rgb(255,0,0);
	block2.isStatic = true;	


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  ground = new Ground(400,675,800,10);
  ball = new Paper(100,650,10,10);
  //barrier = new dustbin(600,600,10,200);  

  ball.display();
  ground.display();
  
  drawSprites();
 
}

function keyPressed() {
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:85,y:85});
	}
}