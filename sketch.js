var bird,birdImg,pipe1,pipe2,pipe3,pipe4,pipe5,pipe6,pipe7,pipe8,pipe9,pipe;
var p,p1,p2,p3,p4,pipes5,p6,p7,p8,p9;
var bg,bgImg,gameover,gameoverImg;
gameState = "serve" ;
var allpipes1, allpipes2, allpipes
function preload(){
  birdImg = loadImage("blue.png");
 
  p1 = loadImage("p1.png");
  p2 = loadImage("p2.png");
  p3 = loadImage("p3.png");
  p4 = loadImage("p4.png");
  pipes5 = loadImage("pipe5.png");
  p6= loadImage("p6.png");
  p7= loadImage("p7.png");
  p8= loadImage("p8.png");

bgImg = loadImage("bg.jpg");
gameoverImg = loadImage("gameover.jpg");
}

function setup() {
  createCanvas(1000,500);
  bg = createSprite(0,0,800,600);
 bg.addImage(bgImg);
 bg.scale = 3.5;
 bird = createSprite(200,220,20,20);
 bird.addImage(birdImg);
 bird.scale = 0.15;
 pipes = new Group()
 allpipes1 = new Group()
 allpipes2 = new Group()
}

function draw() {
 // background("black");  

if (keyDown("left")){
  bird.x = bird.x-5;
}
if (keyDown("right")){
  bird.x = bird.x+5;
}
if (keyDown("space")){
  bird.velocityY = -10;
  gameState = "play" ;
}
bird.velocityY = bird.velocityY + 0.8;
bg.velocityX = -10;
if (bg.x <0 ){
   bg.x = bg.width/2;
}
spawnpipestop()
spawnpipesbottom()
  drawSprites();
}
function spawnpipestop() {
  if(frameCount % 300 === 0) {
    var a = random(10,900);
    allpipes1 = createSprite(a,10,30,30);
    allpipes1.setCollider('circle',0,0,45)
    //pipes.debug = true
  
    //allpipes.velocityX = -(6 + 3*score/100);
    
    //generate random allpipes
    var rand = Math.round(random(1,4));
    switch(rand) {
      case 1: allpipes1.addImage(p6);
              break;
      case 2: allpipes1.addImage(p7);
              break;
      case 3: allpipes1.addImage(p8);
              break;
      case 4: allpipes1.addImage(pipes5);
              break;
      
      default: break;
    }
    
    //assign scale and lifetime to the pipes           
    allpipes1.scale = 0.5;
    allpipes1.lifetime = 300;
    //add each pipes to the group
    pipes.add(allpipes1);
  }
}
function spawnpipesbottom()
{
  if(frameCount % 300 === 0) {
    var a = random(10,900);
    allpipes2 = createSprite(a,550,30,30);
    allpipes2.setCollider('circle',0,0,45)
    //pipes.debug = true
  
    //allpipes.velocityX = -(6 + 3*score/100);
    
    //generate random allpipes
    var rand = Math.round(random(1,4));
    switch(rand) {
      case 1: allpipes2.addImage(p1);
              break;
      case 2: allpipes2.addImage(p2);
              break;
      case 3: allpipes2.addImage(p3);
              break;
      case 4: allpipes2.addImage(p4);
              break;
      default: break;
    }
    
    //assign scale and lifetime to the pipes           
    allpipes2.scale = 0.5;
    allpipes2.lifetime = 300;
    //add each pipes to the group
    pipes.add(allpipes2);
  }

}
