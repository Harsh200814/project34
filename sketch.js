const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var bg,Ground,box1,box2,box3,box4,box5,box6,box7,box8,box9,box10,box11,box12,box13,box14,box15,box16,box17,box18,box19,box20,box21,
box22,Hero,Fly,M;
function preload() {
    bg=loadImage("GamingBackground.png");
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;
    Ground=new ground(500,300,1000,10);
    box1=new box(550,274,40,40);
    box2=new box(550,234,40,40);
    box3=new box(550,196,40,40);
    box4=new box(550,156,40,40);
    box5=new box(550,116,40,40);
    box6=new box(550,86,40,40);
    box7=new box(600,274,40,40);
    box8=new box(600,234,40,40);
    box9=new box(600,196,40,40);
    box10=new box(600,156,40,40);
    box11=new box(600,116,40,40);
    box12=new box(650,274,40,40);
    box13=new box(650,234,40,40);
    box14=new box(650,196,40,40);
    box15=new box(650,156,40,40);
    box16=new box(650,116,40,40);
    box17=new box(650,86,40,40);
    box18=new box(700,274,40,40);
    box19=new box(700,234,40,40);
    box20=new box(700,196,40,40);
    box21=new box(700,156,40,40);
    box22=new box(700,116,40,40);
    Hero=new hero(200,150,150,200);
    Fly=new fly(Hero.body,{x:250,y:50});
    M=new monster(950,200,150,180);
    
}

function draw(){

background(bg);
Engine.update(engine);
Ground.display();
box1.display();
box2.display();
box3.display();
box4.display();
box5.display();
box6.display();
box7.display();
box8.display();
box9.display();
box10.display();
box11.display();
box12.display();
box13.display();
box14.display();
box15.display();
box16.display();
box17.display();
box18.display();
box19.display();
box20.display();
box21.display();
box22.display();
M.display();
Hero.display();
Fly.display();

}
function mouseDragged(){
Matter.Body.setPosition(Hero.body,{x:mouseX,y:mouseY});
}





