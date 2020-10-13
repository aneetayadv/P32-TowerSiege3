const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var myEngine,myWorld;
var ground,polygonBall;
var stand1,stand2;
var b1,b2,b3,b4,b4,b6;
var polygonImg;
var slingShot;
var score=0;
var bg = "white";

function preload(){
  polygonImg = loadImage("./images/polygon.png");
}

function setup() {
  createCanvas(900,400);
  
  myEngine = Engine.create();
  myWorld = myEngine.world;

  ground = new Ground(450,380,900,30);
  polygonBall = Bodies.circle(50,200,20);

  World.add(myWorld,polygonBall);
  
  stand1 = new Ground(290,270,200,10);
  
  b1 = new Box(210,245,30,40,"lightblue");
  b2 = new Box(240,245,30,40,"lightblue");
  b3 = new Box(270,245,30,40,"lightblue");
  b4 = new Box(300,245,30,40,"lightblue");
  b5 = new Box(330,245,30,40,"lightblue");
  b6 = new Box(360,245,30,40,"lightblue");

  b7 = new Box(230,205,30,40,"lightpink");
  b8 = new Box(260,205,30,40,"lightpink");
  b9 = new Box(290,205,30,40,"lightpink");
  b10 = new Box(320,205,30,40,"lightpink");
  b11 = new Box(350,205,30,40,"lightpink");

  b12 = new Box(250,165,30,40,"lightgreen");
  b13 = new Box(280,165,30,40,"lightgreen");
  b14 = new Box(310,165,30,40,"lightgreen");
  b15 = new Box(340,165,30,40,"lightgreen");

  stand2 = new Ground(650,180,200,10);

  bs1 = new Box(570,155,30,40,"lightblue");
  bs2 = new Box(600,155,30,40,"lightblue");
  bs3 = new Box(630,155,30,40,"lightblue");
  bs4 = new Box(660,155,30,40,"lightblue");
  bs5 = new Box(690,155,30,40,"lightblue");
  bs6 = new Box(720,155,30,40,"lightblue");

  bs7 = new Box(590,115,30,40,"lightpink");
  bs8 = new Box(620,115,30,40,"lightpink");
  bs9 = new Box(650,115,30,40,"lightpink");
  bs10 = new Box(680,115,30,40,"lightpink");
  bs11 = new Box(710,115,30,40,"lightpink");

  bs12 = new Box(610,75,30,40,"lightgray");
  bs13 = new Box(640,75,30,40,"lightgray");
  bs14 = new Box(670,75,30,40,"lightgray");
  bs15 = new Box(700,75,30,40,"lightgray");
 
  slingShot = new SlingShot(this.polygonBall,{x:50,y:200});

}

function draw() {
  getBackgroundColor();
  background(bg);  

  text("Score :  " + score,750,40);
  text("Press space to get a second chance", 600,350);

  Engine.update(myEngine);
  ground.show();
  stand1.show();
  stand2.show();

  b1.show();
  b2.show();
  b3.show();
  b4.show();
  b5.show();
  b6.show();
  b7.show();
  b8.show();
  b9.show();
  b10.show();
  b11.show();
  b12.show();
  b13.show();
  b14.show();
  b15.show();

  bs1.show();
  bs2.show();
  bs3.show();
  bs4.show();
  bs5.show();
  bs6.show();
  bs7.show();
  bs8.show();
  bs9.show();
  bs10.show();
  bs11.show();
  bs12.show();
  bs13.show();
  bs14.show();
  bs15.show();

  b1.score();
  b2.score();
  b3.score();
  b4.score();
  b5.score();
  b6.score();
  b7.score();
  b8.score();
  b9.score();
  b10.score();
  b11.score();
  b12.score();
  b13.score();
  b14.score();
  b15.score();

  bs1.score();
  bs2.score();
  bs3.score();
  bs4.score();
  bs5.score();
  bs6.score();
  bs7.score();
  bs8.score();
  bs9.score();
  bs10.score();
  bs11.score();
  bs12.score();
  bs13.score();
  bs14.score();
  bs15.score();

  imageMode(CENTER);
  image(polygonImg ,polygonBall.position.x,polygonBall.position.y,40,40);

  slingShot.show();

  //text(mouseX +"," + mouseY, mouseX,mouseY);

  textSize(18);
  fill("white");
  text("Drag the hexagonal stone & release it, to launch it towards the blocks",40,40);
}

function mouseDragged(){
  Body.setPosition(this.polygonBall,{x:mouseX,y:mouseY});
}

function mouseReleased(){
  slingShot.fly();
}

function keyPressed(){
  if(keyCode === 32)
  {
    slingShot.attach(this.polygonBall);
  }
}

async function getBackgroundColor()
{
  var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
  var responseJson = await response.json();

  var dateTime = responseJson.datetime;
  var hour = dateTime.slice(11,13);

  if (hour >= 06 && hour <= 18) {
    bg = "orange";
  } else {
    bg = "black";
  }
}