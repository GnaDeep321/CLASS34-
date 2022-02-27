const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
const Constraint=Matter.Constraint;

var engine,world;
var box1,box2,box3,box4,box5,box6,box7,box8,box9,box10,box11,box12,box13,box14,box15,box16,box17,box18,box19,box20;
var ball;
var ground;

function setup(){
    createCanvas(500,500);
    engine=Engine.create();
    world=engine.world;
    ball = createSprite(250,250,10,10);
    ball.shapeColor = "red";
    ground=new Ground(600,600,1200,20);
   // box1=new Box(900,100,70,70);
    
}

function draw(){
    background("white");
    Engine.update(engine);
    ground.display();
   //box1.display();
  


    if(keyDown(LEFT_ARROW)){
        changePosition(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        changePosition(1,0);
    }
    else if(keyDown(UP_ARROW)){
        changePosition(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
        changePosition(0,+1);
    }
    drawSprites();
}

function changePosition(x,y){
    ball.x = ball.x + x;
    ball.y = ball.y + y;
}
