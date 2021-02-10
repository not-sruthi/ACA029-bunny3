function preload() {
  bunnyImg=loadImage("bunny.png");
  wormImg=loadImage("snake.png");
  bgImg=loadImage("bg.png");
  carrotImg=loadImage("carrot.png");
  pondImg=loadImage("water.jpeg");
}

var carrot;
var snakeGroup;
var edges;
var pond;

var br1;
var br2;
var br3;
var b4;
var b5;
var b6;
var b7;
var b8;
var b9;
var b10;
var b11;
var b12;
var b13;
var b14;
var b15;

var bunny;
var flag=0;

function setup() {
  createCanvas(600,600);
  bg = createSprite(300,300);
  bg.scale=2.5;
  bg.addImage(bgImg);
  
  carrot=createSprite(550,50,20,20);
  carrot.addImage(carrotImg);
  carrot.scale=(0.5);

  pond=createSprite(480,485,220,205);
  pond.addImage(pondImg);
  pond.scale=0.27;

  edges=createEdgeSprites();

  br1=createSprite(0,100,100,20);
  b4=createSprite(160,100,170,20);
  b7=createSprite(320,100,100,20);
  b10=createSprite(480,100,170,20);
  b13=createSprite(640,100,100,20);

  br2=createSprite(0,140,170,20);
  b5=createSprite(160,140,100,20);
  b8=createSprite(320,140,170,20);
  b11=createSprite(480,140,100,20);
  b14=createSprite(640,140,170,20);

  br3=createSprite(0,180,100,20);
  b6=createSprite(160,180,170,20);
  b9=createSprite(320,180,100,20);
  b12=createSprite(480,180,170,20);
  b15=createSprite(640,180,100,20);
  
  bunny=createSprite(50,550,12,15);
  bunny.addImage(bunnyImg);
  bunny.scale=0.055;

  
  snakeGroup = new Group();
}

function draw() {
  background("#5BE560"); 
  carrot.shapeColor="orange";
  pond.shapeColor="#5DADE2";
  br1.shapeColor="#E74C3C";
  br2.shapeColor="#E74C3C";
  br3.shapeColor="#E74C3C";
  b4.shapeColor="#E74C3C";
  b5.shapeColor="#E74C3C";
  b6.shapeColor="#E74C3C";
  b7.shapeColor="#E74C3C";
  b8.shapeColor="#E74C3C";
  b9.shapeColor="#E74C3C";
  b10.shapeColor="#E74C3C";
  b11.shapeColor="#E74C3C";
  b12.shapeColor="#E74C3C";
  b13.shapeColor="#E74C3C";
  b14.shapeColor="#E74C3C";
  b15.shapeColor="#E74C3C";

  bunny.shapeColor="pink";
  bunny.bounceOff(edges[0]);
  bunny.bounceOff(edges[1]);
  bunny.bounceOff(edges[2]);
  bunny.bounceOff(edges[3]);

  generateSnakes();

  if (flag==0){
    bunny.x=mouseX;
    bunny.y=mouseY;
  }
  
  for(var i=0 ; i<(snakeGroup).length;i++){
    var snek = (snakeGroup).get(i);
    if (bunny.isTouching(snek)){
      bunny.x=50;
      bunny.y=550;
    }
  }

  if (bunny.isTouching(br1)||bunny.isTouching(br2)||bunny.isTouching(br3) ||bunny.isTouching(b4)||bunny.isTouching(b5) ||
  bunny.isTouching(b6) ||bunny.isTouching(b7) ||bunny.isTouching(b8) ||bunny.isTouching(b9) ||bunny.isTouching(b10)||
  bunny.isTouching(b11) ||bunny.isTouching(b12) ||bunny.isTouching(b13) ||bunny.isTouching(b14) ||bunny.isTouching(b15) 
  ||bunny.isTouching(pond) ){
    text("You Lose!",300,300);
    flag=1;
  }

  if (bunny.isTouching(carrot)){
    text("You Win!",300,300);
    br1.velocityX=0;
    br2.velocityX=0;
    flag=1;
  }

  drawSprites();
}

function generateSnakes(){
  if(frameCount % 30===0){
    console.log(frameCount);
    var snake = createSprite(600, random(70,520),random(120,300),20);;
    snake.shapeColor="green"
    snake.velocityX=random(-4);
    snake.velocityY=random(-4,4);
    snakeGroup.add(snake);
    snake.addImage(wormImg);
    snake.scale=random(0.1,0.2);}
}
