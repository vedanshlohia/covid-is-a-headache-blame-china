const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var covid1, covid2;

var hero, slingshot, ground; 

var gameState = "onSling";

var score = 0;



function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(600,height,1200,20);
    platform = new Ground(150, 305, 300, 170);
    

    box1 = new Box(700,320,70,70);
    box2 = new Box(920,320,70,70);
    covid1 = new Villian(810, 350);
   // log1 = new Log(810,100,300, PI/7);

    box3 = new Box(700,240,70,70);
    box4 = new Box(920,240,70,70);
    covid2 = new Villian(810, 220);

  

   // box5 = new Box(810,160,70,70);
  

    hero = new Hero(200,50);

    //log6 = new Log(230,180,80, PI/2);
    slingshot = new SlingShot(hero.body,{x:200, y:50});
}

function draw(){
   background("black")
   text("PUSH THE VIRUS OUTSIDE THE SCREEN",500,100)
    
    Engine.update(engine);
    //strokeWeight(4);
    box1.display();
    box2.display();
    ground.display();
    covid1.display();
    covid1.score();
   // log1.display();

    box3.display();
    box4.display();
    covid2.display();
    covid2.score();
    console.log(covid1.speed)

   // box5.display();
    
    hero.display();
    platform.display();
    
    //log6.display();
    slingshot.display();    


    
}

function mouseDragged(){
    //if (gameState!=="launched"){
        if(hero.body.position.x <  300 ){
        Matter.Body.setPosition(hero.body, {x: mouseX , y: mouseY});
    }
}


function mouseReleased(){
    slingshot.fly();
    gameState = "launched";
}

function keyPressed(){
    if(keyCode === 32 && hero.body.speed <= 1){
        hero.trajectory = []
        Matter.Body.setPosition(hero.body,{x:200, y:50})
       slingshot.attach(hero.body);

    }
}

