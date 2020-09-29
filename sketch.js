
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ground;	
var dustbin;
var bar1;
var bar2;
var paper;
function preload() {
	
}

function setup() {
	createCanvas(1600, 700);

	engine = Engine.create();
    world = engine.world;
	

	ground = new Ground(800,670,1600,20);

	dustbin = new Dustbin(1200,650);
	

	paper = new Paper(200,450,70);


	Engine.run(engine);
  
}


function draw() {
	background("white");
  Engine.update(engine)
	ground.display();
	dustbin.display();
	
	paper.display();
	force();
	drawSprites();
 
}
function force(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paper.body,paper.body.position,{x:130,y:-145});
	}
}



