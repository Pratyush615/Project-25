
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var paper;
function preload(){
	binImage = loadImage("sprites/dustbingreen.png")
}

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	paper = new Paper(260,400,40);
	ground = new Ground(800,680,1600,20);
	bin1 = new Dustbin(1000,620,20,100);
	bin2 = new Dustbin(1110,660,200,20);
	bin3 = new Dustbin(1180,620,20,100);
	
	Engine.run(engine);
  
}

// for the verticle rectangles, width-20 Height-100.
// for the horizontal rectangle, width is 200, height is 20.
function draw() {
  rectMode(CENTER);
  background(255);
  paper.display();
  ground.display();
  /*bin1.display();
  bin2.display();
  bin3.display();*/
  image(binImage,1000,470,200,200);

  drawSprites();
 
}
function keyPressed() {
	if(keyCode === UP_ARROW) {
		Matter.Body.applyForce(paper.body,paper.body.position,{x:180,y:-230});
	}
}


