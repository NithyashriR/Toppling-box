const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies

var engine,world,ground,ball;

function setup() {
  createCanvas(800,400);
  
  engine = Engine.create()
  world = engine.world
  
  
  
  
box1 = new Box(300,300,50,50);
box2 = new Box(320,250,40,30);
ground = new Ground();
}

function draw() {
  background(0);  
  Engine.update(engine)

  ground.display();
  box1.display();
  box2.display();
  
  
}