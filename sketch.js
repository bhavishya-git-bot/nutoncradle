
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint ; 
var bobObject1,bobObject2,bobObject3 ,bobObject4,bobObject5;
var ground;
var rope1, rope2, rope3, rope4, rope5;


function setup() {
	engine = Engine.create();
	world = engine.world;
	createCanvas(1300, 700);
	text("press up key",50,50);

bobObject1=new Bob(300,400,70);
bobObject2=new Bob(350,400,70);
bobObject3=new Bob(400,400,70);
bobObject4=new Bob(450,400,70);
bobObject5=new Bob(500,400,70);
ground = new Roof(400,100,500,20);
rope1= new Rope(bobObject1.body,ground.body,-50*3,0);
rope2= new Rope(bobObject2.body,ground.body,-25*3,0);
rope3= new Rope(bobObject3.body,ground.body,-0*3,0);
rope4= new Rope(bobObject4.body,ground.body,25*3,0);
rope5= new Rope(bobObject5.body,ground.body,50*3,0);

Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
  
  drawSprites();

	bobObject1.display();
	bobObject2.display();
	bobObject3.display();
	bobObject4.display();
	bobObject5.display();
	ground.display();
	rope1.display();
	rope2.display();
	rope3.display();
    rope4.display();
    rope5.display();
	
	

}

function keyPressed() { 
	if (keyCode === UP_ARROW) 
	{ Matter.Body.applyForce(bobObject1.body,bobObject1.body.position,{x:-180,y:-180}); } 

	if (keyCode === DOWN_ARROW) 
	{ Matter.Body.applyForce(bobObject2.body,bobObject2.body.position,{x:170,y:170}); } 

	if (keyCode === LEFT_ARROW) 
	{ Matter.Body.applyForce(bobObject1.body,bobObject1.body.position,{x:-170,y:-170});
	Matter.Body.applyForce(bobObject2.body,bobObject2.body.position,{x:-170,y:-170}); } 

	if (keyCode === RIGHT_ARROW) 
	{ Matter.Body.applyForce(bobObject4.body,bobObject4.body.position,{x:170,y:170});
	Matter.Body.applyForce(bobObject5.body,bobObject5.body.position,{x:170,y:170}); } 
} 



