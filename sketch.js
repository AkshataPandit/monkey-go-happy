var monkey , monkey_running,monkeyImage;
var banana ,bananaImage, obstacle, obstacleImage
var bgroup, obstacleGroup,groundImage;
var survivaltime=0;
var ogroup;
var gameState="play";
function preload(){
  
  
  monkey_running =         loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")

  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(600,500);
monkey = createSprite(40,200,20,20);
 monkey.addAnimation("monkey",monkey_running);
 monkey.scale=0.1;

  ground = createSprite(200,380,400,20);
 bgroup=createGroup();
 ogroup=createGroup(); 
}


function draw() {
  background("white");
  text("survival time= "+survivaltime,200,50);
  
  if(gameState=="play") {
    
  survivaltime+=Math.round(World.frameRate/60);
  if(keyDown("space")&& monkey.y >= 100) {
      monkey.velocityY = -12;
  }
 monkey.velocityY = monkey.velocityY + 0.8;
  
  if(monkey.isTouching(bgroup)){
    survivaltime+=1;
    bgroup.destroyEach();
  }
  if(monkey.isTouching (ogroup)) {
    gameState="end";
  }
 spawnBanana();
  spawnObstacles();
  }
  else if(gameState=="end") {
    survivaltime=0;
    ogroup.setVelocityXEach(0);
    bgroup.setVelocityXEach(0);
    bgroup.setLifetimeEach(-1);
    ogroup.setLifetimeEach(-1);
    fill("red");
    textSize(25);
    text("GAME OVER",150,200);
  }
    
 monkey.collide(ground); 
drawSprites();
  
}


function spawnBanana() {
  
  if (frameCount % 80 === 0) {
    var banana=createSprite(400,120,40,10);
    banana.y = Math.round(random(150,300));
    banana.addImage(bananaImage);
    banana.scale = 0.09;
    banana.velocityX = -3;
  banana.lifetime=250;
    bgroup.add(banana);
  }}

function spawnObstacles() {
  
  if (frameCount % 300 === 0) {
    var obstacle = createSprite(400,360,40,10);
    obstacle.addImage(obstaceImage);
    
    obstacle.scale=0.15;
    obstacle.velocityX = -3;
    ogroup.add(obstacle);
  }}








