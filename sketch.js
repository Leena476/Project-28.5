//define matter.js functions
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

//define engine and world variables
var engine, world;

//define images as variables
var treeImage, boyImage;

//define stonePos and mangoPos variables
var stonePos, mangoPos;

//define all the bodies created using the blueprints
var stone;
var ground;
var elastic;
var mango1, mango2, mango3, mango3, mango4, mango5, mango6, mango7, mango8, mango9, mango10, mango11;

//load and name images here
function preload(){
	treeImage = loadImage("images/tree.png");
	boyImage = loadImage("images/boy.png");
}

function setup() {
	
	//create the canvas dimensions
	createCanvas(900,400);

	//create engine and world
	engine = Engine.create();
	world = engine.world;

	//define ground, elastic, and stone bodies
	ground = new Ground(450,375,900,50);
	stone = new Stone(160,285,50,35);
	elastic = new Elastic(stone.body,{x:160,y:285});

	//define all mango bodies
	mango1 = new Mango(750,100,50,50);
	mango2 = new Mango(700,60,50,50);
	mango3 = new Mango(800,130,50,50);
	mango4 = new Mango(630,140,50,50);
	mango5 = new Mango(690,130,50,50);
	mango6 = new Mango(740,40,50,50);
	mango7 = new Mango(755,160,50,50);
	mango8 = new Mango(660,80,50,50);
	mango9 = new Mango(665,180,50,50);
	mango10 = new Mango(590,160,50,50);
	mango11 = new Mango(820,175,50,50);

	//update Engine with engine
	Engine.run(engine);
  
}

function draw(){
 
  //set rectMode as CENTER
  rectMode(CENTER);

  //set background color
  background("lightblue");

  //displya elastic and ground bodies
  elastic.display();
  ground.display();

  //set imageMode as CENTER
  imageMode(CENTER);

  //create and display boy and tree images
  image(boyImage,200,330,130,180);
  image(treeImage,700,200,300,400);

  //display all the mango bodies
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();
  mango9.display();
  mango10.display();
  mango11.display();

  //display the stone body
  stone.display();

  //call detectCollision function separately for each mango body
  detectCollision(stone,mango1);
  detectCollision(stone,mango2);
  detectCollision(stone,mango3);
  detectCollision(stone,mango4);
  detectCollision(stone,mango5);
  detectCollision(stone,mango6);
  detectCollision(stone,mango7);
  detectCollision(stone,mango8);
  detectCollision(stone,mango9);
  detectCollision(stone,mango10);
  detectCollision(stone,mango11);

  //add title as text
  textFont("Georgia");
  stroke ("white");
  textSize(35);
  fill("hotpink");
  text("~ Plucking Mangoes ~",10,40);

  //add instructions as text
  noStroke();
  textSize(15);
  fill ("darkgreen");
  text("Use the stone to push the mangoes off the tree by simply",10,70);
  text("dragging it to the left using your mouse. Good luck!",10,90);
  fill ("darkblue");
  text("Press the space bar to reset the stone's position.",10,110);
  fill ("purple");
  text("Press the down arrow key to reset all the mangoes and the stone.",10,130);

}

//set name of two bodies: stone and mango
function detectCollision(stone,mango){

	//create stonePos and mangoPos
	stonePos = stone.body.position;
	mangoPos = mango.body.position;

	//isTouching instruction - when stone touches mango, the mango falls down and becomes not static
	if(stonePos.x - mangoPos.x < stone.width/2 + mango.width/2 &&
		mangoPos.x - stonePos.x < stone.width/2 + mango.width/2 &&
		stonePos.y - mangoPos.y < stone.height/2 + mango.height/2 &&
		mangoPos.y - stonePos.y < stone.height/2 + mango.height/2){
			Matter.Body.setStatic(mango.body,false);
	 } 

}

//make the stome body move with mouse if dragged by mouse
function mouseDragged(){
    Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY});
}

//make the stone disconnect from the point when the mouse is released by calling a function from Elastic class
function mouseReleased(){
    elastic.fly();
}

//when a key is pressed...
function keyPressed(){
	
	//is space is pressed, the stone body goes back into the boy's hand and reattaches to the point
	if (keyCode === 32){
		Matter.Body.setPosition(stone.body,{x:160,y:285});
		elastic.attach(stone.body);
	}

	//if the down arrow key is pressed...
    if (keyCode === DOWN_ARROW){
		
		//the stone body goes back into the boy's hand and reattaches to the point
		Matter.Body.setPosition(stone.body,{x:160,y:285});
		elastic.attach(stone.body);
		
		//mango1 body becomes static and goes back to its original location on the tree
		Matter.Body.setPosition(mango1.body,{x:750,y:100});
		Matter.Body.setStatic(mango1.body,true);

		//mango2 body becomes static and goes back to its original location on the tree
		Matter.Body.setPosition(mango2.body,{x:700,y:60});
		Matter.Body.setStatic(mango2.body,true);

		//mango3 body becomes static and goes back to its original location on the tree
		Matter.Body.setPosition(mango3.body,{x:800,y:130});
		Matter.Body.setStatic(mango3.body,true);

		//mango4 body becomes static and goes back to its original location on the tree
		Matter.Body.setPosition(mango4.body,{x:630,y:140});
		Matter.Body.setStatic(mango4.body,true);

		//mango5 body becomes static and goes back to its original location on the tree
		Matter.Body.setPosition(mango5.body,{x:690,y:130});
		Matter.Body.setStatic(mango5.body,true);

		//mango6 body becomes static and goes back to its original location on the tree
		Matter.Body.setPosition(mango6.body,{x:740,y:40});
		Matter.Body.setStatic(mango6.body,true);

		//mango7 body becomes static and goes back to its original location on the tree
		Matter.Body.setPosition(mango7.body,{x:755,y:160});
		Matter.Body.setStatic(mango7.body,true);

		//mango8 body becomes static and goes back to its original location on the tree
		Matter.Body.setPosition(mango8.body,{x:660,y:80});
		Matter.Body.setStatic(mango8.body,true);

		//mango9 body becomes static and goes back to its original location on the tree
		Matter.Body.setPosition(mango9.body,{x:665,y:180});
		Matter.Body.setStatic(mango9.body,true);

		//mango10 body becomes static and goes back to its original location on the tree
		Matter.Body.setPosition(mango10.body,{x:590,y:160});
		Matter.Body.setStatic(mango10.body,true);

		//mango11 body becomes static and goes back to its original location on the tree
		Matter.Body.setPosition(mango11.body,{x:820,y:175});
		Matter.Body.setStatic(mango11.body,true);

	}

}