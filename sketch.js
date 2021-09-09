
var cardboard1; 
var cardboard2;
var cardboard3;
var cardboard4;
var cardboard5;
var cardboard6;
var cardboard7;
var cardboard8;
var cardboard9;
var cardboard10;
var cardboard11;
var cardboard12;
var cardboard13;
var cardboard14;
var cardboard15;
var cardboard16;
var cardboard17;
var cardboard18;
var cardboard19;
var cardboard20;
var cardboard21;
var cardboard22;
var cardboard23;
var player,playerImage;
var dragon,dragonImage;
var treasure,treasureImage;
var leftSide,rightSide,upSide,downSide;
var key,keyImage;
var trap,trapImage;
var dragon,dragonImage;
var score = 2;
var keyCount = 0;
var touchCount = 0;
var gamaOver,gameOverImg;
var play = 1 ; 
var end = 0 ; 
var gameState = 1 ;
var keyTracker = false ; 
var fetchKey ; 
var win,winImage;
var bg1,bg1Image;
var bg2,bg2Image;
var levelTacker = 0;
var bgImage;


function preload(){
  playerImage = loadImage("images/knight.png");
  dragonImage = loadImage("images/dragon.png");
  treasureImage = loadImage("images/treasure.png");
  bg1Image = loadImage("images/wall.jpg");
  keyImage = loadImage("images/key.png");
  trapImage = loadImage("images/trap.png");
  dragonImage = loadImage("images/dragon.png");
  gameOverImg = loadImage("images/gameover.jpg");
  winImage = loadImage("images/you win.jpg");
  bg2Image = loadImage("images/stone wall.jpg");  
}



function setup(){
  createCanvas(600,500);

  cardboard1 = createSprite(400,450,20,100);
  cardboard1.shapeColor="gray";

  cardboard2 = createSprite(550,320,100,20);
  cardboard2.shapeColor="gray";

  cardboard3 = createSprite(355,410,80,20);
  cardboard3.shapeColor="gray";

  cardboard4 = createSprite(350,370,20,70);
  cardboard4.shapeColor="gray";

  cardboard5 = createSprite(500,285,20,90);
  cardboard5.shapeColor="gray";

  cardboard6 = createSprite(430,20,20,100);
  cardboard6.shapeColor="gray";

  cardboard7 = createSprite(550,80,260,20);
  cardboard7.shapeColor="gray";

  cardboard8 = createSprite(45,200,90,20);
  cardboard8.shapeColor="gray";

  cardboard9 = createSprite(200,140,20,70);
  cardboard9.shapeColor="gray";

  cardboard10 = createSprite(250,150,100,20);
  cardboard10.shapeColor="gray";

  cardboard11 = createSprite(150,480,20,100);
  cardboard11.shapeColor="gray";

  cardboard12 = createSprite(320,30,20,80);
  cardboard12.shapeColor="gray";

  cardboard13 = createSprite(200,490,100,20);
  cardboard13.shapeColor="gray";

  cardboard14 = createSprite(250,490,20,80);
  cardboard14.shapeColor="gray";

  cardboard15 = createSprite(100,300,100,20);
  cardboard15.shapeColor="gray";

  cardboard16 = createSprite(150,300,20,70);
  cardboard16.shapeColor="gray";

  cardboard17 = createSprite(250,290,20,120);
  cardboard17.shapeColor="gray";

  cardboard18 = createSprite(290,250,100,20);
  cardboard18.shapeColor="gray";

  cardboard19 = createSprite(120,30,20,80);
  cardboard19.shapeColor="gray";

  cardboard20 = createSprite(20,100,60,20);
  cardboard20.shapeColor="gray";

  cardboard21 = createSprite(320,30,80,20);
  cardboard21.shapeColor="gray";

  cardboard22 = createSprite(420,170,100,20);
  cardboard22.shapeColor="gray";

  cardboard23 = createSprite(550,120,20,100);
  cardboard23.shapeColor="gray";

  player = createSprite(40,40);
  player.addImage("player",playerImage);
  player.scale = 0.05;

  treasure = createSprite(550,450);
  treasure.addImage("treasure",treasureImage);
  treasure.scale = 0.1;

  leftSide = createSprite(0,250,1,500);
  rightSide = createSprite(600,250,1,500);
  upSide = createSprite(250,0,600,1);
  downSide = createSprite(250,500,600,1);



  fetchKey = createSprite(30,470, 40 , 40);
  fetchKey.addImage("key",keyImage);
  fetchKey.scale = 0.03;

  trap = createSprite(470,370);
  trap.addImage("trap",trapImage);
  trap.scale = 0.3;

  dragon = createSprite(120,230);
  dragon.addImage("dragon",dragonImage);
  dragon.scale = 0.1;
  dragon.velocityX = 3;
  

  gameOver = createSprite(300,250);
  gameOver.addImage("gameOver",gameOverImg);
  gameOver.visible = false;
  
  win = createSprite(300,250);
  win.addImage("win",winImage);
  win.scale = 0.85
  win.visible = false;

}





function draw(){
background(bgImag);
createEdgeSprites();
if(gameState === 1) {
  if(keyDown("up")){
    player.y =player.y -2;
  }
  
  if(keyDown("down")){
    player.y =player.y +2;
  }
  
  if(keyDown("right")){
    player.x =player.x +2; 
  }
  
  if(keyDown("left")){
    player.x =player.x -2;
  }

  if(player.isTouching(dragon) || player.isTouching(trap)){
    score = 1;
    player.x = 40;
    player.y = 40;
    touchCount = touchCount +1;
  }
  else if(touchCount>1){
    score = 0;
    gameOver.visible = true;
  
   
  }
  else if(player.isTouching(fetchKey)){
    
    textSize(30);
   
    fill("green");
   text("Got the key", 200, 200);
   trap.destroy();

  }
   if(player.isTouching(treasure)   &&   levelTacker !== 0) {
     win.visible = true;
     bgImage = bg2Image;
   }

    else{
      bgImage = bg1Image;
    }

  
   if(mousePressedOver(gameOver)){
    gameOver.destroy();
    gameState = 0;
  }

  if(mousePressedOver(win)){
    win.destroy();
    restart();
    gameState = 1;
    
  }
 

}

if(gameState === 0) {
  score = 2;
}



textSize(20);
fill("blue");
text("lives:"+score,440,20);








player.collide(cardboard1);
player.collide(cardboard2);
player.collide(cardboard3);
player.collide(cardboard4);
player.collide(cardboard5);
player.collide(cardboard6);
player.collide(cardboard7);
player.collide(cardboard8);
player.collide(cardboard9);
player.collide(cardboard10);
player.collide(cardboard11);
player.collide(cardboard12);
player.collide(cardboard13);
player.collide(cardboard14);
player.collide(cardboard15);
player.collide(cardboard16);
player.collide(cardboard17);
player.collide(cardboard18);
player.collide(cardboard19);
player.collide(cardboard20);
player.collide(cardboard21);
player.collide(cardboard22);
player.collide(cardboard23);

player.collide(leftSide);
player.collide(rightSide);
player.collide(upSide);
player.collide(downSide);

dragon.bounceOff(cardboard17);
dragon.bounceOff(cardboard8);



drawSprites();

}

function restart(){
  if(gameState === 0){
    score = 2;
  }

}